<template>
    <el-conatiner>
        <el-row>
          <el-col :span="24">
            <el-card class="book-info-widget">
                <el-row>
                  <el-col :span="4" :xs="24">
                      <img :src="book.frontCover" height="140px" width="130px" style="box-shadow:5px 5px #888888">
                  </el-col>
                  <el-col :span="20" :xs="24">
                      <h1 >{{book.title}} By {{book.author}}</h1>
                  </el-col>
                </el-row>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="5" class="stats-widget">
          <el-col :span="14" :xs="24">
              <el-card class="stat-widget-card">
                <el-row class="review-bar">
                  <el-col :span="2">5<i class="el-icon-star-on"></i></el-col>
                  <el-col :span="20" style=""><el-progress :text-inside="true"  :stroke-width="30" :percentage="ratings.fiveStar" class="progress" color="#67c23a" ></el-progress></el-col>
                </el-row>
                <el-row class="review-bar">
                  <el-col :span="2">4<i class="el-icon-star-on"></i></el-col>
                  <el-col :span="20"><el-progress :text-inside="true"  :stroke-width="30" :percentage="ratings.fourStar" class="progress"></el-progress></el-col>
                </el-row>
                <el-row class="review-bar">
                  <el-col :span="2">3<i class="el-icon-star-on"></i></el-col>
                  <el-col :span="20"><el-progress :text-inside="true"  :stroke-width="30" :percentage="ratings.threeStar" class="progress" color="rgba(142, 113, 199, 0.7"></el-progress></el-col>
                </el-row>
                <el-row class="review-bar">
                  <el-col :span="2">2<i class="el-icon-star-on"></i></el-col>
                  <el-col :span="20"><el-progress :text-inside="true"  :stroke-width="30" :percentage="ratings.twoStar" class="progress" color="#cdd040"></el-progress></el-col>
                </el-row>
                <el-row class="review-bar">
                  <el-col :span="2">1<i class="el-icon-star-on"></i></el-col>
                  <el-col :span="20"><el-progress :text-inside="true"  :stroke-width="30" :percentage="ratings.oneStar" class="progress" color="#ce492b"></el-progress></el-col>
                </el-row>

              </el-card>
            </el-col>
            <el-col :span="10" :xs="24">
              <el-card class="stat-widget-card">
                <h1>{{book.avgRating}}</h1>
                <el-rate v-model="book.avgRating" disabled show-score text-color="#ff9900" score-template="{value} rating"></el-rate>
                <h1><i class="fa fa-user"></i>&nbsp; {{ratings. totalRatings}} Total</h1>
              </el-card></el-col>
        </el-row>
        <el-row>
          <el-col :span="24" v-for="(review,index) in reviews" :key=index>
              <el-card v-bind:class="{ 'review-widget-expanded': review.isExpanded, 'review-widget-collapsed': !review.isExpanded }">
                  <el-row>
                    <el-col :span="2" justify="start" :xs="24">
                        <img :src="review.profilePic" alt="Avatar" style="border-radius:50%;height:50px;">
                    </el-col>
                    <el-col :span="4" justify="start" :xs="24">
                          <h5 style="margin:5px">{{review.userName}}</h5>
                          <el-rate v-model="review.rating" disabled show-score text-color="#ff9900"></el-rate>
                          <span style="color:gray;font-size:14px;">{{review.reviewDate}}</span>
                    </el-col>
                    <!-- <el-col :span="18">

                    </el-col> -->
                  </el-row>
                  <el-row>
                    <el-col style="text-align:left;">
                      <h3>{{review.reviewTitle}}</h3>
                    <p>{{review.review}}</p>
                    </el-col>
                  </el-row>

              </el-card>
              <el-button type="info" v-if="review.review.length>100 && review.isExpanded===false" style="width:100%;background-color:ghostwhite;color:black" @click="toggleExpand(index)">View More</el-button>
              <el-button type="info" v-if="review.isExpanded===true" style="width:100%;background-color:ghostwhite;color:black" @click="toggleExpand(index)">View Less</el-button>
          </el-col>
        </el-row>
    </el-conatiner>
</template>
<style>
.review-widget-expanded {
  /* height: 200px; */
  height: auto;
  margin-top: 10px;
  /* border-radius:10%; */
  /* overflow: scroll; */
}
.review-widget-collapsed {
  /* height: 200px; */
  height: 200px;
  margin-top: 10px;
  /* border-radius:10%; */
  /* overflow: scroll; */
}
.book-info-widget {
  margin-top: 10px;
}
.stats-widget {
  margin-top: 5px;
}

.progress {
  width: 70%;
}
.review-bar {
  margin-top: 10px;
}
.rating-heading {
  float: left;
  margin-right: 8px;
}
.stat-widget-card {
  min-height: 250px;
}
@media (max-width: 576px) {
  .review-widget-collapsed {
    /* height: 200px; */
    height: 300px;
    margin-top: 10px;
    /* border-radius:10%; */
    /* overflow: scroll; */
  }
}
</style>
<script>
export default {
  data() {
    return {
      value5: 3.7,
      book: {
        title: "Book name",
        author: "random author",
        frontCover:
          "https://images-na.ssl-images-amazon.com/images/I/51swx%2Bc%2BwyL._SY346_.jpg",
        avgRating: 4.4
      },
      ratings: {
        fiveStar: 50,
        fourStar: 30,
        threeStar: 20,
        twoStar: 7,
        oneStar: 3,
        totalRatings: 300
      },
      reviews: [
        {
          userName: "jhon Doe",
          profilePic: "https://www.w3schools.com/howto/img_avatar.png",
          review:
            "Ut dolor excepteur   asdasdasdasdsad occaecat et irure quis aliquip ipsum esse elit minim laborum est dolore. Et commodo cupidatat irure adipisicing eiusmod qui adipisicing cupidatat labore aliqua consequat duis ad. Commodo commodo proident cillum minim duis ullamco minim voluptate. Minim sint id eiusmod exercitation eiusmod veniam deserunt. Lorem occaecat non ex dolore non aliqua duis esse.Aute aute eu incididunt nisi nisi culpa esse fugiat. Qui anim est magna nisi dolore aliqua aliquip sint. Esse ut laborum irure esse ullamco proident. Quis esse ex eu est Lorem est aliquip voluptate occaecat consequat do aliquip. Tempor cupidatat eu culpa dolore ad.",
          reviewTitle:
            "Velit consequat incididunt Lorem sadasdasd sunt eu consequat esse elit est aliquip occaecat consequat do.",
          rating: 1,
          reviewDate: "12/11/2012",
          isExpanded: false
        },
        {
          userName: "jhon Doe",
          profilePic: "https://www.w3schools.com/howto/img_avatar.png",
          review:
            "Ut dolor excepteur occaecat et irure quis aliquip ipsum esse elit minim laborum est dolore. Et commodo cupidatat irure adipisicing eiusmod qui adipisicing cupidatat labore aliqua consequat duis ad. Commodo commodo proident cillum minim duis ullamco minim voluptate. Minim sint id eiusmod exercitation eiusmod veniam deserunt. Lorem occaecat non ex dolore non aliqua duis esse.Aute aute eu incididunt nisi nisi culpa esse fugiat. Qui anim est magna nisi dolore aliqua aliquip sint. Esse ut laborum irure esse ullamco proident. Quis esse ex eu est Lorem est aliquip voluptate occaecat consequat do aliquip. Tempor cupidatat eu culpa dolore ad.",
          reviewTitle:
            "Velit consequat incididunt Lorem sunt eu consequat esse elit est aliquip occaecat consequat do.",
          rating: 5,
          reviewDate: "12/12/2012",
          isExpanded: false
        },
        {
          userName: "jhon Doe",
          profilePic: "https://www.w3schools.com/howto/img_avatar.png",
          review:
            "Ut dolor excepteur occaecat et irure quis aliquip ipsum esse elit minim laborum est dolore. Et commodo cupidatat irure adipisicing eiusmod qui adipisicing cupidatat labore aliqua consequat duis ad. Commodo commodo proident cillum minim duis ullamco minim voluptate. Minim sint id eiusmod exercitation eiusmod veniam deserunt. Lorem occaecat non ex dolore non aliqua duis esse.Aute aute eu incididunt nisi nisi culpa esse fugiat. Qui anim est magna nisi dolore aliqua aliquip sint. Esse ut laborum irure esse ullamco proident. Quis esse ex eu est Lorem est aliquip voluptate occaecat consequat do aliquip. Tempor cupidatat eu culpa dolore ad.",
          reviewTitle:
            "Velit consequat incididunt Lorem sunt eu consequat esse elit est aliquip occaecat consequat do.",
          rating: 2,
          reviewDate: "12/12/2012",
          isExpanded: false
        },
        {
          userName: "jhon Doe",
          profilePic: "https://www.w3schools.com/howto/img_avatar.png",
          review: "nice book",
          reviewTitle:
            "Velit consequat incididunt Lorem sunt eu consequat esse elit est aliquip occaecat consequat do.",
          rating: 4,
          reviewDate: "12/12/2012",
          isExpanded: false
        }
      ]
    };
  },
  methods: {
    toggleExpand(i) {
      this.reviews[i].isExpanded = !this.reviews[i].isExpanded;
    }
  }
};
</script>
