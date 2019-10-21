<template>
  <div class="header">
    <span v-for="(item, index) in head" :key="index">
      <a href="#" @click="run(index)" :class="{ bg: index === num }">{{
        item
      }}</a>
    </span>
  </div>
</template>

<script>
export default {
  name: "Options",
  components: {},
  props: {},
  data() {
    return {
      num: 0,
      head: ["全部", "精华", "分享", "问答", "招聘", "客户端测试"]
    };
  },
  methods: {
    run(data) {
      this.num = data;
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
.header {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
  a {
    color: #80bd01;
    padding: 3px 4px;
    border-radius: 3px;
    margin: 0 10px;
    &:hover {
      color: #08c;
    }
  }
  .bg {
    background-color: #80bd01;
    color: #fff !important;
  }
}
</style>
