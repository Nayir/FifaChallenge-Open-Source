import firebase from 'firebase'

module.exports = {
  methods: {
    // Check if user is logged
    firebaseCheckLogged: function (saved, callback) {
      var self = this
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          self.user = user
          self.log = true
          callback(saved)
        } else {
          self.user = []
          self.log = false
        }
      })
    },
    // Get the général profile Data
    firebaseDatabaseGetProfile: function (savedbutton) {
      var self = this
      firebase.database().ref('/users/' + this.user.uid).once('value').then(function (snapshot) {
        self.profile = snapshot.val().profile
        if (savedbutton) { self.showSaveButton = true }
      })
    }
  }
}
