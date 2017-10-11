<template>
  <div class="content" >
    <section class="content-top-tab border-1px" ref="chooseType">
      <ul>
        <li :class='{activity_show: changeShowType == "allcontent"}' @click="changeShowType='allcontent'">
          全部
        </li>
        <li :class='{activity_show: changeShowType == "product"}' @click="changeShowType='product'">
          产品
        </li>
        <li :class='{activity_show: changeShowType == "marketing"}' @click="changeShowType='marketing'">
          营销
        </li>
        <li :class='{activity_show: changeShowType == "financial"}' @click="changeShowType='financial'">
          金融
        </li>
      </ul>
    </section>
    <div ref="content" class="contwarrp">
    <transition name="fade-choose">
      <section class="contentshow" v-show="changeShowType =='allcontent'">
        <div v-for="item in contents" class="border-1px contli"">
          <span class="conttit">{{item.title}}</span>
          <span class="">{{item.content}}</span>
          <span class="">{{item.timeday}}</span>
          <span class="conttime">{{item.timehour}}</span>
        </div>
      </section>
    </transition>
    <transition name="fade-choose">
      <section v-show="changeShowType =='product'">
        我是通知的产品
      </section>
    </transition>
    <transition name="fade-choose">
      <section v-show="changeShowType =='marketing'">
        我是通知的营销
      </section>
    </transition>
    <transition name="fade-choose">
      <section v-show="changeShowType =='financial'">
        我是通知的金融
      </section>
    </transition>
    </div>

</div>
</template>

<script type="text/ecmascript-6">

  // import scroller from 'vue-scroller'
  import BScroll from 'better-scroll'

  const ERR_OK = 0

export default {
    data () {
      return {
        changeShowType: 'allcontent',
        contents: []
      }
    },
    created () {
      this.$http.get('/api/contents').then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.contents = response.data
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.content, {})
            } else {
              this.scroll.refresh()
            }
          })
        }
      })
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .content-top-tab
    display:flex
    justify-content: center
    width:100%
    padding:1rem 0rem 0.7rem 0rem
    color:#666
    border-1px(rgba(7, 17, 27, 0.1))
    background-color:white
    & > ul
      width:100%
      text-align:center
      & > .activity_show
        color: #00c1b0
      & > li
        display: inline-block
        flex:1
        font-size: 0.5rem
        width:23%
  .contwarrp
    position: absolute
    top: 2.9rem
    bottom: 2rem
    overflow:hidden
    .contentshow
      width: 100%
      overflow: hidden
      .contli
        padding-bottom: 0.1rem;
        margin-bottom: 0.3rem
        border-1px(rgba(7, 17, 27, 0.1))
        & > span
          display:block
          font-size:0.5rem
          color:#999
          width:90%
          margin:0 auto
          margin-bottom:0.3rem
          & > .conttit
            color:black
</style>
