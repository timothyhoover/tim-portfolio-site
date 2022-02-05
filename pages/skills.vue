<template lang="pug">
main(class='flex flex-col justify-center items-center')
  h1(class='text-3xl lg:text-5xl font-black w-full mb-5') Tech
    span(class='text-primary-green') Skills
  // html & css side by side in design
  div(class='grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8')
    div(class="skills-card")
      h2(class="text-3xl font-extrabold mb-5")
        span(class="text-primary-green pr-2 font-bold") &lt;
        span HTML
        span(class="text-primary-green pl-2 font-bold") />
      div(class="flex space-x-8")
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/html-logo.svg" class="skills-logo")
          h3(class="font-semibold") HTML
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/react-logo.svg" class="skills-logo")
          h3(class="font-semibold") JSX
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/pug.png" class="skills-logo")
          h3(class="font-semibold") Pug
    div(class="skills-card")
      h2(class="text-3xl font-extrabold mb-5")
        span(class="text-primary-green") .
        | CSS
      div(class="flex space-x-8")
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/css-logo.svg" class="skills-logo")
          h3(class="font-semibold") CSS
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/sass-logo.svg" class="skills-logo")
          h3(class="font-semibold") SASS
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/bulma.png" class="skills-logo")
          h3(class="font-semibold") Bulma
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/tailwind.svg" class="skills-logo")
          h3(class="font-semibold") Tailwind

    // javascript
    div(class='col-span-2 skills-card')
      h2(class="text-3xl font-extrabold mb-5")
        span(class="text-primary-green pr-2 font-bold") {
        span JavaScript
        span(class="text-primary-green pl-2 font-bold") }
      div(class="flex space-x-8")
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/javascript-logo.svg" class="skills-logo")
          h3(class="font-semibold") JavaScript
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/node-logo.svg" class="skills-logo")
          h3(class="font-semibold") Node JS
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/npm-logo.svg" class="skills-logo")
          h3(class="font-semibold") Node Package Manager
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/react-logo.svg" class="skills-logo")
          h3(class="font-semibold") React
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/vue.png" class="skills-logo")
          h3(class="font-semibold") Vue
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/jquery-logo.svg" class="skills-logo")
          h3(class="font-semibold") JQuery
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/typescript-logo.svg" class="skills-logo")
          h3(class="font-semibold") TypeScript
    // backend
    div(class='col-span-2 skills-card')
      h2(class="text-3xl font-extrabold mb-5 flex space-x-1")
        span Backend
        svg(xmlns='http://www.w3.org/2000/svg', class='h-[25px] w-[25px] fill-primary-green', viewBox='0 0 20 20', fill='currentColor')
          path(fill-rule='evenodd', d='M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z', clip-rule='evenodd')
      div(class="flex space-x-8")
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/graphql.png" class="skills-logo")
          h3(class="font-semibold") GraphQL
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/Expressjs.png" class="skills-logo")
          h3(class="font-semibold") Express JS
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/hapijs.png" class="skills-logo")
          h3(class="font-semibold") Hapi JS
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/knex.png" class="skills-logo")
          h3(class="font-semibold") Knex JS
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/postgre.png" class="skills-logo")
          h3(class="font-semibold") Postgres
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/mysql.svg" class="skills-logo")
          h3(class="font-semibold") MySQL
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/typeorm.png" class="skills-logo")
          h3(class="font-semibold") TypeORM
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/mongodb-icon-1.svg" class="skills-logo")
          h3(class="font-semibold") MongoDB
    // devops
    div(class="skills-card")
      h2(class="text-3xl font-extrabold mb-5 flex space-x-2")
        span DevOps
        svg(xmlns='http://www.w3.org/2000/svg', class='h-[25px] w-[25px] fill-primary-green', viewBox='0 0 36.364 29.091')
          path(d='M7.273,20H1.818A1.818,1.818,0,0,0,0,21.818v5.455a1.818,1.818,0,0,0,1.818,1.818H7.273a1.818,1.818,0,0,0,1.818-1.818V21.818A1.818,1.818,0,0,0,7.273,20ZM5.909,15.455H16.818v2.727h2.727V15.455H30.455v2.727h2.727V14.91A2.185,2.185,0,0,0,31,12.727H19.545V9.091h2.273a1.818,1.818,0,0,0,1.818-1.818V1.818A1.818,1.818,0,0,0,21.818,0H14.545a1.818,1.818,0,0,0-1.818,1.818V7.273a1.818,1.818,0,0,0,1.818,1.818h2.273v3.636H5.364A2.185,2.185,0,0,0,3.182,14.91v3.272H5.909Zm15,4.545H15.455a1.818,1.818,0,0,0-1.818,1.818v5.455a1.818,1.818,0,0,0,1.818,1.818h5.455a1.818,1.818,0,0,0,1.818-1.818V21.818A1.818,1.818,0,0,0,20.909,20Zm13.636,0H29.091a1.818,1.818,0,0,0-1.818,1.818v5.455a1.818,1.818,0,0,0,1.818,1.818h5.455a1.818,1.818,0,0,0,1.818-1.818V21.818A1.818,1.818,0,0,0,34.545,20Z')
      div(class="flex space-x-8")
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/aws.png" class="skills-logo")
          h3(class="font-semibold") Amazon Web Services
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/docker.png" class="skills-logo")
          h3(class="font-semibold") Docker
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/bash.png" class="skills-logo")
          h3(class="font-semibold") Bash
    // testing
    div(class="skills-card")
      h2(class="text-3xl font-extrabold mb-5 flex space-x-2")
        span Testing
        svg(xmlns='http://www.w3.org/2000/svg', class='h-[25px] w-[25px] stroke-primary-green', fill='none', viewBox='0 0 24 24', stroke='currentColor')
          path(stroke-linecap='round', stroke-linejoin='round', stroke-width='2', d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z')
      div(class="flex space-x-8")
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/cypress.png" class="skills-logo")
          h3(class="font-semibold") Cypress
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/jest.png" class="skills-logo")
          h3(class="font-semibold") Jest
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/chai.png" class="skills-logo")
          h3(class="font-semibold") Chai
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/mocha.svg" class="skills-logo")
          h3(class="font-semibold") Mocha

    // build tools
    div(class="skills-card")
      h2(class="text-3xl font-extrabold mb-5 flex space-x-2")
        span Build Tools
      div(class="flex space-x-8")
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/babel-logo.png" class="skills-logo")
          h3(class="font-semibold") Babel
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/webpack-logo.png" class="skills-logo")
          h3(class="font-semibold") Webpack
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/bash.png" class="skills-logo")
          h3(class="font-semibold") Vite
    // design / creative
    div(class="skills-card")
      h2(class="text-3xl font-extrabold mb-5 flex space-x-2 relative")
        span Design / Creative
        img(src="../assets/img/creative@2x.png" class="w-[35px] absolute left-[260px] bottom-[15px]")
      div(class="flex space-x-8")
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/xd-logo.svg" class="skills-logo")
          h3(class="font-semibold") Adobe XD
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/illustrator-logo.svg" class="skills-logo")
          h3(class="font-semibold") Illustrator
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/photoshop-logo.svg" class="skills-logo")
          h3(class="font-semibold") PhotoShop
        div(class="flex flex-col items-center justify-center")
          img(src="../assets/img/premiere-logo.svg" class="skills-logo")
          h3(class="font-semibold") Premiere Pro

  // .other

  // soft skills
</template>

<script setup></script>
