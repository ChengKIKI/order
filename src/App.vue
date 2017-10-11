<template>
  <div>
    <div class="pages">
      <router-view></router-view>
    </div>
    <v-footer></v-footer>
  </div>

</template>

<script type="text/ecmascript-6">
  import footer from 'components/footer/footer'

  export default {
    components: {
      'v-footer': footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
