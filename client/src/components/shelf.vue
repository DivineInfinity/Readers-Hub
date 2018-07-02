<template>
<el-card class="mainDiv">
   <el-container>
  <el-header>
    <el-dropdown class="shelfDropdown">
     <el-button type="primary">
    My Shelf<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu style="margin-left:100px" class="" slot="dropdown">
    <el-dropdown-item>Action 1</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

<span><h2>My Shelf</h2></span>
  </el-header>
  <el-main></el-main>
</el-container>
</el-card>
</template>

<script>
export default {
  name: "shelf",
  data() {
    return {
      loading: "",
      allShelves: [],
      shelf: {
        shelfName: "My Shelf",
        books: []
      }
    };
  }
};
</script>

<style scoped>
.mainDiv {
  margin-left: 20px;
  margin-right: 20px;
  /* background-image: url("../assets/wood.jpg"); */
  /* background-size: 1223px auto; */
  /* background-repeat: no-repeat; */
  height: 600px;

}
.shelfName {
  text-align: center;
  float: right;
  margin:auto;
}

.shelfDropdown {
  width: 30px;
  float: left;
  padding-left: 30px;
}

.topItems {
  padding-top: 30px;
}



</style>
