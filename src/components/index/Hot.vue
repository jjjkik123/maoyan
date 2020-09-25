<template>
  <div class="wrap">
      <div>
        <top-movie :movieList="movieList"></top-movie>
        <movie-list :movieItem="movieItem" :total="total" />
      </div>
    </div>
</template>

<script>
import TopMovie from "@/components/index/TopMovie";
import MovieList from "@/components/index/MovieList";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

import { getMovieItem, getMovieList, getLoadList } from "@/utils/api";

export default {
  data() {
    return {
      movieItem: [],
      movieList: [],
      movieIds: [],
      total: 0,
      index: 12
    };
  },
  components: {
    TopMovie,
    MovieList,
  },
  methods: {
    async getMovieItem() {
      const data = await getMovieItem();
      this.movieItem = data.result.movieList;
      this.total = data.result.total;
      this.movieIds = data.result.movieIds;
    },

    async getMovieList() {
      const res = await getMovieList();
      this.movieList = res.result.result;
      await this.$nextTick();
      BScroll.use(Pullup);
      let scroll = new BScroll(".wrap", {
        scrollY: true,
        click: true,
        bounce: true,
        pullUpLoad: true
        // pullDownRefresh: true
      });
      scroll.on("pullingUp", async () => {
        if (this.movieItem.length <= this.total) {
          let str = this.movieIds.slice(this.index, this.index + 10).join(",");
          let loadList = await getLoadList({ ids: str });
          this.movieItem = this.movieItem.concat(loadList.result);
          await this.$nextTick();
          scroll.refresh();
          scroll.finishPullUp();
          this.index += 10;
        }
      });
      //   scroll.on('pullingDown', () => {
      //   //  location.reload();
      //    BScroll.use(Pulldown)
      //   console.log(1)
      //   scroll.finishPullDown()
      // })
    }
  },
  mounted() {
    this.getMovieItem();
    this.getMovieList();
  }
}
</script>

<style lang="scss" scoped>
  .wrap {
  background-color: #f5f5f5;
  position: absolute;
  top: 158px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>