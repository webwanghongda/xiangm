<template>
  <div>
    <h2>首页</h2>
    <button @click="resItem">数据</button>
    <br /><br />
    <!-- {{ res }} -->
    <img :src="res" alt="" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      res: ""
    };
  },
  methods: {
    resItem() {
      axios({
        url: "http://123.207.32.32:8000/home/multidata"
      }).then(n => {
        this.res = n.data.data.banner.list[0].image;
        console.log(this.res);
      });
    }
  }
};
</script>

<style scoped>
img {
  width: 200px;
}
</style>
