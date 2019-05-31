<template>
  <div class="box">
    <!-- 根页面 内容  底部切换 -->
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import FootNav from '../../components/footNav/index'

export default {
  components: {
    FootNav
  },
  created () {
    this.$store.dispatch('getUser')
  }
}
</script>

<style lang="scss" scoped>
.box{
  @include wh(100%,100%);
  .content{
    @include wh(100%,100%);
  }
}
</style>
