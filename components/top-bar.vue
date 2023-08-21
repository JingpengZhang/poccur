<template>
  <div
    class="w-[calc(100vw-14rem)] fixed left-56 top-0 h-16 bg-white border-b z-50 flex justify-center"
  >
    <div class=" flex items-center w-[90%] justify-between">
      <!-- 搜索框 -->
    <div
      class="flex items-center h-9 bg-gray-100 rounded focus-within:bg-white border transition-all border-gray-100 relative"
    >
      <input
        @focus="() => (isSearchInputFocus = true)"
        @blur="() => (isSearchInputFocus = false)"
        type="text"
        v-model="searchVal"
        placeholder="搜索些什么..."
        class="w-64 h-full bg-transparent focus:outline-none px-3 text-sm"
      />
      <button
        @click="handleSearch"
        class="flex items-center justify-center h-full aspect-square text-gray-500"
      >
        <Icon name="ph:magnifying-glass-bold" />
      </button>
    </div>

    <div class="flex items-center">
      <NuxtLink
        :href="baseInfo.social?.github"
        target='_blank'
        class="h-9 aspect-square flex items-center justify-center"
      >
        <Icon name="mdi:github" size="24" />
      </NuxtLink>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import baseInfo from "~/config/baseInfo";

const searchVal = ref("");

const router = useRouter();

const handleSearch = () => {
  router.push(`/search/${searchVal.value}`);
};

const isSearchInputFocus = ref(false);

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && isSearchInputFocus.value && searchVal.value !== '') {
      handleSearch();
    }
  });
});
</script>
