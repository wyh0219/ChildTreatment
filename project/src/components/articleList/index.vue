<template>
  <div class="article-list">
    <dl v-for="(val,index) in data" :key="index" @click="$router.push('/detail/'+val.content_id)">
      <dt><img :src="val.cover" alt=""></dt>
      <dd>
        <p class="title">{{val.title}}</p>
        <p class="description">{{val.description}}</p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  }
}
</script>

<style lang="scss" scoped>
.article-list{
  @include wh(100%,auto);
  dl{
    @include wh(100%,120px);
    @include flex();
    margin-top: 8px;
    dt{
      @include wh(120px,120px);
      &>img{
        @include wh(120px,auto);
      }
    }
    dd{
      flex: 1;
      padding: 0 10px;
      overflow: hidden;
      .title{
        @include wh(100%,30px);
        line-height: 30px;
        font-size: $font-size-xl;
        @include ellipsis();
      }
      .description{
        margin-top: 10px;
        font-size: $font-size-l;
      }
    }
  }
}
</style>
