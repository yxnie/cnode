<template>
  <div id="sidebar">
    <div v-if="user" class="user bottom">
      <div class="padding title">个人信息</div>
      <div class="padding">
        <div>{{user}}</div>
        <div>积分：0</div>
        <div>“这家伙很懒，什么个性签名都有没有留下”</div>
      </div>
    </div>
    <div  v-if="user" class="bottom">
      <div class="issue">
        <el-button type="success">发布话题</el-button>
      </div>
    </div>
    <div class="login bottom padding" v-if="user === ''">
      <div class="word">CNode：Node.js专业中文社区</div>
      <div>您可以 <a>登录</a> 或 <a>注册</a> , 也可以</div>
      <el-button type="primary" class="but" @click.prevent="login">通过 GitHub 登录</el-button>
    </div>
    <div class="ad bottom padding">
      <a href=""
        ><img src="../../assets/images/ad1.jpg" alt="" class="obstruct"
      /></a>
      <a href=""
        ><img src="../../assets/images/ad2.jpg" alt="" class="obstruct"
      /></a>
      <a href=""><img src="../../assets/images/ad3.jpg" alt=""/></a>
    </div>
    <div class="nobody bottom">
      <div class="padding title">无人回复的话题</div>
      <div class="padding">
        <a href="">发现一个用node.js做的后台权限管理框架</a>
        <a href="">请问有谁了解 VuePress JAMStack Headless cms 么</a>
        <a href="">RabbitMQ 消费端服务限流实践</a>
        <a href="">Alfred 4 Workflow Open in VSCode</a>
        <a href="">string compare 字符串相似度比较</a>
      </div>
    </div>
    <div class="scoreboard bottom">
      <div class="padding title">
        <span>积分榜</span><a href="" class="top">TOP 100 >></a>
      </div>
      <div class="padding">
        <div v-for="(item, index) in scoreboard" :key="index">
          <span>{{ item.score }}</span
          ><a href="">{{ item.name }}</a>
        </div>
      </div>
    </div>
    <div class="friend bottom">
      <div class="padding title">友情社区</div>
      <div class="padding">
        <a href=""><img src="../../assets/images/friendship1.png" alt="" class="obstruct"></a>
        <a href=""><img src="../../assets/images/friendship2.png" alt="" class="obstruct"></a>
        <a href=""><img src="../../assets/images/friendship3.png" alt="" class="obstruct"></a>
        <a href=""><img src="../../assets/images/friendship4.png" alt="" class="obstruct"></a>
      </div>
    </div>
    <div class="QR_code bottom">
      <div class="padding title">客户端二维码</div>
      <div class="padding">
        <img src="../../assets/images/QR_code.jpg" alt="">
        <a href="">客户端源码地址</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  components: {},
  props: {},
  data() {
    return {
      scoreboard: [
        {
          score: 21725,
          name: "i5ting"
        },
        {
          score: 15650,
          name: "alsotang"
        },
        {
          score: 9350,
          name: "leapon"
        },
        {
          score: 9030,
          name: "atian25"
        },
        {
          score: 8780,
          name: "jiyinyiyong"
        },
        {
          score: 7305,
          name: "yakczh"
        },
        {
          score: 6815,
          name: "im-here"
        },
        {
          score: 6095,
          name: "DevinXian"
        },
        {
          score: 5815,
          name: "chapgaga"
        },
        {
          score: 5350,
          name: "magicdawn"
        }
      ]
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {
    user() {
      return this.$store.state.username;
    },
    author() {
      return this.$store.state.author;
    }
  },
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
#sidebar {
  width: 290px;
  a {
    color: #778087;
  }
  .issue {
    padding: 15px;
  }
  .bottom {
    background: white;
    margin-bottom: 13px;
    border-radius: 3px;
  }
  .padding {
    padding: 10px;
    color: #778087;
  }
  .title {
    color: #444 !important;
    background-color: #f6f6f6;
    font-size: 13px;
  }
  .obstruct {
    margin-bottom: 10px;
  }
  /*登陆*/
  .login {
    line-height: 2em;
    .but {
      background-color: #5bc0de;
      border: none;
      width: 151px;
      height: 34px;
    }
    .word {
      margin-bottom: 10px;
      font-size: 14px;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  /*广告*/
  .ad {
    display: block;
    img {
      width: 270px;
      display: block;
    }
  }
  /*无人查看*/
  .nobody {
    a {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis; /*多余文本折叠为3个点*/
      display: inline-block;
      max-width: 270px;
      font-size: 14px;
      line-height: 30px;
    }
  }
  /*积分榜*/
  .scoreboard {
    line-height: 2em;
    span {
      width: 50px;
      display: inline-block;
    }
    a:hover {
      text-decoration: underline;
    }
    .top:hover {
      text-decoration: none;
    }
  }
  /*友情社区*/
  .friend {
    img {
      width: 150px;
      display: inline-block;
    }
  }
  /*二维码*/
  .QR_code {
    .padding {
      text-align: center;
    }
    img {
      width: 200px;
      display: block;
      margin: 0 auto;
    }
    a:hover {
      text-decoration: underline;
    }
  }
}
</style>
