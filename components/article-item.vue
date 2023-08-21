<template>
  <div
    class="w-full h-full rounded overflow-hidden p-3 flex bg-white relative border border-[#f5f5f5]"
  >
    <!-- 分类 -->
    <button
      @click="handleClickCategory"
      class="absolute text-xs top-0 right-0 py-1 px-2 bg-primary text-white rounded-bl"
    >
      <span>{{ props.data.category }}</span>
    </button>
    <!-- 封面 -->
    <NuxtLink
      href="/"
      class="h-full aspect-[16/9] rounded overflow-hidden mr-5 group"
    >
      <img
        :src="props.data.cover"
        class="h-full w-full object-cover group-hover:scale-110 transition-all"
      />
    </NuxtLink>

    <div class="flex flex-col justify-between">
      <NuxtLink href="/" class="group">
        <p class="font-medium line-clamp-1 group-hover:text-primary transition">
          {{ props.data.title }}
        </p>
        <p class="text-zinc-500 text-sm mt-4 line-clamp-3">
          {{ props.data.description }}
        </p>
      </NuxtLink>
      <div class="flex items-center text-xs text-zinc-400">
        <div class="flex items-center">
          <Icon name="ic:baseline-edit-calendar" class="mr-1" />
          <span>{{ props.data.createtime }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

const props = defineProps<{
  data: ParsedContent;
}>();

const router = useRouter();

const handleClickCategory = () => {
  const slug = utils.getCategorySlugByName(props.data.category);
  if (slug) router.push(`/category/${slug}`);
};
</script>
