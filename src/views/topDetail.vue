<template>
  <div class="topDetail">
    <open />
    <div class="tDetail-context">
      <p class="td-title">
        <span @click="goBack()">猫眼电影</span>>{{ movieInfo.nm }}
      </p>
      <div class="td-info">
        <div class="td-info-img">
          <img :src="movieInfo.img" alt="" />
          <img src="../assets/img/poster-play.png" alt="" />
        </div>
        <div class="td-desc">
          <h1>{{ movieInfo.nm }}</h1>
          <p>{{ movieInfo.enm }}</p>
          <p v-if="movieInfo.tags">{{ movieInfo.tags | format }}</p>
          <p class="td-star" v-if="movieInfo.star">
            {{ movieInfo.star | format }}
          </p>
          <p>{{ movieInfo.showTime }}</p>
          <div class="td-btn" >
            <button>
              <img src="../assets/img/want-to-watch.png" alt="" /> 想看
            </button>
            <button><img src="../assets/img/star.png" alt="" />看过</button>
          </div>
        </div>
      </div>

      <div class="real-score">
        <div class="rs-top">
          <div class="rs-left">
            <img src="../assets/img/maoyan.png" alt="" />
            <span>实时口碑</span>
          </div>
          <div class="rs-right">
            <span>{{ praise.wish }} 想看</span>
            <span>{{ praise.watched }} 看过</span>
          </div>
        </div>
        <div class="rs-middle">
          <div class="rsm-left">
            <span class="rsm-score">{{ praise.score }}</span>
            <span class="rsm-evaluate">{{ praise.evaluate }}人评</span>
          </div>
          <div class="rsm-right">
            <star-item
              v-for="(item, index) in praise.mark"
              :key="index"
              :img="praise.starPic"
              :mark="item"
              :num="5 - index"
              :evaluate="praise.evaluate"
            ></star-item>
          </div>
        </div>
      </div>

      <div class="td-introduction">
        <div class="ti-top">
          <p>简介</p>
          <button  class="open" @click.prevent="type = !type">
            <span v-if="type ">展开 ↓</span>
            <span v-else>收起 ↑</span>
          </button>
        </div>
        <div class="ti-content" >
          <p :class="{zk: type,sq:type}">
            世界存亡危在旦夕，“信条”一词是惟一的线索与武器。主人公穿梭于全球各地，开展特工活动，力求揭示“信条”之谜，并完成一项超越了真实时间的神秘任务。这项任务并非时间之旅，而是【时空逆转】。
          </p>
        </div>
      </div>
      <actor-list :actorlist="movieInfo.actorList" />
    </div>
    <discuss :discuss="discuss" :stars="praise.starPic" />


    <div class="buy">
      <img class="share" src="../assets/img/share-icon.png" alt="">
      <div class="go-buy">特惠购票</div>
    </div>
  </div>
</template>

<script>
import Open from "@/components/common/Open";
import { getMovieById } from "@/utils/api";
import StarItem from "@/components/deltail/StartItem";
import ActorList from "@/components/deltail/ActorList";
import Discuss from "@/components/deltail/Discuss";

export default {
  props: ["id"],
  filters: {
    format(value) {
      return value.join(" / ");
    }
  },

  data() {
    return {
      discuss: [],
      movieInfo: [],
      praise: [],
      type : true
    };
  },
  components: {
    Open,
    StarItem,
    ActorList,
    Discuss
  },
  methods: {
    async getMovieById(id) {
      id = +id;
      let res = await getMovieById({ id });
      this.discuss = res.discuss;
      this.movieInfo = res.movieInfo;
      this.praise = res.praise;
      console.log(res);
    },
    goBack() {
      this.$router.go(-1)
    }
  },
  mounted() {
    this.getMovieById(this.id);
  }
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 0;
}
.topDetail {
  background-color: #385266;
  z-index: 2;
  // padding: 21px 16px;
}
.tDetail-context {
  // position: absolute;
  padding: 21px 16px;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #385266;
  p {
    font-size: 14px;
    color: #ccc;
    margin-top: 7px;
  }
  .td-title {
    height: 21px;
    margin-bottom: 15px;
  }
  .td-info {
    height: 138px;
    display: flex;
    justify-content: start;
    .td-info-img {
      width: 100px;
      flex-shrink: 0;
      height: 138px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      img:last-of-type {
        width: 30px;
        height: 30px;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
    .td-desc {
      width: 321px;
      margin-left: 12px;
      h1 {
        font-size: 20px;
        color: white;
      }
      p {
        font-size: 12px;
        opacity: 0.6;
      }
      .td-star {
        width: 231px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .td-btn {
        height: 30px;
        display: flex;
        margin-top: 6px;
        justify-content: space-between;
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          background: hsla(0, 0%, 100%, 0.35);
          box-shadow: 0 2 8 0 rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          font-size: 14px;
          width: 110px;
          height: 30px;
          color: #fff;
          border: none;
          margin: 0;
          padding: 0;
          outline: none;
          img {
            width: 14px;
            margin-right: 6px;
          }
        }
      }
    }
  }

  .real-score {
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 2px 0 hsla(0, 0%, 100%, 0.03);
    border-radius: 6px;
    height: 178px;
    margin-top: 15px;
    padding: 10px 12px;
    .rs-top {
      height: 18px;
      display: flex;
      justify-content: space-between;
      .rs-left {
        display: flex;
        height: 100%;
        justify-content: flex-start;
        img {
          width: 14px;
          height: 14px;
          margin-right: 4px;
        }
        span {
          font-size: 12px;
          color: white;
        }
      }
      .rs-right {
        display: flex;
        span {
          font-size: 12px;
          opacity: 0.6;
          color: #fff;
        }
        span:first-of-type {
          margin-right: 10px;
        }
      }
    }

    .rs-middle {
      height: 130px;
      padding: 20px 0;
      display: flex;
      justify-content: center;
      .rsm-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        .rsm-score {
          font-size: 34px;
          color: #ffb400;
          line-height: 40px;
        }
        .rsm-evaluate {
          font-size: 12px;
          opacity: 0.4;
          color: white;
        }
      }
      .rsm-right {
        width: 180px;
      }
    }
  }

  .td-introduction {
    // height: 182px;
    padding-top: 16px;
    .ti-top {
      display: flex;
      justify-content: space-between;
      p {
        font-size: 15px;
        color: white;
      }
      .open {
        color: #fff;
        opacity: 0.6;
        width: 45px;
        font-size: 12px;
        border: none;
        margin: 0;
        padding: 0;
        outline: none;
        background-color: transparent;
      }
    }
    .ti-content {
      // height: 78px;
      margin: 7px 0;
      p {
        font-size: 15px;
        line-height: 26px;
        color: white;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        
        text-overflow: ellipsis;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
      }
      .sq {
        -webkit-line-clamp: 3;
      }
      .zk {
         -webkit-line-clamp:0;
         }
    }
  }
}

.buy {
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;
  .share {
    width: 19px;
    height: 19px;
    margin: 0 30px 0 24px;
  }
  .go-buy {
    height: 44px;
    width: 100%;
    background-image: linear-gradient(-90deg,#fb3333,#ff5269);
    box-shadow: 0 4px 8px 0 rgba(251,51,51,.3);
    border-radius: 20px;
    font-size: 17px;
    color: #fff;
    text-align: center;
    line-height: 44px;
    margin: 0 10px;
  }
}
</style>