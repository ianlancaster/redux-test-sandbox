import { connect } from 'react-redux'
import { addTodo } from '../actions/index'
import AddTodoForm from '../components/AddTodoForm'

const mapStateToProps = (state) => {
  return { todos: state.todos }
}

const mapDispatchToProps=(dispatch) => {
  return {
    handleSubmit: (text, id) => {
      dispatch(addTodo(text, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
