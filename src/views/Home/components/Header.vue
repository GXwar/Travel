<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入 城市/景点/主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: "HomeHeader",
    computed: {
      ...mapState([
        'city'
      ]),
      ...mapGetters([
        'doubleCity'
      ])
    }
  }
</script>

<style scoped lang="less">
  @import '../../../assets/styles/variables.less';

  .header {
    display: flex;
    line-height: .86rem;
    background: @bgColor;
    color: #fff;
    .header-left {
      width: .64rem;
      float: left;
      padding-left: .2rem;
      .back-icon {
        text-align: center;
        font-size: .4rem;
      }
    }
    .header-input {
      flex: 1;
      height: .64rem;
      line-height: .64rem;
      margin-top: .12rem;
      padding-left: .2rem;
      background: #fff;
      border-radius: .1rem;
      color: #ccc;
    }
    .header-right {
      min-width: 1.04rem;
      padding: 0 .1rem;
      float: right;
      text-align: center;
      color: #fff;
      .arrow-icon {
        margin-left: -.04rem;
        font-size: .24rem;
      }
    }
  }
</style>