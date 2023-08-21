<template>
  <CategoryList class="mb-6" />
  <ArticleList :data="articles" />
</template>

<script setup lang="ts">
const props = defineProps<{
  category?: string;
}>();

const articles = await queryContent(
  "/blog" + (props.category ? props.category : "")
).find();
</script>
