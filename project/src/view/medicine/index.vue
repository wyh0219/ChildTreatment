<template>
  <div class="medicine">
    <div class="content">
      <!-- 返回组件 输入框组件-->
      <Back>
        <p @click="$router.go(-1)">返回</p>
        <input type="text" placeholder="搜索您需要的药品">
      </Back>
      <!-- 药品页面组件 -->
      <scroll-view>
        <medicine-page>
          <!-- 药品导航组件 -->
          <medicine-type :typeData="typeData" @filtData="filtData"></medicine-type>
          <!-- 药品列表 -->
          <medicine-list :medicineData="medicineData"></medicine-list>
        </medicine-page>
      </scroll-view>
    </div>
    <!-- 底部切换 -->
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import {get} from '../../utils/request'
import ScrollView from '../../components/scrollView'
import MedicinePage from '../../components/medicine'
import MedicineType from '../../components/medicine/typeList'
import MedicineList from '../../components/medicine/medicineList'
import Back from '../../components/back'
import FootNav from '../../components/footNav'

export default {
  data () {
    return {
      load: '释放加载···',
      flagLoad: true,
      typeData: [],
      medicineData: [],
      allmedicineData: [],
      params: {
        offset: 0,
        limit: 60
      }
    }
  },
  components: {
    ScrollView,
    MedicinePage,
    MedicineType,
    MedicineList,
    Back,
    FootNav
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      get('/api/medicine/info').then(data => {
        this.typeData = data.category_list
      })
      get('/api/medicine/list', this.params).then((data) => {
        this.allmedicineData = data
        this.medicineData = this.allmedicineData
      })
    },
    filtData (type) {
      this.medicineData = this.allmedicineData.filter(item => {
        if (item.category_name !== null) {
          if (item.category_name.substr(item.category_name.length - 1) === '药') {
            if (item.category_name.substr(0, item.category_name.length - 1) === type) {
              return item
            }
          } else {
            if (item.category_name.substr(0, item.category_name.length - 2) === type) {
              return item
            }
          }
        }
      })
    },
    scrollBottom () {
      this.params = {
        limit: this.params.limit + 15,
        offset: this.params.offset + 1
      }
      this.getData()
    }
  }
}
</script>

<style lang="scss" scoped>
.back{
  @include wh(100%,60px);
  display: flex;
  align-items: center;
  padding: 0 10px;
  input{
    height: 30px;
    outline: none;
    margin-left: 30px;
    border: 1px solid #ccc;
    width: 200px;
  }
}
</style>
