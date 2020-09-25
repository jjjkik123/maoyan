<template>
  <section class="open">
    <img src="../../assets/img/maoyan.png" alt="">
    <div class="desc">
      <div class="app-name">猫眼</div>
      <div class="app-desc">在线选座，热门影讯，爱上看电影</div>
    </div>
    <div class="app-open">打开App</div>
  </section>
</template>
<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  @import "../../assets/style/var.scss";

  section {
    position: relative;
    height: 64px;
    margin-top: 50px;
    background-color: #fff;
    border-bottom: 1px solid $lineColor;
    >img {
      width: 44px;
      height: 44px;
      position: absolute;
      left: 15px;
      top: 11px;
    }
    >.desc {
      position: absolute;
      left: 66px;
      top: 13px;
      >.app-name {
        font-size: 17px;
        color: #222;
        line-height: 23px;
        margin-bottom: 4px;
      }
      >.app-desc {
        font-size: 12px;
        color: #999;
      }
    }
    >.app-open {
        position: absolute;
        right: 15px;
        top: 17px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color: $bgColor;
        border-radius: 3px;
        font-size: 13px;
        color: white;
        padding: 0 10px;
      }
  }
</style>