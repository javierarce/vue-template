<template>
  <div class="Content">
    <Navigation />
    <div class="Project">

      <div class="Project__intro" ref="intro">
        <div class="Project__header">
          <div class="Project__title" v-html="data.title"></div>
          <div class="Project__subtitle" v-html="data.subtitle"></div>
        </div>
        <div class="Project__description" v-html="data.description"></div>
      </div>

      <div class="Project__content">
        <div class="Project__item is-scrollable" v-for="item in data.content" :key="item.id">

          <div class="Project__itemText" v-html="item.text" v-if="item.type === 'text'"></div>
          <div class="Project__itemColumns" v-html="prettyText(item.text)" v-if="item.type === 'columns'"></div>

          <div class="Project__itemQuote" v-html="item.text" v-else-if="item.type === 'quote'"></div>

          <div class="Project__itemImage is-scrollable" v-if="item.type === 'image'">
            <img class="Project__imageFile lazy" :data-src="path(item.src)" />
            <div class="Project__imageCaption" v-html="item.caption" v-if="item.caption"></div>
          </div>

        </div>
      </div>
    </div>
    <Highlights />
    <Footer />
  </div>
</template>

<script>
import config from '@/config'
import mixin from '@/mixins'

import LazyLoad from 'vanilla-lazyload'
import scrollama from "scrollama"
import 'intersection-observer'

import Footer from './Footer'
import Highlights from './Highlights'
import Navigation from './Navigation'

export default {
  mixins: [mixin],
  components: {
    Footer,
    Highlights,
    Navigation
  },
  data () {
    return {
      permalink: undefined,
      data: {}
    }
  },
  mounted () {
    this.permalink = this.$route.params.permalink
    this.data = require(`@/data/projects/${this.permalink}.json`)

    this.$nextTick(() => {
      this.setupScroll()

      this.loader = new LazyLoad({
        elements_selector: '.is-lazy'
      })
      setTimeout(() => {
        this.$refs.intro.classList.add('is-visible')
      }, 200)
    })
  },
  methods: {
    path (src) {
      return `/${config.PROJECT_IMAGE_PATH}/${this.permalink}/${src}`
    },
    setupScroll () {
      const scroller = scrollama()

      scroller
        .setup({
          step: ".is-scrollable",
          offset: 0.8
        })
        .onStepEnter((response) => {
          response.element.classList.add('is-visible')
          // { element, index, direction }
        })
        .onStepExit(() => {
          // { element, index, direction }
        })

      window.addEventListener("resize", scroller.resize)
    }
  }
}

</script>
