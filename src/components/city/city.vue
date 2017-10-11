<template>
  <transition name="move">
    <div class="city" ref="city" v-show="showCity">
      <div class="citys">
        <div class="citytop">
          <div class="closecity" @click="hide">

          </div>
          <div class="cityfont">
            <span class="">选择城市</span>
          </div>
        </div>
        <div class="citylist">
          <span v-for="items in citys" class="border-1px" @click="selectcitys($index)">{{items.city}}</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">

  import BScroll from 'better-scroll'

  const ERR_OK = 0

export default {
    data () {
      return {
        showCity: false,
        citys: []
      }
    },
    methods: {
      show () {
        this.showCity = true
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.city, {})
          } else {
            this.scroll.refresh()
          }
        })
      },
      hide () {
        this.showCity = false
      },
      selectcitys ($index) {
        alert(this.click = $index)
      }
    },
    created () {
      this.$http.get('/api/citys').then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.citys = response.data
        }
      })
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixin.styl"

  .city
    position: fixed
    left: 0
    top: 0
    bottom: 2rem
    overflow: hidden
    z-index: 30
    width: 100%
    background: #fff
    transform: translate3d(0, 0, 0)
    &.move-enter-active, &.move-leave-active
      transition: all 0.2s linear
    &.move-enter, &.move-leave-active
      transform: translate3d(100%, 0, 0)
    .citytop
      display: flex
      width: 100%
      background-color: #00c1b0
      height: 2rem
      .closecity
        flex:1
        background:url("closecity.png")no-repeat center
      .cityfont
        flex:10
        text-align: center
        color: white
        font-size: 0.5rem
        line-height: 2rem
    .citylist
      width: 95%
      margin:0 auto
      & > span
        display: block
        border-1px(rgba(7, 17, 27, 0.1))
        width: 100%
        height: 1.5rem
        line-height: 1.5rem
        font-size: 0.5rem
        color: #333
        text-align: left
</style>
