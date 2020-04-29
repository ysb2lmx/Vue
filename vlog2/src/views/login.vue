<template>
  <div>
    <el-calendar v-model="value" style="height: 100px;width: 60%"></el-calendar>

    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box"
             style="float:right;margin-right: 100px ">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.pwd"/>
      </el-form-item>
      <el-form-item label="邮箱" prop="password">
        <el-input type="email" placeholder="请输入邮箱" v-model="form.email"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
        <el-button v-on:click="onreset('loginForm')">重置</el-button>
        <el-button v-on:click="register('loginForm')">注册</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
      title="温馨提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
  import qs from 'qs'
  import axios from "axios";

  export default {
    name: 'login.vue',
    data() {
      return {
        form: {
          username: '',
          pwd: '',
        },
        value: new Date(),

        //表单验证，需要在el-form-item元素中增加prop属性
        rules: {
          username: [{required: true, message: '账号不可为空', trigger: 'blur'}],
          pwd: [{required: true, message: '密码不可为空', trigger: 'blur'}],
        },

        //对话框显示和隐藏
        dialogVisible: false,
      }
    },
    methods: {
      onSubmit(formName) {
        // 为表单绑定验证功能
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
            console.log(this.form);
            console.log(axios.defaults.baseURL);
            console.log("你好");

            axios({
              url: '/login',
              method: 'post',
              data: this.form,
              transformRequest: [function (data) {
                data = qs.stringify(data);
                return data;
              }],
            });

            /*this.$http.post('/login', data= this.form).then(response => {
              console.log(response);
              this.$message(response.data);
            }, response => {
              console.log("error");
            });*/


            this.$router.push('/show_vlog')
          } else {
            this.dialogVisible = true
            return false
          }
        })
      },
      handleClose() {
        console.log('关闭我了')
      },
      onreset(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>

</style>
