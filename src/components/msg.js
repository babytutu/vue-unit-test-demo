module.exports = {
  props: {
    name: {
      type: String,
      default: 'world'
    }
  },
  data() {
    return {
      message: 'hello'
    }
  },
  created() {
    this.message = 'bye'
  },
  render(h) {
    return h(this.$el, this.$slots.default)
  }
}