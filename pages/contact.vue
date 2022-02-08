<template lang="pug">
div(class="flex w-full h-full justify-center items-center")
  form(@submit.prevent='submitForm' class="w-4/6 shadow-lg shadow-gray-200 rounded-lg space-y-4 p-10")
    o-field(label='Name' variant='primary')
      o-input(v-model='formData.name', placeholder="Name", name="name")
    o-field(label='Last Name' variant='primary')
      o-input(v-model='formData.lastName', placeholder="Last Name", name="lastName")
    o-field(label='Email' variant='primary')
      o-input(v-model='formData.email', placeholder="Email", type="email", name="user_email")
    o-field(label='Message' variant='primary')
      o-input(v-model='formData.message' type='textarea', placeholder="Message", name="message")
    o-button(@click="submitForm" size='medium' variant='primary') Submit
</template>

<script setup>
  import { reactive } from 'vue'

  const formData = reactive({
    name: '',
    lastName: '',
    email: '',
    message: '',
  })

  const submitForm = () => {
    console.log('form data')
    console.log(formData)
  }
</script>
