import { combineReducers } from 'redux'
import todos from './todos'
import setFilter from './setFilter'

const reducers = combineReducers({
  todos,
  setFilter
})

export default reducers
