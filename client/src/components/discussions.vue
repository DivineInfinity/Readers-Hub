<template>
  <div class="bodyContainer">
    <el-container class="mainContainer">

        <el-row>
          <el-col :span="7" :xs="24" class="bookContainer">
            <div class="container">
              <div class="main">
                <img :src="book.frontCover" style="margin-top:35px" height="200" width="150">
                <el-rate class="rating" v-model="value5" disabled show-score text-color="orange" score-template="">
                </el-rate>
              </div>
            </div>
          </el-col>

          <el-col class="descriptionContainer" :span="17" :xs="24">
            <div style="margin-top:50px;margin-bottom:30px;">
            <center><h2 style="color:grey">Discussions</h2></center>
            <h2>{{book.title}}</h2>
            <h5>By {{book.author}}</h5>
            </div>
            <p class="description">{{book.description}}</p>
            <div style="margin-top:8%!important;">

            <h5>Published By: {{book.publisher}}</h5>
            </div>
          </el-col>
        </el-row>
      </el-container>
       <el-card style="margin-top:2px;margin-right:17px;margin-left:17px">
       <vue-disqus shortname="readershub" :identifier="book._id" :url="`https://readershub.disqus.com/${book._id}`"></vue-disqus>
       </el-card>
  </div>
</template>
<script>
  import bookDetailsService from '../services/bookDetailsService'
  export default {

    name: 'BookDetails',
    data() {
      return {
        isNotFlipped: true,
        value2: null,
        value5: 4,
        display: true,
        alwaysTrue: true,
        book: { },
        searchQuery:'',
        loading:''
      }
    },
    methods: {
      async fetchBookDetails(){
        const response = await bookDetailsService.fetchBookDetails(this.$route.params.id);
        console.log(response.data.bookDetails);
        this.book=response.data.bookDetails;

      },
      async fetchBookInMongo(){
        const response = await bookDetailsService.fetchBookInMongo(this.searchQuery);
        console.log(response.data);
      },
      toggleExpand(i) {
      this.reviews[i].isExpanded = !this.reviews[i].isExpanded;
      },

      toViewAllReviews(){
        this.$router.push({name:'reviews', params:{id:this.$route.params.id}})
      },
      loadingScreenOn() {
        this.loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
      },
      loadingScreenOff(){
        this.loading.close();
      }
    },
    mounted(){
      this.loadingScreenOn()
      this.fetchBookDetails();
    },
    updated(){
        this.loadingScreenOff()
    }
  }
</script>
<style>
  @media(max-width: 900px) {
    .bookContainer{
      width:100%;
      display:block;
    }
    .descriptionContainer{
      width:100%;
      display:block;
    }
    .mainContainer{
      display:block;
    }
    .detailsCol{
      width:100%;
      display:block;
    }
  }
  .bodyContainer {
    background-color: steelblue;
  }
  .mainContainer {
    margin-left: 20px;
    margin-right: 20px;
  }
  .detailItem{
    padding:2px;
  }
  .el-header, .el-footer {
    background-color: white;
    color: #333;
    text-align: center;
    margin-bottom: 2px;
    line-height: 20px;
    margin-top: 0px !important;
    width: 100%;
    height:30px!important;
  }
  .el-row{
    width:100%;
  }
  .bookContainer {
    background-color: white;
    color: #333;
    text-align: center;
    padding: 20px;
    height: 100%;
  }
  .review-widget {
    height: auto;
  }
  .bookDetails {
    padding: 10px;
    margin-top: 2px;
    margin-left:20px;
    margin-right:20px;
    background-color: white;
    text-align: center;
  }
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .review {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 10px;
    margin-top: 2px;

  }
  .reviewContainer {
    margin-top: 10px;
  }
  .description {
    text-align: left;
    color: black;
    line-height: 20px;
    margin-right:10px;
    min-height: 120px;
  }
  .descriptionContainer {
    background-color: white;
    height: 100%;
    border-left: 2px solid steelblue;
    padding-left: 50px !important;
    text-align: left;
  }
  .el-rate {
    margin-top: 2px;
  }
  .rating {
    text-align: center;
    margin-top:20px;
  }
  .el-dropdown {
    margin-top: 20px;
  }
  .detailsCol {
    padding:20px;
    border: 1px solid lightgrey;
    text-align: justify;
  }
  .bk-list {
    list-style: none;
    position: relative;
  }
  .bk-list li {
    position: relative;
    width: 50%;
    float: left;
    z-index: 1;
    margin: 0px 50px 0px 0;
    -webkit-perspective: 1800px;
    perspective: 1800px;
  }
  .clearfix{
    margin-bottom:5px!important;
  }
  .bk-info {
    position: relative;
    margin-top: 320px;
  }
  .bk-info h3 {
    padding: 25px 0 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    font-size: 26px;
  }
  .bk-info h3 span:first-child {
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    padding-bottom: 5px;
    display: block;
    color: #777;
  }
  .bk-info p {
    line-height: 24px;
    color: #444;
  }
  .bk-info button {
    background: #FC756F;
    border: none;
    color: #fff;
    display: inline-block;
    padding: 3px 15px;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    cursor: pointer;
    margin-right: 4px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  }
  .bk-info button.bk-active,
  .bk-info button:active {
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8),
    inset 0 -1px 1px rgba(0, 0, 0, 0.2);
  }
  .no-touch .bk-info button:hover,
  .bk-info button.bk-active {
    background: #d0544e;
  }
  .bk-list li .bk-book {
    margin-top:5px;
    position: absolute;
    width: 160px;
    height: 225px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: -webkit-transform .5s;
    transition: transform .5s;
  }
  .bk-list li .bk-book.bk-bookdefault:hover {
    -webkit-transform: rotate3d(0, 1, 0, 35deg);
    transform: rotate3d(0, 1, 0, 35deg);
  }
  .bk-list li .bk-book > div,
  .bk-list li .bk-front > div {
    display: block;
    position: absolute;
  }
  .bk-list li .bk-front {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform-origin: 0% 50%;
    transform-origin: 0% 50%;
    -webkit-transition: -webkit-transform .5s;
    transition: transform .5s;
    -webkit-transform: translate3d(0, 0, 20px);
    transform: translate3d(0, 0, 20px);
    z-index: 10;
  }
  .bk-list li .bk-front > div {
    z-index: 1;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
  .bk-list li .bk-page {
    -webkit-transform: translate3d(0, 0, 19px);
    transform: translate3d(0, 0, 19px);
    display: none;
    width: 295px;
    height: 390px;
    top: 5px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 9;
  }
  .bk-list li .bk-front,
  .bk-list li .bk-back,
  .bk-list li .bk-front > div {
    width: 110%;
    height: 17.5em;
  }
  .bk-list li .bk-left,
  .bk-list li .bk-right {
    width: 40px;
    left: -20px;
  }
  .bk-list li .bk-top,
  .bk-list li .bk-bottom {
    width: 295px;
    height: 40px;
    top: -15px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .bk-list li .bk-back {
    -webkit-transform: rotate3d(0, 1, 0, -180deg) translate3d(0, 0, 20px);
    transform: rotate3d(0, 1, 0, -180deg) translate3d(0, 0, 20px);
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);
    border-radius: 3px 0 0 3px;
  }
  .bk-list li .bk-cover-back {
    background-color: #000;
    -webkit-transform: rotate3d(0, 1, 0, -179deg);
    transform: rotate3d(0, 1, 0, -179deg);
  }
  .bk-list li .bk-right {
    height: 390px;
    top: 5px;
    -webkit-transform: rotate3d(0, 1, 0, 90deg) translate3d(0, 0, 295px);
    -moz-transform: rotate3d(0, 1, 0, 90deg) translate3d(0, 0, 295px);
    transform: rotate3d(0, 1, 0, 90deg) translate3d(0, 0, 295px);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .bk-list li .bk-left {
    height: 280px;
    -webkit-transform: rotate3d(0, 1, 0, -90deg);
    transform: rotate3d(0, 1, 0, -90deg);
  }
  .bk-list li .bk-top {
    -webkit-transform: rotate3d(1, 0, 0, 90deg);
    transform: rotate3d(1, 0, 0, 90deg);
  }
  .bk-list li .bk-bottom {
    -webkit-transform: rotate3d(1, 0, 0, -90deg) translate3d(0, 0, 390px);
    transform: rotate3d(1, 0, 0, -90deg) translate3d(0, 0, 390px);
  }
  /* Transform classes */
  .bk-list li .bk-viewinside .bk-front {
    -webkit-transform: translate3d(0, 0, 20px) rotate3d(0, 1, 0, -160deg);
    transform: translate3d(0, 0, 20px) rotate3d(0, 1, 0, -160deg);
  }
  .bk-list li .bk-book.bk-viewinside {
    -webkit-transform: translate3d(0, 0, 150px) rotate3d(0, 1, 0, 0deg);
    transform: translate3d(0, 0, 150px) rotate3d(0, 1, 0, 0deg);
  }
  .bk-list li .bk-book.bk-viewback {
    -webkit-transform: translate3d(0, 0, 0px) rotate3d(0, 1, 0, 180deg);
    transform: translate3d(0, 0, 0px) rotate3d(0, 1, 0, 180deg);
  }
  /* Main colors and content */
  .bk-list li .bk-page,
  .bk-list li .bk-right,
  .bk-list li .bk-top,
  .bk-list li .bk-bottom {
    background-color: #fff;
  }
  .bk-list li .bk-front > div {
    border-radius: 0 3px 3px 0;
    box-shadow: inset 4px 0 10px rgba(0, 0, 0, 0.1);
  }
  .bk-list li .bk-front:after {
    content: '';
    position: absolute;
    top: 1px;
    bottom: 1px;
    left: -1px;
    width: 1px;
  }
  .bk-list li .bk-cover:after,
  .bk-list li .bk-back:after {
    content: '';
    position: absolute;
    top: 0;
    left: 10px;
    bottom: 0;
    width: 3px;
    background: rgba(0, 0, 0, 0.06);
    box-shadow: 1px 0 3px rgba(255, 255, 255, 0.1);
  }
  .bk-list li .bk-back:after {
    left: auto;
    right: 10px;
  }
  .bk-left h2 {
    width: 300px;
    height: 40px;
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: rotate(90deg) translateY(-40px);
    transform: rotate(90deg) translateY(-40px);
  }
  .bk-content {
    position: absolute;
    top: 30px;
    left: 20px;
    bottom: 20px;
    right: 20px;
    padding: 30px;
    overflow: hidden;
    background: #fff;
    opacity: 0;
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: opacity 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out;
    cursor: default;
  }
  .bk-content-current {
    opacity: 1;
    pointer-events: auto;
  }
  .bk-content p {
    padding: 0 0 10px;
    -webkit-font-smoothing: antialiased;
    color: #000;
    font-size: 13px;
    line-height: 20px;
    text-align: justify;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .bk-page nav {
    display: block;
    text-align: center;
    margin-top: 20px;
    position: relative;
    z-index: 100;
    cursor: pointer;
  }
  .bk-page nav span {
    display: inline-block;
    width: 20px;
    height: 20px;
    color: #aaa;
    background: #f0f0f0;
    border-radius: 50%;
  }
  /* Individual style & artwork */
  /* Book 1 */
  .book-1 .bk-front > div,
  .book-1 .bk-back,
  .book-1 .bk-left,
  .book-1 .bk-front:after {
    background-color: black;
  }
  .book-1 .bk-cover {
    background-repeat: no-repeat;
    background-position: 0px 0px;
    background-size: 100%;
  }
  .book-1 .bk-cover h2 {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 30px;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.1);
  }
  .book-1 .bk-cover h2 span:first-child,
  .book-1 .bk-left h2 span:first-child {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 13px;
    padding-right: 20px;
  }
  .book-1 .bk-cover h2 span:first-child {
    display: block;
  }
  .book-1 .bk-cover h2 span:last-child,
  .book-1 .bk-left h2 span:last-child {
    font-family: "Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif;
  }
  .book-1 .bk-content p {
    font-family: Georgia, Times, "Times New Roman", serif;
  }
  .book-1 .bk-left h2 {
    color: #fff;
    font-size: 15px;
    line-height: 40px;
    padding-right: 10px;
    text-align: right;
  }
  .book-1 .bk-back p {
    color: #fff;
    font-size: 13px;
    padding: 40px;
    text-align: center;
    font-weight: 700;
  }

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
