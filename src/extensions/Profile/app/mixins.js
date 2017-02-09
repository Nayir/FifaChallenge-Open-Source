import firebase from 'firebase'

module.exports = {
  computed: {
    useruid () {
      return this.$store.state.profile.firebaseprofile.uid
    }
  },
  methods: {
    // Get the général profile Data
    firebaseDatabaseGetProfile: function () {
      var self = this
      firebase.database().ref('/users/' + this.useruid).once('value').then(function (snapshot) {
        self.profile = snapshot.val().profile
      }).then(function () {
        self.showSaveButton = true
      })
    }
  }
}
