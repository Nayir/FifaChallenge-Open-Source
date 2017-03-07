import approve from 'approvejs'
// Work in Progress
module.exports = {
  methods: {
    playstationIdTest () {
      // instantiating a new object
      var playstationIdTest = {}
      // Add the parameters we expect
      playstationIdTest.expects = [
        'startsWith',
        'endsWith'
      ]
      // Add the default error message
      playstationIdTest.message = '{title} must start with {startswith} and end with {endsWith}!'
      // Add the required validation method
      playstationIdTest.validate = function (value, pars) {
        return value.startsWith(pars.startsWith) && value.endsWith(pars.endsWith)
      }
      // Add the test
      approve.addTest(playstationIdTest, 'playstationIdTest')
    }
  }
}
