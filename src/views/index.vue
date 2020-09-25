<template>
  <div>
    <my-header :show='show' />
    <open-app></open-app>
    <tabs></tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from "@/components/common/Header";
import OpenApp from "@/components/common/Open";
import Tabs from "@/components/common/Tabs";


export default {
  data() {
    return {
      show:false
    };
  },
  components: {
    MyHeader,
    OpenApp,
    Tabs,
  },
  methods: {
  },
  mounted() {
   
  },
};
</script>


<style lang="scss" scoped>

  
</style>