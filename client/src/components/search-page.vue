<template>
  <div class="mainContainer">
    <div id="searchResults">
      <el-card class="searchMainCard">
        <!-- Design for Search Page Starts Here -->
        <el-row>
          <!-- Design for Filter Starts Here -->
          <el-col v-if="books.length != 0" :span="6" :xs="24" :sm="8" :md="6">
            <el-card shadow="hover" style="margin:10px">              
              <h2 style="color: brown">Filter By</h2>

              <el-row class="filterStyle">{{filters.rating.name}}</el-row>
              <el-row v-for="(field, index) in filters.rating.fields" :key="index">
                <el-checkbox>
                    <el-rate class="rating"
                      v-model= "filters.rating.fields[index]"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="{value}">
                    </el-rate>
                </el-checkbox>
              </el-row>

              <el-row class="filterStyle">{{filters.year.name}}</el-row>
              <el-row v-for="(field, index) in filters.year.fields" :key="index">
                <el-checkbox>{{field}}</el-checkbox>
              </el-row>

              <el-row class="filterStyle">{{filters.author.name}}</el-row>
              <el-row v-for="(field, index) in filters.author.fields" :key="index">
                <el-checkbox style="text-align: left">{{field}}</el-checkbox>
              </el-row>

              <el-row class="filterStyle">{{filters.genre.name}}</el-row>
              <el-row v-for="(field, index) in filters.genre.fields" :key="index">
                <el-checkbox>{{field}}</el-checkbox>
              </el-row>

              <el-row class="filterStyle">{{filters.publisher.name}}</el-row>
              <el-row v-for="(field, index) in filters.publisher.fields" :key="index">
                <el-checkbox>{{field}}</el-checkbox>
              </el-row>
            </el-card>
          </el-col>
          <!-- Design for Filter Ends Here -->
          <div v-if="books.length == 0" style="text-align: center">
            Your search "<i>{{ searchQuery }}</i>" did not match any books.
            <p>Try something like</p>
            <ul>
              <li>Using more general items.</li>
              <li>Check your spelling.</li>
            </ul>
          </div>           
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
              score-template="{value}">
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
      filters: {
          rating: {
            name: 'Rating',
            fields: [5,4,3,2,1]
          },
          year: {
            name: 'Year',
            fields: [2018,2017,2016,2015,2014,2013,2012,2011,2010]
          },
          author: {
            name: 'Author',
            fields: []
          },
          genre: {
            name: 'Genre',
            fields: []
          },
          publisher: {
            name: 'Publisher',
            fields: []
          }
      },
      books:[]
    }
  },
   methods: {
      handleSizeChange(val) {
        console.log(`${val} items per page`);
      },
      handleCurrentChange(val) {
        console.log(`current page: ${val}`);
      },
      async search(){
        var search = await searchService.search(this.$route.params.searchQuery);
        this.searchQuery = this.$route.params.searchQuery
        console.log(search.data);
        this.books = search.data.books;
        this.filters.author.fields = []
        this.filters.publisher.fields = []
        this.filters.genre.fields = []
        for(var i=0; i < search.data.books.length; i++){
          var book = search.data.books[i];
          if(book.author != undefined && !(this.filters.author.fields.includes(book.author))){
            this.filters.author.fields.push(book.author);
          }          
          if(book.publisher != undefined && !(this.filters.publisher.fields.includes(book.publisher))){
            console.log(book.publisher);
            this.filters.publisher.fields.push(book.publisher);
          }
          for(var genreList in book.genre){
            if(book.genre != undefined && !(this.filters.genre.fields.includes(book.genre[genreList]))){
              this.filters.genre.fields.push(book.genre[genreList]);
            }
          }
        }
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
  text-decoration: underline;
  font-weight: bold
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
