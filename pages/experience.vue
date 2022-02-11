<template lang="pug">
main(class='flex flex-col justify-center items-center py-10 w-full')
  h1(class='text-3xl lg:text-5xl font-black w-full text-center mb-5  lg:mb-16') Work
    span(class='text-tim-green') Experience
  timeline-card(:item='jobs.job2')
  timeline-card(:item='jobs.job1')
  timeline-card(:item='jobs.job3')
</template>

<script setup>
  import jobs from '@/static-data/experienceData'
  import timelineCard from '@/components/TimelineCard.vue'
</script>
