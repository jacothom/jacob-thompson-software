---
title: Nuxt Content Sitemap
description: Add dynamic Nuxt Content routes to sitemap
createdAt: 5/2/2021
updatedAt: 5/2/2021
tags: ['nuxt.js', 'vue', '@nuxt/content']
---

The [nuxt/sitemap](https://sitemap.nuxtjs.org/) module makes it really easy to add a sitemap to Nuxt website, but a little extra work is needed to have the resulting sitemap include routes that are dynamically generated using the [nuxt/content](https://content.nuxtjs.org/) module. Here is how to add a sitemap to a Nuxt Content site that includes all of the routes generated by the Content module. 

## Install Nuxt Sitemap
Add Nuxt Sitemap to your project. 

npm
``` cmd
npm install @nuxtjs/sitemap
```

yarn
```cmd
yarn add @nuxtjs/sitemap
```

## Add Nuxt Sitemap to modules
Next, add Nuxt Sitemap to the list of modules in your nuxt.config.js file. Sitemap should be the last module configured in the modules array.

``` json
...
modules: ['@nuxt/content', '@nuxtjs/sitemap'],
...
```

At this point our site is capable of building the sitemap, so let's go ahead and check it out. Run the application locally in dev mode (npm run dev or yarn dev) and navigate to the sitemap at /sitemap.xml.

Our sample app has three pages: An index, about page, and a blog index page. We also have two blog posts in the content/articles directory.

```
+---content
|   \---articles
|           getting-started.md
|           my-first-blog-post.md
+---pages
|   |   about.vue
|   |   index.vue
|   |   
|   \---blog
|           index.vue
|           _slug.vue
|         
```

 
However right now our sitemap returns this XML:

``` xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url>
        <loc>http://localhost:3000/about</loc>
    </url>
    <url>
        <loc>http://localhost:3000/blog</loc>
    </url>
    <url>
        <loc>http://localhost:3000/</loc>
    </url>
</urlset>
```

The sitemap includes all of our routes generated by Nuxt.js in our pages directory, but it does not include the blog posts that are generated by Nuxt Content. We need to configure Nuxt Sitemap to fetch the blog posts that are dynamically generated by Nuxt Content.

## Configure Nuxt Sitemap to fetch routes from Content API
Although dynamic routes are ignored by nuxt/sitemap by default, it [provides a route option](https://sitemap.nuxtjs.org/usage/sitemap-options#routes-optional---array--function) we can use to specify a function that returns dynamically created routes. We'll use that option to fetch blog posts from the [Nuxt Content API](https://content.nuxtjs.org/fetching).

```javascript
sitemap: {
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const posts = await $content('articles').fetch()
      return posts.map((article) => `/blog/${article.slug}`)
    },
  },
```

Now when we refresh our sitemap, the blog posts generated by Nuxt Content are listed.

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url>
        <loc>http://localhost:3000/blog/getting-started</loc>
    </url>
    <url>
        <loc>http://localhost:3000/blog/my-first-blog-post</loc>
    </url>
    <url>
        <loc>http://localhost:3000/about</loc>
    </url>
    <url>
        <loc>http://localhost:3000/blog</loc>
    </url>
    <url>
        <loc>http://localhost:3000/</loc>
    </url>
</urlset>
```
