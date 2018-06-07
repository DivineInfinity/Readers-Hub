<template>
  <div>
    <div v-for="list in lists">
      <el-card class="box-card list-container">
        <div slot="header" class="clearfix">
          <span style="float: left">{{list.name}}</span>
        </div>
        <el-carousel  :interval="4000" type="card" height="200px">
          <el-carousel-item  v-for="item in 6" :key="item">
            <h3 >{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
        <!--<div v-for="o in 2" :key="o" class="text item">-->
        <!--{{'List item ' + o }}-->
        <!--</div>-->
      </el-card>
    </div>
    <el-card class="box-card list-container">
      <div slot="header" class="clearfix">
        <span style="float: left">{{genreList.name}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        lists: [
          {
            name: "Trending",
            books: [{id: 1, bookName: "Sherlock 1"}, {id: 2, bookName: "Sherlock 2"}]
          },
          {
            name: "New Releases",
            books: [{id: 1, bookName: "Sherlock 1"}, {id: 2, bookName: "Sherlock 2"}]
          },
          {
            name: "Top Rated",
            books: [{id: 1, bookName: "Sherlock 1"}, {id: 2, bookName: "Sherlock 2"}]
          }

        ],
        genreList:
          {
            name: "Discover",
            genres: [{name: "Horror", genreSearch: ""}, {}]
          }
      }

    }

  }
</script>

<style scoped>
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
    width: 480px;
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

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
