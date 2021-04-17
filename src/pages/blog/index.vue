<template>
  <v-container>
    <v-row dense>
      <v-col v-for="article of articles" :key="article.slug" cols="12">
        <v-card class="mx-auto" :to="`/blog/${article.slug}`">
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-text>
            {{ article.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import formatDate from '../../mixins/formatDate'

export default {
  mixins: [formatDate],
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return { articles }
  },
}
</script>
