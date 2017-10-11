<template>
  <div class="orders">
      <section class="order-title">
        <div class="searchcity">
          <span class="cityshow" ref="city" @click="selectCity()">{{city}}</span>
          <transition name="move">
            <div class="city" ref="city" v-show="showCity">
              <div class="citys">
                <div class="citytop">
                  <div class="closecity" @click="hide()">

                  </div>
                  <div class="cityfont">
                    <span class="">选择城市</span>
                  </div>
                </div>
                <div class="citylist">
                  <span v-for="items in citys" class="border-1px" @click="selectcitys(items)">{{items.city}}</span>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <div class="searchorder">
          <input class="searchinput">
        </div>
        <div class="addordericon" @click="selectAdd()">
        </div>
      </section>
      <section class="order-top-tab border-1px" ref="chooseType">
          <ul>
            <li :class='{activity_show: changeShowType == "allorder"}' @click="changeShowType='allorder'">
              全部
            </li>
            <li :class='{activity_show: changeShowType == "pending"}' @click="changeShowType='pending'">
              待处理
            </li>
            <li :class='{activity_show: changeShowType == "following"}' @click="changeShowType='following'">
              跟进中
            </li>
            <li :class='{activity_show: changeShowType == "telphone"}' @click="changeShowType='telphone'">
              电话
            </li>
            <li :class='{activity_show: changeShowType == "toshop"}' @click="changeShowType='toshop'">
              到店
            </li>
            <li :class='{activity_show: changeShowType == "signup"}' @click="changeShowType='signup'">
              签单
            </li>
          </ul>
      </section>
      <transition name="fade-choose">
        <section class="ordershow" v-show="changeShowType =='allorder'">
              <scroller style="width:100%;heigth:100%"
            :on-refresh="refresh"
            :on-infinite="infinite"
            ref="my_scroller">
              <div v-for="item in orders" class="border-1px orderli" @click="selectOrderde()">
                <b class="orderothers othersrigth">待处理</b>
                <span class="ordername">{{item.name}}</span>
                <span class="orderothers">手机号：{{item.telPhone}}</span>
                <span class="orderothers">时间：{{item.time}}</span>
                <span class="orderothers">地址：{{item.addr}}</span>
              </div>
              </scroller>
        </section>
      </transition>
      <transition name="fade-choose">
        <section class="ordershow" v-show="changeShowType =='pending'">
          <scroller style="width:100%;heigth:100%"
        :on-refresh="refresh"
        :on-infinite="infinite"
        ref="my_scroller1">
          <div v-for="item in orders" class="border-1px orderli" @click="selectOrderde()">
            <b class="orderothers othersrigth">待处理</b>
            <span class="ordername">{{item.name}}</span>
            <span class="orderothers">手机号：{{item.telPhone}}</span>
            <span class="orderothers">时间：{{item.time}}</span>
            <span class="orderothers">地址：{{item.addr}}</span>
          </div>
          </scroller>
        </section>
      </transition>
      <transition name="fade-choose">
        <section class="ordershow" v-show="changeShowType =='following'">

        </section>
      </transition>
      <transition name="fade-choose">
        <section class="ordershow" v-show="changeShowType =='telphone'">

        </section>
      </transition>
      <transition name="fade-choose">
        <section class="ordershow" v-show="changeShowType =='toshop'">

        </section>
      </transition>
      <transition name="fade-choose">
        <section class="ordershow" v-show="changeShowType =='signup'">

        </section>
      </transition>
      <orderdetail ref="orderde"></orderdetail>
      <addorder ref="addorder"></addorder>
  </div>
</template>

<script type="text/ecmascript-6">
  import scroller from 'vue-scroller'
  import orderdetail from 'components/orderdetail/orderdetail'
  import addorder from 'components/addorder/addorder'
  import BScroll from 'better-scroll'

  const ERR_OK = 0
  let data = {
    showCity: false,
    changeShowType: 'allorder',
    orders: [],
    citys: [],
    name: '北京'
  }
  export default {
    data () {
      return data
    },
    computed: {
      city () {
        return this.name
      }
    },
    components: {
      scroller,
      orderdetail,
      addorder
    },
    mounted () {
      for (let i = 1; i <= 10; i++) {
        this.orders.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1
      this.bottom = 20
      setTimeout(() => {
        this.$refs.my_scroller.resize()
        this.$refs.my_scroller1.resize()
      })
    },
    created () {
      this.$http.get('/api/orders').then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.orders = response.data
        }
      })
      this.$http.get('/api/citys').then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.citys = response.data
        }
      })
    },
    methods: {
      selectOrderde () {
        this.$refs.orderde.show()
      },
      selectAdd () {
        this.$refs.addorder.show()
      },
      show () {
        this.showCity = true
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.city, {})
          } else {
            this.scroll.refresh()
          }
        })
      },
      hide () {
        this.showCity = false
      },
      selectCity () {
        this.show()
      },
      refresh () {
        setTimeout(() => {
          let start = this.top - 1

          for (let i = start; i > start - 10; i--) {
            this.orders.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }

          this.top = this.top - 10
          if (this.$refs.my_scroller) {
            this.$refs.my_scroller.finishPullToRefresh()
            this.$refs.my_scroller1.finishPullToRefresh()
          }
        }, 1500)
      },
      infinite () {
        setTimeout(() => {
          let start = this.bottom + 1
          for (let i = start; i < start + 10; i++) {
            this.orders.push(i + ' - keep walking, be 2 with you.')
          }
          this.bottom = this.bottom + 10
          setTimeout(() => {
            if (this.$refs.my_scroller) {
              this.$refs.my_scroller.finishInfinite()
              this.$refs.my_scroller1.finishInfinite()
            }
          })
        }, 1500)
      },
      selectcitys (index) {
        this.hide()
        data.name = index.city
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .fade-enter-active, .fade-leave-active {
          transition: opacity .5s;
      }
      .fade-enter, .fade-leave-active {
          opacity: 0;
      }
      .fade-choose-enter-active, .fade-choose-leave-active {
          transition: opacity .5s;
      }
      .fade-choose-leave, .fade-choose-leave-active {
          display: none;
      }
      .fade-choose-enter, .fade-choose-leave-active {
          opacity: 0;
      }
  .order-title
    display:flex
    width:100%
    height:2rem
    background-color: #028a7e
    color:white
    line-height: 1.7rem
    overflow:hidden
    .searchcity
      flex:1
      text-align: center
      line-height: 2rem
      .cityshow
        font-size: 0.5rem
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
    .searchorder
      flex:5
      text-align: center
      .searchinput
        border-radius: 4rem
        padding: 0.3rem 0.5rem
        width: 9rem
        height: 0.7rem
        font-size:0.5rem
        color: #999
        &:focus
          outline: none
    .addordericon
      flex:1
      text-align: center
      background:url("addorder.png")no-repeat center
      background-size: 50%
      line-height: 2rem
  .order-top-tab
    display:flex
    justify-content: center
    width:100%
    padding:1rem 0rem 0.7rem 0rem
    color:#666
    border-1px(rgba(7, 17, 27, 0.1))
    & > ul
      width:100%
      text-align:center
      & > .activity_show
        color: #00c1b0
      & > li
        display: inline-block
        flex:1
        font-size: 0.5rem
        width:14%
        cursor: pointer

  .ordershow
    position: absolute
    top: 4.7rem
    bottom: 2rem
    width: 100%
    overflow: hidden
    .orderli
      padding: 0.7rem 1rem 0.7rem 1rem
      border-1px(rgba(7, 17, 27, 0.1))
      & > span
        display: block
        line-height: 1.5
      & > .ordername
        color: #333
        font-size: 0.5rem
      & > .orderothers
        font-size: 0.4rem
        color: #999
      & > .othersrigth
        float: right
        color: #00c1b0
</style>
