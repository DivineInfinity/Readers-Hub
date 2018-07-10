<template>
  <el-card class="mainDiv">
    <el-container>
      <el-header>
        <el-row>
          <el-col :lg="8" :sm="12" style="padding:0 10px">
            <el-dropdown class="shelfDropdown" @command="changeShelfName">
              <el-button type="primary">
                {{currentShelf.shelfName}}<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu style="margin-left:100px" class="" slot="dropdown">
                <el-dropdown-item v-for="shelf in shelves"
                                  :command="{name:shelf.shelfName,books:shelf.books}"
                                  :key="shelf.shelfName">{{shelf.shelfName}}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :lg="8" :sm="12" style="padding:0 10px"><span><h2>{{currentShelf.shelfName}}</h2></span></el-col>
          <el-col :lg="6" :sm="12" style="padding:0 10px">
            <el-button style="float:right;" type="success" @click="dialogFormVisible = true" round>Crate New Shelf
            </el-button>

            <el-dialog title="Create A New Shelf" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="Shelf Name:" :label-width="formLabelWidth">
                  <el-input v-model="form.shelfName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="Shelf Privacy:" :label-width="formLabelWidth">
                  <el-radio-group v-model="form.isPrivate">
                    <el-radio :label=false>Public</el-radio>
                    <el-radio :label=true>Private</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">Cancel</el-button>
    <el-button type="primary" @click="createNewShelf(form.shelfName,form.isPrivate)">Confirm</el-button>
  </span>
            </el-dialog>

          </el-col>
          <el-col :lg="2" :sm="12" style="padding:0 10px">
            <el-dropdown>
              <el-button style="border: 0;outline: none">
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
        <el-card style="margin-left:auto">

          <el-row>
            <el-col v-for="book in currentShelf.books" :key="book" :lg="6" :sm="12"
                    style="padding:0 10px"><img
              :src="book.frontCover"
              height="200" width="150">
              <h5>
                <el-dropdown style="margin: 10px;" @command="changeBookStatus">
                  <el-button type="primary" round>
                    {{book.readingStatus}}<i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Currently Reading</el-dropdown-item>
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
  import userService from "../services/userService";
  export default {
    name: "shelf",
    data() {
      return {
        loading: "",
        dialogFormVisible: false,
        form: {
          shelfName: '',
          isPrivate: false
        },
        formLabelWidth: '120px',
        currentShelf: {
          shelfName: "My Shelf",
          books: [{
            frontCover: "https://books.google.com/books/content?id=-m8sR4rZbb4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            readingStatus: "Currently Reading"
          },
            {
              frontCover: "http://books.google.com/books/content?id=qBlJNb9dhEkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
              readingStatus: "Want To Read"
            },
            {
              frontCover: "http://books.google.com/books/content?id=qBlJNb9dhEkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
              readingStatus: "Want To Read"
            },
          ]
        },
        shelves: [
          {
            shelfName: "My Shelf",
            books: [{
              frontCover: "https://books.google.com/books/content?id=-m8sR4rZbb4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
              readingStatus: "Currently Reading"
            },
              {
                frontCover: "http://books.google.com/books/content?id=qBlJNb9dhEkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                readingStatus: "Want To Read"
              },
              {
                frontCover: "http://books.google.com/books/content?id=qBlJNb9dhEkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                readingStatus: "Want To Read"
              },
            ]
          }, {
            shelfName: "Horror Zone",
            books: [{
              frontCover: "https://books.google.com/books/content?id=-m8sR4rZbb4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
              readingStatus: "Currently Reading"
            },
              {
                frontCover: "http://books.google.com/books/content?id=qBlJNb9dhEkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                readingStatus: "Want To Read"
              },
              {
                frontCover: "http://books.google.com/books/content?id=qBlJNb9dhEkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                readingStatus: "Want To Read"
              },
            ]
          },
          {
            shelfName: "Adventures",
            books: [{
              frontCover: "https://books.google.com/books/content?id=-m8sR4rZbb4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
              readingStatus: "Currently Reading"
            },
              {
                frontCover: "http://books.google.com/books/content?id=qBlJNb9dhEkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                readingStatus: "Want To Read"
              },
              {
                frontCover: "http://books.google.com/books/content?id=qBlJNb9dhEkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                readingStatus: "Want To Read"
              },
            ]
          }, {
            shelfName: "Mysteries",
            books: [{
              frontCover: "https://books.google.com/books/content?id=-m8sR4rZbb4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
              readingStatus: "Currently Reading"
            },
              {
                frontCover: "http://books.google.com/books/content?id=qBlJNb9dhEkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                readingStatus: "Want To Read"
              },
              {
                frontCover: "http://books.google.com/books/content?id=qBlJNb9dhEkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                readingStatus: "Currently Reading"
              },
            ]
          }
        ]
      };
    },
    methods: {
      async changeShelfName(shelf) {
        this.currentShelf.shelfName = shelf.name;
        //this.currentShelf.frontCovers = shelf.frontCovers;
        this.currentShelf.books = shelf.books;
      },

      async createNewShelf(name,isPrivate) {
        console.log(name);
        this.dialogFormVisible = false;
        let userID = "5b4470141ab1cb0078759be3";
        const response = await userService.createNewShelf(userID,name,isPrivate);
        console.log(response);
      },

      async changeBookStatus() {

      }

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
