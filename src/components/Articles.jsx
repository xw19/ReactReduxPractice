import ArticleList from './ArticleList'
import { connect } from 'react-redux'
import { removeArticle } from '../actions'

const mapStateToProps = (state) => ({
  articles: state.articles
})

const mapDispatchToProps = {
  onTodoClick: removeArticle
}

const Articles = connect(mapStateToProps, mapDispatchToProps)(ArticleList)

export default Articles
