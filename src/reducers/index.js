import { combineReducers } from 'redux'
import articles from './articles'
import visibiltyFilter from './visibiltyFilter'

const articleApp = combineReducers({
  articles, visibiltyFilter
})

export default articleApp
