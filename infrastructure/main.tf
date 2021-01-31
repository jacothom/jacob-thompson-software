terraform {
  backend "remote" {
    organization = "jacob-thompson-software"
    workspaces {
      name = "jacob-thompson-software"
    }
  }
}

provider "aws" {
  region = "us-east-2"
}

locals {
  app_name        = "jacob-thompson-software"
  prefix          = "${local.app_name}-production"
  s3_origin_id    = "S3-${local.prefix}"
  hosted_zone_id  = "Z0048127SBO7AHJZUUHP"
  certificate_arn = "arn:aws:acm:us-east-1:179724145815:certificate/3f5e12d1-cb73-4734-8f4a-6f20ab91355f"
  environment     = "production"
  website_alias   = "jacobthompsonsoftware.com"
}

resource "aws_s3_bucket" "webapp_bucket" {
  bucket = local.prefix
  acl    = "public-read"
  policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadForGetBucketObjects",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::${local.prefix}/*"
        }
    ]
}
EOF


  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "aws_cloudfront_distribution" "webapp_distribution" {
  origin {
    domain_name = aws_s3_bucket.webapp_bucket.website_endpoint
    origin_id   = local.s3_origin_id

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  aliases = [local.website_alias]

  tags = {
    Environment = local.environment
  }

  viewer_certificate {
    acm_certificate_arn      = local.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.1_2016"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    compress = true

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
  }
}
