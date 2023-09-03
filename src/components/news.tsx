import React, { useState, useEffect } from 'react';
import { NewsItem } from './NewsItem';
import { Header } from './Header';

interface NewsProps {
  pageTitle: string;
  category?: string;
}

interface Article {
  urlToImage: string;
  title: string;
  description: string;
  author: string;
  source: {
    name: string;
  };
  publishedAt: string;
  url: string;
}

export const News: React.FC<NewsProps> = ({ pageTitle, category }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [heading, setHeading] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
        let url;

        if (!category) {
          setHeading('Top Headlines');
          url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;
        } else {
          setHeading(category);
          url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('An error occurred while fetching news.');
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <Header />
      {error ? (
        <p>Error: {error}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : articles ? ( // Check if articles is defined before mapping
        <>
          <h1 className="heading">{heading}</h1>
          <div className="news">
            {articles.map((element, index) => (
              <NewsItem
                imgUrl={element.urlToImage}
                title={element.title}
                description={element.description}
                author={element.author}
                source={element.source.name}
                date={element.publishedAt}
                newsUrl={element.url}
                key={index}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};
