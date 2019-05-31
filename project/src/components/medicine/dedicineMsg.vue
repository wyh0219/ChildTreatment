<template>
  <div class="medicine-msg">
    <ul class="list" v-if="medicine">
      <li>通用名：{{medicine.common_name}}</li>
      <li>通用名：{{medicine.common_name}}</li>
      <li>分类名称：{{medicine.category_name}}</li>
      <li>药物分类：{{medicine.drug_category}}</li>
      <li>是否OTC</li>
      <li>规格：{{medicine.specification}}</li>
      <li>药品成分:{{medicine.element}}</li>
      <li>生产企业：{{medicine.manufacturer}}</li>
      <li>批转文号：{{medicine.approval_number}}</li>
    </ul>
    <div class="careful" v-if="careful">
      <div class="precautions">
        注意事项：{{careful.precautions}}
      </div>
      <p>禁忌：{{careful.taboo}}</p>
      <p>不良反应：{{careful.adverse_reaction}}</p>
    </div>
    <div v-if="dosage">
      <div class="dosage">
        {{dosage}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    medicine: Object,
    careful: Object,
    dosage: String
  }
}
</script>

<style lang="scss" scoped>
.list{
  @include wh(100%,auto);
  li{
    height: 44px;
    background: #fff;
    padding: 10px 0;
  }
}
.careful{
  @include wh(100%,auto);
  .precautions{
    line-height: 30px;
  }
  &>p{
    line-height: 44px;
  }
}
.dosage{
  line-height: 30px;
}
</style>
