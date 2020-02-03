<template>
  <div class="progress-bar-section" :mposition="mposition">
    <div
      class="progress-bar"
      :style="{
        width: `${width}%`,
        height: height,
        background: backgroundColor
      }"
    />
    <span v-if="(percent === 0)"></span>
    <span v-if="(percent != 100) && (percent != 0)">{{percent}} %</span>
    <span v-if="(percent === 100) && (percent != 0)">Completed</span>
  </div>
</template>

<script>
export default {
  name: 'VueScrollProgressBar',

  props: {
    height: {
      type: String,
      default: '.5rem'
    },

    backgroundColor: {
      type: String,
      default: '#51e6b0'
    },

    mposition: {
      type: String,
      default: 'left'
    },

    containerColor: {
      type: String,
      default: 'transparent'
    },

  },

  data () {
    return {
      width: 0,
      percent: 0
    }
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    window.dispatchEvent(new Event('scroll'))
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll () {
      const self = this
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      this.width = (window.scrollY / height) * 100
      const eventWidth = Math.ceil(this.width)
      this.percent = Math.round(this.width)

      // select Scrollbar //
      const parent = document.querySelector('.progress-bar-section')
      const selected = document.querySelector('.progress-bar')
      
      // Check position //
      if (self.mposition === 'right') {
        selected.classList.add('progress-bar-section--right')
        parent.classList.add('progress-bar--rtl')
      } else if (self.mposition === 'center') {
        selected.classList.add('progress-bar-section--center')
      }
    }
  }
}
</script>

<style scoped>
.progress-bar-section {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
}

.progress-bar--rtl {
  direction: rtl;
}

.progress-bar-section--right {
  top: 0;
  right: 0;
  left: unset !important;
  z-index: 50;
}

.progress-bar-section--center {
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 50;
}
</style>
