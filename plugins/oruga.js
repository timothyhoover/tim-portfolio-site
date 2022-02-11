import Oruga from '@oruga-ui/oruga-next'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Oruga, {
    iconPack: 'fas',
    iconComponent: 'vue-fontawesome',
    statusIcon: false,
    button: {
      override: true,
      rootClass: 'btn',
      variantClass: 'btn-',
      sizeClass: (size) => {
        if (size === 'small') {
          return 'py-1 text-sm px-8'
        } else if (size === 'large') {
          return 'py-4 text-lg px-20'
        } else if (size === 'medium') {
          return 'py-3 text-base px-12'
        }
        return 'py-3 text-base px-12'
      },
    },
    radio: {
      rootClass: 'radio',
      labelClass: 'radio-label',
      checkClass: 'radio-check',
      checkedClass: 'radio-checked',
    },
    field: {
      override: true,
      labelClass: 'field-label',
      messageClass: 'text-xs italic',
      variantClass: 'field-',
    },
    input: {
      override: true,
      inputClass: 'input focus:outline-none focus:shadow-outline',
      roundedClass: 'rounded',
      variantClass: 'input-',
      inputClass: (variant, context) => {
        if (context.props.type === 'textarea') {
          return '!h-40'
        }
      },
    },
    dropdown: {
      menuClass: 'dropdown-menu',
      itemClass: 'dropdown-item',
      itemActiveClass: 'dropdown-item-active',
    },
    loading: {
      overlayClass: 'loading-background',
    },
    icon: {
      override: true,
      spinClass: 'fa-spin',
    },
    switch: {
      checkClass: 'switch',
      labelClass: 'switch-label',
    },
  })
})
