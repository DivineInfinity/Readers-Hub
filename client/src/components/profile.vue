<template>
    <el-card style="margin:0px 20px;">
    <el-row>
      <el-col :lg="6" :sm="24">
        <img :src="user.profilePic" style="border-radius:10%" height="150" width="150">
        <div>
        <el-button type="text" @click="dialogFormVisible = true">Change Profile Photo</el-button>

        <el-dialog title="Change Profile Photo" :visible.sync="dialogFormVisible">
            <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
            <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
          </el-upload>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">Upload</el-button>
          </span>
        </el-dialog>
        </div>
        <h4>{{user.name}}</h4>
        <h6><a href="#">friends({{user.friendCount}})</a></h6>
      </el-col>
      <el-col :lg="18" :sm="24">
          <h6 style="text-align:left" >Bio</h6>
          <textarea style="width:100%;min-height:150px;border: 1px solid #dcdfe6;border-radius:4px;resize:none" placeholder="Bio" :readonly="!isEditable " maxlength="100" v-model="user.bio" id="bioTextArea"></textarea>
      <el-button @click="toggleBio()" style="margin-left:auto;">Edit Bio</el-button>
      <el-button @click="toggleBio()" v-if="isEditable">Save</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :lg="6" style="margin-top:50px;">

      </el-col>
      <el-col :lg="18" :sm="24" style="margin-top:50px;">
        <h6 style="text-align:left">Recently Rated Books</h6>
        <el-card style="margin-left:auto">

        <el-row>
          <span v-if="user.recentlyRated.length==0">No Books Found</span>
          <el-col :lg="6" :sm="12" style="padding:0px 10px"><img src="http://books.google.com/books/content?id=LHbigwXO4s0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"></el-col>
          <el-col :lg="6" :sm="12" style="padding:0px 10px"><img src="http://books.google.com/books/content?id=LHbigwXO4s0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"></el-col>
          <el-col :lg="6" :sm="12" style="padding:0px 10px"><img src="http://books.google.com/books/content?id=LHbigwXO4s0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"></el-col>
          <el-col :lg="6" :sm="12" style="padding:0px 10px"><img src="http://books.google.com/books/content?id=LHbigwXO4s0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"></el-col>
        </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :lg="6" style="margin-top:50px;">

      </el-col>
      <el-col :lg="18" :sm="24" style="margin-top:50px;">

        <el-card style="margin-left:auto">

        <el-row>
          <el-col :lg="6" :sm="12" style="padding:0px 10px"><img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.icons8.com%2Fios%2F1600%2F007AFF%2Fbook-shelf&f=1" height="200" width="150"><h5>shelf1</h5></el-col>
          <el-col :lg="6" :sm="12" style="padding:0px 10px"><img src="http://books.google.com/books/content?id=LHbigwXO4s0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"><h5>shelf2</h5></el-col>
          <el-col :lg="6" :sm="12" style="padding:0px 10px"><img src="http://books.google.com/books/content?id=LHbigwXO4s0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"><h5>shelf3</h5></el-col>
          <el-col :lg="6" :sm="12" style="padding:0px 10px"><img src="http://books.google.com/books/content?id=LHbigwXO4s0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"><h5>shelf4</h5></el-col>
        </el-row>

        </el-card>
      </el-col>
    </el-row>
    </el-card>
</template>
<script>
import userService from "../services/userService.js";
export default {
  name: "profile",
  data() {
    return {
      dialogFormVisible:false,
      isEditable: false,
      user: {
        name: "John Doe",
        friendCount: 40,
        profilePic: "https://www.w3schools.com/howto/img_avatar.png",
        bio: "i am a person with book phobia",
        recentlyRated: [],
        shelves: []
      }
    };
  },
  methods: {
    toggleBio() {
      this.isEditable = !this.isEditable;
      if (this.isEditable == true)
        document.getElementById("bioTextArea").focus();
      else document.getElementById("bioTextArea").blur();
    },
    async getuser() {
      var response = await userService.getUserById(this.$route.params.id);
      console.log(response);
      this.user.name = response.data.user.name;
      //this.user.bio = response.data.user.bio;
      //this.user.profilePic = response.data.user.profilePic;
    }
  },
  mounted() {
    this.getuser();
  }
};
</script>

