<template>
  <div class="user-index">
    <!-- 用户组建 -->
    <user-sign :user="userInfo" />
    <!-- 个人中心列表功能 -->
    <user-list>
      <user-nav v-for="(val,index) in userNav" :key="index">
        <div class="user-nav">
          <svg-icon :name="val.icon"></svg-icon>
          <p class="name">{{val.name}}</p>
        </div>
      </user-nav>
    </user-list>
  </div>
</template>

<script>
import UserSign from '../../components/mine/userInfo'
import UserList from '../../components/mine/userList'
import UserNav from '../../components/mine/userNav'

export default {
  data () {
    return {
      user: {},
      userNav: [
        {
          name: '孩子信息',
          icon: 'child'
        },
        {
          name: '积分兑礼',
          icon: 'gift'
        },
        {
          name: '我的订单',
          icon: 'order'
        },
        {
          name: '分享信息',
          icon: 'share'
        }
      ]
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.user
    }
  },
  components: {
    UserSign,
    UserList,
    UserNav
  }
}
</script>

<style lang="scss" scoped>
.user-nav{
  padding: 0 10px;
  @include wh(100%,44px);
  align-items: center;
  display: flex;
  .name{
    margin-left: 5px;
  }
}
</style>
