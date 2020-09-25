<template>
  <nav>
    <aside>
      <span>杭州</span>
      <span class="iconfont icon-xiajiantou"></span>
    </aside>
    <ul>
      <!-- <li
        :class="{active:index==indexMovie}"
        v-for="(item,index) in movieList"
        :key="index"
        @click="changeMovie(index)"
      >
        {{item}}
        <transition name="underLine">
          <div v-if="index == indexMovie"></div>
        </transition>
      </li> -->

      <router-link
        tag="li"
        :to="item.url"
        v-for="(item, index) in movieList"
        :key="index"
        active-class="active"
        @click.native="changeMovie(index)"
      >
        {{ item.title }}
        <transition name="underLine">
          <div v-if="index == indexMovie"></div>
        </transition>
      </router-link>
    </ul>
    <span class="iconfont icon-fangdajing"></span>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      // movieList: ["热映", "影院", "待映", "经典电影"],
      movieList: [
        {
          title: "热映",
          url: "/index/hot",
          indexMovie: 0
        },
        {
          title: "影院",
          url: "/index/cinema",
          indexMovie: 1
        },
        {
          title: "待映",
          url: "/index/wait",
          indexMovie: 2
        },
        {
          title: "经典电影",
          url: "/index/classical",
          indexMovie: 3
        }
      ],
      indexMovie: 0
    };
  },
  methods: {
    changeMovie(index) {
      this.indexMovie = index;
    },
    getHash() {
      let str = "";
      let arr = location.hash.split("/");
      arr.shift();
      return (str = "/" + arr.join("/"));
    }
  },
  mounted() {
    console.log(1)
    for (let item of this.movieList) {
      if (item["url"] == this.getHash()) {
        this.indexMovie = item["indexMovie"];
      }
    }
  },
  
};
</script>


<style lang="scss" scoped>
@import "../../assets/style/var.scss";

nav {
  // .underLine-enter {
  //     transform: translateX(-100%);
  //   }
  //   .underLine-enter-active {
  //     transition: all 0.1s;
  //   }

  height: 44px;
  border-bottom: 1px solid $lineColor;
  display: flex;
  background-color: #fff;
  align-items: center;
  justify-content: space-around;
  > aside {
    font-size: 15px;
    color: #666;
  }
  > ul {
    width: 240px;
    display: flex;
    font-weight: 400;
    font-size: 15px;
    height: 100%;
    position: relative;
    li {
      padding: 0 10px;
      height: 100%;
      line-height: 44px;
      color: #666;
      font-weight: 900;
      position: relative;
      > div {
        position: absolute;
        width: 20px;
        height: 3px;
        background-color: $bgColor;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .active {
      font-weight: 700;
      font-size: 16px;
      color: black;
    }
  }
  .icon-fangdajing {
    font-size: 20px;
    color: $bgColor;
  }
}
</style>