<template>
  <div class="detail">
    <div class="title">
      <div class="header">
        <span v-if="details.top" class="top">置顶</span>
        <span v-else-if="details.tab === 'share'" class="tab">分享</span>
        <span v-else-if="details.tab === 'ask'" class="tab">问答</span>
        <span class="word">{{ details.title }}</span>
      </div>
      <div>
        <b>·</b> 发布于&nbsp;<span>
          <span v-if="createTime < 3600"
            >{{ Math.floor(createTime / 60) }}分钟</span
          >
          <span v-else-if="createTime < 3600 * 24"
            >{{ Math.floor(createTime / 3600) }}小时</span
          >
          <span v-else-if="createTime < 3600 * 24 * 30"
            >{{ Math.floor(createTime / 3600 / 24) }}天</span
          >
          <span v-else-if="createTime < 3600 * 24 * 365"
            >{{ Math.floor(createTime / 3600 / 24 / 30) }}个月</span
          >
          <span v-else
            >{{ Math.floor(createTime / 3600 / 24 / 365) }}年</span
          > </span
        >前&nbsp;<b>·</b>&nbsp;作者&nbsp;<span v-if="details.author">{{
          details.author.loginname
        }}</span
        >&nbsp; <b>·</b>&nbsp;<span>{{ details.visit_count }}</span
        >&nbsp;次浏览 <b>·</b> 来自
        <span>
          <span v-if="details.tab === 'share'">分享</span>
          <span v-else-if="details.tab === 'ask'">问答</span>
        </span>
      </div>
    </div>
    <div class="content" v-html="details.content"></div>
    <div class="replies">
      <div class="repliesHead">{{ details.replies.length }}&nbsp;回复</div>
      <div v-for="(item, index) in details.replies" :key="index" class="floor">
        <a href="" class="headPortrait"
          ><img :src="item.author.avatar_url" alt=""
        /></a>
        <div class="message">
          <div class="author">
            <a href="">{{ item.author.loginname }}</a
            >&nbsp;
            <a href=""
              ><span>{{ index + 1 }}楼</span> <b>·</b>
              <span>
                <span v-if="item.time < 3600"
                  >{{ Math.floor(item.time / 60) }}&nbsp;分钟</span
                >
                <span v-else-if="item.time < 3600 * 24"
                  >{{ Math.floor(item.time / 3600) }}&nbsp;小时</span
                >
                <span v-else-if="item.time < 3600 * 24 * 30"
                  >{{ Math.floor(item.time / 3600 / 24) }}&nbsp;天</span
                >
                <span v-else-if="item.time < 3600 * 24 * 365"
                  >{{ Math.floor(item.time / 3600 / 24 / 30) }}&nbsp;个月</span
                >
                <span v-else
                  >{{ Math.floor(item.time / 3600 / 24 / 365) }}&nbsp;年</span
                >前</span
              ></a
            >
          </div>
          <span
            class="top"
            v-if="item.author.loginname === details.author.loginname"
            >作者</span
          >
          <div>
            <i></i>
            <span></span>
          </div>
        </div>
        <div class="desc"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Particulars",
  components: {},
  props: {},
  data() {
    return {
      id: "", //主页传的id
      details: {}, //数据
      createTime: "" //接受创建时间差
    };
  },
  methods: {
    // 获取数据
    getDetails() {
      this.$axios
        .req(`/api/topic/${this.id}`)
        .then(res => {
          this.details = res.data;
          this.createTime =
            this.$dayjs().diff(this.$dayjs(this.details.create_at)) / 1000; //获取创建时间差
          //给评论（replies）加time属性
          this.details.replies.map(item => {
            item.time = this.$dayjs().diff(this.$dayjs(item.create_at)) / 1000; //获取回复时间差
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    //接收id
    this.id = this.$route.query.id;
    this.getDetails();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.detail {
  .title {
    padding: 10px;
    background: white;
    .header {
      margin: 8px 0;
      .word {
        font-weight: bold;
        font-size: 22px;
        margin-left: 8px;
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
    }
  }
  .content {
    margin-bottom: 13px;
    background: white;
    padding: 10px;
    /deep/img {
      width: 100%;
    }
  }
  .replies {
    background: white;
    .repliesHead {
      padding: 10px;
      color: #444 !important;
      background-color: #f6f6f6;
      line-height: 20px;
    }
    .floor {
      border-top: 1px solid #f0f0f0;
      padding: 10px;
      position: relative;
      .message {
        display: flex;
        padding-left: 45px;
      }
      .headPortrait {
        position: absolute;
      }
      .desc {
        height: 50px;
      }
    }
    .top {
      background: #80bd01;
      padding: 1px;
      color: #fff;
      font-size: 12px;
    }
    a {
      display: inline-block;
      font-size: 12px;
    }
    img {
      width: 30px;
      display: inline-block;
    }
  }
}
</style>
