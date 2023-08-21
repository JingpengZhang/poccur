<template>
  <section class="w-56 h-full flex flex-col items-center border-r py-6">
    <!-- Logo 部分 -->
    <NuxtLink href="/" class="flex items-center">
      <div
        class="flex items-center mr-3 justify-center bg-zinc-100 h-12 rounded-md aspect-square"
      >
        <Icon :name="baseInfo.website.logo" :size="baseInfo.website.logoSize" />
      </div>
      <span class="font-regular text-lg text-text-600">{{ baseInfo.website.name }}</span>
    </NuxtLink>

    <!-- 导航 -->
    <div class="w-9/12 mt-10 border-b pb-5">
      <ul cla🧢🧢ss="">
        <li v-for="item in menu" :key="item.id" class="mb-2 last-of-type:mb-0">
          <NuxtLink
            :href="item.path"
            class="flex items-center h-9 p-4 rounded bg-transparent hover:bg-gray-100 hover:text-primary"
          >
            <Icon size="18" :name="item.icon" />
            <span class="ml-2 text-sm">{{ item.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- 分类列表 -->
    <div class="mt-5 w-9/12 pb-5 border-b mb-5">
      <p class="p-4 h-9 mb-2 flex items-center font-regular text-sm">
        文章分类
      </p>
      <ul class="">
        <li
          v-for="item in categories"
          :key="item.id"
          class="mb-2 last-of-type:mb-0"
        >
          <NuxtLink
            :href="item.name"
            class="flex items-center h-9 p-4 rounded bg-transparent hover:bg-gray-100 hover:text-primary"
          >
            <Icon size="18" :name="item.icon" />
            <span class="ml-2 text-sm">{{ item.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    
    <SiteFooter class="w-9/12"/>
  </section>
</template>

<script setup lang="ts">
import categories from "~/config/categories";
import menu from "~/config/menu";
import baseInfo from '~/config/baseInfo'
</script>
