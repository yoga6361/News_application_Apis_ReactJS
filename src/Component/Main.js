/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

const Main = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("general");
  useEffect(() => {
    let url =
      "https://newsapi.org/v2/everything?q=general&apiKey=a2b61875b8cb4e2a9be31a821cdd795d";
    fetch(url)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
      });
  }, []);

  const readValues = (value) => {
    setSearch(value);
  };

  const searchNews = () => {
    let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=a2b61875b8cb4e2a9be31a821cdd795d`;
    fetch(url)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
      });
  };
  useEffect(() => {
    let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=a2b61875b8cb4e2a9be31a821cdd795d`;
    fetch(url)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
      });
  }, [search]);
  return (
    <div className="container">
      <div className="padd">
        <div className="filter">
          <input
            type="search"
            onChange={(event) => {
              readValues(event.target.value);
            }}
            placeholder="Enter a topic to Search"
          />
          <button className="btn" onClick={searchNews}>
            Search for news
          </button>
        </div>
        <div>
          <h1>All NEWS</h1>
        </div>
        {articles.length===0?(<h2>No Data Found</h2>):
        articles.map((article, index) => (
          <div key={index} className="article">
            <div className="padd-article">
              <div className="news-img">
                <img src={article.urlToImage} />
              </div>
              <div className="news-detail">
                <h2>{article.title}</h2>
                <p>{article.author}</p>
                <p>{article.discription}</p>
                <p>
                  <a href={article.url} target="blank">
                    <button className="btn">Read full Article</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
