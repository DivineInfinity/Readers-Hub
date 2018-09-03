<template>
    <b-navbar v-if="this.showNav" :key="this.$route" class="navBar" style="" toggleable="md" type="light" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#" @click="toHome()"><img src="../assets/logo1.png" height="50" width="80"></b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#" @click="toHome()">Home</b-nav-item>
          <b-nav-item href="#" @click="toMyShelf()">My Shelf</b-nav-item>
          <b-nav-item href="#" @click="toGenres()">Genres</b-nav-item>
          <b-nav-item href="#" @click="toContactUs()">Contact Us</b-nav-item>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
    <div class="autocomplete" style="width:300px;">
    <input id="search" class="search-input" type="text" name="search" autocomplete="off" placeholder="Search for Books" v-model="searchInput"  v-on:keydown.enter="search()" v-on:keyup.38="selectUp" v-on:keyup.40="selectDown" v-on:keyup="suggestSomething()" v-on:focusout="outOfFocus()" required>
      <div  v-if="searchInput.length>0" class="autocomplete-items" id="autocomplete-list">
        <input type="text" :value="searchSuggestions[index]" readonly v-for="(city,index) of searchSuggestions" :key="index"/>
      </div>
  </div>
  <el-button class="searchButton" id="searchButton"  @click="search()" v-on:keydown.enter="search()" icon="el-icon-search"
                       circle></el-button>
          </b-nav-form>
          <span  style="margin-left:2px;" v-if="this.isLoggedIn"><img :src="getProfilePic()" style="border-radius:50%;height:40px;"><a href="#" style="color:black;" @click="toMyProfile()">{{this.userName}}</a> <a href="#" @click="logout()">Logout</a></span>
          <a v-else  style="margin-left:2px;" href="#" @click="toLogin()">Login</a>

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>


</template>

<script>
  import searchService from '../services/searchService'
  import Vue from 'vue';
  import VueLocalStorage from 'vue-localstorage';
  Vue.use(VueLocalStorage);
  export default {
    name: 'navbar',
    data() {
      return{
      isExpanded: false,
      isHidden: true,
      isLoggedIn:false,
      showNav:true,
      userName:'',
      searchInput: '',
      loading: '',
      searchSuggestions:[],
      selectedSuggestion:-1,
      }
      },
    methods: {
      async search() {
        console.log("Search initialized");
        this.searchSuggestions=[];
        this.selectedSuggestion=-1;
        if(this.searchInput)  
          this.$router.push({name: 'search-page', params: {searchQuery: this.searchInput}})
      },
      toLogin(){
        Vue.localStorage.remove("userName");
        Vue.localStorage.remove("profilePic");
        Vue.localStorage.remove("token");
        Vue.localStorage.remove("userId");
        this.isLoggedIn=false;
        this.$router.push({name:"login"});
      },
      toGenres(){
        this.$router.push({name:"genre"});
      },
      toContactUs(){
        this.$router.push({name:"contact-us"});
      },
      toMyShelf(){
      this.$router.push({name:"shelf"});
      },
      toMyProfile(){
        this.$router.push({name: 'profile', params: {id: Vue.localStorage.get("userId")}});
      },      
      logout(){
        console.log("Logout");
        Vue.localStorage.remove("userName");
        Vue.localStorage.remove("profilePic");
        Vue.localStorage.remove("token");
        Vue.localStorage.remove("userId");
        this.isLoggedIn=false;
        this.$router.push({name:"home"});
      },
      async suggest(){

        console.log("I have been called");

        if(this.searchInput.length==0)
        {
          this.searchSuggestions=[];
          this.selectedSuggestion=-1;
        }

        var inp = String.fromCharCode(event.keyCode);


        if(((/[a-zA-Z0-9-_ ]/.test(inp))||event.keyCode==8||event.keyCode==46)&&this.searchInput.length>0)
        {

          if(localStorage.getItem("searchSuggestions"))
          {
            var searchArray = JSON.parse(localStorage.getItem("searchSuggestions"));
            console.log("From Cache");
            console.log(searchArray);
          }
          else
          {
            console.log("Not from Cache");
            var searchArray = [];
            localStorage.searchSuggestions=searchArray
          }

                var regex1 =  new RegExp('^'+this.searchInput, 'i');

                var startIndex  = 0,stopIndex = searchArray.length - 1,
                middle = Math.floor((stopIndex + startIndex)/2);
                console.log(startIndex);
                console.log(stopIndex);
                while(!(regex1.test(searchArray[middle])) && startIndex < stopIndex){
                    console.log("IN WHILE "+searchArray[middle]);
                    console.log(regex1.test(searchArray[middle]));
                    //adjust search area
                    if (this.searchInput.localeCompare(searchArray[middle]) == -1){
                        stopIndex = middle - 1;
                    } else{
                        startIndex = middle + 1;
                    }
                    console.log("Middle: "+middle);
                    //recalculate middle
                    middle = Math.floor((stopIndex + startIndex)/2);
                }
            searchArray[middle]
            var count=5;
            this.searchSuggestions=[];
            for(var i=middle;i<searchArray.length && regex1.test(searchArray[i]) && count>0;i++)
            {
              this.searchSuggestions.push(searchArray[i]);
              count--;
            }
            if(count>0)
            {
              for(var i=middle-1;i>=0 && regex1.test(searchArray[i]) && count>0;i--)
              {
                this.searchSuggestions.push(searchArray[i]);
                count--;
              }
            }

          if(count==5)
          {
              console.log("Through Backend");
              var response = await searchService.searchSuggestions(this.searchInput);
              console.log(response.data);
              this.searchSuggestions=response.data.searchSuggestions;
              for(var i=0;i<this.searchSuggestions.length;i++)
              {
                if(!searchArray.includes(this.searchSuggestions[i]))
                  searchArray.push(this.searchSuggestions[i]);
              }

              searchArray = searchArray.sort();
              localStorage.searchSuggestions=JSON.stringify(searchArray);
          }


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
      },
      login(){
        if(Vue.localStorage.get("token"))
        {
          console.log("Logged in");
          this.isLoggedIn=true;
          this.userName=Vue.localStorage.get("userName");
        }
        else this.isLoggedIn=false;

      },
      showNavbar(){
        console.log("I am called");
       if(this.$route.path=="/login" || this.$route.path=="/signup")
       {
         this.showNav=false;
       }
       else
       {
         this.showNav=true;
       }
      },
      getProfilePic(){
        return Vue.localStorage.get('profilePic');
      }
    },
    computed:{
      suggestSomething(){
        this.suggest();
      }
    },
    created() {
      this.login();
      this.showNavbar();
    }
  }

</script>


<style>

@media(max-width: 500px) {
.search-input{
  padding:0px!important;
  max-width:154px;
}

}
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

.search-input{
border:2px solid lightgray;
border-radius:8px;
padding: 2px;
margin-left:10px;
z-index: -1;
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
  margin-left:10px;
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
    z-index:1;
  }


</style>


