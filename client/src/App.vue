<template>

  <div id="app">
    <b-navbar class="navBar" style="" toggleable="md" type="light" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">Reader's Hub</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#" @click="toHome()">Home</b-nav-item>
          <b-nav-item href="#">My Shelf</b-nav-item>
          <b-nav-item href="#" @click="toGenres()">Genres</b-nav-item>
          <b-nav-item href="#">Discussions</b-nav-item>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" v-model="searchInput" placeholder="Search"/>
            <!--<b-button size="sm" class="my-2 my-sm-0" @click="search()">Search</b-button>-->
            <el-button class="searchButton" id="searchButton" @click="search()" icon="el-icon-search"
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
    data: {
      isExpanded: false,
      isHidden: true,
      searchInput: '',
      loading: ''
    },
    methods: {
      async search() {
        console.log("Search initialized");
        this.$router.push({name: 'search-page', params: {searchQuery: this.searchInput}})
      },
      toHome() {
        console.log("To Home");
        this.$router.push({name: 'home'});
      }
    },
    mounted() {
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


