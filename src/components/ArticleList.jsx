import React from 'react'


class ArticleList extends React.Component {
  render () {
    console.log(this.props.articles.map(test => test.title))
    return (
      <div>
        <h2>All Articles</h2>
        { this.props.articles.map( (article) => {
          return(<p onClick={ e => {
            this.props.onTodoClick(article.id)
          }} key={article.id}>{article.title}</p>)
        }) }
      </div>
    )
  }
}

export default ArticleList
