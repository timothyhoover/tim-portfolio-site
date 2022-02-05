<template lang="pug">
div(class='flex w-full h-auto mb-5')
  div(class='h-full text-center relative')
    div(class='h-full w-full pt-4 lg:pt-6 xl:pt-8')
      div(class='text-xs font-semibold') {{ job.year }}
      hr(class='border-l-2 border-primary-green h-4/5 absolute left-1/2 mt-5')
  div(class='flex flex-col h-full w-10/12')
    div(class='flex items-center mb-5')
      div(class='w-5/12 md:w-4/12 lg:w-3/12 xl:w-2/12 pl-3 sm:p-0')
        img(src='')
      h1(class='text-sm md:text-base font-extrabold mx-5') {{ job.companyName }}
      div(class='bg-primary-green w-60 h-0.5')
      h2(class='text-xs md:text-base font-medium mx-5') {{ job.position }}
    ul(class='w-11/12 list-disc pl-10 space-y-5' v-for="highlight in job.highlights")
      li {{ highlight }}
</template>

<script setup>
  const { job } = defineProps({
    job: Object,
  })
</script>
