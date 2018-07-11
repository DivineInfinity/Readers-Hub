<template>

  <div id="app">
    <nav-bar :key="$route.path"></nav-bar>
    <router-view :key="$route.path"></router-view>
    <el-card style="margin:20px">
        © 2018 Reader's Hub |&nbsp; <a href="#">Home</a> |&nbsp;<a href="\contact-us">Contact Us</a> |&nbsp;<a href="#">About Us</a>
    </el-card>
  </div>

</template>

<script>
  import Home from '../src/components/home'
  import navbar from '../src/components/nav-bar'
  import searchService from './services/searchService'
  export default {
    name: 'App',
    data() {
      return{
      }
      },
       components: {
            'nav-bar': navbar
        },
    methods: {
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


