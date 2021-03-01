<template>
  <ul>
    <li v-for="article of articles" :key="article.slug">
      <NuxtLink :to="`/blog/${article.slug}`">{{ article.title }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return { articles }
  },
}
</script>
