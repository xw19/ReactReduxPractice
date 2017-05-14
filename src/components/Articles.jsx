import ArticleList from './ArticleList'
import { connect } from 'react-redux'
import { removeArticle, toggleChange } from '../actions'

const getVisibleArticles = (articles, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return articles
    case 'COMPLETE':
      return articles.filter(t => t.completed)
    case 'PENDING':
      return articles.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  articles: getVisibleArticles(state.articles, state.visibiltyFilter)
})

const mapDispatchToProps = {
  onTodoClick: removeArticle,
  toggleChange: toggleChange
}

const Articles = connect(mapStateToProps, mapDispatchToProps)(ArticleList)

export default Articles
