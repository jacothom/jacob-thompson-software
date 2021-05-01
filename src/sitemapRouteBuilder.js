async function getSitemapRoutes() {
  const { $content } = require('@nuxt/content')
  const posts = await $content('articles').fetch()
  return posts.map((post) => `/blog/${post.slug}`)
}

export default getSitemapRoutes
