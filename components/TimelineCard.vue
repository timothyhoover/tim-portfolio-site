<template lang="pug">
div(class='flex w-full h-auto mb-5 shadow-zinc-200 shadow-md rounded-lg p-7 lg:p-10')
  div(class='flex flex-col h-full')
    div(class='flex items-center')
      div(class='pl-3 sm:p-0')
        img(class="w-32" :src='imagePath')
      h2(class='text-sm md:text-base font-extrabold') {{ props.item.name }}
      div(class='bg-tim-green w-48 h-0.5 mx-5')
      h2(class='text-xs md:text-base font-medium') {{ props.item.role }}
    h3(class='text-xs font-bold m-5') {{ props.item.year }}
    ul(class='text-sm md:text-base w-full list-disc px-10  space-y-5' v-for="highlight in props.item.highlights")
      li {{ highlight }}
</template>

<script setup>
  import { computed } from 'vue'
  const props = defineProps({
    item: Object,
  })

  const imagePath = computed(() => {
    const imgUrl = new URL(props.item.logoImage, import.meta.url)
    return imgUrl.pathname
  })
</script>
