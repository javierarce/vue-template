<template>
  <div class="Content">
    <Navigation />
    <Projects />
    <Footer />
  </div>
</template>

<script>
import Projects from './Projects'
import Navigation from './Navigation'
import Footer from './Footer'

export default {
  components: {
    Footer,
    Navigation,
    Projects
  }
}
</script>
