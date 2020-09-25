<template>
  <footer>
    <!-- <li :class="{active: footerIndex == index}" v-for="(item,index) in footerList" :key="index" @click="change(index)">
      <span class="iconfont" :class="item.icon"></span>
      <span class="footer-title">{{item.title}}</span>
    </li>-->
    <router-link v-for="(item,index) in footerList"
     :key="index" :to="item.url" tag="li" active-class="active">
      <span class="iconfont" :class="item.icon"></span>
      <span class="footer-title">{{item.title}}</span>
    </router-link>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerList: [
        {
          title: "电影/影院",
          icon: "icon-dianying",
          url: "/index"
        },
        {
          title: "视频",
          icon: "icon-shipin",
          url: "/video"
        },
        {
          title: "小视频",
          icon: "icon-shipinbofangyingpian",
          url: "/minivideo"
        },
        {
          title: "演出",
          icon: "icon-yanchu",
          url: "/show"
        },
        {
          title: "我的",
          icon: "icon-wode",
          url: "/my"
        }
      ],

      // footerIndex: 0
    };
  },
  methods: {
    // change(index) {
    //   this.footerIndex = index;
    // }
  }
};
</script>


<style lang="scss" scoped>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  background-color: #fff;
  justify-content: space-around;
  li {
    width: 20%;
    color: #777;
    position: relative;
    text-align: center;
  }
 

  span:first-of-type {
    display: block;
    font-size: 20px;
    margin: 4px 0;
  }
  .footer-title {
    font-size: 14px;
    display: block;
  }
  .active {
    color: #f03d37;
  }
}
</style>