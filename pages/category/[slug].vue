<template>
  <ArticleListWithCategory :category="`/${route.params.slug}`" />
</template>
<script setup lang="ts">
const route = useRoute();

useHead({
  title:'Poccur | 分类 - '+route.params.slug
})

</script>
