import firebase from 'firebase'

module.exports = {
  methods: {
    // Signout from FifaChallenge
    signOut () {
      var self = this
      firebase.auth().signOut().then(function () {
        self.$store.commit('disconnected')
        self.$store.commit('clearAll')
        self.$router.push({name: 'root'})
      }, function (error) {
        console.log(error)
      })
    }
  }
}
