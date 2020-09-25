<template>
  <div class="star-item">
    <div class="stars">
      <img v-for="item in num" :key='item' :src="img" alt="">
    </div>
    <div class="bar">
      <div class="percent-bar" :style="{width:mark / evaluate *100+'px'}"></div>
    </div>
    <span class="percent">{{mark / evaluate | format}}</span>
  </div>
</template>

<script>
export default {
  props:['img','mark','num','evaluate'],
  filters: {
    format(value) {
      return (value*100).toFixed(1)+'%';
    }
  }
}
</script>

<style lang="scss" scoped>
  .star-item {
    width: 180px;
    height: 18px;
    display: flex;
    align-items: center;
    .stars {
      width: 35px;
      display: flex;
      justify-content: flex-end;
      img {
        width: 5px;
        height: 5px;
      }
    }
    .bar {
       height: 5px;
      background-color: hsla(0,0%,100%,.05);
      width: 100px;
      margin: 0 5px;
      .percent-bar {
        height: 100%;
        background-color: #ffb400;
        border-radius: 2px;
      }
    }

    .percent {
      width: 35px;
      height: 14px;
      opacity: .4;
      font-size: 10px;
      color: white;
    }
  }
</style>