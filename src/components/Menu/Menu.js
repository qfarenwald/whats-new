import React from 'react';
import './Menu.css'

const Menu = ( {items, selectTopic, state} ) => {
  items.pop()
  const nav = items.map((item, i) => {
    return (
      <h2 id={item} key={i} onClick={() => selectTopic(state[item])}>{item}</h2>
    )
  })

  return (
    <div className="nav-topics">
    {nav}
    </div>
  )
}

export default Menu;
