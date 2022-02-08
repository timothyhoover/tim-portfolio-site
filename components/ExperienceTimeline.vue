<template lang="pug">
div(class='flex w-full h-auto mb-5 shadow-zinc-200 shadow-md rounded-lg p-10')
  div(class='flex flex-col h-full')
    div(class='flex items-center mb-5')
      div(class='pl-3 sm:p-0')
        img(src='')
      h2(class='text-sm md:text-base font-extrabold') {{ job.companyName }}
      div(class='bg-tim-green w-60 h-0.5 mx-5')
      h2(class='text-xs md:text-base font-medium') {{ job.position }}
    h3(class='text-xs font-bold my-5') {{ job.year }}
    ul(class='list-disc pl-10 space-y-5' v-for="highlight in job.highlights")
      li {{ highlight }}
</template>

<script setup>
  const { job } = defineProps({
    job: Object,
  })
</script>
