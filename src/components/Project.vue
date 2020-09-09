<template>
  <div class="Content">
    <Navigation />
    <div class="Project">
      <div class="Project__title" v-html="data.title"></div>
      <div class="Project__subtitle" v-html="data.subtitle"></div>
      <div class="Project__description is-short" v-html="data.short_description"></div>
      <div class="Project__description" v-html="data.description"></div>

      <div class="Project__content">
        <div class="Project__item" v-for="item in data.content" :key="item.id">
          <div class="Project__itemText" v-html="item.text" v-if="item.type === 'text'"></div>

          <div class="Project__itemImage" v-if="item.type === 'image'">
            <img class="Project__imageFile lazy" :data-src="path(item.src)" />
            <div class="Project__imageCaption" v-html="item.caption" v-if="item.caption"></div>
          </div>

        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import config from '@/config'
import mixin from '@/mixins'

import Navigation from './Navigation'
import Footer from './Footer'

export default {
  mixins: [mixin],
  components: {
    Navigation,
    Footer
  },
  data () {
    return {
      permalink: undefined,
      data: {}
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.permalink = this.$route.params.permalink
      this.data = require(`@/data/projects/${this.permalink}.json`)
    })
  },
  methods: {
    path (src) {
      return `/${config.PROJECT_IMAGE_PATH}/${this.permalink}/${src}`
    }
  }
}

</script>
