const initialstate = [
  {title: "hello", id: 0}, {title: "world",  id: 1}, {title: "hello1",  id: 2}, {title: "hello2",  id: 3}
]


const articles = (state = initialstate, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_ARTICLE':
      return [
        ...state,
        {
          title: action.title,
          id: new Date().getTime()
        }
      ]
    case 'REMOVE_ARTICLE':
      return state.filter(article => article.id !== action.id )
    default:
      return state
  }
}

export default articles
