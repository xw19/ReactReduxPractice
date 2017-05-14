import React from 'react'

const Link = ({active, name, onClick}) => {
  if (active) {
    return (<span>{name}</span>)
  }
  return(
    <div>
      <a href="#"
         onClick={e => {
          e.preventDefault()
          onClick()
        }}>
        {name}
      </a>
    </div>
  )
}

export default Link
