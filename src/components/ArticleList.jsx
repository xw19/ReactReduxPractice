import React from 'react'
import Article from './Article'


class ArticleList extends React.Component {
  render () {
    console.log(this.props.articles.map(test => test.title))
    return (
      <div>
        <h2>All Articles</h2>
        { this.props.articles.map( (article) => {
          return(<Article article={article} clickToRemove={this.props.onTodoClick} toggleDone={this.props.toggleChange} key={article.id}/>)
        }) }
      </div>
    )
  }
}

export default ArticleList
