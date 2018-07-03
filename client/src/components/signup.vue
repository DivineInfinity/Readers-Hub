<template>
  <div class="mainContainer">
    <div id="signup">        
        <el-card class="signUpCard">
            <img src="../assets/readersHubLogo.jpg" alt="logo" style="">
            <p style="color: #5a5a5a; font-size: 30px; text-align: center;">Sign Up</p>

            <div class="userBlock">
                <el-button type="text" class="userText" disabled>Name:</el-button>
                <el-input placeholder="Enter Username you want" class="userInput" v-model="username"></el-input>
            </div>

            <div class="emailBlock">
                <el-button type="text" class="emailText" disabled>Email:</el-button>
                <el-input placeholder="Enter Email" class="emailInput" v-model="email"></el-input>
            </div>
            
            <div class="passwordBlock">
                <el-button type="text" class="passwordText" disabled>Password:</el-button>
                <el-input type="password" placeholder="Enter password" class="passwordInput" v-model="password"></el-input>
            </div>

             <div class="confirmPasswordBlock">
                <el-button type="text" class="confirmPasswordText" disabled>Confirm Password:</el-button>
                <el-input type="password" placeholder="Re-Enter password" class="confirmPasswordInput" v-model="confirmPassword"></el-input>
            </div>
            
            <el-button type="primary" class="signUpButton" :loading="loading" @click="signUpUser">Sign Up</el-button>
            <p>Already a Member? <a href="">Login</a></p>
        </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
        loading: '',
        emailId: '',
        username: '',
        password: '',
        confirmPassword: '',
        loading: false,
    };
  },
  methods: {
      signUpUser(){
          this.loading = true;
      },
      loadingScreenOn() {
        this.loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
      },
      loadingScreenOff(){
        this.loading.close();
      } 
  },
  mounted() {
    this.loadingScreenOn();
  },
  updated() {
    this.loadingScreenOn();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.signUpCard{
    background-color:#f7f7f7;
    margin: auto;
    width: 400px;
    border-radius: 10px;
}

.userBlock, .passwordBlock, .emailBlock, .confirmPasswordBlock{
    text-align: left;
}

.userText, .passwordText, .emailText, .confirmPasswordText{
    color: steelblue;
    font-weight: bold;
    margin: auto;
}

.userInput, .passwordInput, .emailInput, .confirmPasswordInput{
    width: 100%;
}

.signUpButton{
    margin: 10px;
}

</style>
