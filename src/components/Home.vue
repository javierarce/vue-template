<template>
  <div class="Content">
    <Navigation />
    <h1 v-html="title"></h1>
    <Projects />
    <Footer />
  </div>
</template>

<script>
import config from '@/config'

import Projects from './Projects'
import Navigation from './Navigation'
import Footer from './Footer'

export default {
  components: {
    Footer,
    Navigation,
    Projects
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
