<template>
  <div class="home">
    <top></top>
    <div id="center">
      <sidebar class="sidebar"></sidebar>
      <div class="list">
        <options></options>
        <newList></newList>
        <pages
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
        ></pages>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import bottom from "../components/bottom/Bottom";
import top from "../components/top/Top";
import sidebar from "../components/sidebar/Sidebar";
import options from "../components/options/Options";
import pages from "../components/pages/Pages";
import newList from "../components/newlist/Newlist";
export default {
  name: "home",
  components: {
    bottom,
    top,
    sidebar,
    options,
    pages,
    newList
  },
  props: {},
  data() {
    return {
      page: 0,
      num: 0
    };
  },
  methods: {
    handleSizeChange(val) {
      // this.$emit("handleSizeChange", val);
      this.page = val;
    },
    handleCurrentChange(val) {
      // this.$emit("handleCurrentChange", val);
      this.num = val;
    }
  },
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
    .list {
      margin-right: 305px;
    }
    .sidebar {
      position: absolute;
      right: 0;
    }
  }
}
</style>
