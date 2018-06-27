<template>
  <div class="mainContainer">
    <div id="login">
        <el-card class="loginCard">
            <img src="../assets/readersHubLogo.jpg" alt="logo" style="">
            <p style="color: #5a5a5a; font-size: 30px; text-align: center;">Login</p>
            <div class="userBlock">
                <el-button type="text" class="userText" disabled>Email:</el-button>
                <el-input placeholder="Enter Email" class="userInput" v-model="username"></el-input>
            </div>
            
            <div class="passwordBlock">
                <el-button type="text" class="passwordText" disabled>Password:</el-button>
                <el-input type="password" placeholder="Enter password" class="passwordInput" v-model="password"></el-input>
            </div>
            
            <el-button type="primary" class="loginButton" :loading="loading" @click="loginUser">Login</el-button>
            <p>Not a Member? <a href="">Sign Up</a> Here</p>
        </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
        username: '',
        password: '',
        loading: false,
    };
  },
  methods: {
      loginUser(){
          this.loading = true;
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
