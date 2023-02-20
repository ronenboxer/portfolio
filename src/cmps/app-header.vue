<template>
  <header ref="headerRef" class="app-header sticky full">
    <nav class="main-nav flex between align-center">
      <a class="flex center logo page" @click="scrollTo('universe')" v-icon="'logo'">
      </a>
      <menu-icon ref="menuIcon" @toggleMenuActive="toggleMenuActive" :isMenuActive="isMenuActive" />
      <section class="menu flex" :class="{ active: isMenuActive }" v-clickOutside="clickOutside">
        <a v-for="(link, idx) in links" @click="slideTo(link)" class="page flex align-center capitalize"
          :class="{ active: activeSlideIndex === idx }">{{ link }}</a>
        <a @click="onContact" class="page flex align-center">Contact</a>
        <div @click="toggleDropdownMenu" class="flex align-center dropdown dropdown-2">
        </div>
      </section>
    </nav>
  </header>
</template>

<script>
import menuIcon from './menu-icon.vue'

import { eventBus } from '../services/event-bus.js'
export default {
  name: 'app-header',
  props: { activeSlideIndex: Number },
  emits: ['slideTo'],
  data() {
    return {
      isMenuActive: false,
      links: ['overview', 'projects', 'specs', 'biography'],
      elMenuIcon: null,
      elHeader: null
    }
  },
  created() {
  },
  mounted() {
    this.elMenuIcon = this.$refs.menuIcon.$el
    this.elHeader = this.$refs.headerRef
    document.querySelector('body').addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    document.querySelector('body').removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    clickOutside(ev) {
      if (!this.isMenuActive || this.elMenuIcon == ev.target || this.elMenuIcon.contains(ev.target)) return
      this.isMenuActive = false
    },
    toggleMenuActive() {
      this.isMenuActive = !this.isMenuActive
    },
    slideTo(target) {
      this.isMenuActive = false
      this.$emit('slideTo', target)
    },
    scrollTo(target) {
      document.querySelector('.' + target)?.scrollIntoView()
    },
    onContact() {
      this.isMenuActive = false
      eventBus.emit('onContact', null)
    },
    handleScroll() {
      const elHeaderBoundary = this.elHeader.getBoundingClientRect()
      eventBus.emit('onWindowScroll', elHeaderBoundary.y)
    }
  },
  computed: {
  },
  components: {
    menuIcon
  },
}
</script>