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
      // TODO Update with new data structure
      return approve.value('gameConsoles.playstation', rule).errors[0]
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
      // TODO Update with new data structure
      var result = approve.value('gameConsoles.xboxone', rule)
      return result.errors[0]
    },
    formValidation () {
      // TODO Update Remake all validation
    }
  }
}
