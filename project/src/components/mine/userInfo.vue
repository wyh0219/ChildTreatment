<template>
  <div class="sign">
    <div class="user">
      <div class="left">
        <p class="head_img">
          <img :src="user.avatar" alt="">
        </p>
        <div class="nick-name">
          <p>{{user.nickname}}</p>
          <p>{{user.integral}} 积分</p>
        </div>
      </div>
      <div class="right">
        <div>
          <p>签到</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  }
}
</script>

<style lang="scss" scoped>
.user{
  @include wh(100%,200px);
  @include flex;
  background: $color_base;
  .left{
    @include wh(70%,100px);
    display: flex;
    align-items: center;
    .head_img{
      @include wh(60px,60px);
      margin-left: 30px;
      border-radius: 50%;
      img{
        @include wh(60px,auto);
        border-radius: 50%;
      }
    }
    .nick-name{
      margin-left: 15px;
      color: #fff;
      P{
        margin-top: 3px;
      }
    }
  }
  .right{
    flex: 1;
    text-align: center;
    &>div{
      &>p{
        @include wh(60%,auto);
        margin:  0 auto;
        padding: 3px 6px;
        border: 1px solid #fff;
        border-radius: 5px;
        color: #fff;
      }
    }
  }
}
</style>
