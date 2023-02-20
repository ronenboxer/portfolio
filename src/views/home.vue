<template>
  <main class="home full" id="home">
    <galaxy @slideTo="slideTo" />

    <app-header @slideTo="slideTo" :activeSlideIndex="activeSlideIndex" />
    <component :is="comp" />
    <app-footer/>
  </main>
</template>

<script>
import galaxy from '../cmps/galaxy.vue'
import appHeader from '../cmps/app-header.vue'
import overviewPage from './overview.vue'
import projectList from './project-list.vue'
import techList from './tech-list.vue'
import bioPage from './bio.vue'
import appFooter from '../cmps/app-footer.vue'


export default {
  name: '',
  props: {},
  emits: [],
  data() {
    return {
      comp: 'overview-page',
      slidesMap: {
        overview: 0,
        projects: 1,
        specs: 2,
        biography: 3
      },
      comps: ['overview-page', 'project-list', 'tech-list', 'bio-page'],
      activeSlideIndex: 0
    }
  },
  methods: {
    slideTo(target) {
      this.activeSlideIndex = this.slidesMap[target]
      this.comp = this.comps[this.activeSlideIndex]
      setTimeout(() => {
        document.querySelector('.' + target)?.scrollIntoView()
      }, 100);
    },
    onActiveIndexChange(ev) {
      this.activeSlideIndex = ev.snapIndex
    }
  },
  computed: {
    getHeight() {
      const target = Object.keys(this.slidesMap).find(t => this.slidesMap[t] === this.activeSlideIndex)
      debugger
      return document.querySelector('.' + target)?.getBoundingClientRect().height || 'auto'
    }
  },
  components: {
    galaxy,
    appHeader,
    overviewPage,
    projectList,
    techList,
    bioPage,
    appFooter,
  },
}
</script>