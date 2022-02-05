<template lang="pug">
div(class="z-30 relative")
  div(:class='!menu.mobileMenu ? "hidden" : ""' @click='menu.mobileMenu = false' class="md:hidden w-screen h-screen bg-black bg-opacity-25 absolute link")
div(aria-roledescription="mobile menu", class="relative md:flex h-screen overflow-hidden")
  // mobile menu bar
  div(class="bg-white shadow-md text-gray-100 flex justify-between items-center md:hidden fixed w-full h-16 z-50")
    button(class="p-4" @click='toggleMobileNav')
      svg(class="w-6 h-6 transition duration-150 ease-in-out md:hidden ml-3 link", fill="none", viewBox="0 0 24 24", stroke="currentColor")
        path(strokeLinecap="round", strokeLinejoin="round", strokeWidth="2", d="M4 6h16M4 12h8m-8 6h16")
    div(class='flex justify-center items-center w-full space-x-3')
      h1(class="text-primary-blue text-xl font-semibold") Tim Hoover
      h2(class="font-bold text-lg") Full-Stack Engineer
        span(class="text-primary-blue") .
  header(:class='!menu.mobileMenu ? "-translate-x-full" : ""' class='shadow-md w-64 space-y-6 py-7 absolute inset-y-0 left-0 transform bg-white md:relative md:translate-x-0 transition duration-200 ease-in-out z-50')
    // logo
    div(class="hidden lg:flex flex-col items-center w-full")
      h1(class="text-primary-blue text-xl font-semibold w-7/12 mb-4 ml-1") Tim Hoover
      h2(class="font-bold w-7/12 text-2xl") Full-Stack Engineer
        span(class="text-primary-blue") .
    // preferred language
    div(class="flex w-full text-sm justify-center items-center space-x-5")
      span(class="link") English
      span(class="link") Español
    // links
    nav(class="flex flex-col items-center w-full pt-2")
      div(class="flex flex-col items-center text-xs md:text-sm font-semibold w-full")
        nuxt-link(to="/" @click='menu.mobileMenu = false' active-class="border-l-4 border-primary-blue bg-gray-100" class="nav-link")
          svg(xmlns='http://www.w3.org/2000/svg', class='h-[30px] w-[30px]', viewBox='0 0 20 20', fill='currentColor')
            path(fill-rule='evenodd', d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z', clip-rule='evenodd')
          span(class="self-end") About
        nuxt-link(to="/experience" @click='menu.mobileMenu = false' active-class="border-l-4 border-primary-blue bg-gray-100" class="nav-link")
          svg(xmlns='http://www.w3.org/2000/svg', class='h-[30px] w-[30px]', viewBox='0 0 20 20', fill='currentColor')
            path(fill-rule='evenodd', d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z', clip-rule='evenodd')
          span(class="self-end") Experience
        nuxt-link(to="/projects" @click='menu.mobileMenu = false' active-class="border-l-4 border-primary-blue bg-gray-100" class="nav-link")
          svg(xmlns='http://www.w3.org/2000/svg', class='h-[30px] w-[30px]', viewBox='0 0 20 20', fill='currentColor')
            path(d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z')
          span(class="self-end") Projects
        nuxt-link(to="/skills" @click='menu.mobileMenu = false' active-class="border-l-4 border-primary-blue bg-gray-100" class="nav-link")
          svg(xmlns='http://www.w3.org/2000/svg', class='h-[30px] w-[30px]', viewBox='0 0 20 20', fill='currentColor')
            path(fill-rule='evenodd', d='M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z', clip-rule='evenodd')
          span(class="self-end") Skills
        nuxt-link(to="/testimonials" @click='menu.mobileMenu = false' active-class="border-l-4 border-primary-blue bg-gray-100" class="nav-link")
          svg(xmlns='http://www.w3.org/2000/svg', class='h-[30px] w-[30px]', viewBox='0 0 20 20', fill='currentColor')
            path(fill-rule='evenodd', d='M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z', clip-rule='evenodd')
          span(class="self-end") Testimonials
        nuxt-link(to="/education" @click='menu.mobileMenu = false' active-class="border-l-4 border-primary-blue bg-gray-100" class="nav-link")
          svg(xmlns='http://www.w3.org/2000/svg', class='h-[30px] w-[30px]', viewBox='0 0 20 20', fill='currentColor')
            path(d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z')
          span(class="self-end") Education
        nuxt-link(to="/resume" @click='menu.mobileMenu = false' active-class="border-l-4 border-primary-blue bg-gray-100" class="nav-link")
          svg(xmlns='http://www.w3.org/2000/svg', class='h-[30px] w-[30px]', viewBox='0 0 20 20', fill='currentColor')
            path(fill-rule='evenodd', d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z', clip-rule='evenodd')
          span(class="self-end") Resume
        nuxt-link(to="/contact" @click='menu.mobileMenu = false' active-class="border-l-4 border-primary-blue bg-gray-100" class="nav-link")
          svg(xmlns='http://www.w3.org/2000/svg', class='h-[30px] w-[30px]', viewBox='0 0 20 20', fill='currentColor')
            path(d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z')
            path(d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z')
          span(class="self-end") Contact
  div(class="flex-1 p-10 h-screen overflow-y-auto")
    slot
</template>

<script setup>
  import { reactive } from 'vue'

  const menu = reactive({
    mobileMenu: false,
  })

  const toggleMobileNav = () => {
    menu.mobileMenu = true
  }
</script>
