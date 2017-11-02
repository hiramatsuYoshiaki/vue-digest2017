<template>

  <v-container >
    

     <v-layout row wrap justify-center >
      <v-flex xs12 lg8 xl6>
        <v-card>
          <v-card-title>
            <h6 class="white--text"  >{{ meetup.title }}</h6>
            <!-- <h4 class="white--text">{{ meetups[id-1].title }}</h4> -->
           
          </v-card-title>
          <!-- <v-card-media fluid
            :src="meetups[id-1].imageUrl"
            height="500px"
          ></v-card-media> -->
           <img
            :src="meetup.imageUrl"
            width="100%" height="auto"
          ></img>
          
          <!-- <v-card-actions>
            <v-spacer></v-spacer>
           
            <app-edit-Register-dialog :meetupId="meetup.id"></app-edit-Register-dialog>
          </v-card-actions> -->
        </v-card>
      </v-flex>
    </v-layout>

    
    <!-- <v-layout row wrap >
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>

      <v-card class="grid " >
       
        <v-subheader>2017</v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex xs4 v-for="i in 11" :key="i"  @click="onLoadMeetup(meetups[i-1].id)" style="cursor: pointer;">
              <div class="image-inner" >
                <img class="image" v-bind:src="meetups[i-1].imageUrl" alt="lorem" width="100%" height="auto" >
              </div>
            </v-flex>
          </v-layout>
        </v-container>
        <br>
        
      </v-card>
       
      </v-flex>
    </v-layout> -->
  </v-container>
</template>

<script>
export default {
 props: ['id'],
  computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      },
      // userIsAuthenticated () {
      //   return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      // },
      // userIsCreator () {
      //   if (!this.userIsAuthenticated) {
      //     return false
      //   }
      //   return this.$store.getters.user.id === this.meetup.creatorId
      // },
      loading () {
        return this.$store.getters.loading
      }
    },
  // data () {
  //   return {
  //     meetups: [
  //         {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2016/12/shishimai_title1.jpg',id:1, title:'獅子舞'},
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
