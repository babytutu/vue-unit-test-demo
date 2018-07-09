<template>
  <span>{{ message }}{{ name }}</span>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: 'world'
      }
    },
    data () {
      return {
        message: 'hello'
      }
    },
    created () {
      this.message = 'bye'
    }
  }
</script>