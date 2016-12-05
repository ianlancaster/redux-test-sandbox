import React from 'react'

const AddTodoForm = ({handleSubmit, todos}) => {
  let input
  let i = todos.length

  return (
    <section>
      <form onSubmit={ (e) => {
        e.preventDefault()
        handleSubmit(input.value, i)
      }}>
        <input ref={ node => { input = node}} />
        <button>Add todo</button>
      </form>
    </section>
  )
}

export default AddTodoForm
