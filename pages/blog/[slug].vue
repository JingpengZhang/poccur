<template>
  <section class="bg-white p-10 rounded shadow markdown-body">
    <ContentRenderer>
      <ContentRendererMarkdown :value="article" />
    </ContentRenderer>
  </section>
</template>

<script lang="ts" setup>
import "~/assets/css/md-themes/github-markdown-light.css";

const route = useRoute();

useHead({
  title: "Poccur | " + route.params.slug,
});

const article = await queryContent("/blog")
  .where({ slug: { $eq: route.params.slug as string } })
  .findOne();
</script>
