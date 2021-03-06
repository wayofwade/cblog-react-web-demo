/**
 * @Description:
 * @params:
 * @return:
 * Created by chencc on 2019/4/18.
 */
import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './action'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  console.log('---reducer总文件里面的方法---')
  switch (action.type) {
    case ADD_TODO:
      let li = [
          ...state,
          {
              text: action.text,
              completed: false
          }
      ]
      console.log('reducer总文件里面的方法', state)
      return li
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp