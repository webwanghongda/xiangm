<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{ active: isActive }">
      <slot name="item-text"></slot>
    </div>

    <!-- <img src="../../assets/img/tabbar/首页.svg" alt="">
      <div>首页</div> -->
  </div>
</template>

<script>
export default {
  props: {
    path: String
  },
  data() {
    return {
      // isActive:true,
    };
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  },
  computed: {
    isActive() {
      // 活跃路由 $router中获取path(/home) 用indexOf函数对比父组件传过来的path
      // 有返回下标，没有返回-1
      return this.$route.path.indexOf(this.path) !== -1;
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  background: #f6f6f6;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24;
  height: 24;
  margin-top: 3px;
  /* 去掉图片轮廓缝隙 */
  vertical-align: middle;
}
.active {
  color: #d81e06;
}
</style>
