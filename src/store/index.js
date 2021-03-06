import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
    //   {
    //     imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
    //     id: 'afajfjadfaadfa323',
    //     title: 'Meetup in New York',
    //     date: new Date(),
    //     location: 'New York',
    //     description: 'New York, New York!'
    //   },
    //   {
    //     imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
    //     id: 'aadsfhbkhlk1241',
    //     title: 'Meetup in Paris',
    //     date: new Date(),
    //     location: 'Paris',
    //     description: 'It\'s Paris!'
    //   }
      {
        imageUrl: '',
        id: '',
        title: '',
        date: new Date(),
        location: '',
        description: '',
        category:'',
        stageNo: '',
        tag: '',
        type: ''
      }
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    registerUserForMeetup (state, payload) {
      const id = payload.id
      if (state.user.registeredMeetups.findIndex(meetup => meetup.id === id) >= 0) {
        return
      }
      state.user.registeredMeetups.push(id)
      state.user.fbKeys[id] = payload.fbKey
    },
    unregisterUserFromMeetup (state, payload) {
      const registeredMeetups = state.user.registeredMeetups
      registeredMeetups.splice(registeredMeetups.findIndex(meetup => meetup.id === payload), 1)
      Reflect.deleteProperty(state.user.fbKeys, payload)
    },
    setLoadedMeetups (state, payload) {
      state.loadedMeetups = payload
    },
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    updateMeetup (state, payload) {
      const meetup = state.loadedMeetups.find(meetup => {
        return meetup.id === payload.id
      })
      if (payload.title) {
        meetup.title = payload.title
      }
      if (payload.description) {
        meetup.description = payload.description
      }
      
      if (payload.tag) {
        updateObj.tag = payload.tag
      }
      if (payload.stageNo) {
        updateObj.stageNo = payload.stageNo
      }

      if (payload.date) {
        meetup.date = payload.date
      }



    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    registerUserForMeetup ({commit, getters}, payload) {
      commit('setLoading', true)
      const user = getters.user
      firebase.database().ref('/users/' + user.id).child('/registrations/')
        .push(payload)
        .then(data => {
          commit('setLoading', false)
          commit('registerUserForMeetup', {id: payload, fbKey: data.key})
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    unregisterUserFromMeetup ({commit, getters}, payload) {
      commit('setLoading', true)
      const user = getters.user
      if (!user.fbKeys) {
        return
      }
      const fbKey = user.fbKeys[payload]
      firebase.database().ref('/users/' + user.id + '/registrations/').child(fbKey)
        .remove()
        .then(() => {
          commit('setLoading', false)
          commit('unregisterUserFromMeetup', payload)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    loadMeetups ({commit}) {
      commit('setLoading', true)
      // firebase.database().ref('meetups').once('value')
      firebase.database().ref('tourdehdr').once('value')
        .then((data) => {
          const meetups = []
          const obj = data.val()
          for (let key in obj) {
            meetups.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              location: obj[key].location,
              creatorId: obj[key].creatorId,
              category: obj[key].category,
              stageNo: obj[key].stageNo,
              tag: obj[key].tag,
              type: obj[key].type
              
            })
          }
          commit('setLoadedMeetups', meetups)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    },
    createMeetup ({commit, getters}, payload) {
      const meetup = {
        title: payload.title,
        category:  payload.category,
        stageNo:  payload.stageNo,
        tag:  payload.tag,
        type:  payload.type,
        location: payload.location,
        // imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date.toISOString(),
        creatorId: getters.user.id
      }
      let imageUrl
      let key
      firebase.database().ref('tourdehdr').push(meetup).then((data) => {
         key = data.key
          return key
        })
        .then(key => {
          const filename = payload.image.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('tourdehdr/' + key + '.' + ext).put(payload.image)
        })
        .then(fileData => {
          imageUrl = fileData.metadata.downloadURLs[0]
          return firebase.database().ref('tourdehdr').child(key).update({imageUrl: imageUrl})
        })
        .then(() => {
          commit('createMeetup', {
            ...meetup,
            imageUrl: imageUrl,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
        // firebase.database().ref('meetups').push(meetup).then((data) => {
        //   key = data.key
        //    return key
        //  })
        //  .then(key => {
        //    const filename = payload.image.name
        //    const ext = filename.slice(filename.lastIndexOf('.'))
        //    return firebase.storage().ref('meetups/' + key + '.' + ext).put(payload.image)
        //  })
        //  .then(fileData => {
        //    imageUrl = fileData.metadata.downloadURLs[0]
        //    return firebase.database().ref('meetups').child(key).update({imageUrl: imageUrl})
        //  })
        //  .then(() => {
        //    commit('createMeetup', {
        //      ...meetup,
        //      imageUrl: imageUrl,
        //      id: key
        //    })
        //  })
        //  .catch((error) => {
        //    console.log(error)
        //  })
      // Reach out to firebase and store it
    },
    updateMeetupData ({commit}, payload) {
      commit('setLoading', true)
      // commit('clearError')
      const updateObj = {}
      if (payload.title) {
        updateObj.title = payload.title
      }
      if (payload.description) {
        updateObj.description = payload.description
      }
      if (payload.tag) {
        updateObj.tag = payload.tag
      }
      if (payload.stageNo) {
        updateObj.stageNo = payload.stageNo
      }




      if (payload.date) {
        updateObj.date = payload.date
      }

      firebase.database().ref('tourdehdr').child(payload.id).update(updateObj)
        .then(() => {
          commit('setLoading', false)
          commit('updateMeetup', payload)
        })
        .catch(
          error => {
            commit('setLoading', false)
            // commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredMeetups: [],
              fbKeys: {}
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredMeetups: [],
              fbKeys: {}
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {id: payload.uid, registeredMeetups: [], fbKeys: {}})
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        
        // console.log('titelA: ' + meetupA.title)
        // console.log('titelB: ' + meetupB.title)
        // console.log('dateA: ' + meetupA.date)
        // console.log('dateB: ' + meetupB.date)

        // return meetupA.date > meetupB.date
        return( meetupA.date > meetupB.date ? 1 : -1)
        
      })
    },
    featuredMeetups (state, getters) {
    //   return getters.loadedMeetups.slice(0, 5)
      return getters.loadedMeetups
    },
    
    loadedMeetup (state) {
      // console.log('loadedMeetupStage')
      // console.log('state ' + state )
      return (meetupId) => {
        // console.log('meetupId ' + meetupId)
        return state.loadedMeetups.find((meetup) => {
          // console.log('meetup.id ' + meetup.id)
          // console.log('meetup.stage ' + meetup.stage)
          // console.log('meetupid ' + meetup.stage)

          return meetup.id === meetupId
        })
      }
    },
    
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
// var filtered = [12, 5, 8, 130, 44].filter(function(element, index, array) {
//   return (element >= 10);
// });
// loadedMeetupCategory (state) {
//   return (category) => {
//     return state.loadedMeetups.filter((meetup) => {
//       return meetup.category === category
//     })
//   }