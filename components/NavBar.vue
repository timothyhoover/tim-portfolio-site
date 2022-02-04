<template lang="pug">
div(class="z-30 relative")
  div(class="md:hidden w-screen h-screen bg-black bg-opacity-25 absolute link")
div(aria-roledescription="mobile menu", class="relative min-h-screen md:flex justify-end")
  // mobile menu bar
  div(class="bg-white shadow-md text-gray-100 flex justify-between items-center md:hidden fixed w-full h-16 z-50")
    button(class="p-4")
      svg(class="w-6 h-6 transition duration-150 ease-in-out md:hidden ml-3 link", fill="none", viewBox="0 0 24 24", stroke="currentColor")
        path(strokeLinecap="round", strokeLinejoin="round", strokeWidth="2", d="M4 6h16M4 12h8m-8 6h16")
  header(class='flex flex-col items-center bg-white shadow-md h-screen w-6/12 md:w-3/12 space-y-6 px-2 pt-20 fixed inset-y-0 left-0 transform md:translate-x-0 transition duration-200 ease-in-out z-50')
    // logo
    div(class="flex flex-col items-center w-full")
      h1(class="text-primary-blue text-xl font-semibold w-7/12 mb-4 ml-1") Tim Hoover
      h2(class="font-bold w-7/12 text-2xl lg:text-4xl") Full-Stack Engineer
        span(class="text-primary-blue") .
    // preferred language
    div(class="flex flex-col lg:flex-row w-full justify-center items-center mt-4 ml-1")
        span(class="w-7/12 lg:w-3/12 link") English
        span(class="w-7/12 lg:w-4/12 link") Español
    // links
    nav(class="flex flex-col items-center w-full ml-1 pt-12 md:pt-10 lg:pt-20")
      div(class="flex flex-col text-s md:text-base font-semibold space-y-3 w-7/12")
        nuxt-link(to="/" class="link") About
        nuxt-link(to="/experience" class="link") Experience
        nuxt-link(to="/projects" class="link") Projects
        nuxt-link(to="/skills" class="link") Skills
        nuxt-link(to="/testimonials" class="link") Testimonials
        nuxt-link(to="/education" class="link") Education
        nuxt-link(to="/resume" class="link") Resume
        nuxt-link(to="/contact" class="link") Contact
  div(class="flex md:w-9/12 py-36 px-5 lg:p-20")
    slot
</template>
