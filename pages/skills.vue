<template lang="pug">
main(class='flex flex-col items-center sm:items-start w-full pl-6 lg:p-0')
  h1(class='text-3xl text-center sm:text-left lg:text-5xl font-black w-full mb-8') Tech
    span(class='text-primary-green') Skills
  // html & css side by side in design
  div(class='grid grid-cols-2 mt-8')
    div
      h2(class="text-2xl font-extrabold mb-5")
        span(class="text-primary-green pr-2 font-bold") &lt;
        span HTML
        span(class="text-primary-green pl-2 font-bold") />
      div(class="flex space-x-8")
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/html-logo.svg" class="h-20 w-20")
          h3(class="font-semibold") HTML
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/react-logo.svg" class="h-20 w-20")
          h3(class="font-semibold") JSX
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/pug.png" class="h-20 w-20")
          h3(class="font-semibold") Pug
    div
      h2(class="text-2xl font-extrabold mb-5")
        span(class="text-primary-green") .
        | CSS
      div(class="flex space-x-8")
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/css-logo.svg" class="h-20 w-20")
          h3(class="font-semibold") CSS
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/sass-logo.svg" class="h-20 w-20")
          h3(class="font-semibold") SASS
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/bulma.png" class="h-20 w-20")
          h3(class="font-semibold") Bulma
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/tailwind.svg" class="h-20 w-20")
          h3(class="font-semibold") Tailwind

  // javascript

  // backend

  // devops

  // testing

  // build tools

  // design / creative

  // .other

  // soft skills
</template>

<script setup></script>
