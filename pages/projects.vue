<template lang="pug">
main(class='flex flex-col items-center sm:items-start w-full pl-6 lg:p-0')
  h1(class='text-3xl text-center sm:text-left lg:text-5xl font-black w-full mb-8') Featured
    span(class='text-primary-green') Projects
  // Project Grid
  div(class='grid sm:gap-x-24 md:gap-x-16 lg:gap-x-24 gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3')
    project-card
    project-card
    project-card
    project-card
    project-card
    project-card
</template>

<script setup>
  import projectCard from '@/components/ProjectCard.vue'
</script>
