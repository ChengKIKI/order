<template>
  <transition name="move">
  <div v-show="showFlag" class="orderde" ref="orderde">
    <div class="orderdes">
      <div class="detailtit">
        <div class="arrow" @click="hide">
          <
        </div>
        <span class="titlefont">
          订单详情
        </span>
        <span class="resolve">
          保存
        </span>
      </div>
      <div class="infolist" ref="infolist">
        <div class="paidaninfo">
          派单信息
          <div class="paidande">
            <span class="border-1px">姓名：</span>
            <span class="border-1px">性别：</span>
            <span class="border-1px">手机号：</span>
            <span class="border-1px">城市：</span>
            <span class="border-1px">来源：</span>
            <span class="border-1px">订单时间：</span>
          </div>
        </div>
        <div class="gendaninfo">
          跟单信息
          <div class="gendande">
            <span class="border-1px">确认时间：<input></span>
            <span class="border-1px">电话回访时间：<input></span>
            <span class="border-1px">到店时间：<input></span>
            <span class="border-1px">签单时间：<input></span>
            <span class="border-1px">签单金额：<input></span>
          </div>
        </div>
        <div class="serverinfo">
          服务信息
          <div class="serverde">
            <span class="border-1px">交定时间：<input></span>
            <span class="border-1px">交定金额：<input></span>
            <span class="border-1px">交齐全款时间：<input></span>
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
    props: {
      orders: {
        type: Object
      }
    },
    data () {
      return {
        showFlag: false
      }
    },
    methods: {
      show () {
        this.showFlag = true
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.orderde, {})
          } else {
            this.scroll.refresh()
          }
        })
      },
      hide () {
        this.showFlag = false
      }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .orderde
    position: fixed
    left: 0
    top: 0
    bottom: 2rem
    z-index: 30
    width: 100%
    background: #fff
    overflow:hidden
    transform: translate3d(0, 0, 0)
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

      .paidaninfo
        width: 100%
        margin-top: 0.5rem
        .paidande
          span
            display: block
            border-1px(rgba(7, 17, 27, 0.1))
            height: 2rem
            line-height:2rem
            font-size:0.5rem
            & > input
              width:75%
              &:focus
                outline: none
      .gendaninfo
        width: 100%
        margin-top: 0.5rem
        .gendande
          span
            display: block
            border-1px(rgba(7, 17, 27, 0.1))
            height: 2rem
            line-height:2rem
            font-size:0.5rem
            & > input
              width:75%
              &:focus
                outline: none
      .serverinfo
        width: 100%
        margin-top: 0.5rem
        .serverde
          span
            display: block
            border-1px(rgba(7, 17, 27, 0.1))
            height: 2rem
            line-height:2rem
            font-size:0.5rem
            & > input
              width:75%
              &:focus
                outline: none
</style>
