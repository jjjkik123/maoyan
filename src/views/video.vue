<template>
  <div class="show">
    <open-app />
    <my-header />
    <tabs></tabs>
  </div>
</template>

<script>
import MyHeader from "@/components/common/Header";
import OpenApp from "@/components/common/Open";
import Tabs from "@/components/video/Tabs";
export default {
  components: {
    MyHeader,
    OpenApp,
    Tabs
  }
}
</script>


<style lang="scss" scoped>
  .my-header {
    position: relative;
  }
  .open {
    margin-top: 0;
  }
</style>