import React from 'react'
import AddTodoFormContainer from '../containers/AddTodoFormContainer'
import FilteredTodoListContainer from '../containers/FilteredTodoListContainer'
import Footer from '../components/Footer'


const App = () => {
  return (
    <section>
      <AddTodoFormContainer />
      <FilteredTodoListContainer />
      <Footer />
    </section>
  )
}

export default App
