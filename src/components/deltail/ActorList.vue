<template>
  <div class="actor-list">
    <div class="ac-title">
      <span>演职人员</span>
      <a @click.prevent="a()" href="#">全部></a>
    </div>
    <div class="ac-wrap">
      <ul>
        <li v-for="(item, index) in actorlist" :key="index">
          <img class="ac-img" :src="item.pic" alt="" />
          <p>{{ item.name }}</p>
          <p>{{ item.role }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';

export default {
  props: ["actorlist"],
  data() {
    return {};
  },
  methods: {
    a() {
      console.log(1);
    }
  },
  watch: {
    async actorlist() {
      await this.$nextTick();
      let scroll = new BScroll(".ac-wrap", {
        scrollX: true,
        click: true
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.actor-list {
  height: 181px;
  margin: 18px 0 15px;

  .ac-title {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 15px;
      color: #fff;
    }
    a {
      opacity: 0.6;
      font-size: 12px;
      color: white;
    }
  }
  .ac-wrap {
    width: 343px;
    overflow: hidden;
  }
  ul {
    // width: 100%;
    height: 148px;
    margin-top: 11px;
    display: inline-flex;

    li {
      width: 82px;
      margin-left: 6px;
      .ac-img {
        width: 80px;
        height: 112px;
      }
      p {
        width: 100%;
        font-size: 12px;
        color: white;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: center;
      }
      p:last-of-type {
        margin-top: 4px;
      }
    }
    li:first-of-type {
      margin-left: 0;
    }
  }
}
</style>