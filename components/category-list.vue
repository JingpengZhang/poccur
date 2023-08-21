<template>
  <ul class="flex items-center flex-wrap text-xs -mr-3">
    <li class="mr-3">
      <NuxtLink
        href="/"
        class="block border border-gray-200 rounded px-2 py-1 transition-all"
        :class="
          route.name === 'index'
            ? 'text-white bg-black'
            : 'bg-white hover:bg-black hover:text-white'
        "
      >
        全部
      </NuxtLink>
    </li>
    <li v-for="item in categories" :key="item.id" class="mr-3">
      <NuxtLink
        :href="`/category/${item.slug}`"
        class="block border border-gray-200 rounded px-2 py-1 transition-all"
        :class="
          route.params.slug as string === item.slug
            ? 'text-white bg-black'
            : 'bg-white hover:bg-black hover:text-white'
        "
      >
        {{ item.name }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import categories from "~/config/categories";

const route = useRoute();
</script>
