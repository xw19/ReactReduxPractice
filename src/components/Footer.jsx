import React from 'react'
import FilterLink from './FilterLink'


const Footer = () => {
  return (
    <footer className="container text-center">
      <div className="row">
        <div className="col-md-offset-3 col-md-2">
          <FilterLink filter="SHOW_ALL" name='Show all' />
        </div>
        <div className="col-md-2">
          <FilterLink filter="COMPLETE" name='Complete'/>
        </div>
        <div className="col-md-2">
          <FilterLink filter="PENDING" name='Pending'/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
