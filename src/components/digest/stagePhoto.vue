<template>

  <v-container >
    
    <h1 class="white--text">Stage Photo</h1>
    <!-- <v-layout row wrap justify-center class="pt-5">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info">Organize Meetup</v-btn>
      </v-flex>
    </v-layout> -->
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
    
    <v-layout row wrap >
      <!-- <v-flex  xs12 sm12 md12 lg12 lx12 class="white--text"> -->
      <v-flex   class="white--text">
       <!-- <h1>content</h1> -->
       <router-link to="/title" append replace>to Title list</router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
 
  data () {
    return {
      msg: 'Digest 2017 Carousel'
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
