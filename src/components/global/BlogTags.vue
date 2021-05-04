<template>
  <p v-if="tags">
    Tags:

    <v-chip v-for="tag in tags" :key="tag" color="primary">{{ tag }}</v-chip>
  </p>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
}
</script>
