<template>
  <div v-if="tableOfContents && tableOfContents.length">
    <h4>Contents</h4>
    <nav>
      <ul>
        <li v-for="link of tableOfContents" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    tableOfContents: {
      type: Object,
      required: true,
    },
  },
}
</script>
