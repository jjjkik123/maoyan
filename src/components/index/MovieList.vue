<template>
  <ul class="movie-list">
    <movie-item v-for="(item,index) in movieItem" :key="index" :item="item"></movie-item>
    <p v-if="movieItem.length >= total">有底线的</p>
  </ul>
</template>

<script>
import MovieItem from "./MovieItem";
// import {getMovieItem} from "../../utils/api"

export default {
  props: ['movieItem','total'],
  data() {
    return {
      // movieList: [],
    }
  },
  methods: {
    // async getMovie() {
    //   // fetch("http://www.pudge.wang:3002/api/home/movieOnInfoList",{
    //   //   method:'POST'
    //   // })
    //   //   .then(response => response.json())
    //   //   .then(data => this.movieList = data.result.movieList);
    //   const data = await getMovieItem();
    //   this.movieList = data.result.movieList
    // }
  },
  
  created() {
    // this.getMovie();
  },
  components: {
    MovieItem
  }
}
</script>

<style lang="scss" scoped>
  .movie-list {
    width: 358px;
    background: white;
  }
</style>