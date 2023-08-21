<template>
  <CategoryList class="mb-6" />
  <ArticleList :category="props.category || ''" />
</template>

<script setup lang="ts">
const props = defineProps<{
  category?: string;
}>();
</script>
