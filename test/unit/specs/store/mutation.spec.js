import { expect } from 'chai'
import { modules } from './store'

// destructure assign mutations
const { updateFirebase } = modules.profile

describe('mutations', () => {
  it('INCREMENT', () => {
    // mock state
    const state = {
      firebaseprofile: {
        displayName: '',
        photoURL: '',
        email: '',
        uid: ''
      } 
    }
    // apply mutation
    updateFirebase(state)
    // assert result
    // expect(state.count).to.equal(1)
  })
})
