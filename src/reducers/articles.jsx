const initialstate = [
  {title: "hello", id: 0, completed: true},
  {title: "world",  id: 1, completed: false},
  {title: "hello1",  id: 2, completed: true},
  {title: "hello2",  id: 3, completed: false}
]


const articles = (state = initialstate, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_ARTICLE':
      return [
        ...state,
        {
          title: action.title,
          id: new Date().getTime(),
          completed:  false
        }
      ]
    case 'REMOVE_ARTICLE':
      return state.filter(article => article.id !== action.id )

    case 'TOGGLE_CHANGE':
      return state.map(article => {
          if (article.id !== action.id) {
            return article
          }
          return {
            ...article,
           completed: !article.completed
         }
       }
      )
    default:
      return state
  }
}

export default articles
