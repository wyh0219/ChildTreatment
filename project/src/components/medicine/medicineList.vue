<template>
  <div class="medicine-list">
    <dl v-for="(val,index) in medicineData" :key="index" @click="$router.push('/medicine/detail/'+val.medicine_id)">
      <dt><img :src="val.picture" alt=""></dt>
      <dd>
        <p>{{val.common_name}}</p>
        <p>{{val.specification}}</p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    medicineData: Array
  }
}
</script>

<style lang="scss" scoped>
.medicine-list{
  @include wh(100%,auto);
  dl{
    @include wh(100%,100px);
    @include flex;
    dt{
      @include wh(100px,100px);
      img{
        @include wh(100px,auto);
      }
    }
    dd{
      flex: 1;
      height: 100%;
      border-bottom: 1px solid #ccc;
      padding: 6px;
      overflow: hidden;
      p{
        margin-top: 10px;
        height: 30px;
        line-height: 30px;
        @include ellipsis();
      }
    }
  }
}
</style>
