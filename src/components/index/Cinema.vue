<template>
  <div class="cinema">
    <div class="tab">
      <div class="item">全城</div>
      <div class="item">品牌</div>
      <div class="item">特色</div>
    </div>

    <div class="cinema-wrap">
      <ul class="cinema-ul">
        <li
          class="cinema-item"
          v-for="(item, index) in cinemaList"
          :key="index"
        >
          <div class="c-name">
            {{ item.title }}
            <span class="c-price"
              ><span v-if="item.id" class="money">{{ item.price }}</span
              >元起</span
            >
          </div>
          <div class="c-addr">
            <p class="c-addr-left">{{ item.location }}</p>
            <p>{{ item.distance }}km</p>
          </div>
          <div class="label-block">
            <div
              :class="{ 'label-orange': tag == '折扣卡' }"
              class="label"
              v-for="(tag, index) in item.labels"
              :key="index"
            >
              {{ tag }}
            </div>
          </div>

          <div class="discount">
            <img class="card" src="../../assets/img/cart.png" alt="" />
            <p>{{ item.discount }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getCinema } from "../../utils/api";
import BScroll from "@better-scroll/core";

export default {
  data() {
    return {
      cinemaList: []
    };
  },

  methods: {
    async getCinema() {
      let res = await getCinema({});
      console.log(res);
      this.cinemaList = res.result;
      await this.$nextTick();
      let bs = new BScroll(".cinema-wrap", {
        scrollY: true,
        click: true
      });
      
    },
    
  },
  mounted() {
    this.getCinema();
  }

};
</script>

<style lang="scss" scoped>
.cinema-wrap {
  // height: 550px;
  position: absolute;
  left: 0;
  right: 0;
  top: 198px;
  bottom: 60px;

  overflow: hidden;
}
.cinema {
  //
  .tab {
    width: 100%;
    height: 40px;
    display: flex;
    font-size: 13px;
    .item {
      width: 33.34%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    .item:first-of-type::before {
      display: none;
    }
    .item::before {
      content: "";
      display: block;
      position: absolute;
      height: 20px;
      top: 10px;
      left: 0;
      border-left: 1px solid #e8e8e8;
    }
  }
  .cinema-ul {
    display: flex;
    flex-direction: column;
    .cinema-item {
      width: 343px;
      margin-left: 15px;
      padding: 13px 15px;
      height: 124px;
      background-color: white;
      border-bottom: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .c-name {
        line-height: 23px;
        font-size: 16px;
        color: #000;
        .c-price {
          .money {
            font-size: 18px;
          }
          color: #f03d37;
        }
      }
      .c-addr {
        margin-top: 6px;
        font-size: 13px;
        color: #666;
        display: flex;

        .c-addr-left {
          font-size: 13px;
          width: 275px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
      .label-block {
        display: flex;

        margin-top: 4px;
        margin-bottom: 4px;
        overflow: hidden;
        font-size: 12px;
        flex-shrink: 0;

        .label:first-of-type {
          margin-left: 0;
        }
        .label {
          color: #589daf;
          border: 1px solid #589daf;
          margin-left: 5px;
          padding: 1px 3px;
          border-radius: 3px;
          height: 20px;
          line-height: 17px;
          text-align: center;
        }
        .label-orange {
          color: #f90;
          border: 1px solid #f90;
        }
      }

      .discount {
        display: flex;
        margin: 4px 0;
        .card {
          width: 15px;
          height: 14px;
        }
        p {
          margin-left: 4px;
          font-size: 11px;
          color: #999;
        }
      }
    }
  }
}
</style>