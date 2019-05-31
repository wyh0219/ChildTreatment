<template>
  <div class="detail">
    <!-- 返回组件 -->
    <Back>
      <header>
        <p @click="$router.go(-1)">返回</p>
        <p class="det">详情</p>
      </header>
    </Back>
    <!-- 文章详情内容组件 -->
    <article-detail :msgData="msgData"></article-detail>
  </div>
</template>

<script>
import {get} from '../../utils/request'
import Back from '../../components/back'
import ArticleDetail from '../../components/articleDetail'
export default {
  data () {
    return {
      listData: [],
      msgData: {}
    }
  },
  props: {
    id: String
  },
  components: {
    Back,
    ArticleDetail
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      get('/api/article/details', {content_id: this.id}).then((data) => {
        this.msgData = data
        console.log(data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  @include wh(100%,44px);
  padding: 0 10px;
  display: flex;
  align-items: center;
  .det{
    width: 20%;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
