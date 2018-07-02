<template>
  <el-card class="mainDiv">
    <el-container>
      <el-header>
        <el-row>
          <el-col :lg="8" :sm="12" style="padding:0px 10px">
            <el-dropdown class="shelfDropdown">
              <el-button type="primary">
                {{shelf.shelfName}}<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu style="margin-left:100px" class="" slot="dropdown">
                <el-dropdown-item>Action 1</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :lg="8" :sm="12" style="padding:0px 10px"><span><h2>{{shelf.shelfName}}</h2></span></el-col>
          <el-col :lg="6" :sm="12" style="padding:0px 10px">
            <el-button style="float:right;" type="success" round>Crate New Shelf</el-button>
          </el-col>
  <el-col :lg="2" :sm="12" style="padding:0px 10px">
    <el-dropdown>
      <el-button style="border: 0px;outline: none">
        <i style="font-size:x-large" class="el-icon-setting"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
        </el-row>


      </el-header>
      <el-main>
        <el-card style="margin-left:auto">

          <el-row>
            <el-col :lg="6" :sm="12" style="padding:0px 10px"><img
              src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.icons8.com%2Fios%2F1600%2F007AFF%2Fbook-shelf&f=1"
              height="200" width="150">
              <h5>
                <el-dropdown>
                  <el-button type="primary">
                    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item>Action 4</el-dropdown-item>
                    <el-dropdown-item>Action 5</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </h5>
            </el-col>
            <el-col :lg="6" :sm="12" style="padding:0px 10px"><img
              src="http://books.google.com/books/content?id=LHbigwXO4s0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api">
              <h5>shelf2</h5></el-col>
            <el-col :lg="6" :sm="12" style="padding:0px 10px"><img
              src="http://books.google.com/books/content?id=LHbigwXO4s0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api">
              <h5>shelf3</h5></el-col>
            <el-col :lg="6" :sm="12" style="padding:0px 10px"><img
              src="http://books.google.com/books/content?id=LHbigwXO4s0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api">
              <h5>shelf4</h5></el-col>
          </el-row>

        </el-card>
        <el-card style="margin-left:auto">

          <el-row>
            <el-col :lg="6" :sm="12" style="padding:0px 10px"><img
              src="http://books.google.com/books/content?id=LHbigwXO4s0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api">
            </el-col>
            <el-col :lg="6" :sm="12" style="padding:0px 10px"><img
              src="http://books.google.com/books/content?id=LHbigwXO4s0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api">
            </el-col>
            <el-col :lg="6" :sm="12" style="padding:0px 10px"><img
              src="http://books.google.com/books/content?id=LHbigwXO4s0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api">
            </el-col>
            <el-col :lg="6" :sm="12" style="padding:0px 10px"><img
              src="http://books.google.com/books/content?id=LHbigwXO4s0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api">
            </el-col>
          </el-row>
        </el-card>
        <el-card style="margin-left:auto">

          <el-row>
            <el-col :lg="6" :sm="12" style="padding:0px 10px"><img
              src="http://books.google.com/books/content?id=LHbigwXO4s0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api">
            </el-col>
            <el-col :lg="6" :sm="12" style="padding:0px 10px"><img
              src="http://books.google.com/books/content?id=LHbigwXO4s0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api">
            </el-col>
            <el-col :lg="6" :sm="12" style="padding:0px 10px"><img
              src="http://books.google.com/books/content?id=LHbigwXO4s0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api">
            </el-col>
            <el-col :lg="6" :sm="12" style="padding:0px 10px"><img
              src="http://books.google.com/books/content?id=LHbigwXO4s0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api">
            </el-col>
          </el-row>
        </el-card>
      </el-main>
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
  }

  .shelfName {
    text-align: center;
    float: right;
    margin: auto;
  }

  .shelfDropdown {
    width: 30px;
    float: left;
    padding-left: 30px;
  }
</style>
