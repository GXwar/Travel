<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
           :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">
          {{ this.sightName }}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe604;</span>
          {{ this.bannerImgs.length }}
        </div>
      </div>
    </div>
    <common-fade>
      <common-gallery
        :imgs="bannerImgs"
        v-show="showGallery"
        @close="handleGalleryClose"></common-gallery>
    </common-fade>
  </div>
</template>

<script>
  import CommonGallery from '../../../common/Gallery/Gallery.vue'
  import CommonFade from '../../../common/Fade/Fade.vue'

  export default {
    name: "DetailBanner",
    components: {
      CommonGallery,
      CommonFade
    },
    props: {
      sightName: String,
      bannerImg: String,
      bannerImgs: Array
    },
    data () {
      return {
        showGallery: false
      }
    },
    methods: {
      handleBannerClick () {
        this.showGallery = true
      },
      handleGalleryClose () {
        this.showGallery = false
      }
    }
  }
</script>

<style scoped lang="less">
  .banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    color: #fff;
    .banner-img {
      width: 100%;
    }
    .banner-info {
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: .6rem;
      background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
      .banner-title {
        flex: 1;
        font-size: .32rem;
        padding: 0 .2rem;
      }
      .banner-number {
        height: .32rem;
        line-height: .32rem;
        margin-top: .14rem;
        padding: 0 .4rem;
        border-radius: .2rem;
        background: rgba(0, 0, 0, 0.8);
        font-size: .24rem;
        .banner-icon {
          font-size: .24rem;
        }
      }
    }
  }
</style>