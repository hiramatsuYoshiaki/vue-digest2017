<template>
  <v-app>
    <v-toolbar dark color="primary" >
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">TOURdeHDR+2017 DIGEST</v-toolbar-title>
    <v-spacer></v-spacer>
    
    <v-btn flat 
      v-for="item in menuItems"
    
      :to="item.link">
      <v-icon>{{item.icon}}</v-icon>
      {{item.title}}
     
    </v-btn>
    
  </v-toolbar>
    
    <main>
    </main>
    <!-- <v-footer dark color="primary"
      :fixed="fixed" app >
      <span class="white--text " >&copy; TOURdeHDR+2017 DIGEST</span>
    </v-footer> -->
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        menuItems : [
            {icon: 'home', title: 'TOP', link: '/top'},
            {icon: 'apps', title: 'CATEGORies', link: '/categories'},
            {icon: 'room', title: 'LOCATIONS', link: '/locations'},
            {icon: 'view_list', title: 'LISTA', link: '/list'},
          ]
       
      }
    },
    computed:{

    },
    methods:{

    }
  }
</script>

<style>

</style>
