import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FaNewspaper, FaExternalLinkAlt, FaClock, FaBookmark } from 'react-icons/fa';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  color: #2c974b;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const NewsContainer = styled.div`
  display: grid;
  gap: 2rem;
`;

const FeaturedArticle = styled.article`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    min-height: 400px;
  }
`;

const FeaturedImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (min-width: 768px) {
    height: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
  }
`;

const FeaturedContent = styled.div`
  padding: 2rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FeaturedBadge = styled.div`
  background-color: #2c974b;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  width: fit-content;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const NewsCard = styled.article`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:nth-of-type(4n+1) {
    background: linear-gradient(45deg, #f8f9fa, #ffffff);
  }
`;

const NewsImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.src || '/placeholder-image.jpg'});
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
`;

const NewsContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

const NewsTitle = styled.h2`
  color: #2c974b;
  font-size: ${props => props.featured ? '1.75rem' : '1.25rem'};
  margin-bottom: 1rem;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: ${props => props.featured ? '1.5rem' : '1.1rem'};
  }
`;

const NewsSource = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const NewsDescription = styled.p`
  color: #4a4a4a;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const NewsFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const NewsLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #2c974b;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background-color: #e8f5e9;
  transition: all 0.2s;
  
  &:hover {
    color: #216e39;
    background-color: #c8e6c9;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  color: #666;
  padding: 2rem;
  font-size: 1.2rem;
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: #dc3545;
  padding: 2rem;
  font-size: 1.2rem;
  background-color: #f8d7da;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit', 
    minute: '2-digit' 
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=2c8377e706ea41349d087a3a5ac556de'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }

        const data = await response.json();
        setNews(data.articles);
        setLoading(false);
      } catch (err) {
        setError('Failed to load health news. Please try again later.');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <PageContainer>
        <Title>Health News</Title>
        <LoadingMessage>Loading latest health news...</LoadingMessage>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <Title>Health News</Title>
        <ErrorMessage>{error}</ErrorMessage>
      </PageContainer>
    );
  }

  const featuredArticle = news[0];
  const remainingArticles = news.slice(1);

  return (
    <PageContainer>
      <Title>Health News</Title>
      <NewsContainer>
        {featuredArticle && (
          <FeaturedArticle>
            {featuredArticle.urlToImage && (
              <FeaturedImage src={featuredArticle.urlToImage} />
            )}
            <FeaturedContent>
              <FeaturedBadge>
                <FaBookmark /> Featured Story
              </FeaturedBadge>
              <NewsTitle featured>{featuredArticle.title}</NewsTitle>
              <NewsSource>
                <FaClock />
                {formatDate(featuredArticle.publishedAt)}
                {featuredArticle.source.name && ` • ${featuredArticle.source.name}`}
              </NewsSource>
              <NewsDescription>
                {featuredArticle.description || 'No description available'}
              </NewsDescription>
              <NewsLink href={featuredArticle.url} target="_blank" rel="noopener noreferrer">
                Read Full Story <FaExternalLinkAlt />
              </NewsLink>
            </FeaturedContent>
          </FeaturedArticle>
        )}

        <NewsGrid>
          {remainingArticles.map((article, index) => (
            <NewsCard key={index}>
              {article.urlToImage && (
                <NewsImage src={article.urlToImage} />
              )}
              <NewsContent>
                <NewsTitle>{article.title}</NewsTitle>
                <NewsSource>
                  <FaClock />
                  {formatDate(article.publishedAt)}
                  {article.source.name && ` • ${article.source.name}`}
                </NewsSource>
                <NewsDescription>
                  {article.description || 'No description available'}
                </NewsDescription>
                <NewsFooter>
                  <NewsLink href={article.url} target="_blank" rel="noopener noreferrer">
                    Read More <FaExternalLinkAlt />
                  </NewsLink>
                </NewsFooter>
              </NewsContent>
            </NewsCard>
          ))}
        </NewsGrid>
      </NewsContainer>
    </PageContainer>
  );
};

export default News; 