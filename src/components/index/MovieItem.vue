<template>
  <li @click="goDetail(item.id)" class="list-item">
    <img :src="item.img | format" alt />
    <div class="content">
      <p class="name">{{item.nm}}
        <span v-if="item.version == 'v2d imax'" class="version d2"></span>
        <span v-else class="version d3"></span>
      </p>
      
      <p v-if="item.showst == 3" class="score">
        观众评
        <span>{{item.sc}}</span>
      </p>
      <p v-else class="score">
        <span>{{item.wish}}</span>人想看
      </p>
      <p class="star">主演:{{item.star}}</p>
      <p>{{item.showInfo}}</p>
    </div>
    <div v-if="item.showst == 3" class="btn">购票</div>
    <div v-else class="btn green">预售</div>
  </li>
</template>

<script>
export default {
  props: ["item"],
  filters: {
    format(value) {
      return value.replace("/w.h", "");
    }
  },
  methods: {
    goDetail(id) {
    console.log(id)
    this.$router.push(`/detail/${id}`)
  }
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";
.list-item {
  padding-left: 15px;
  border-bottom: 1px solid $lineColor;
  height: 114px;
  position: relative;
  display: flex;
  > img {
    display: inline-block;
    position: absolute;
    width: 64px;
    height: 90px;
    top: 50%;
    transform: translateY(-50%);
  }
  .content {
    padding: 0px 14px 12px 0;
    width: 202px;
    margin-left: 74px;
    height: 90px;
    max-height: 90px;
    top: 50%;
    transform: translateY(-50%);
    position: relative;
    color: #666;
    font-size: 13px;
    .version {
      background-size: 100% 100%;
      background-repeat: no-repeat;
      height: 14px;
      width: 43px;
      display: inline-block;
      margin-top: 5px;
      margin-right: 3px;
      
    }
    .d2 {
      background-image: url("../../assets/img/2d.png");
    }
    .d3 {
      background-image: url("../../assets/img/3d.png");
    }
    p {
      margin-bottom: 7px;
    }
    .name {
      font-size: 17px;
      color: #333;
      font-weight: 700;
      padding-right: 5px;
    }
    .score {
      > span {
        color: #faaf00;
        font-weight: 700;
        font-size: 16px;
      }
    }
    .star {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .btn {
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    box-sizing: border-box;
    background-color: #f03d37;
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
    align-self: center;
  }
  .green {
    background-color: #3c9fe6;
  }
}
</style>