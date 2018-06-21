<template>

  <div id="app">
    <el-menu :default-active="activeIndex" style="margin-left:20px;margin-right:20px;" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="0"><span>Reader's Hub</span></el-menu-item>
      <el-menu-item index="1">
        <el-button round plain @click="toHome()">Home</el-button>
      </el-menu-item>
      <el-menu-item index="2">
        <el-button round plain>My Shelf</el-button>
      </el-menu-item>
      <el-menu-item index="3">
        <el-button round plain>Genres</el-button>
      </el-menu-item>
      <el-menu-item index="4"><a href="#" target="_blank">
        <el-button round plain>Discussions</el-button>
      </a></el-menu-item>
      <el-menu-item index="5">
        <el-input id="searchInput"
                  class="search-input"
                  v-model="searchInput"
                    placeholder="Please input"
                    clearable>
          </el-input>
        <el-button id="searchButton" @click="search()" icon="el-icon-search" circle></el-button>
      </el-menu-item>
    </el-menu>


    <router-view :key="$route.path"></router-view>
   

  </div>

</template>

<script>
  import Home from '../src/components/home'
  import searchService from './services/searchService'
  export default {
    name: 'App',
    data:{
      isExpanded : false,
      isHidden : true,
      searchInput:'',
      loading:''
    },
    methods:{ 
      async search(){
        console.log("Search initialized");
        this.$router.push({name:'search-page',params:{searchQuery: this.searchInput}})
      },
      toHome(){
        console.log("To Home");
        this.$router.push({name:'home'});
      }
    },
    mounted(){
    }
  }

</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #searchButton {
    padding-right: 4px;
    padding-left: 8px;
  }


  .search-input {
  /*  width: 0;
    visibility: hidden !important;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    transition: all .5s ease;*/

 /*   width: 200px;
    max-width:0;
    padding: 5px;
    transition: all .5s ease;
    position:absolute;
    right:20px;
    box-sizing:border-box;
    opacity:0;*/
  }

  .search-input.expand {
   /* visibility: visible;
    width: 100px;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    transition: all .5s ease;*/

  /*  max-width:200px;
    opacity:1;*/
  }


</style>


