<template>
  <div id="foot">
    <div class="wrap">
      <div class="link"><a href="">RSS</a> | <a href="">源码地址</a></div>
      <div class="footer">
        <div>
          CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js
          的技术研究。
        </div>
        <div>
          服务器赞助商为
          <a href=""
            ><img src="../../assets/images/foot1.png" alt="" class="img1"/></a
          >，存储赞助商为
          <a href=""
            ><img src="../../assets/images/foot2.png" alt="" class="img2"/></a
          >，由
          <a href=""
            ><img src="../../assets/images/foot3.png" alt="" class="img3"/></a
          >提供应用性能服务。
        </div>
        <div>
          新手搭建 Node.js 服务器，推荐使用无需备案的
          <a href="">DigitalOcean(https://www.digitalocean.com/)</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bottom",
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
#foot {
  height: 80px;
  background: white;
  .wrap {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 0 auto;
    color: #e2e2e2;
    padding: 20px 0;
    font-size: 13px;
    line-height: 2em;
    .link {
      line-height: 2em;
      a {
        color: #666;
      }
    }
    .footer {
      div {
        font-size: 14px;
        word-break: break-word;
        margin: 0 0 10px;
        color: #ababab;
        vertical-align: bottom;
        line-height: 20px;
      }
      img {
        display: inline-block;
        vertical-align: middle;
      }
      .img1 {
        width: 92px;
      }
      .img2 {
        width: 115px;
      }
      .img3 {
        width: 166px;
      }
      a {
        color: #08c;
        display: inline-block;
      }
    }
  }
}
</style>
