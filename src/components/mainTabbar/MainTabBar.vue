<template>
  <tab-bar>
    <tab-bar-item path="/Home">
      <img slot="item-icon" src="~assets/img/tabbar/首页.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/首页active.svg"
        alt=""
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/Category">
      <img slot="item-icon" src="~assets/img/tabbar/分类.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/分类active.svg"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/Cart">
      <img slot="item-icon" src="~assets/img/tabbar/购物车.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/购物车active.svg"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/Profile">
      <img slot="item-icon" src="~assets/img/tabbar/我的.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/我的active.svg"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "components/tabbar/TabBarItem";

export default {
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style></style>
