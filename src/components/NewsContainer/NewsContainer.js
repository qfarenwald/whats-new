import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import './NewsContainer.css'

const NewsContainer = ( {news} ) => {
  const articles = news.map((article, i) => {
    console.log(article)
    return (
      <NewsArticle key={article.id}
        img={article.img}
        headline={article.headline}
        description={article.description}
        url={article.url}
      />
    )
  })

  return (
    <div className="news-container">
      {articles}
    </div>
  )

}


export default NewsContainer;
