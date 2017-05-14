import { setVisibilityFilter } from '../actions'
import { connect } from 'react-redux'
import Link from './Link'


const mapStateToProps = (state, ownProps) => ({
    active: state.visibiltyFilter === ownProps.filter,
    name: ownProps.name
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink
