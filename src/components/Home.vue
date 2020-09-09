<template>
  <div class="Content">
    <Navigation />
    <h1 v-html="title"></h1>
    <Footer />
  </div>
</template>

<script>
import config from '@/config'
import Navigation from './Navigation'
import Footer from './Footer'

export default {
  components: {
    Navigation,
    Footer
  },
  mounted () {
    this.$nextTick(() => {
      this.bindEvents()
    })
  },
  computed: {
    title () {
      return config.TITLE
    }
  },
  methods: {
    bindEvents () {

    }
  }
}
</script>
