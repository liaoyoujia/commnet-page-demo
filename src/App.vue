<template>
  <div>
    <Header></Header>
    <OrderList></OrderList>
  </div>
</template>

<script type='text/ecmascript-6'>
import Header from './components/header.vue';
import OrderList from './components/orderList.vue';

export default {
  data() {
    return {};
  },
  components: {
    Header,
    OrderList,
  },
};

</script>

<style scoped lang='scss'>

</style>
