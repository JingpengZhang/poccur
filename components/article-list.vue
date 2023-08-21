<template>
  <ul
    v-if="props.data.length !== 0"
    class="w-full flex flex-wrap justify-between"
  >
    <li v-for="item in props.data" class="w-full h-48 mb-5">
      <ArticleItem :data="item" />
    </li>
  </ul>
  <div v-else class="w-full flex flex-col items-center justify-center">
    <img src="/images/empty-state.png" alt="插图（无数据）" />
    <p class="text-gray-300">暂无数据</p>
  </div>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

const props = defineProps<{
  data: ParsedContent[];
}>();
</script>
