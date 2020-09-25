<template>
  <div class="discuss">
    <div class="ds-title">短评</div>
    <article v-for="(item, index) in discuss" :key="index">
      <div class="ds-left">
        <img src="../../assets/img/maoyan.png" alt="" />
      </div>
      <div class="ds-right">
        <p>{{ item.name }}</p>
        <p class="star">
          <span class="star-img"><img v-for="item in 5" :key="item" :src="stars" alt="" /></span>
          <span>{{ item.score }}分</span>
        </p>
        <p class="ds-comment">{{ item.content }}</p>
        <div class="ds-appove">
          <img src="../../assets/img/dz.png" alt="" />{{ item.praiseNum }}
        </div>

        <div>
          <span>{{ item.time }}</span>
          <span class="ds-commentNum">{{ item.commentsNum }}回复</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ["discuss", "stars"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.discuss {
  margin-bottom: 60px;
  // height: 100px;
  font-size: 14px;
  background-color: #fff;
  line-height: 21px;
  border-radius: 10px 10px 0 0;
  padding: 0 16px;
  .ds-title {
    width: 100%;
    height: 50px;
    padding: 14px 0;
    color: #333;
    font-size: 15px;
  }
  article {
    display: flex;
    padding: 0;
    margin-bottom: 15px;
    justify-content: flex-start;
    align-items: flex-start;
    .ds-left {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .ds-right {
      display: flex;
      font-size: 12px;
      margin-left: 11px;
      position: relative;
      flex-direction: column;
     
      .star {
        .star-img {
          display: inline-block;
          margin-left: 0;
          
        }
        img {
          width: 9px;
          height: 9px;
          
        }
        span {
          margin-left: 5px;
          font-size: 10px;
          color: #faaf00;
        }
      }
      .ds-comment {
        -webkit-box-orient: vertical;
        display: -webkit-box;
        font-size: 15px;
        -webkit-line-clamp: 7;
        text-overflow: ellipsis;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        width: 300px;
        margin: 6px 0;
      }
      .ds-appove {
        width: 60px;
        height: 26px;
        position: absolute;
        right: 0;
        text-align: center;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        color: #999;
        border: 1px solid #ccc;
        border-radius: 12px;
        img {
          width: 16px;
          height: 16px;
        }
      }
      .ds-commentNum {
        margin-left: 10px;
        display: inline-block;
        background: #eef1f6;
        border-radius: 20px;
        text-align: center;
        font-size: 12px;
        color: #5a7cab;
        padding: 0 6px;
      }
    }
  }
}
</style>