<template lang="pug">
div
  h1(class='text-3xl md:text-3xl lg:text-5xl font-black mb-8 text-center md:text-left') Testimonials
  div(class="grid grid-cols-1 lg:grid-cols-2 gap-10")
    div(v-if='testimonialData' v-for="(person, index) in testimonialData")
      testimonial-card(:name='person.name' :company='person.company' :role='person.role' :testimonial='person.testimonial')
</template>

<script setup>
  import testimonialCard from '@/components/TestimonialCard.vue'

  const testimonialData = [
    {
      name: 'Doug Patterson',
      company: 'Porter',
      role: 'Lead Developer',
      testimonial:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
    },
    {
      name: 'John Barry',
      company: 'Porter',
      role: 'CEO',
      testimonial:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor rhoncus dolor purus non enim. Ullamcorper dignissim cras tincidunt lobortis. Enim nunc faucibus a pellentesque. Dictum sit amet justo donec enim. Sit amet volutpat consequat mauris.',
    },
    {
      name: 'Brian Sommardahl',
      company: 'Achland Avenue',
      role: 'CTO',
      testimonial:
        'Libero id faucibus nisl tincidunt eget. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Netus et malesuada fames ac turpis. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Cras ornare arcu dui vivamus. Cras fermentum odio eu feugiat pretium nibh.',
    },
    {
      name: 'Maigualida Ojeda',
      company: 'Lobxs',
      role: 'Owner/Founder',
      testimonial:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ]
</script>
