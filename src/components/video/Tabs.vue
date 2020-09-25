<template>
<div class="show-wrap">
  <nav class="show-tabs">
    <li v-for="(item,index) in showList" :key="index">
      <span>{{item}}</span>
    </li>
  </nav>

</div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {
  data() {
    return {
      showList: [
        "预告片",
        "新片看点",
        "每周必看",
        "说电影",
        "好片推荐",
        "犯罪",
        "奇幻",
        "科幻",
        "爱情",
        "追剧",
        "追星"
      ]
    };
  },
  methods: {
    scorll() {
      let bs = new BScroll(".show-wrap", {
        scrollX: true,
    click: true
      });
    }
  },
  mounted() {
    this.scorll()
  }
};
</script>

<style lang="scss" scoped>
.show-wrap {
  width: 100%;
  height: 46px;
  overflow: hidden;
}
.show-tabs {
  height: 100%;
  border-top: 1px solid #e6e6e6;
  display: inline-flex;
  // position: relative;
  align-items: center;
  background-color: red;
  li {
    height: 100%;
    // display: block;
    width: 90px;    
    padding: 0 10px;
    flex-shrink: 0;
      text-align: center;
    span {
      display: inline-block;
      font-size: 16px;
    }
  }
}
</style>