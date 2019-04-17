<template>
  <div class="home">
    <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
   <div>
     <div class="fl ad"></div>
     <div class="fr ac"></div>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss" scope>
.ad{
  width: 200px;
  height: 300px;
  background-color: red;
}
.ac{
   width: 200px;
  height: 300px;
  background-color: cyan;
}
</style>
1