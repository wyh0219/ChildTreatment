<template>
  <div class="scroll-view">
    <slot></slot>
    <div class="pull-down" v-if="isLoad">{{load}}</div>
  </div>
</template>

<script>
export default {
  props: {
    isLoad: Boolean
  },
  data () {
    return {
      load: '正在加载'
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      if (!this.isLoad) return
      // 1988
      let innerHeight = document.querySelector('#app').clientHeight
      // 屏幕尺寸高度 667
      let outerHeight = document.documentElement.clientHeight
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (innerHeight - 1 < outerHeight + scrollTop) {
        this.load = '正在加载中···'
        this.$emit('scrollBottom')
      } else {
        this.load = '正在加载'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pull-down{
  @include wh(100%,44px);
  line-height: 44px;
  text-align: center;
  background: #eee;
}
</style>
