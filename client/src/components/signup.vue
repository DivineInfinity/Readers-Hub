<template>
  <div class="mainContainer">
    <div id="signup">        
        <el-card class="signUpCard">
            <img src="../assets/readersHubLogo.jpg" alt="logo" style="">
            <p style="color: #5a5a5a; font-size: 30px; text-align: center;">Sign Up</p>

            <div class="userBlock">
                <el-button type="text" class="userText" disabled>Name:</el-button>
                <el-input prefix-icon="el-icon-edit" placeholder="Enter Username you want" class="userInput" v-model="username"></el-input>
            </div>

            <div class="emailBlock">
                <el-button type="text" class="emailText" disabled>Email:</el-button>
                <el-input prefix-icon="el-icon-message" placeholder="Enter Email" class="emailInput" v-model="email"></el-input>
            </div>
            
            <div class="passwordBlock">
                <el-button type="text" class="passwordText" disabled>Password:</el-button>
                <el-input prefix-icon="el-icon-goods" @input="onConfirmPasswordInput()" type="password" placeholder="Enter password" class="passwordInput" v-model="password"></el-input>
            </div>

             <div class="confirmPasswordBlock">
                <el-button type="text" class="confirmPasswordText" disabled>Confirm Password:</el-button>
                <el-input prefix-icon="el-icon-goods" @input="onConfirmPasswordInput()" type="password" placeholder="Re-Enter password" id="confirmPasswordInput" :class="{borderGreen:this.isMatching, borderRed:!this.isMatching}" v-model="confirmPassword"></el-input>
            </div>
            
            <el-button type="primary" class="signUpButton" :loading="loading" @click="signUpUser">Sign Up</el-button>
            <p>Already a Member? <a href="" @click="toLogin">Login</a></p>
        </el-card>
    </div>
  </div>
</template>

<script>
import  userService  from '../services/userService';
export default {
  name: "Signup",
  data() {
    return {
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        loading: false,
        isMatching: false
    };
  },
  methods: {
      async signUpUser(){
          var response= await userService.signup({name:this.username,email:this.email,password:this.password});
          console.log(response);
      },
      toLogin(){
          this.$router.push({name:"login"});
      },
      onConfirmPasswordInput(){
          console.log("Matching");
          if(this.password == this.confirmPassword){
              this.isMatching = true;
               
          }else{
              this.isMatching = false;
          }
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
.mainContainer{
margin-top: 6%;
}

.borderRed{
    border: 1px solid red;
}

.borderGreen{
    border: 1px solid green;
}
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

.userInput, .passwordInput, .emailInput{
    width: 100%;
}

.signUpButton{
    margin: 10px;
}


#confirmPasswordInput{
    width: 100%;
}

</style>
