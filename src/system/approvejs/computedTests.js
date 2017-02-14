import approve from 'approvejs'

module.exports = {
  computed: {
    usernameValidation () {
      var rule = {
        required: {
          required: true,
          message: 'Ce champs est requis'
        },
        alphaNumeric: {
          alphaNumeric: true,
          message: 'Chiffres et lettres uniquement'
        },
        min: {
          min: 3,
          message: 'Doit contenir 3 caractères minimum'
        },
        max: {
          max: 16,
          message: 'Doit contenir 16 caractères maximum'
        }
      }
      var result = approve.value(this.profile.username, rule)
      return result.errors[0]
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
      var result = approve.value(this.profile.gamerinfo.playstationfour.id, rule)
      return result.errors[0]
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
      var playstationGamerinfoBValidation = true
      var xboxGamerinfoValidation = true
      if (this.profile.gamerinfo.playstationfour.owned && this.playstationIdValidation) {
        playstationGamerinfoBValidation = false
      }
      if (this.profile.gamerinfo.xboxone.owned && this.xboxIdValidation) {
        xboxGamerinfoValidation = false
      }
      return !this.usernameValidation && playstationGamerinfoBValidation && xboxGamerinfoValidation
    }
  }
}
