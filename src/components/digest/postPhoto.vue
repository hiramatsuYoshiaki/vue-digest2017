<template>

  <v-container >
    

    <v-layout row wrap justify-center >
      <v-flex xs12 lg8 xl6>
        <v-card>
          <v-card-title>
            <h6 class="white--text"  >STAGE-{{ meetups[id-1].id }}</h6>
            <!-- <h4 class="white--text">{{ meetups[id-1].title }}</h4> -->
           
          </v-card-title>
         <img
            :src="meetups[id-1].imageUrl"
            width="100%" height="auto"
          ></img>
          
          <!-- <v-card-actions>
            <v-spacer></v-spacer>
           
            <app-edit-Register-dialog :meetupId="meetup.id"></app-edit-Register-dialog>
          </v-card-actions> -->
        </v-card>
      </v-flex>
    </v-layout>

    
  </v-container>
</template>

<script>
export default {
 props: ['id'],
  data () {
    return {
      meetups: [
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2016/12/shishimai_title1.jpg',id:1, title:'獅子舞'},
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/02/kobe_again_title_stage2.jpg',id:2, title:'ＫＯＢＥ ＡＧＡＩＮ'},
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/03/rusted_car_title2.jpg',id:3, title:'ＲＵＳＴＥＤ ＣＡＲ'},
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2050/04/vintagecar_title1.jpg',id:4, title:'Vintage Car'},
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/04/retoro_car_title.jpg',id:5, title:'ＲＥＴＲＯ ＣＡＲ'},
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/05/Stage6_title.jpg',id:6, title:'瀬戸埠頭の見える岬でＨＤＲ'},
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/05/haruyoi_title2.jpg',id:7, title:'倉敷春宵あかり'},
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/08/tamanoFes_title21.jpg',id:8, title:'たまの港フェスティバルでＨＤＲ'},
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/09/a-bombe-dome.jpg',id:9, title:'Ａ‐ＢＯＭＢ ＤＯＭＥ'},
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/10/broad_title3.jpg',id:10, title:'黒島ビーナスロード'},
          {imageUrl: 'http://tourdehdr.sakuratan.com/site2/wp-content/uploads/2017/10/img2946_title10.jpg',id:11, title:'Building in Sky'}
      ]
    }
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
