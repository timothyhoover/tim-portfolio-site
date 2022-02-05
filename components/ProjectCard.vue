<template lang="pug">
div(class='group flex flex-col rounded-md shadow-lg w-72 h-72 sm:w-60 sm:h-60 lg:w-48 lg:h-48 xl:w-56 xl:h-56 cursor-pointer hover:shadow-2xl transition duration-200 ease-in-out relative')
  div(class='opacity-0 bg-black group-hover:opacity-60 absolute w-full h-full z-30 transition duration-200 ease-in-out rounded-md')
  div(class='group-hover:opacity-100 opacity-0 flex flex-col items-center justify-end w-full h-full p-5 transition duration-200 ease-in-out z-40 absolute')
    // Project Description
    span(class='text-xs text-white') Language learning app with english level evaluator using firebase db
    // Project Links (github and site)
    div(class='flex items-center w-full h-full text-white')
      img(src='../assets/img/github.png')
      a(href='https://www.github.com/timothyhoover', class='text-xs w-full pl-3 hover:text-primary-green transition duration-1000 ease-in-out') Go to Repo
    div(class='flex items-center w-full h-full text-white')
      img(src='../assets/img/site-logo.png')
      a(href='https://www.github.com/timothyhoover', class='text-xs w-full pl-3 hover:text-primary-green transition duration-1000 ease-in-out') Go to live site
  // Project Photo
  div(class='flex w-full h-full rounded-md')
    img(src='../assets/img/evaly-example.png')
  // Project Name and Number
  div(class='flex justify-between items-end w-full h-full')
    h3(class='group-hover:opacity-0 text-6xl font-medium transform translate-y-7 -translate-x-6 z-50 transition duration-200 ease-in-out absolute') 0
      span(class='text-primary-green') 1
    h2(class='px-4 py-2 text-xl font-medium w-full text-right') Evaly
</template>
