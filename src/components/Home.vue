<template>
  <v-container >
    <v-layout row wrap justify-center class="content-inner" >
      <v-flex xs12 sm10 md8 lg8 xl8>
      <!-- <v-flex  > -->
        <v-carousel style="cursor: pointer;" hide-controls class="carusel-style">
          <!-- <v-carousel-item 
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id" 
            @click="onLoadMeetup(meetup.id)" > -->
            <v-carousel-item 
            v-for="meetup in meetups"
           
            :key="meetup.id" 
            @click="onLoadMeetup(meetup.id)" >
            <div class="title"> 
               STAGE-{{ meetup.id }} {{ meetup.title }}
             
           </div>
             
             <img :src="meetup.imageUrl" class="img-style">


          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>


    
    <!-- <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          v-if="loading"></v-progress-circular>
      </v-flex>
    </v-layout> -->
    <!-- <v-layout row wrap justify-center class="mt-2" v-if="!loading">
      <v-flex xs12 lg8 xl6 >
        <v-carousel style="cursor: pointer;">
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
            @click="onLoadMeetup(meetup.id)">
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout> -->
   
  </v-container>
</template>

<script>
export default {
 
  data () {
    return {
      meetups: [
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2016/12/shishimai_title1.jpg',id:1, title:'獅子舞'},
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/02/kobe_again_title_stage2.jpg',id:2, title:'ＫＯＢＥ ＡＧＡＩＮ'},
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/03/rusted_car_title2.jpg',id:3, title:'ＲＵＳＴＥＤ ＣＡＲ'},
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2050/04/vintagecar_title1.jpg',id:4, title:'Vintage Car'},
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/06/Female_Sitting_Pose_title1.jpg',id:5, title:'ＲＥＴＲＯ ＣＡＲ'},
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/06/img0749titled1x1.jpg',id:6, title:'瀬戸埠頭の見える岬でＨＤＲ'},
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/05/haruyoi_title.jpg',id:7, title:'倉敷春宵あかり'},
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/08/tamanoFes_title1x1.jpg',id:8, title:'たまの港フェスティバルでＨＤＲ'},
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/09/a-bombe-dome.jpg',id:9, title:'Ａ‐ＢＯＭＢ ＤＯＭＥ'},
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/10/broad_title3.jpg',id:10, title:'黒島ビーナスロード'},
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/10/img2946_title10.jpg',id:11, title:'Building in Sky'}
      ]
    }
  }
  ,
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/title/' + id)
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-inner{
  margin-top:80px;
}

.carusel-style{
  height:900px;
  box-shadow: none;
}
.img-style{
  width:100%;
  max-height:900px;
}


.title {
    position: absolute;
    top: -25px;
    /* background-color: rgba(0,0,0,0.5); */
    color: white;
    font-size: 2em;
    font-weight: 400;
    padding: 40px;
  }


  
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
