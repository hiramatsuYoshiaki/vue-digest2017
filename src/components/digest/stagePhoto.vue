<template>

  <v-container>
    <!-- <v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-2"> -->
    <v-layout row wrap >
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>

      <v-card class="grid " >
        <!-- <v-toolbar color="white" flat>
          <v-btn icon light>
            <v-icon color="grey darken-2">arrow_back</v-icon>
          </v-btn>
          <v-toolbar-title class="grey--text text--darken-4">Albums</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon light>
            <v-icon color="grey darken-2">search</v-icon>
          </v-btn>
        </v-toolbar> -->
        <v-subheader>2017</v-subheader>
        <v-container fluid grid-list-sm>
          <!-- <v-layout row wrap>
            <v-flex xs4 v-for="i in 11" :key="i"  @click="onLoadMeetup(meetups[i-1].id)" style="cursor: pointer;">
              <div class="image-inner" >
                <img class="image" v-bind:src="meetups[i-1].imageUrl" alt="lorem" width="100%" height="auto" >
              </div>
            </v-flex>
          </v-layout> -->
          <v-layout row wrap>
            <v-flex xs12 sm12 md6 lg4 x4 v-for="meetup in meetups"
            :key="meetup.id" 
            v-if="meetup.type == 'stage' &&  getYear( meetup.date) == '2017'" 
            @click="onLoadMeetup(meetup.id)" style="cursor: pointer;">
              <div class="image-inner" >
                <img class="image" v-bind:src="meetup.imageUrl" alt="lorem" width="100%" height="auto" >
                <!-- {{  getYear( meetup.date) }} -->
              </div>
            </v-flex>
          </v-layout>
        </v-container>
        <br>
        <!-- <v-subheader>2016</v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex xs4 v-for="i in 11" :key="i">
              <div class="image-inner">
                <img class="image" v-bind:src="meetups[i-1].imageUrl" alt="lorem" width="100%" height="auto">
              </div>
            </v-flex>
          </v-layout>
        </v-container> -->
        <!-- <v-footer class="mt-5"></v-footer> -->
      </v-card>
       
      </v-flex>
      </v-layout>
      
      <v-layout row wrap >
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2 style="text-align: right;">
         <v-btn  @click="onBack">
                Back
                  <span slot="loader" class="custom-loader">
                  <v-icon>cached</v-icon>
                  </span>
              </v-btn>
      </v-flex>
    </v-layout>
    
    
    
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      },
      loading () {
        return this.$store.getters.loading
      }
  },
  // data () {
  //   return {
  //     meetups: [
  //          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2016/12/shishimai_title1.jpg',id:1, title:'獅子舞'},
  //         {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/02/kobe_again_title_stage2.jpg',id:2, title:'ＫＯＢＥ ＡＧＡＩＮ'},
  //         {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/03/rusted_car_title2.jpg',id:3, title:'ＲＵＳＴＥＤ ＣＡＲ'},
  //         {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2050/04/vintagecar_title1.jpg',id:4, title:'Vintage Car'},
  //         {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/04/retoro_car_title.jpg',id:5, title:'ＲＥＴＲＯ ＣＡＲ'},
  //         {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/05/Stage6_title.jpg',id:6, title:'瀬戸埠頭の見える岬でＨＤＲ'},
  //         {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/05/haruyoi_title2.jpg',id:7, title:'倉敷春宵あかり'},
  //         {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/08/tamanoFes_title21.jpg',id:8, title:'たまの港フェスティバルでＨＤＲ'},
  //         {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/09/a-bombe-dome.jpg',id:9, title:'Ａ‐ＢＯＭＢ ＤＯＭＥ'},
  //         {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/10/broad_title3.jpg',id:10, title:'黒島ビーナスロード'},
  //         {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/10/img2946_title10.jpg',id:11, title:'Building in Sky'}
  //     ]
  //   }
  // },

  methods: {
    onLoadMeetup (id) {
      this.$router.push('/post/' + id)
    },
    getYear( value) {
       const date = new Date(value)
     return  date.getFullYear().toString()
    },
    onBack () {
      this.$router.push('/home' )
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-inner{
  width:100%;
  height:100%;
  /* background-color: pink; */
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
