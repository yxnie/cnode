<template>
  <div class="list">
    <div v-for="(item, index) in news" class="desc" :key="index">
      <a href=""><img :src="item.author.avatar_url" alt=""></a>
      <span class="count"><span class="reply">{{item.reply_count}}</span><span class="slash">/</span><span class="visit">{{item.visit_count}}</span></span>
      <a href="" class="time"><img src="" alt=""><span></span></a>
      <div>
        <span v-if="item.top" class="top">置顶</span>
        <span v-else-if="item.tab === 'share'" class="tab">分享</span>
        <span v-else-if="item.tab === 'ask'" class="tab">问答</span>
        <a class="title">{{item.title}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Newlist",
  components: {},
  props: {},
  data() {
    return {
      news: []
    };
  },
  methods: {
    getNew() {
      this.$axios
        .req("api/topics")
        .then(res => {
          this.news = res.data;
          console.log(this.news);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getNew();
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
  margin: 0;
  width: 100%;
  .desc {
    background: #fff;
    border-top: 1px solid #f0f0f0;
    position: relative;
    padding: 10px 0 10px 10px;
    font-size: 14px;
    overflow: hidden;
    display: flex;
  }
  a {
    display: block;
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
