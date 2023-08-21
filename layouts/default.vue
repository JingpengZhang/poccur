<template>
  <main class="h-screen w-screen flex">
    <SideBar class=" flex-shrink-0" />
    <section class="flex-grow bg-[#FAFAFA] pt-24   pb-8 overflow-auto">
      <TopBar/>
      <div class="w-[90%] mx-auto">
        <slot />
      </div>
      
    </section>
  </main>
</template>

<script setup lang="ts"></script>
