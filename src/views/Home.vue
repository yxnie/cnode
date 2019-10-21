<template>
  <div class="home">
    <top></top>
    <div id="center">
      <div>
        <div></div>
        <router-view></router-view>
        <div></div>
      </div>
      <sidebar></sidebar>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import bottom from "../components/bottom/Bottom";
import top from "../components/top/Top";
import sidebar from "../components/sidebar/Sidebar";
export default {
  name: "home",
  components: {
    bottom,
    top,
    sidebar
  },
  props: {},
  data() {
    return {
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
#center {
  display: flex;
  justify-content: space-between;
}
</style>
