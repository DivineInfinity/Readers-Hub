<template>
  <div class="mainContainer">
    <div id="login">
        <el-card class="loginCard">
            <img src="../assets/readersHubLogo.jpg" alt="logo" style="">
            <p style="color: #5a5a5a; font-size: 30px; text-align: center;">Login</p>
            <p v-if="this.invalidLogin" style="color:red;">Invalid Login credentials</p>
            <div class="userBlock">
                <el-button type="text" class="userText" disabled>Email:</el-button>
                <el-input placeholder="Enter Email" class="userInput" v-model="email"></el-input>
            </div>
            
            <div class="passwordBlock">
                <el-button type="text" class="passwordText" disabled>Password:</el-button>
                <el-input type="password" placeholder="Enter password" class="passwordInput" v-model="password"></el-input>
            </div>
            
            <el-button type="primary" class="loginButton" :loading="loading" @click="login">Login</el-button>
            <p>Not a Member? <a href="" @click="toSignup">Sign Up</a> Here</p>
        </el-card>
    </div>
  </div>
</template>

<script>
import  userService  from '../services/userService';
import Vue from 'vue';
import VueLocalStorage from 'vue-localstorage';
Vue.use(VueLocalStorage);
export default {
  name: "Login",
  data() {
    return {
        email: '',
        password: '',
        invalidLogin:false,
        loading: false,
    };
  },
  methods: {
      async login(){
          var response = await userService.login({email:this.email, password:this.password});
          console.log(response.data);
          console.log(response.data.user);
          if(response.data.user.length>0)
          {
              Vue.localStorage.set("userName",response.data.user.name);
              Vue.localStorage.set("token",response.data.token);
              this.$router.push({name: 'home'});
          }
          else
          {
              this.invalidLogin=true;
          }
          
      },
      toSignup(){
          this.$router.push({name:"signup"});
      }
  },
  mounted() {
  },
  updated() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.loginCard{
    background-color:#f7f7f7;
    margin: auto;
    width: 400px;
    border-radius: 10px;
}

.userBlock, .passwordBlock{
    text-align: left;
}

.userText, .passwordText{
    color: steelblue;
    font-weight: bold;
    margin: auto;
}

.userInput, .passwordInput{
    width: 100%;
}

.loginButton{
    margin: 10px;
}

</style>
