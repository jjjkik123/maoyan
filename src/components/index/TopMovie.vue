<template>
  <div class="top-movie">
    <p class="title">最受好评电影</p>
    <div class="top-wrap">
      <nav>
        <li @click="goDetail(item.id)" v-for="item in movieList" :key="item.id">
          <aside>
            <img :src="item.img" alt />
            <span v-if="item.score">
              <span>观众评分</span>
              {{item.score}}
            </span>
            <span v-else>{{item.wishNum}}人想看</span>
          </aside>
          <p class="movie-title">{{ item.title }}</p>
        </li>
      </nav>
    </div>
  </div>
</template>

<script>
import { getMovieList } from "../../utils/api";

import BScroll from "@better-scroll/core";

export default {
  props: ["movieList"],
  data() {
    return {
      // movieList: []
    };
  },
  methods: {
    // getMovieList() {
    //   // fetch("http://www.pudge.wang:3002/api/home/topRatedMovies")
    //   //   .then(response => response.json())
    //   //   .then(data => (this.movieList = data.result.result));
    //   http.get("http://www.pudge.wang:3002/api/home/topRatedMovies",{a:1,b:2}).then(data => (this.movieList = data.result.result))
    // }
    // async getMovie() {
    //   const res = await getMovieList();
    //   this.movieList = res.result.result;
    // }

    goDetail(id) {
    this.$router.push(`/topDetail/${id}`)
    }
  },
  created() {
    // this.getMovie();
  },
  watch: {
    async movieList() {
      await this.$nextTick();
      let scroll = new BScroll(".top-wrap", {
        scrollX: true,
        click: true
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.top-movie {
  width: 358px;
  height: 200px;
  padding: 12px 22px 12px 15px;
  background-color: #fff;
  margin-bottom: 10px;
  p {
    margin: 0;
    font-size: 14px;
    color: #333;
    margin-bottom: 12px;
  }
  .top-wrap {
    width: 100%;
    overflow: hidden;
  }
  nav {
    display: inline-flex;
    height: 145px;
    li {
      width: 85px;
      margin-right: 10px;
      flex-shrink: 0;
      > aside {
        width: 85px;
        height: 115px;
        position: relative;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
        > span {
          position: absolute;
          white-space: nowrap;
          left: 4px;
          bottom: 2px;
          color: #faaf00;
          font-size: 11px;
          font-weight: 600;
          background-image: linear-gradient(-180deg, rgba(77, 77, 77, 0), #000);
          > span {
            margin-right: 10px;
          }
        }
      }

      .movie-title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 13px;
        margin-top: 3px;
        color: #222;
        font-weight: 800;
        margin-bottom: 3px;
      }
    }
  }
}
</style>