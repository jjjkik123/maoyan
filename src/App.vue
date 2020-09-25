<template>
  <div id="app">
  
    <router-view></router-view>
    <my-footer />
  </div>
</template>


<script>

import MyFooter from "@/components/common/footer";

export default {
  components: {
    MyFooter
  }
}

</script>

<style lang="scss" scoped>
#app {
  // padding-top: 50px;
}

</style>