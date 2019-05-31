<template>
  <footer>
    <router-link v-for="(val,index) in menu" :key="index" tag="div" :to="val.path">
      <p>
        <svg-icon :name="$route.path===val.path?val.icon_active:val.icon"></svg-icon>
      </p>
      <p>
        {{val.name}}
      </p>
    </router-link>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        {
          name: '育儿助手',
          path: '/index/child',
          icon: 'toolbox',
          icon_active: 'toolbox_active'
        },
        {
          name: '个人中心',
          path: '/index/mine',
          icon: 'mine',
          icon_active: 'mine_active'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
footer{
    @include wh(100%,44px);
    @include border1px(top);
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    @include flex();
    p:nth-child(1){
         @include wh(20px,20px);
        margin: 0 auto;
        img{
             @include wh(20px,auto);
        }
    }
}
footer>div{
    flex: 1;
    text-align: center;
}
.router-link-active{
    color: $color-base;
}
</style>
