<template>
  <div class="w-full border-b pb-6">
    <p class="text-gray-400">
      搜索结果：<span class="text-primary  font-medium">{{ route.params.search }}</span>
    </p>
  </div>
  <ArticleList class="mt-8" :data="articles" />
</template>

<script setup lang="ts">
const route = useRoute();

const articles = await queryContent("/blog")
  .where({ title: { $contains: route.params.search } })
  .find();
</script>
