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
                <el-dropdown-item v-for="shelf in allShelves">{{shelf}}</el-dropdown-item>
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
                <el-dropdown-item>Filter</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>


      </el-header>
      <el-main>
        <el-card v-for="" style="margin-left:auto">

          <el-row>
            <el-col v-for="frontCover in shelf.bookCovers" :lg="6" :sm="12" style="padding:0px 10px"><img
              :src="frontCover"
              height="200" width="150">
              <h5>
                <el-dropdown style="margin: 10px;">
                  <el-button type="primary">
                    Currently Reading<i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Want To Read</el-dropdown-item>
                    <el-dropdown-item>Completed</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </h5>
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
        shelves: ["My Shelf", "My Favorites", "Must Read", "Horror Favorites", "Mystery Books"],
        shelf: {
          shelfName: "My Shelf",
          bookCovers: ["https://books.google.com/books/content?id=-m8sR4rZbb4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            "http://books.google.com/books/content?id=qBlJNb9dhEkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            "http://books.google.com/books/content?id=qBlJNb9dhEkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            "http://books.google.com/books/content?id=qBlJNb9dhEkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            "http://books.google.com/books/content?id=qBlJNb9dhEkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            "http://books.google.com/books/content?id=qBlJNb9dhEkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
          ]
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

  .shelfDropdown {
    width: 30px;
    float: left;
    padding-left: 30px;
  }
</style>
