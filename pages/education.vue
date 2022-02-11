<template lang="pug">
main(class='flex flex-col justify-center items-center py-10 w-full')
  h1(class='text-3xl lg:text-5xl font-black w-full text-center mb-5  lg:mb-16') Education
  timeline-card(:item='education.school1')
  timeline-card(:item='education.school2')
</template>

<script setup>
  import education from '@/static-data/educationData'
  import timelineCard from '@/components/TimelineCard.vue'
</script>
