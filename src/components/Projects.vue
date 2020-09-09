<template>
  <div class="Projects">
    <div class="Project__item" v-for="item in projects" :key="item.id">
      <router-link v-html="item.title" :to="projectURL(item)"></router-link>
    </div>
  </div>
</template>

<script>
import mixin from '../mixins'

export default {
  mixins: [mixin],
  data () {
    return {
      projects: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      let data = require(`@/data/projects.json`)
      
      data.forEach((item) => {
        let project = require(`@/data/projects/${item}.json`)
        this.projects.push(project)
      })
    })
  },
  methods: {
    projectURL (item) {
      return `/project/${item.permalink}`
    }
  }
}

</script>
