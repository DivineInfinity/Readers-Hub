<template>
  <div id="mainDiv">      
      <el-card class="mainCard">
        <h3 style="color: gray; text-decoration: underline;">Genre</h3>
        <div style="width:300px; margin: 40px auto">
            <el-input 
                prefix-icon="el-icon-search"
                placeholder="Find your Genre" 
                v-model="searchInput">
            </el-input>
        </div>
        <ul class="genreList">
            <el-col :span="6" v-for="genre in computedGenreList" :key="genre">
                <li class="listItem" @click="findBooksByGenre(genre)">{{genre}}</li>
            </el-col>
        </ul>
    </el-card>
  </div>
</template>

<script>
  import genreService from '../services/genreService'

  export default {
    name: "genre",
    data() {
      return {
        firstIndex: -1,
        keepSearching: true,
        searchInput: '',
        loading:'',
        list: [],
        genreList: [],
        filterList: []
      }

    },
    mounted() {
      this.loadingScreenOn()
      this.getGenreLists()
    },
    updated(){
        this.loadingScreenOff()
    },
    methods: {
      async getGenreLists() {
        const response = await genreService.fetchGenreList();
        console.log("Got response");
        this.list = response.data.genreList;
        console.log(response);
        for(var genres of this.list){
            for(var genre of genres.genre){
                if(!this.genreList.includes(genre)){
                    this.genreList.push(genre);
                }               
            }
        }
        console.log(this.genreList);
        this.genreList = this.genreList.sort();
      },

      findBooksByGenre(genreName){
        this.$router.push({name: 'search-genre', params: {searchQuery: genreName}});
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
    computed: {
        computedGenreList: function() {
            var regex1 =  new RegExp('\\s?\\b'+this.searchInput, "i");           
            if (this.searchInput.length == 0) {
                return this.genreList;
            } else {
                this.filterList = [];

                for(var i=0; i<this.genreList.length; i++){
                    if(regex1.test(this.genreList[i])){
                        this.filterList.push(this.genreList[i]);
                    }
                }

                return this.filterList;
            }
        }
    }
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

    ul li{
        margin: auto;
        padding-left: 3em;
        list-style-type: none;
        line-height: 2em;
        word-wrap: break-word;
    }

    ul li:hover{
        cursor: pointer;
        text-decoration: underline;
        color: steelblue;
    }
</style>
