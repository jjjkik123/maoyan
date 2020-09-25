<template>
  <div class="detail">
    <my-header :show='show'/>
    <open />
    <div class="movie-detail">
      <img class="img" :src="detailList.img" alt="" />
      <div class="content">
        <p class="title">{{detailList.nm}}{{id}}</p>
        <p>{{detailList.enm}}</p>
        <p class="want">想看</p>
        <p>{{detailList.tags}}</p>
        <p>中国大陆</p>
        <p>{{detailList.showTime}}</p>
        <div class="bg" ></div>
      </div>
      <div class="right">
        <img src="../assets/img/right.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/common/Header";
import Open from "@/components/common/Open";

import { getMovieById } from "../utils/api";

export default {
  props: ["id"],
  data() {
    return {
      show:true,
      detailList: []
    };
  },
  components: {
    MyHeader,
    Open
  },
  methods: {
    async getItem(id) {
      id = +id
      const list = await getMovieById({id})
      this.detailList = list.movieInfo
    }
  },
  mounted() {
    this.getItem(this.id);
    // console.log(this.id);
  }
};
</script>

<style lang="scss" scoped>
.movie-detail {
  width: 100%;
  height: 190px;
  padding: 19px 30px 19px 15px;
  background-color: #333;
  z-index: -2;
  display: flex;
  position: relative;
  // filter: blur(10px);
  // background-size: cover;
  // background-repeat: no-repeat;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    overflow: hidden;
    -webkit-filter: blur(1.2rem);
    filter: blur(1.2rem);
    background-size: cover;
    background-repeat: no-repeat;
    // background-color: #fff;
    opacity: 0.55;
  }

  .img {
    width: 110px;
    height: 100%;
    background-color: red;
  }
  .content {
    margin-left: 12.5px;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 20px;
      margin-top: 2px;
      font-weight: 700;
      overflow: hidden;
    }
    .want {
      font-size: 18px;
      font-weight: 700;
      color: #fc0;
      margin-top: 1;
    }

    p {
      margin-top: 10px;
      font-size: 12px;
      color: #fff;
      opacity: 0.8;
    }
  }
  .right {
    position: absolute;
    width: 10px;
    right: 15px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
}
</style>