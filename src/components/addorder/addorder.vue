<template>
  <transition name="move">
    <div class="addorder" ref="addorder" v-show="showAdd">
      <div class="orderdes">
        <div class="detailtit">
          <div class="arrow" @click="hide">
            <
          </div>
          <span class="titlefont">
            添加订单
          </span>
          <span class="resolve">
            保存
          </span>
        </div>
        <div class="infolist" ref="infolist">
          <div class="paidaninfo">
            派单信息
            <div class="paidande">
              <span class="border-1px">姓名：<input></span>
              <span class="border-1px">性别：<input></span>
              <span class="border-1px">手机号：<input></span>
              <span class="border-1px">城市：<input></span>
              <span class="border-1px">来源：<input></span>
              <span class="border-1px">订单时间：<input></span>
            </div>
          </div>
          </div>
        </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

export default {
    data () {
      return {
        showAdd: false
      }
    },
    methods: {
      show () {
        this.showAdd = true
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.addorder, {})
          } else {
            this.scroll.refresh()
          }
        })
      },
      hide () {
        this.showAdd = false
      }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixin.styl"

  .addorder
    position: fixed
    left: 0
    top: 0
    bottom: 2rem
    z-index: 60
    width: 100%
    background: #fff
    &.move-enter-active, &.move-leave-active
      transition: all 0.2s linear
    &.move-enter, &.move-leave-active
      transform: translate3d(100%, 0, 0)
    .detailtit
      display: flex
      width: 100%
      background-color: #00c1b0
      color: white
      text-align:center
      padding: 0.9rem 0.6rem 0.9rem 0.3rem
      font-size: 0.7rem
      .arrow
        flex: 1
        text-align: center
        cursor: pointer
      .titlefont
        flex: 7
        cursor: pointer
      .resolve
        flex: 3
        text-align: center
        cursor: pointer
    .infolist
      width: 95%
      margin: 0 auto
      background-color: white
      color: #666
      text-align:left
      font-size: 0.7rem
      margin-top: 0.5rem
      .paidaninfo
        width: 100%
        .paidande
          span
            display: block
            border-1px(rgba(7, 17, 27, 0.1))
            height: 2rem
            line-height:2rem
            font-size:0.5rem
            & > input
              width:80%
              &:focus
                outline: none
</style>
