import React from 'react';
import './Menu.css'

const Menu = ( {items, selectTopic} ) => {
  const nav = items.map((item, i) => {
    return (
      <h2 id={i} key={i} onClick={(e) => selectTopic(e)}>{item}</h2>
    )
  })

  return (
    <div className="nav-topics">
    {nav}
    </div>
  )
}

export default Menu;
