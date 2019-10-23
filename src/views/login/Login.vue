<template>
  <div class="form">
    <div class="login">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="ruleForm.username"
            clearable
            placeholder="请输入长度在 2 到 12 个字符的用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            show-password
            v-model="ruleForm.pass"
            autocomplete="off"
            clearable
            placeholder="请输入密码，长度在长度在 6 到 20 个字符之间"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            show-password
            v-model="ruleForm.checkPass"
            autocomplete="off"
            clearable
            placeholder="请再次输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即登录</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  props: {},
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 12, message: "长度在 2 到 12 个字符", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur"
          },
          { validator: validatePass, trigger: "blur" }
        ],
        checkPass: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur"
          },
          { validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //提交信息
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //登录成功弹框
          this.$message({
            message: `欢迎用户${this.ruleForm.username}登陆，祝您愉快`,
            type: "success"
          });
          this.$store.state.username = this.ruleForm.username; //用户名存入store
          this.$store.state.pass = this.ruleForm.pass; //密码存入store
          localStorage.setItem(
            "user",
            JSON.stringify({ user: this.ruleForm.username })
          ); //用户名存入localstorage
          this.$router.push("/home"); //跳转回主页
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //重置信息
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
.form {
  display: flex;
  justify-content: center;
  margin-top: 160px;
  .login {
    width: 470px;
    height: 340px;
  }
}
</style>
