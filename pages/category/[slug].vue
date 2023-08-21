<template>
  <ArticleListWithCategory :category="`/${route.params.slug}`" />
</template>
<script setup lang="ts">
const route = useRoute();
</script>
