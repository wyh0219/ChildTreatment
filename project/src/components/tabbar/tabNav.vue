<template>
  <div class="cont-wrap">
    <div class="tab-cont">
      <div class="nav" :class="{'fixed':isFixed}">
        <div v-for="(val,index) in navList" :key="index" @click="changeTab(index)">
          <span :class="activeIndex===index?'active':''">{{val}}</span>
        </div>
      </div>
      <div class="nav-cont">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isFixed: false,
      navList: [],
      activeIndex: 0
    }
  },
  mounted () {
    this.initNavList()
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 事件滚动
    handleScroll (i) {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let offsetTop = document.querySelector('.nav') ? document.querySelector('.nav').offsetTop : ''
      if (scrollTop > offsetTop) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    },
    // 获取到导航
    initNavList () {
      this.navList = this.$children.map(child => child.label)
      this.$children[0].isShow = true
    },
    changeTab (i) {
      // 切换导航数据
      this.$emit('menuChange', i)
      this.activeIndex = i
      this.$children.map((child, index) => {
        if (i === index) {
          child.isShow = true
        } else {
          child.isShow = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cont-wrap{
  @include wh(100%,auto);
  .tab-cont{
    @include wh(100%,100%);
    .nav{
      @include wh(100%,44px);
      @include flex();
      border-bottom: 1px solid #ddd;
      &>div{
        flex: 1;
        text-align: center;
        line-height: 44px;
      }
      .active{
        @include wh(60%,44px);
        color: $color-base;
        margin: 0 auto;
        line-height: 44px;
        border-bottom: 2px solid $color-base;
      }
    }
    .fixed{
      position: fixed;
      top: 0;
      left: 0;
      background: #fff;
      z-index: 999;
    }
    .nav-cont{
      @include wh(100%,auto);
      overflow: hidden;
      padding:10px;
    }
  }
}
</style>
