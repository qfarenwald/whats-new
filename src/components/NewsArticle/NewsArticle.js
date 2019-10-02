import React from 'react';
import './NewsArticle.css';

const NewsArticle = ( {img, headline, description, url} ) => {
  return (
    <article className="article">
      <img src={img} alt="" />
      <h3>{headline}</h3>
      <p>{description}</p>
      <a href={url}>Full Story</a>
    </article>
  )
}

export default NewsArticle;
