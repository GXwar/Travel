<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs">
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    <div class="header-fixed"
         v-show="!showAbs"
         :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailHeader",
    data () {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll () {
        const top = document.documentElement.scrollTop
        if (top > 60) {
          const opacity = Math.min(top, 140) / 140
          this.opacityStyle = {
            opacity
          }
          this.showAbs = false
        } else {
          this.showAbs = true
        }
      }
    },
    activated () {
      window.addEventListener('scroll', this.handleScroll)
    },
    deactivated () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped lang="less">
  @import '../../../assets/styles/variables.less';

  .header-abs {
    position: absolute;
    left: .2rem;
    top: .2rem;
    width: .8rem;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    border-radius: .4rem;
    background: rgba(0, 0, 0, 0.8);
    .header-abs-back {
      color: #fff;
      font-size: .4rem;
    }
  }
  .header-fixed {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: .86rem;
    line-height: .86rem;
    text-align: center;
    font-size: .32rem;
    color: #fff;
    background: @bgColor;
    .header-fixed-back {
      position: absolute;
      top: 0;
      left: 0;
      width: .64rem;
      text-align: center;
      font-size: .4rem;
      color: #fff;
    }
  }
</style>