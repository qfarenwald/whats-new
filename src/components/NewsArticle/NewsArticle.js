import React from 'react';
import './NewsArticle.css';

const NewsArticle = ( {img, headline, description, url} ) => {
  return (
    <div className="article">
      <img src={img} alt="" />
      <article>
        <h3>{headline}</h3>
        <p>{description}</p>
        <a href={url}>Full Story</a>
      </article>
    </div>
  )
}

export default NewsArticle;
