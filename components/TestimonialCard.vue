<template lang="pug">
div(class="bg-white shadow-lg rounded-xl p-6 text-sm space-y-4 h-full")
  p(class="italic") "{{ props.testimonial }}"
  div(class="space-y-2")
    h2(class="font-bold text-tim-green") {{ props.name }}
    p(class="text-xs flex items-center") {{ props.role }} - {{ props.company }}

</template>

<script setup>
  const props = defineProps({
    name: String,
    company: String,
    role: String,
    testimonial: String,
  })
</script>
