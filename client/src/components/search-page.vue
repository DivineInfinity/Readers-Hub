<template>
  <div class="mainContainer">
    <div id="searchResults">
      <el-card class="searchMainCard">
        <!-- Design for Search Page Starts Here -->
        <el-row>
          <!-- Design for Filter Starts Here -->
          <el-col :span="6" :xs="24" :sm="8" :md="6">
            <el-card shadow="hover" style="margin:10px">
              <h2 style="color: brown">Filter By</h2>
              <el-row class="filterStyle" v-for="(item,index) in filters" :key="index">                  
                <h4>{{ item.name }}</h4>                                         
                  <el-row v-if="isRating(item.name)" v-for="(field,index) in item.fields" :key="index" >
                    <el-checkbox>
                      <el-rate class="rating"
                        v-model= "item.fields[index]"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value} points">
                      </el-rate>
                    </el-checkbox>                      
                  </el-row> 
                  <el-row v-else>
                    <el-checkbox :label="item.fields[index]"></el-checkbox>
                  </el-row>  
              </el-row>
            </el-card>
          </el-col>
          <!-- Design for Filter Ends Here -->
          <h4 v-if="books.length == 0" style="text-align: center">No Results for <i>{{ searchQuery }}</i></h4>           
          <h4 v-else style="text-align: center">Search Results for <i>{{ searchQuery }}</i></h4>           
          <!-- Design for Search Results Starts Here -->
          <el-col :span="6" v-for="(book,index) in books" :key="index" :xs="24" :sm="8" :md="6">
            <el-card shadow="hover" style="height:300px; margin:10px">
              <img :src= "book.frontCover"  alt="book" height="150px" width="100px" style="padding-bottom:10px;"/>
              <h4 class="bookName">{{ book.title }}</h4>
              <h5 class="bookAuthor">by {{ book.author }}</h5>
              <el-rate class="rating"
              v-model= "books[index].averageRating"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value} points">
              </el-rate>
            </el-card>
          </el-col>
          <!-- Design for Search Results Ends Here -->
        </el-row>
        <!-- Design for Search Page Ends Here -->

      </el-card>
    </div>
  </div>
</template>

<script>
import searchService from "../services/searchService.js"
export default {  
  name: 'SearchPage',
  data() {
    return{
      searchQuery: '',
      filters: [
          {
            name: 'Rating',
            fields: [5,4,3,2,1]
          },
          {
            name: 'Year',
            fields: [2018,2017,2016,2015,2014,2013,2012,2011,2010]
          },
          {
            name: 'Popularity',
            fields: ['aditya', 'jayesh', 'deepak', 'shehbaz']
          },
          {
            name: 'Author',
            fields: ['Jake Frost', 'Austin Powers', 'Martin Freeman', 'Sherlock Holmes', 'Morgan Freeman', 'Justin Timberlake']
          },
          {
            name: 'Genre',
            fields: [ 'Crime', 'Action', 'Horror', 'Thriller', 'Mystery', 'Adventure']
          },
          {
            name: 'Publisher',
            fields: ['Camp Publication', 'Oxford Publication', 'Dotcom Publication']
          }
      ],
      books:[]
    }
  },
   methods: {
     getWindowWidth(){
       console.log(window.innerWidth);
       return window.innerWidth;
     },
      handleSizeChange(val) {
        console.log(`${val} items per page`);
      },
      handleCurrentChange(val) {
        console.log(`current page: ${val}`);
      },
      // getImage(url){
      //   return require(url)
      // },
      isRating(filter){
        if(filter === 'Rating'){
          console.log("true");
          return true;
        }
        console.log("false");        
        return false;
      },
      async search(){
         var search = await searchService.search(this.$route.params.searchQuery);
         this.searchQuery = this.$route.params.searchQuery
         console.log(search.data.books);
         this.books = search.data.books;
      }
    },
    mounted(){
      this.search();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#searchResults{
  background-color: blue;
}
.filterStyle{
  margin: 8px; 
  color:skyblue;
  text-decoration: underline
}
.bookName, .bookAuthor, h4{
  margin: 0px;
}
.bookName{
  color:brown;
}
.bookAuthor{
  color:cadetblue;
}
</style>
