<template>
  <ul class="type-list">
    <li v-for="(val,index) in typeData" :key="index" @click="filtData(index,val)">
      <p :class="{active:index===activeIndex}">{{val}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: ''
    }
  },
  props: {
    typeData: Array
  },
  methods: {
    filtData (i, type) {
      this.$parent.$parent.$parent.flagLoad = false
      this.activeIndex = i
      this.$emit('filtData', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.type-list{
  padding: 0 10px;
  @include wh(100%,60px);
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #ccc;
  li{
    width: 25%;
    text-align: center;
  }
}
.active{
  color: $color-base;
}
</style>
