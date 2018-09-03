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
                                  :command="{name:shelf.shelfName,books:shelf.books, shelfId:shelf._id}"
                                  :key="shelf.shelfName">{{shelf.shelfName}}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :lg="8" :sm="12" style="padding:0 10px"><span><h2>{{currentShelf.shelfName}}</h2></span>
            <el-input prefix-icon="el-icon-search" type="text" v-model="searchValue" placeholder="Search in shelf..."></el-input>
          </el-col>
          <!--<el-col :lg="4" :sm="12"> </el-col>-->
          <el-col :lg="6" :sm="12" style="padding:0 10px">
            <span><el-button type="danger" style="margin-left:5%;" icon="el-icon-delete" circle @click="deleteShelf(currentShelf.shelfId)"></el-button></span>
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
      <el-main style="margin-top: 30px">
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
                    <el-dropdown-item :command="{status:'Currently Reading', book}">Currently Reading</el-dropdown-item>
                    <el-dropdown-item :command="{status:'Want To Read', book}">Want To Read</el-dropdown-item>
                    <el-dropdown-item :command="{status:'Completed', book}">Completed</el-dropdown-item>
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
  import Vue from 'vue';
  export default {
    name: "shelf",
    data() {
      return {
        searchValue: "",
        loading: "",
        dialogFormVisible: false,
        form: {
          shelfName: '',
          isPrivate: false
        },
        formLabelWidth: '120px',
        currentShelf: {
          shelfName:'', 
          shelfId:'',
          books: [
          ]
        },
        shelves: [
        ]
      };
    },
    methods: {
      async changeShelfName(shelf) {
        this.currentShelf.shelfName = shelf.name;
        this.currentShelf.books = shelf.books;
        this.currentShelf.shelfId=shelf.shelfId;
      },

      async createNewShelf(name, isPrivate) {
        console.log(name);
        this.dialogFormVisible = false;
        let userID = Vue.localStorage.get("userId");
        const response = await userService.createNewShelf(userID,name,isPrivate);
        console.log(response);
      },

      async changeBookStatus(selectedBook) {
        let status = selectedBook.status;
        let book=selectedBook.book;
        book.readingStatus=status;
        const response = await userService.changeBookStatus(status, this.currentShelf.shelfId, book.bookId);
        console.log(response);

      },
      async getBooksFromShelves(){
        var userId = Vue.localStorage.get("userId");
        var response = await userService.getBooksFromShelves(userId);
        console.log(response.data);
        if(response.data.shelves){this.shelves = response.data.shelves;
         this.currentShelf.shelfName=this.shelves[0].shelfName;
         this.currentShelf.books=this.shelves[0].books;
         this.currentShelf.shelfId=this.shelves[0]._id;
         }
         if(this.shelves.length==0)alert("You dont have any shelves right now");
      },
      async deleteShelf(id){
       
        var userId = Vue.localStorage.get("userId");
        var response = await userService.deleteShelf(id, userId);
        console.log(response.data);
        alert("Successfully deleted the shelf...please refresh the page");
      }

    },
    mounted(){
      this.getBooksFromShelves();
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
