<template>
  <div id="mainDiv">      
      <el-card class="mainCard">        
        <h2 style="color: gray; text-decoration: underline;">Our Team</h2>
            <h6>Aditya Periwal</h6>
            <h6>Deepak Lalwani</h6>
            <h6>Hitesh Sachdev</h6>
            <h6>Shehbaz Jafri</h6>
        <h2 style="color: gray; text-decoration: underline;">Contact Us</h2>
            <h6>adityaperiwal0007@gmail.com</h6>
            <h6>deepak.lalwani81@gmail.com</h6>
            <h6>hiteshsachdev22@gmail.com</h6>
            <h6>shehbazjafri@gmail.com</h6>
    </el-card>
  </div>
</template>

<script>

  export default {
    name: "contact-us"
  }
</script>

<style scoped>
    body{
        font-family: Arial, Helvetica, sans-serif;
    }

    #mainDiv{
        margin-left:20px;
        margin-right:20px;
    }

    .mainCard{
        min-height: 600px;
    }

    h6{
        line-height: 2em;
        word-wrap: break-word;
    }

    h6:hover{
        cursor: pointer;
        text-decoration: underline;
        color: steelblue;
    }
</style>
