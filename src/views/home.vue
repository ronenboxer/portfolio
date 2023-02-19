<template>
  <main class="home full" id="home">
    <galaxy @slideTo="slideTo" />

    <app-header @slideTo="slideTo" :activeSlideIndex="activeSlideIndex"
      :modules="modules" />
    <swiper :scrollbar="true" :slides-per-view="1" createElements="true" @activeIndexChange="onActiveIndexChange" noSwiping="true" noSwipingClass="swiper-slide">
      <swiper-slide><overview-page /></swiper-slide>
      <swiper-slide><project-list /></swiper-slide>
      <swiper-slide><tech-list /></swiper-slide>
      <swiper-slide><bio-page /></swiper-slide>

    </swiper>
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
import { Swiper as swiper, SwiperSlide } from 'swiper/vue'
import Swiper, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/a11y'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const SPEED = 550
export default {
  name: '',
  props: {},
  emits: [],
  data() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
      swiper: null,
      slidesMap: {
        overview: 0,
        projects: 1,
        specs: 2,
        biography: 3
      },
      activeSlideIndex: 0
    }
  },
  created() {
  },
  mounted() {
    this.swiper = new Swiper('.swiper', {
      speed: SPEED,
      spaceBetween: 0,
      allowTouchMove: false,
      noSwipingClass: 'swiper-slide',
      noSwiping: true
    })
  },
  methods: {
    slideTo(target) {
      document.querySelector('.swiper')?.scrollIntoView()
      this.swiper.slideTo(this.slidesMap[target], SPEED, false)
      this.activeSlideIndex = this.slidesMap[target]
    },
    onActiveIndexChange(ev) {
      this.activeSlideIndex = ev.snapIndex
    }
  },
  computed: {
  },
  components: {
    galaxy,
    appHeader,
    overviewPage,
    projectList,
    techList,
    bioPage,
    appFooter,
    Swiper: swiper,
    SwiperSlide,
  },
}
</script>