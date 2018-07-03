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
                <li class="listItem" >{{genre}}</li>
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
            var regex1 =  new RegExp('^'+this.searchInput, "i");           
            if (this.searchInput.length == 0) {
                return this.genreList;
            } else {
                this.filterList = [];            
            
                var startIndex  = 0,stopIndex = this.genreList.length - 1,
                middle = Math.floor((stopIndex + startIndex)/2);
                while(!(regex1.test(this.genreList[middle])) && startIndex < stopIndex){
                    //adjust search area
                    if (this.searchInput.localeCompare(this.genreList[middle]) == -1){
                        stopIndex = middle - 1;
                    } else{
                        startIndex = middle + 1;
                    }
                    //recalculate middle
                    middle = Math.floor((stopIndex + startIndex)/2);
                }

                this.firstIndex = middle;

                for(var i = this.firstIndex; this.keepSearching; i++){
                    console.log("Test: "+i+" "+regex1.test(this.genreList[i]));
                    if(regex1.test(this.genreList[i])){                        
                        this.filterList.push(this.genreList[i]);
                    }else{
                        this.keepSearching = false;
                    }
                }
                this.keepSearching = true;
                var tempArray = [];
                for(var i = this.firstIndex-1;i>=0 && this.keepSearching; i--){
                    console.log("Test: "+i+" "+regex1.test(this.genreList[i]));
                    if(regex1.test(this.genreList[i])){
                        tempArray.push(this.genreList[i]);
                    }else{
                        this.keepSearching = false;
                    }
                }
                tempArray = tempArray.sort();     
                this.filterList = tempArray.concat(this.filterList);
                this.keepSearching = true;
                console.log(this.filterList);
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
