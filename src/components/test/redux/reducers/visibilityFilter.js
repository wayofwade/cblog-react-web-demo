/**
 * @Description:
 * @params:
 * @return:
 * Created by chencc on 2019/4/18.
 */
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter