<template>
  <div class="child-wrap">
    <!-- 药箱 药店 智能医生 -->
    <Menu />
    <!-- tab切换 精彩文章 安全用药 -->
    <scroll-view @scrollBottom="scrollBottom" :isLoad="loadMore">
      <TabNav @menuChange="menuChange">
        <TabCont label="精彩文章">
          <article-list :data="listData"></article-list>
        </TabCont>
        <TabCont label="安全用药">
          <article-list :data="listData"></article-list>
        </TabCont>
      </TabNav>
    </scroll-view>
  </div>
</template>

<script>
import Menu from '../../components/menu'
import ScrollView from '../../components/scrollView'
import TabNav from '../../components/tabbar/tabNav'
import TabCont from '../../components/tabbar/tabCont'
import ArticleList from '../../components/articleList'
import {get} from '../../utils/request'

export default {
  data () {
    return {
      loadMore: true,
      listData: [],
      params: {
        limit: 15,
        offset: 0,
        type_id: 2
      }
    }
  },
  components: {
    Menu,
    ScrollView,
    TabNav,
    TabCont,
    ArticleList
  },
  created () {
    this.getData()
  },
  methods: {
    // 请求文章列表
    getData () {
      get('/api/article/list', this.params).then((data) => {
        this.listData = data
        window.localStorage.setItem('data', JSON.stringify(this.listData))
      })
    },
    // 滚动到底部的事件
    scrollBottom () {
      this.params = {
        limit: this.params.limit += 15,
        offset: this.params.offset += 1,
        type_id: 2
      }
      this.getData()
    },
    // 切换导航数据
    menuChange (index) {
      this.params = {
        limit: 15,
        offset: 0
      }
      console.log(this.params)
      if (index === 0) {
        this.params.type_id = 2
        this.loadMore = true
      } else {
        this.params.type_id = 1
        this.loadMore = false
      }
      this.getData()
    }
  }
}
</script>

<style lang="scss" scoped>
.child-wrap{
  @include wh(100%,100%);
}
</style>
