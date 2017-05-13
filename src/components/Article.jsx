import React from 'react'

const Article = ({article, clickToRemove, toggleDone}) => {
  return (
    <p className={"article " + (article.completed ? 'completed' : 'incomplete')}>
      <input type="checkbox" className="checkbox1" onChange={e => { toggleDone(article.id) }}/>
      {article.title}
      <a onClick={e => { clickToRemove(article.id) } } className="delete" >Delete</a>
    </p>
  )
}

export default Article
