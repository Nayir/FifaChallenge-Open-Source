import Vue from 'vue'
import routerTab from 'src/components/routerTab.vue'

describe('routerTab', () => {
  // Inspect the raw component options
  it('has not a created hook', () => {
    expect(routerTab.created).to.be.an('undefined')
  })

  it('has a name component', () => {
    expect(routerTab.name).to.equal('routerTab')
  })

  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(routerTab.data).to.be.a('function')
    const defaultData = routerTab.data()
  })

})
