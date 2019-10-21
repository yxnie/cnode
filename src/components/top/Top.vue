<template>
  <div id="top">
    <div class="main">
      <div class="con">
        <div class="front">
          <a href=""><img src="../../assets/images/cnode.svg" alt="" class="img"></a>
          <form class="input"><input type="text"></form>
        </div>
        <div class="list">
          <div><a href="">首页</a></div>
          <div><a href="">新手入门</a></div>
          <div><a href="">API</a></div>
          <div><a href="">关于</a></div>
          <div><a href="">注册</a></div>
          <div><a href="">登录</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#top {
  position: relative;
  background: #444;
  font-size: 13px;
  .main {
    width: 90%;
    margin: 0 auto;
    padding: 5px;
    .con {
      width: 100%;
      min-width: 960px;
      margin: 0 auto;
      max-width: 1400px;
      display: flex;
      justify-content: space-between;
      .front {
        display: flex;
        a {
          display: flex;
          width: 120px;
          padding: 3px 20px;
          height: 34px;
          line-height: 34px;
          color: #ccc;
          font-weight: 700;
          margin-left: -20px;
          .img {
            width: 120px;
            height: 28px;

          }
        }
        .input {
          margin-bottom: 0;
          display: block;
          margin-top: 6px;
          input {
            background: url("../../assets/images/search.png") 4px 4px no-repeat #888;
            width: 206px;
            padding: 3px 5px 3px 22px;
            color: #666;
            border: 0;
            margin-top: 2px;
            border-radius: 15px;
            height: 20px;
            outline: none;
            &:hover {
              background-color: white;
            }
          }
        }
      }
      .list {
        display: flex;
        a {
          text-shadow: none;
          color: #ccc;
          padding: 10px 15px;
          text-decoration: none;
          display: block;
          &:hover {
            color: white;
          }
        }
      }
    }
  }
}
</style>
