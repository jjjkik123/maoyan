<template>
  <header class="my-header" >
    <div v-if="show==true" @click="back" class="back">&lt;</div>
    猫眼电影
    <span class="iconfont icon-caidan"></span>
  </header>
</template>

<script>
export default {

  props:['show'],
  data() {
    return {
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";
.my-header {
  z-index: 999;
  height: 50px;
  background-color: $bgColor;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  .back {
    position: absolute;
    left: 15px;
  }
  .icon-caidan {
    font-size: 22px;
    position: absolute;
    right: 15px;
    font-weight: 900;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>