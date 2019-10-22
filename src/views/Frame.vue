<template>
  <div class="home">
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
      page: 0,
      num: 0
    };
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
.home {
  background-color: #e1e1e1;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
  line-height: 20px;
  color: #333;
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
