<template>
  <div class="list">
    <!--    头部-->
    <div class="header">
      <span v-for="(item, index) in head" :key="index">
        <a href="" @click.prevent="run(index)" :class="{ bg: index === num }">{{
          item
        }}</a>
      </span>
    </div>
    <!--    内容-->
    <div
      v-for="(item, index) in news.slice(
        pages * (pagesNum - 1),
        pages * pagesNum
      )"
      class="desc"
      :key="index"
    >
      <a href=""><img :src="item.author.avatar_url" alt=""/></a>
      <span class="count"
        ><span class="reply">{{ item.reply_count }}</span
        ><span class="slash">/</span
        ><span class="visit">{{ item.visit_count }}</span></span
      >
      <a href="" class="time">
        <span v-if="item.min">{{ item.min }} 分钟</span>
        <span v-else-if="item.hour">{{ item.hour }} 小时</span>
        <span v-else-if="item.day">{{ item.day }} 天</span>
        <span v-else-if="item.month">{{ item.month }} 月</span>
        <span v-else-if="item.year">{{ item.min }} 年</span>前
      </a>
      <div>
        <span v-if="item.top" class="top">置顶</span>
        <span v-else-if="item.tab === 'share'" class="tab">分享</span>
        <span v-else-if="item.tab === 'ask'" class="tab">问答</span>
        <a class="title" href="" @click.prevent="skip(item)">{{
          item.title
        }}</a>
      </div>
    </div>
    <!--    翻页-->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="40"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { Loading } from "element-ui";
export default {
  name: "Newlist",
  components: {},
  props: {},
  data() {
    return {
      news: [], //数据
      num: 0, //点击判断
      head: ["全部", "精华", "分享", "问答", "招聘", "客户端测试"],
      currentPage: 1, //初始页数
      pages: 40, //每页条数
      pagesNum: 1, //页数
      username: "", //用户名
      loadingInstance: null //加载loading对象
    };
  },
  methods: {
    //获取数据
    getNew() {
      this.$axios
        .req("/api/topics")
        .then(res => {
          if (res.data.length) {
            this.news = res.data;
            this.loadingInstance.close();
            this.news.map(item => {
              let time =
                this.$dayjs().diff(this.$dayjs(item.last_reply_at)) / 1000;
              if (time < 3600) {
                item.min = Math.ceil(time / 60);
              } else if (time < 3600 * 24) {
                item.hour = Math.ceil(time / 3600);
              } else if (time < 3600 * 24 * 30) {
                item.day = Math.ceil(time / 3600 / 24);
              } else if (time < 3600 * 24 * 365) {
                item.month = Math.ceil(time / 3600 / 24 / 30);
              } else {
                item.year = Math.ceil(time / 3600 / 24 / 365);
              }
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //翻页事件
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pages = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pagesNum = val;
    },
    //点击效果
    run(data) {
      this.num = data;
    },
    skip(data) {
      this.$router.push({ name: "particulars", query: { id: data.id } }); //传id到详情页
      this.$store.state.author = data.author.loginname;
    }
  },
  mounted() {
    //加载页面
    this.loadingInstance = Loading.service({
      text: "加载中..."
    });
    this.$nextTick(() => {
      // 以服务的方式调用的 Loading 需要异步关闭
      this.getNew();
    });
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.list {
  line-height: 2em;
  /*头部*/
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
  /*翻页*/
  .block {
    background-color: #f6f6f6;
  }
  /*内容*/
  .desc {
    background: #fff;
    border-top: 1px solid #f0f0f0;
    position: relative;
    padding: 10px 0 10px 10px;
    font-size: 14px;
    overflow: hidden;
    display: flex;
    .time {
      margin-right: 10px;
      color: #778087;
      font-size: 11px;
    }
  }
  img {
    display: block;
    width: 30px;
    height: 30px;
  }
  .time {
    position: absolute;
    right: 0;
  }
  .top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }
  .tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    font-size: 12px;
  }
  .title {
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    max-width: 70%;
    line-height: 30px;
    margin-left: 3px;
    color: black;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover {
      text-decoration: underline;
    }
    /*&:active {*/
    /*  color: #888;*/
    /*}*/
  }
  .count {
    width: 70px;
    text-align: center;
    .reply {
      color: #9e78c0;
      word-break: break-word;
      line-height: 2em;
    }
    .visit {
      font-size: 10px;
      color: #b4b4b4;
      word-break: break-word;
      line-height: 2em;
    }
    .slash {
      margin: 0 2px;
      font-size: 10px;
    }
  }
}
</style>
