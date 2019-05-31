<template>
  <div class="detail-cont">
    <div class="msg">
      <p><img :src="msgData.cover" alt=""></p>
      <div class="title">
        <p>{{msgData.title}}</p>
        <p>{{msgData.description}}</p>
      </div>
    </div>
    <div class="cont">
      <p class="name">{{msgData.source_name}}:</p>
      <p class="content">{{msgData.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msgData: Object
  }
}
</script>

<style lang="scss" scoped>
.detail-cont{
  .msg{
    @include wh(100%,auto);
    @include flex();
    padding: 0 10px;
    .title{
      flex: 1;
      margin-left: 15px;
      &>P{
        line-height: 25px;
      }
      .name{
        line-height: 35px;
        color: $color_base;
      }
    }
  }
  .cont{
    padding: 10px;
    .content{
      line-height: 30px;
    }
  }
}
</style>
