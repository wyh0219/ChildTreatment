<template>
  <div class="medicine-detail">
    <!-- 返回组件 -->
    <Back>
      <p class="return" @click="$router.go(-1)">返回</p>
      <p class="det">详情</p>
    </Back>
    <div class="medicine-content">
      <!-- 药品详情 -->
      <medicine-detail :medicine='medicine' />
      <!-- 药品详情切换组件 组件复用 -->
      <TabNav>
        <TabCont label="基本信息">
          <medicine-msg :medicine="medicine"></medicine-msg>
        </TabCont>
        <TabCont label="注意事项">
          <medicine-msg
          :careful="{precautions:medicine.precautions,taboo:medicine.taboo,adverse_reaction:medicine.adverse_reaction}"></medicine-msg>
        </TabCont>
        <TabCont label="用法用量">
          <medicine-msg :dosage="medicine.dosage"></medicine-msg>
        </TabCont>
    </TabNav>
    </div>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import {get} from '../../utils/request'
import FootNav from '../../components/footNav'
import MedicineDetail from '../../components/medicine/medicineDetail'
import MedicineMsg from '../../components/medicine/dedicineMsg'
import TabNav from '../../components/tabbar/tabNav'
import TabCont from '../../components/tabbar/tabCont'
import Back from '../../components/back'
export default {
  props: {
    id: String
  },
  data () {
    return {
      medicine: {}
    }
  },
  components: {
    TabNav,
    TabCont,
    MedicineDetail,
    MedicineMsg,
    Back,
    FootNav
  },
  created () {
    console.log(this.id)
    this.getData()
  },
  methods: {
    getData () {
      get('/api/medicine/details', {medicine_id: this.id}).then((data) => {
        this.medicine = data
        console.log(this.medicine)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.medicine-detail{
  @include wh(100%,auto);
  .back{
    @include wh(100%,44px);
    line-height: 44px;
    display: flex;
    .return{
      margin-left: 15px;
    }
    .det{
      flex: 1;
      text-align: center
    }
  }
  .medicine-content{
    @include wh(100%,auto);
  }
}
</style>
