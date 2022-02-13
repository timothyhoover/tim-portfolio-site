<template lang="pug">
div(class='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md')
  a(href='#')
    img(class='rounded-t-lg', src='../assets/img/evaly-example.png', alt='')
  div(class='p-5')
    a(href='#')
      h5(class='mb-2 text-xl font-bold tracking-tight text-gray-900') Noteworthy technology acquisitions 2021
    p(class='mb-3 text-sm text-gray-700') Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    div(class="flex items-center justify-between")
      o-button(variant='secondary' size='small')
        span.mr-2 Check it out
        ArrowNarrowRightIcon(class="w-5 h-5 inline")
      img(class="h-10 w-10" src="../assets/img/github-logo.svg")
</template>

<script setup>
  import { ArrowNarrowRightIcon } from '@heroicons/vue/solid'
</script>
