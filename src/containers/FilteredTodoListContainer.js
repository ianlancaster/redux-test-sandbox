import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    default:
      return new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getFilteredTodos(state.todos, state.setFilter)
})

const mapDispatchToProps = {
  toggleTodo
}

const FilteredTodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default FilteredTodoListContainer
