<template>
  <div class="Home">
    <h1 v-html="title"></h1>
  </div>
</template>

<script>
import config from '@/config'

export default {
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
