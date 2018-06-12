<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import axios from 'axios'

  import HomeHeader from './components/Header.vue'
  import HomeSwiper from './components/Swiper.vue'
  import HomeIcons from './components/Icons.vue'
  import HomeRecommend from "./components/Recommend.vue"
  import HomeWeekend from './components/Weekend.vue'

  import { mapState } from 'vuex'

  export default {
    name: "Home",
    components: {
      HomeRecommend,
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeWeekend
    },
    computed: {
      ...mapState([
        'city'
      ])
    },
    data () {
      return {
        lastCity: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    mounted () {
      this.lastCity = this.city
      this.getHomeInfo()
    },
    methods: {
      getHomeInfo () {
        axios.get(`/static/mock/index.json?city=${this.city}`)
          .then((res) => {
            res = res.data
            if (res.ret) {
              const data = res.data
              this.swiperList = data.swiperList
              this.iconList = data.iconList
              this.recommendList = data.recommendList
              this.weekendList = data.weekendList
            }
          })
      }
    },
    activated () {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city
        this.getHomeInfo()
      }
    }
  }
</script>

<style scoped>

</style>