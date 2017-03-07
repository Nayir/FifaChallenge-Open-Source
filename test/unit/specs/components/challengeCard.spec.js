import Vue from 'vue'
import challengeCard from 'src/components/challengeCard.vue'

describe('challengeCard', () => {
  // Inspect the raw component options
  it('has not a created hook', () => {
    expect(challengeCard.created).to.be.an('undefined')
  })
  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(challengeCard.data).to.be.a('function')
    const defaultData = challengeCard.data()
    expect(defaultData.newChallengeGameConsole).to.equal('psfour')
    expect(defaultData.newChallengeFcp).to.equal('10')
    expect(defaultData.fcpValue).to.equal(2)
  })

})
