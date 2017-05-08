import { combineReducers } from 'redux'
import articles from './articles'

const articleApp = combineReducers({
  articles,
})

export default articleApp
