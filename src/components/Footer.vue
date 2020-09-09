<template>
  <div class="Footer">
    <div class="Footer__main">
      <a href="mailto://javier@hey.com" class="Footer__link">Email</a>
    </div>
    <div class="Footer__links">
      <a href="item.url" class="Footer__link" target="_blank" v-for="item in data" :key="item.id" v-html="item.name"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: []
    }
  },
  mounted () {
    this.data = require(`@/data/links.json`)
  }

}
</script>
