<template>
  <ul class="list">
      <li v-for="(val,index) in topList" :key="index" @click="medicine(index)">
        <p class="back" :style="{background:val.back}"></p>
        <p :class="{active:active_index===index}">{{val.name}}</p>
      </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      active_index: '',
      topList: [
        {
          name: '儿童药箱',
          back: '#e4ab56'
        },
        {
          name: '附近药店',
          back: '#e24fe2'
        },
        {
          name: '智能医生',
          back: '#e44b66'
        }
      ]
    }
  },
  methods: {
    medicine (i) {
      this.active_index = i
      if (i === 0) {
        this.$router.push('/medicine')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list{
  @include wh(100%,80px);
  @include flex();
  padding: 0 10px;
  li{
    flex: 1;
    text-align: center;
    font-size: 12px;
    .back{
      @include wh(40px,40px);
      border-radius: 50%;
      margin: 5px auto;
    }
    .active{
      color: $color_base;
    }
  }
}
</style>
