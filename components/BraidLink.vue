<template>
  <component
    :is="component"
    :to="route"
    :href="route"
    :target="external"
    class="braid-link">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: ''
    }
  },
  computed: {
    parsedHref () {
      return /^https?/.test(this.href) ? this.href : `http://${this.href}`
    },
    route: function () {
      return this.to ? this.to : this.parsedHref
    },
    external: function () {
      if (this.target) {
        return this.target
      }
      return /^https?/.test(this.route) || /^www?/.test(this.route) ? '_blank' : false
    },
    component: function () {
      return this.external || /^mailto|^tel/.test(this.route) ? 'a' : 'nuxt-link'
    }
  }
}
</script>
