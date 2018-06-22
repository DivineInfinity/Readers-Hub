<template>
  <div id="mainDiv">

    <div v-for="(list,index) in lists" :key="index">
      <el-card class="box-card list-container" style="height: 350px;">
        <div slot="header" class="clearfix">
          <span style="float: left">{{list.name}}</span>
        </div>
        <carousel navigation-enabled="true" per-page="3">
          <slide v-for="book in list.books" :key="book" >
            <el-card style="background-color: lightblue;width: 350px;margin-left: 30px;height: 250px" class="box-card">
              <img style="float: left" width="130" height="200" :src="book.frontCover"/>
              <span>{{book.title}}</span>
              <br>by <span>{{book.author}}</span>
              <span ><el-rate
                v-model="book.averageRating"
                disabled
                text-color="#ff9900">
</el-rate></span>
              <el-button style="margin-left: 150px;bottom:25px;position: relative" round plain type="primary" @click="seeDetails(book._id)">See The Book</el-button>
            </el-card>
          </slide>
        </carousel>
      </el-card>
    </div>
    <el-card class="box-card list-container">
      <div slot="header" class="clearfix">

        <span style="float: left">{{genreList.name}}</span>
      </div>
      <div>
        <el-row>
          <el-col v-for="genre in genreList.genres" :key="genre" :span="4" :xs="24">
            <el-button round plain style="margin:5px" type="primary">{{genre}}</el-button>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
  import homeService from '../services/homeService'

  export default {
    name: "home",
    data() {
      return {
        loading:'',
        lists: [],
        genreList:
          {
            name: "Discover",
            genres: ["Fiction", "Games", "Computers", "Travel","Language Arts & Disciplines"]
          }
      }

    },
    mounted() {
      this.loadingScreenOn()
      this.getLists()
    },
    updated(){
        this.loadingScreenOff()
    },
    methods: {
      async getLists() {
        const response = await homeService.fetchLists();
        this.lists = response.data.homeLists.lists;

      },

      seeDetails(bookId){
        this.$router.push({name: 'book-details', params: { id: bookId}});
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
    }
  }
</script>

<style scoped>
  #mainDiv{
    margin-left:20px;
    margin-right:20px;
  }


  .el-carousel__container {
    height: 400px;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 600px;
    height: 200px;
  }

  .list-container {
    margin-top: 5px;
    height: 300px;
    width: 100%;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }


</style>
