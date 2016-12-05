import * as actions from '../../src/actions'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = "Go to the Vault"
    const id = 1
    const expectedAction = {
      type: 'ADD_TODO',
      text: "Go to the Vault",
      id: 1
    }
    expect(actions.addTodo(text, id)).toEqual(expectedAction)
  })

  it('action.toggleTodo should take in a todo id and return a TOGGLE_TODO action', () => {
    const id = 1
    const expectedAction = {
      type: 'TOGGLE_TODO',
      id: 1
    }
    expect(actions.toggleTodo(id)).toEqual(expectedAction)
  })

  it('should create an action to set the todo filter', () => {
    const filter =  'on'
    const expectedAction = {
      type: 'SET_FILTER',
      filter
    }
    expect(actions.setFilter(filter)).toEqual(expectedAction)
  })


})
