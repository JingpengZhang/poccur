<template>
  <ContentList v-slot="{ list }">
    <ul class="w-[90%] mx-auto flex flex-wrap justify-between">
      <li v-for="item in list" class="w-full h-48 mb-5">
        <ArticleItem :data="item"/>
      </li>
    </ul>
  </ContentList>
</template>

<script setup lang="ts"></script>
