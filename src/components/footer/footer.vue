<template>
  <div class="bottom-tab footer">
    <ul>
      <li>
        <router-link to="/order">订单</router-link>
      </li>
      <li>
        <router-link to="/content">通知</router-link>
      </li>
      <li>
        反馈
      </li>
      <li>
        资料
      </li>
      <li>
        <router-link to="/mine">我的</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bottom-tab
    position: fixed
    bottom:0
    width: 100%
    height: 2rem
    line-height: 2rem
    background-color: white
    & > ul
      display: flex
      justify-content: center
      width:100%
      text-align:center
      & > li
        display: inline-block
        flex: 1
        font-size: 0.5rem
        color:#666
        cursor: pointer
        & > a
         &.active
           color: #00c1b0
</style>
