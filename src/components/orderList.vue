<template>
  <div class="order-list">
      <OrderItem v-for="(item,index) in imgLists" :itemData="item" :key="index"></OrderItem>
  </div>
</template>

<script type='text/ecmascript-6'>
import OrderItem from './orderItem.vue';
import { imgLists } from '../config/common.js';

export default {
  data() {
    return {
      imgLists,
    };
  },
  components: {
    OrderItem,
  },
};

</script>

<style scoped lang='scss'>

</style>
