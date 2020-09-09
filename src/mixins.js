export default {
  computed: {
    prettyDescription () {
      return this.splitIntoParapgrahs(this.data.description)
    }
  },
  methods: {
    prettyText (text, className=undefined) {
      return this.splitIntoParapgrahs(text, className)
    },
    upper (string) { 
      return string.replace(/^\w/, c => c.toUpperCase())
    },
    scrollBy (top) {
      window.scrollBy({ 
        top,
        behavior: 'smooth' 
      })
    },
    scrollTo (top) {
      window.scrollTo({ 
        top,
        behavior: 'smooth' 
      })
    },
    shuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex

      while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    },
    splitIntoParapgrahs (text, className = undefined) {
      if (!text) {
        return
      }

      let parts = []

      text.split('\n').forEach((p) => {
        if (className) {
          parts.push(`<p class="${className}">${p}</p>`)
        } else {
          parts.push(`<p>${p}</p>`)
        }
      })

      return parts.join('')
    },
    getListClassNameFor (names) {
      let classes = []

      names.split(' ').forEach((name) => {
        let upperCaseName = this.upper(name)
        classes.push(`List__item${upperCaseName}`)
        classes.push(`${this.className}__item${upperCaseName}`)
      })

      return classes.join(' ')
    },
    prettyDate (time) {
      let date = new Date((time || '').replace(/-/g, '/').replace(/[TZ]/g, ' '))
      let diff = (new Date().getTime() - Date.parse(time)) / 1000
      let day_diff = Math.floor(diff / 86400)
      let year = date.getFullYear()
      let month = date.getMonth()+1
      let day = date.getDate()

      if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31) {
        return (
          year.toString() + '-'
          + ((month<10) ? '0' + month.toString() : month.toString()) + '-'
          + ((day<10) ? '0' + day.toString() : day.toString())
        )
      }

      let r = ((
        day_diff == 0 && (
          (diff < 60 && 'just now')
          || (diff < 120 && '1 minute ago')
          || (diff < 3600 && Math.floor(diff / 60) + ' minutes ago')
          || (diff < 7200 && "1 hour ago")
          || (diff < 86400 && Math.floor(diff / 3600) + ' hours ago')
        ))
        || (day_diff == 1 && 'yesterday')
        || (day_diff < 7 && day_diff + ' days ago')
        || (day_diff < 31 && Math.ceil(day_diff / 7) + ' weeks ago')
      )

      return r
    }
  }
}
