import React from 'react';
import './NewsArticle.css';

const NewsArticle = ( {img, headline, description, url} ) => {
  return (
    <div className="article">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <article>
        <h3>{headline}</h3>
        <p>{description}</p>
        <a href={url}>Full Story</a>
      </article>
    </div>
  )
}

export default NewsArticle;
