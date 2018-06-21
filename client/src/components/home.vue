<template>
  <div id="mainDiv">

    <div v-for="(list,index) in lists" :key="index">
      <el-card class="box-card list-container" style="height: 350px;">
        <div slot="header" class="clearfix">
          <span style="float: left">{{list.name}}</span>
        </div>
        <carousel navigation-enabled="true" per-page="3">
          <slide v-for="book in list.books" :key="book" >
            <el-card style="background-color: lightblue;width: 300px;margin-left: 50px" class="box-card">
              <img style="float: left" height="170" :src="book.frontCover"/>
              <span>{{book.title}}</span>
              <br>by <span>{{book.author}}</span>
              <span ><el-rate
                v-model="book.averageRating"
                disabled
                text-color="#ff9900">
</el-rate></span>
              <el-button style="margin-top: 30px" round plain type="primary" @click="seeDetails(book._id)">See The Book</el-button>
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
   import getAverageColor from 'get-average-color'
  export default {
    name: "home",
    data() {
      return {
        loading:'',
        lists: [
          {
            name: "Trending",
            books: [{
              frontCover: "https://books.google.com/books/content?id=-m8sR4rZbb4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
              title: "Carry On, Jeeves",
              author: "PG Wodehouse",
              averageRating: "4.8",
              description: "Lots of people think I'm much too dependent on Jeeves. My Aunt Agatha, in fact, has even gone so far as to call him my keeper. Well, what I say is: why not? The man's a genius. Having recently given his valet the boot, idle aristocrat Bertram Wooster is feeling a touch adrift. Then Jeeves shimmers into his life, and all starts coming up roses. For Bertie's new gentleman's gentleman is not only an expert at this valeting business, but also exceedingly skilled at hauling his employer out of those ludicrous scrapes into which he is so remarkably prone to plummeting."
            }, {
              frontCover: "http://books.google.com/books/content?id=qBlJNb9dhEkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
              title: "Catch-22",
              author: "Joseph Heller",
              averageRating: "4.8",
              description: "Lots of people think I'm much too dependent on Jeeves. My Aunt Agatha, in fact, has even gone so far as to call him my keeper."
            }, {
              frontCover: "https://books.google.com/books/content?id=-m8sR4rZbb4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
              title: "Carry On, Jeeves",
              author: "PG Wodehouse",
              averageRating: "4.8",
              description: "Lots of people think I'm much too dependent on Jeeves. My Aunt Agatha, in fact, has even gone so far as to call him my keeper. Well, what I say is: why not? The man's a genius. Having recently given his valet the boot, idle aristocrat Bertram Wooster is feeling a touch adrift. Then Jeeves shimmers into his life, and all starts coming up roses. For Bertie's new gentleman's gentleman is not only an expert at this valeting business, but also exceedingly skilled at hauling his employer out of those ludicrous scrapes into which he is so remarkably prone to plummeting."
            }, {
              frontCover: "https://books.google.com/books/content?id=-m8sR4rZbb4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
              title: "Carry On, Jeeves",
              author: "PG Wodehouse",
              averageRating: "4.8",
              description: "Lots of people think I'm much too dependent on Jeeves. My Aunt Agatha, in fact, has even gone so far as to call him my keeper. Well, what I say is: why not? The man's a genius. Having recently given his valet the boot, idle aristocrat Bertram Wooster is feeling a touch adrift. Then Jeeves shimmers into his life, and all starts coming up roses. For Bertie's new gentleman's gentleman is not only an expert at this valeting business, but also exceedingly skilled at hauling his employer out of those ludicrous scrapes into which he is so remarkably prone to plummeting."
            }, {
              frontCover: "https://books.google.com/books/content?id=-m8sR4rZbb4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
              title: "Carry On, Jeeves",
              author: "PG Wodehouse",
              averageRating: "4.8",
              description: "Lots of people think I'm much too dependent on Jeeves. My Aunt Agatha, in fact, has even gone so far as to call him my keeper. Well, what I say is: why not? The man's a genius. Having recently given his valet the boot, idle aristocrat Bertram Wooster is feeling a touch adrift. Then Jeeves shimmers into his life, and all starts coming up roses. For Bertie's new gentleman's gentleman is not only an expert at this valeting business, but also exceedingly skilled at hauling his employer out of those ludicrous scrapes into which he is so remarkably prone to plummeting."
            }, {
              frontCover: "https://books.google.com/books/content?id=-m8sR4rZbb4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
              title: "Carry On, Jeeves",
              author: "PG Wodehouse",
              averageRating: "4.8",
              description: "Lots of people think I'm much too dependent on Jeeves. My Aunt Agatha, in fact, has even gone so far as to call him my keeper. Well, what I say is: why not? The man's a genius. Having recently given his valet the boot, idle aristocrat Bertram Wooster is feeling a touch adrift. Then Jeeves shimmers into his life, and all starts coming up roses. For Bertie's new gentleman's gentleman is not only an expert at this valeting business, but also exceedingly skilled at hauling his employer out of those ludicrous scrapes into which he is so remarkably prone to plummeting."
            }, {
              frontCover: "https://books.google.com/books/content?id=-m8sR4rZbb4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
              title: "Carry On, Jeeves",
              author: "PG Wodehouse",
              averageRating: "4.8",
              description: "Lots of people think I'm much too dependent on Jeeves. My Aunt Agatha, in fact, has even gone so far as to call him my keeper. Well, what I say is: why not? The man's a genius. Having recently given his valet the boot, idle aristocrat Bertram Wooster is feeling a touch adrift. Then Jeeves shimmers into his life, and all starts coming up roses. For Bertie's new gentleman's gentleman is not only an expert at this valeting business, but also exceedingly skilled at hauling his employer out of those ludicrous scrapes into which he is so remarkably prone to plummeting."
            }, {
              frontCover: "https://books.google.com/books/content?id=-m8sR4rZbb4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
              title: "Carry On, Jeeves",
              author: "PG Wodehouse",
              averageRating: "4.8",
              description: "Lots of people think I'm much too dependent on Jeeves. My Aunt Agatha, in fact, has even gone so far as to call him my keeper. Well, what I say is: why not? The man's a genius. Having recently given his valet the boot, idle aristocrat Bertram Wooster is feeling a touch adrift. Then Jeeves shimmers into his life, and all starts coming up roses. For Bertie's new gentleman's gentleman is not only an expert at this valeting business, but also exceedingly skilled at hauling his employer out of those ludicrous scrapes into which he is so remarkably prone to plummeting."
            }]
          },
          {
            name: "New Releases",
            books: [{title: "Sherlock 1"}, {title: "Sherlock 2"}, {
              title: "Sherlock 2"
            }, {title: "Sherlock 2"}]
          },
          {
            name: "Top Rated",
            books: [{title: "Sherlock 1"}, {title: "Sherlock 2"}]
          }
        ],
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
      async getColor(img){
          var rgb = await getAverageColor(img)
          //console.log(rgb);
          var color = `rgb(${rgb.r},${rgb.g},${rgb.b} )`
          //console.log(color);
          this.bgc.backgroundColor=color;
          return color;
      },
       async getLists() {
        const response = await homeService.fetchLists();
        //console.log("RESPONSE DATA = "+response.data.homeLists.lists[0].name);
        //console.log("RESPONSE DATA = "+response.data.homeLists.genreList.name);
         this.lists = response.data.homeLists.lists;
        for(var i =0;i<this.lists.length;i++){
            for(var j=0;j<this.lists[i].books.length;j++){
            var color= await this.getColor(this.lists[i].books[j].frontCover);
            console.log(color);
            this.lists[i].books[j]['bgc'] ={backgroundColor:color}
            }
        }
        // console.log(this.lists[0].books[0].frontCover);
        //var color= await this.getColor(this.lists[0].books[3].frontCover);

        //console.log(this.lists[0].books[3].frontCover)
        this.lists[0].books[3]['bgc'] ={backgroundColor:color}


        this.genreList=response.data.homeLists.genreList;

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
