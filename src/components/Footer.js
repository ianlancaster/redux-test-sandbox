import React from 'react'
import FilterContainer from '../containers/FilterContainer'

const Footer = () => {
  return (
    <footer>
    <FilterContainer filter="SHOW_ALL">All Todos</FilterContainer>
    <FilterContainer filter="SHOW_ACTIVE">Active</FilterContainer>
    <FilterContainer filter="SHOW_COMPLETED">Completed</FilterContainer>
    </footer>
  )
}

export default Footer
