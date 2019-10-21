<template>
  <div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pages",
  components: {},
  props: {},
  data() {
    return {
      currentPage4: 1
      // page: 1,
      // num: 10
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      // this.num = val;
      this.$emit("handleSizeChange", val);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      // this.page = val;
      this.$emit("handleCurrentChange", val);
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

<style scoped lang="scss"></style>
