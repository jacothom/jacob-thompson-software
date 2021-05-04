<template>
  <v-container>
    <h1>{{ article.title }}</h1>
    <h4>{{ article.description }}</h4>

    <nuxt-content :document="article" style="padding-top: 12px"></nuxt-content>

    <br />
    <hr />

    <blog-tags :tags="article.tags" style="padding-top: 6px"></blog-tags>

    <p>
      Created on: {{ formatDate(article.createdAt) }}
      <br />
      <span v-if="articleHasBeenUpdated">
        Last updated: {{ formatDate(article.updatedAt) }}
      </span>
    </p>
  </v-container>
</template>

<script>
import formatDate from '../../mixins/formatDate'

export default {
  mixins: [formatDate],
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
  computed: {
    articleHasBeenUpdated() {
      return this.article.createdAt !== this.article.updatedAt
    },
  },
  head() {
    return {
      title: this.article.title,
      description: this.article.description,
    }
  },
}
</script>
