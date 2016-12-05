import React from 'react'
import { shallow, mount, render } from 'enzyme'
import reducers from '../src/reducers/todos'
import { toggleTodo } from '../src/actions/index'
import Todo from '../src/components/Todo'

const setup = () => {
  const props = {
    key: 1,
    text: 'test',
    id: 1,
    completed: true,
    handleClick: jest.fn()
  }

  const todoWrapper = shallow(<Todo {...props} />)

  return {
    props,
    todoWrapper
  }
}

describe('combined toggle todos', () => {
  it('should call handleClick when clicked', () => {
    const { todoWrapper, props } = setup()
    todoWrapper.simulate('click')

    expect(props.handleClick.mock.calls.length).toBe(1)
  })

  it('toggleTodo should take in a todo id and return a TOGGLE_TODO action', () => {
    const id = 1
    const expectedAction = {
      type: 'TOGGLE_TODO',
      id: 1
    }
    expect(toggleTodo(id)).toEqual(expectedAction)
  })

  it('reducers should toggle the completed state of a given todo when given an TOGGLE_TODO action type', () => {
    const TOGGLE_TODO = toggleTodo(1)

    const initialState = [{
      text: 'test',
      id: 1,
      completed: false
    }]

    const expectedState = [{
      text: 'test',
      id: 1,
      completed: true
    }]

    expect(reducers(initialState, TOGGLE_TODO)).toEqual(expectedState)
  })

  it('should render the todo text with a stikethrough if todo.completed is true', () => {
    const { todoWrapper } = setup()
    const text = todoWrapper.find('li')

    // expect(text.node.props.style).toEqual({textDecoration: 'line-through'})
    expect(text.node.props.style).toContain("textDecoration: 'line-through'")
  })

})
