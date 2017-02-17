import approve from 'approvejs'

module.exports = {
  computed: {
    usernameValidation () {
      var rule = {
        min: {
          min: 3,
          message: 'Doit contenir 3 caractères minimum'
        },
        max: {
          max: 16,
          message: 'Doit contenir 16 caractères maximum'
        }
      }
      return approve.value(this.profile.username, rule).errors[0]
    },
    playstationIdValidation () {
      var rule = {
        min: {
          min: 3,
          message: 'Doit contenir 3 caractères minimum'
        },
        max: {
          max: 16,
          message: 'Doit contenir 16 caractères maximum'
        }
      }
      return approve.value(this.profile.gamerinfo.playstationfour.id, rule).errors[0]
    },
    xboxIdValidation () {
      var rule = {
        min: {
          min: 3,
          message: 'Doit contenir 3 caractères minimum'
        },
        max: {
          max: 15,
          message: 'Doit contenir 15 caractères maximum'
        }
      }
      var result = approve.value(this.profile.gamerinfo.xboxone.id, rule)
      return result.errors[0]
    },
    formValidation () {
      var usernameinfoValidation = true
      if (this.profile.username) {
        usernameinfoValidation = !this.usernameValidation
      }
      var playstationGamerinfoBValidation = true
      var xboxGamerinfoValidation = true
      if (this.profile.gamerinfo.playstationfour.owned && this.playstationIdValidation) {
        playstationGamerinfoBValidation = false
      }
      if (this.profile.gamerinfo.xboxone.owned && this.xboxIdValidation) {
        xboxGamerinfoValidation = false
      }
      console.log(usernameinfoValidation && playstationGamerinfoBValidation && xboxGamerinfoValidation)
      return usernameinfoValidation && playstationGamerinfoBValidation && xboxGamerinfoValidation
    }
  }
}
