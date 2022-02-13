<template lang="pug">
main(class='w-full py-10')
  h1(class='text-3xl text-center sm:text-left lg:text-5xl font-black w-full mb-8') Featured
    span(class='text-tim-green') Projects
  // Project Grid
  div(class='grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3')
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
