<template>

  <div id="app">
    <b-navbar class="navBar" style="" toggleable="md" type="light" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">Reader's Hub</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#" @click="toHome()">Home</b-nav-item>
          <b-nav-item href="#">My Shelf</b-nav-item>
          <b-nav-item href="#">Genres</b-nav-item>
          <b-nav-item href="#">Discussions</b-nav-item>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <!-- <input type="text" v-model="searchInput" v-on:keydown.enter="search()" placeholder="Search"/> -->
            <!--<b-button size="sm" class="my-2 my-sm-0" @click="search()">Search</b-button>-->

    <div class="autocomplete" style="width:300px;">
    <input id="search" type="text" name="search" autocomplete="off" placeholder="Search for Books" v-model="searchInput"  v-on:keydown.enter="search()" v-on:keyup.38="selectUp" v-on:keyup.40="selectDown" v-on:keyup="suggest()" v-on:focusout="outOfFocus()">
      <div  v-if="searchInput.length>0" class="autocomplete-items" id="autocomplete-list">
        <input type="text" :value="searchSuggestions[index]" readonly v-for="(city,index) of searchSuggestions" :key="index"/>
      </div>
  </div>
  <el-button class="searchButton" id="searchButton"  @click="search()" v-on:keyup.enter="search()" icon="el-icon-search"
                       circle></el-button>
          </b-nav-form>

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
    <router-view :key="$route.path"></router-view>


  </div>

</template>

<script>
  import Home from '../src/components/home'
  import searchService from './services/searchService'
  export default {
    name: 'App',
    data() {
      return{
          isExpanded: false,
      isHidden: true,
      searchInput: '',
      loading: '',
      searchSuggestions:['Shebazabad', 'Shezm', 'Shebaz Capital Territory', 'Shebazshire', 'Sehbazistan', 'Shebaz royal area'],
      selectedSuggestion:-1
      }
      },
    methods: {
      async search() {
        console.log("Search initialized");
        this.searchSuggestions=[];
        this.selectedSuggestion=-1;
        this.$router.push({name: 'search-page', params: {searchQuery: this.searchInput}})
      },
      async suggest(){

        console.log("I have been called");
        if(this.searchInput.length<=0)
        {
          this.searchSuggestions=[];
          this.selectedSuggestion=-1;
        }
        
        var inp = String.fromCharCode(event.keyCode);

        
        if((/[a-zA-Z0-9-_ ]/.test(inp))&&this.searchInput.length>0)
        {
          var response = await searchService.searchSuggestions(this.searchInput);
          console.log(response.data);
          this.searchSuggestions=response.data.searchSuggestions;
        }
        
      },
      outOfFocus(){
        this.searchSuggestions=[];
        this.selectedSuggestion=-1;
      },
      toHome() {
        console.log("To Home");
        this.$router.push({name: 'home'});
      },
      selectUp(){
        this.selectedSuggestion--;
        if(this.selectedSuggestion<0)this.selectedSuggestion=this.searchSuggestions.length-1;
        this.searchInput=this.searchSuggestions[this.selectedSuggestion];
        
      },
       selectDown(){
        this.selectedSuggestion++;
        if(this.selectedSuggestion>=this.searchSuggestions.length)this.selectedSuggestion=0;
        this.searchInput=this.searchSuggestions[this.selectedSuggestion];
      }
    },
    mounted() {
    }
  }

</script>


<style>

.autocomplete {
  /*the container must be positioned relative:*/
  position: relative;
  display: inline-block;
}

input[type=text] {
  background-color: white;
  width: 100%;
}
input[type=submit] {
  background-color: DodgerBlue;
  color: #fff;
  cursor: pointer;
}
.autocomplete-items {
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
}
.autocomplete-items div {
  padding: 10px;
  cursor: pointer;
  background-color: #fff; 
  border-bottom: 1px solid #d4d4d4; 
}
.autocomplete-items div:hover {
  /*when hovering an item:*/
  background-color: #e9e9e9; 
}
.autocomplete-active {
  /*when navigating through the items using the arrow keys:*/
  background-color: DodgerBlue !important; 
  color: #ffffff; 
}

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .navBar {
    margin-left: 20px;
    margin-right: 20px;
    background-color: white !important;
    margin-bottom: 5px;
  }

  .searchBar {
    height: 30px;
  }

  .searchButton {
    padding: 15px;
  }


</style>


