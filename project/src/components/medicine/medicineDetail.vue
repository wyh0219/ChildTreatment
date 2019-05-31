<template>
  <dl>
    <dt><img :src="medicine.picture" alt=""></dt>
    <dd>
      <p>{{medicine.common_name}}</p>
      <div>{{medicine.indication}}</div>
      <p></p>
    </dd>
  </dl>
</template>

<script>
export default {
  props: {
    medicine: Object
  }
}
</script>

<style lang="scss" scoped>
dl{
  @include flex();
  dt{
    @include wh(80px,80px);
    img{
        @include wh(80px,80px);
    }
  }
  dd{
    padding: 10px;
    p{
      height: 35px;
      line-height: 35px;
    }
  }
}
</style>
