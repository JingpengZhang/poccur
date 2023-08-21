<template>
  <ContentList :path="props.category">
    <template class="w-full flex flex-wrap justify-between" v-slot="{ list }">
      <div v-for="item in list" class="w-full h-48 mb-5">
        <ArticleItem :data="item" />
      </div>
    </template>
    <template #not-found>
      <div class="w-full flex flex-col items-center justify-center">
        <img src="/images/empty-state.png" alt="插图（无数据）" />
        <p class="text-gray-300">暂无数据</p>
      </div>
    </template>
  </ContentList>
</template>

<script setup lang="ts">
const props = defineProps<{
  category: string;
}>();
</script>
