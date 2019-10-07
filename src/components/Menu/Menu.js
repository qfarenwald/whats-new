import React from 'react';
import './Menu.css'

const Menu = ( props ) => {
  const nav = props.topics.map((topic, i) => {
    return (
        <h2 id={topic} key={i} onClick={() => props.selectTopic(topic)}>{topic}</h2>
    )
  });

  return (
    <div className="nav-topics">
    {nav}
    </div>
  )
};

export default Menu;
