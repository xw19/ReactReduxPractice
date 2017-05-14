const initialstate = 'SHOW_ALL'

const visibiltyFilter = (state= initialstate, action) => {
  switch (action.type) {
  case 'SET_FILTER':
    return action.filter
  default:
    return state
  }
}

export default visibiltyFilter
