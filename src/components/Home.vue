<template>
  <v-container >

    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          v-if="loading"></v-progress-circular>
      </v-flex>
    </v-layout>

    <v-layout row wrap  class="content-inner" v-if="!loading">
      <v-flex xs12 sm11 md10 lg8 xl8>
   
        <v-carousel style="cursor: pointer;" hide-controls class="carusel-style">
            <v-carousel-item 
            v-for="meetup in meetups"
            v-if="meetup.type == 'stage'"
            :key="meetup.id"
            class="item-position">
             <img :src="meetup.imageUrl" class="img-style"  @click="onLoadMeetup(meetup.category)"  >
             <!-- <p>{{meetup.stage}}</P> -->
          </v-carousel-item>

        </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout row wrap v-if="!loading">
      <v-flex xs12 sm11 md8 >
         <h5 class="white--text pt-3">TOURdeHDR+2017 STAGE LIST</h5>
      </v-flex>
    </v-layout>

    

    <!-- <v-layout row wrap v-for="(meetup, index) in meetups" :key="meetup.id" class="mb-2 " v-if="!loading"> -->
    <v-layout row wrap v-for="(meetup, index) in meetups" :key="meetup.id" class="mb-2" v-if="meetup.type == 'stage'">
     
      <v-flex xs12 sm12 md11 lg8 xl8>
        <!-- <v-card v-if="meetup.type == 'stage'"> -->
        <v-card v-if="!loading">
          <v-container fluid>

            <v-layout row wrap>
              <v-flex xs12 sm5 md4 lg3 xl3>
                <div class="image-inner">
                  <img class="image" :src="meetup.imageUrl" alt="lorem" width="100%" height="auto">
                </div>
              </v-flex>
            <!-- </v-layout>
            <v-layout row wrap> -->
              <v-flex xs12 sm5 md8 lg9 xl9>
                <v-card-title primary-title>
                  <div>
                    <!-- <p class="white--text mb-0">STAGE {{ meetup.id }}</p> -->
                    <p class="white--text mb-0">STAGE {{ meetup.stageNo  }}</p>
                    <!-- <p class="white--text mb-0">key {{ meetup.id }}</p> -->
                    <h5 class="white--text mb-0"> {{ meetup.title }}</h5>
                    <p class="white--text mb-0"> {{ meetup.date | date }}</p>
                    <!-- <h5 class="white--text mb-0">location {{ meetup.location }}</h5>
                    <h5 class="white--text mb-0">creatorId {{ meetup.creatorId }}</h5>
                    <h5 class="white--text mb-0">category {{ meetup.category }}</h5>
                    <h5 class="white--text mb-0">stageNo {{ meetup.stageNo }}</h5>
                    <h5 class="white--text mb-0">tag {{ meetup.tag }}</h5>
                    <h5 class="white--text mb-0">type {{ meetup.type }}</h5> -->
                    <!-- <h5 class="white--text mb-0">{{ meetup.description }}</h5> -->
                    <!-- <div>{{ meetup.date | date }}</div> -->
                  </div>
                 </v-card-title>
              </v-flex>
            <!-- </v-layout>
            <v-layout row wrap>  -->
              <v-flex xs12 sm12 md12 lg12 xl12 >
                <v-card-actions >
                  <v-btn flat :to="'/title/' + meetup.category" >
                    <v-icon left dark>arrow_forward</v-icon>
                    View Stage 
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
            <v-layout row>

            </v-layout>
            <!-- <v-flex xs12 sm12 md12 lg12 xl12 >
                <v-card-actions >
                  <v-btn flat :to="'/title/' + meetup.category" >
                    <v-icon left dark>arrow_forward</v-icon>
                    View Stage 
                  </v-btn>
                </v-card-actions>
              </v-flex> -->

          </v-container>
        </v-card>
      </v-flex>
    </v-layout>

    
   
  </v-container>
</template>

<script>
export default {
  // data () {
    // return {
      // meetups: [
      //     {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2016/12/shishimai_title1.jpg',id:1, title:'獅子舞'},
      //     {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/02/kobe_again_title_stage2.jpg',id:2, title:'ＫＯＢＥ ＡＧＡＩＮ'},
      //     {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/03/rusted_car_title2.jpg',id:3, title:'ＲＵＳＴＥＤ ＣＡＲ'},
      //     {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2050/04/vintagecar_title1.jpg',id:4, title:'Vintage Car'},
      //     {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/04/retoro_car_title.jpg',id:5, title:'ＲＥＴＲＯ ＣＡＲ'},
      //     {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/05/Stage6_title.jpg',id:6, title:'瀬戸埠頭の見える岬でＨＤＲ'},
      //     {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/05/haruyoi_title2.jpg',id:7, title:'倉敷春宵あかり'},
      //     {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/08/tamanoFes_title21.jpg',id:8, title:'たまの港フェスティバルでＨＤＲ'},
      //     {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/09/a-bombe-dome.jpg',id:9, title:'Ａ‐ＢＯＭＢ ＤＯＭＥ'},
      //     {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/10/broad_title3.jpg',id:10, title:'黒島ビーナスロード'},
      //     {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/10/img2946_title10.jpg',id:11, title:'Building in Sky'}
      // ]
    // }
  // },
  computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      },
      loading () {
        return this.$store.getters.loading
      }
    },
  methods: {
    onLoadMeetup (id) {
       console.log('home onLoadMeetup id ' + id)
      this.$router.push('/title/' + id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.layout{
  justify-content: center; 
}

.carusel-style{
  height:500px;
  box-shadow: none;
}
.img-style{
  width:100%;
 height:auto;
}
.image-inner{
  width:100%;
  height:100%;
}
/* .item-position{
   align-items: flex-start;
} */

@media only screen and (max-width: 599px){
  .carusel-style{
    height:360px;
  }
  
}
@media only screen and (min-width: 599px) and (max-width: 959px){
  .carusel-style{
    height:360px;
  }
}
@media only screen and (min-width: 1265px) and (max-width: 1904px){
  .carusel-style{
    height:580px;
  }
}

@media only screen and (min-width: 1905px) {
  .carusel-style{
    height:800px;
  }
}


/* .title {
    position: absolute;
    top: -25px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    font-weight: 400;
    padding: 40px;
  } */


  
/* h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} */
</style>
