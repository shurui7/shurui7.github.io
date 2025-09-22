import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsSection = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: #f6f9fe;
  padding: 60px 0;
  overflow: hidden;
`;

const NewsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #37517e;
  margin-bottom: 50px;
  text-align: center;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const NewsCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .news-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .news-content {
    padding: 20px;
  }

  .news-date {
    display: flex;
    align-items: center;
    color: #666;
    font-size: 14px;
    margin-bottom: 10px;

    svg {
      margin-right: 8px;
      color: #106eea;
    }
  }

  h3 {
    color: #37517e;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
    line-height: 1.4;
  }

  p {
    color: #444;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .read-more {
    display: flex;
    align-items: center;
    color: #106eea;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;

    svg {
      margin-left: 8px;
      transition: transform 0.3s ease;
    }

    &:hover {
      color: #37517e;
      svg {
        transform: translateX(5px);
      }
    }
  }
`;

const LoadingSpinner = styled.div`
  text-align: center;
  padding: 40px;
  color: #37517e;
  font-size: 18px;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #dc3545;
  font-size: 18px;
`;

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {

        const response = await fetch(
					`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=443f8cbf84684744b4d59dfa5cd114a8`
				)
        const data = await response.json();

        if (data.status === 'ok') {
          setNews(data.articles);
        } else {
          setError('Failed to fetch news');
        }
      } catch (err) {
        setError('Error fetching news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <NewsSection>
        <NewsContainer>
          <SectionTitle>Health News</SectionTitle>
          <LoadingSpinner>Loading latest health news...</LoadingSpinner>
        </NewsContainer>
      </NewsSection>
    );
  }

  if (error) {
    return (
      <NewsSection>
        <NewsContainer>
          <SectionTitle>Health News</SectionTitle>
          <ErrorMessage>{error}</ErrorMessage>
        </NewsContainer>
      </NewsSection>
    );
  }

  return (
    <NewsSection>
      <NewsContainer>
        <SectionTitle>Health News</SectionTitle>
        <NewsGrid>
          {news.map((article, index) => (
            <NewsCard key={index}>
              <img
                src={article.urlToImage || 'https://via.placeholder.com/400x200?text=Health+News'}
                alt={article.title}
                className="news-image"
              />
              <div className="news-content">
                <div className="news-date">
                  <FaCalendarAlt />
                  {formatDate(article.publishedAt)}
                </div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more"
                >
                  Read More
                  <FaArrowRight />
                </a>
              </div>
            </NewsCard>
          ))}
        </NewsGrid>
      </NewsContainer>
    </NewsSection>
  );
};

export default News;

