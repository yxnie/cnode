<template>
  <div class="home">
    <div class="back" @click="backTop" v-if="btnFlag">
      <img src="../assets/images/back.svg" alt="" />
      <div>回到</div>
      <div>顶部</div>
    </div>
    <top></top>
    <div id="center">
      <sidebar class="sidebar"></sidebar>
      <router-view class="newsList"></router-view>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import bottom from "../components/bottom/Bottom";
import top from "../components/top/Top";
import sidebar from "../components/sidebar/Sidebar";
export default {
  name: "Frame",
  components: {
    bottom,
    top,
    sidebar
  },
  props: {},
  data() {
    return {
      btnFlag: false,
      lock: true
    };
  },
  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      if (!this.lock) {
        return false;
      }
      this.lock = false;
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
          this.lock = true;
        }
      }, 16);
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 200) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    }
  },
  mounted() {
    //监听滚动事件
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    //离开时页面销毁监听事件
    window.removeEventListener("scroll", this.scrollToTop);
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.home {
  background-color: #e1e1e1;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
  line-height: 20px;
  color: #333;
  .back {
    position: fixed;
    right: 8px;
    top: 530px;
    width: 70px;
    height: 70px;
    border: 1px solid gray;
    text-align: center;
    &:hover {
      background: #0088cc;
      color: white;
    }
    img {
      display: block;
      width: 20px;
      height: 20px;
      margin-top: 5px;
      position: relative;
      left: 25px;
    }
  }
  #center {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;
    font-size: 14px;
    position: relative;
    .newsList {
      margin-right: 305px;
    }
    .sidebar {
      position: absolute;
      right: 0;
    }
  }
}
</style>
