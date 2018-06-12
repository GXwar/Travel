<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">
      {{ item }}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "CityAlphabet",
    props: {
      cities: Object
    },
    computed: {
      letters () {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    },
    data () {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    methods: {
      // when the letter is clicked, the scroll will move to appropriate position
      handleLetterClick (e) {
        this.$emit('change', e.target.innerHTML)
      },
      // used to handle touch event
      // if the alphabet on the right is touch and move or drag, the click event will be trigger
      handleTouchStart () {
        this.touchStatus = true
      },
      handleTouchMove (e) {
        if (this.touchStatus) {
          // Use this.timer to limit the frequency of scroll switch
          // when the touchMove is happened, set a timer to do after 16ms
          // if the touchMove is triggered again, the timer set before will be clear, and set a new timer
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79
            const index = Math.floor((touchY - this.startY) / 20)
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          }, 16)

        }
      },
      handleTouchEnd () {
        this.touchStatus = false
      },
    },
    updated () {
      this.startY = this.$refs['A'][0].offsetTop
    }
  }
</script>

<style scoped lang="less">
  @import '../../../assets/styles/variables.less';

  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    .item {
      text-align: center;
      line-height: .4rem;
      color: @bgColor;
    }
  }
</style>