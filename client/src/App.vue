<template>

  <div id="app" style="margin-left:10%;margin-right:10%">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item><span>Reader's Hub</span></el-menu-item>
      <el-menu-item index="1">
        <el-button round plain>Home</el-button>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">My Shelf</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">Genres</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Discussions</a></el-menu-item>
      <el-menu-item class="search-input">
        <el-input
          placeholder="Please input" type="search"
          clearable>
        </el-input>
        <el-button icon="el-icon-search" id="searchButton" circle></el-button>
      </el-menu-item>
    </el-menu>


    <router-view/>
    <el-container>
      <el-footer>
        Footer
      </el-footer>
    </el-container>

  </div>

</template>

<script>
  export default {
    name: 'App'
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

  el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    position: static;
    clear: both;
  }

  .search-input{

  }


</style>


