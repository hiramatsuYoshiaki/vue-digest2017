<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      clipped
      persistent
      v-model="drawer"
      enable-resize-watcher
      app
      temporary
      fixed
    >
      <v-list dense>
        <v-list-tile v-for="item in menuItems"
        :key="item.title"
        :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app fixed clipped-left>
    <!-- <v-toolbar app  clipped-left> -->
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title ><router-link to="/home" append replace>DIGEST2017</router-link></v-toolbar-title>
       
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat class="white--text"
        v-for="item in menuItems"
        :key="item.title"
        :to="item.link"
        >
        <v-icon left>{{item.icon}}</v-icon>
            {{item.title}}
        </v-btn>
     </v-toolbar-items>
    </v-toolbar>

    <main class="header-margin">
      <router-view></router-view>
    </main>
      <!-- <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <v-tooltip right>
              <v-btn icon large :href="source" target="_blank" slot="activator">
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
            content
          </v-layout>
        </v-container>
      </v-content> -->
    </main>

    <v-footer app fixed>
      <span>&copy; TOURdeHDR+2017</span>
      <v-spacer></v-spacer>
       <!-- <v-icon>cloud_upload</v-icon> -->
       
      <v-btn
        v-if="!userIsAuthenticated"
        flat
         @click="onLogin"
        >
        <v-icon left dark>lock_open</v-icon>
        <!-- Login -->
      </v-btn>
      <v-btn
        v-if="userIsAuthenticated"
        flat
         @click="onUpload"
        >
        <v-icon left dark>cloud_upload</v-icon>
        <!-- Upload -->
      </v-btn>
       <v-btn
          v-if="userIsAuthenticated"
          flat
          @click="onLogout">
          <v-icon left dark>exit_to_app</v-icon>
          <!-- Logout -->
        </v-btn>
    </v-footer>
  </v-app>
</template>
<!-- <v-app dark>
    <v-toolbar  >
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">TOURdeHDR+2017 DIGEST</v-toolbar-title>
    <v-spacer></v-spacer>
    
    <v-btn flat class="white--text"
      v-for="item in menuItems"
    
      :to="item.link">
      <v-icon>{{item.icon}}</v-icon>
      {{item.title}}
     
    </v-btn>
    
  </v-toolbar>
    
    <main>
    </main>
    <v-footer dark color="primary"
      :fixed="fixed" app >
      <span class="white--text " >&copy; TOURdeHDR+2017 DIGEST</span>
    </v-footer>
  </v-app> -->

<script>
//   export default {
//     data: () => ({
//       drawer: true
//     }),
//     props: {
//       source: String
//     }
//   }
  export default {
    // props: {
    //   source: String
    // },
    
    data () {
      return {
        drawer: false,
        menuItems : [
            {icon: 'home', title: 'TOP', link: '/home'},
            {icon: 'apps', title: 'STAGE', link: '/stage'}
        ],
      }
    },
    computed:{
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }

    },
    methods:{
      onLogout () {
        this.$store.dispatch('logout')
      },
      onLogin () {
        this.$router.push('/signin' )
      },
      onUpload () {
        this.$router.push('/upload' )
      },
      

    }
  }



   
</script>

<style lang="stylus">
  @import './stylus/main'
  
  

</style>


