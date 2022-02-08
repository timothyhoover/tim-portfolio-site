<template lang="pug">
main(class='flex flex-col justify-center items-center w-full')
  h1(class='text-3xl lg:text-5xl font-black w-full text-center mb-16') Work
    span(class='text-tim-green') Experience
  experience-timeline(:job='jobs.job1')
  experience-timeline(:job='jobs.job2')
  experience-timeline(:job='jobs.job3')
</template>

<script setup>
  import jobs from '@/static-data/experienceData'
  import experienceTimeline from '@/components/ExperienceTimeline.vue'
</script>
