<template>
  <section class="section">
    <h1 class="title is-1">{{ article.title }}</h1>
    <h4 class="subtitle is-4">{{ article.description }}</h4>

    <p>Created on: {{ formatDate(article.createdAt) }}</p>
    <p>Last updated: {{ formatDate(article.updatedAt) }}</p>
    <hr />

    <table-of-contents :table-of-contents="article.toc"></table-of-contents>

    <nuxt-content :document="article"></nuxt-content>
  </section>
</template>

<script>
import TableOfContents from '../../components/TableOfContents'
import formatDate from '../../mixins/formatDate'

export default {
  components: { TableOfContents },
  mixins: [formatDate],
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
  // computed: {
  //   articleHasBeenUpdated() {
  //     this.article.createdAt
  //   }
  // }
}
</script>
