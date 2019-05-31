<template>
  <div class="tab-cont" v-show="isShow">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  props: {
    label: String
  }
}
</script>

<style lang="scss" scoped>
.pull-down{
  @include wh(100%,44px);
  line-height: 44px;
  text-align: center;
  background: #eee;
}
</style>
