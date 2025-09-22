import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuotesContainer = styled.div`
  padding: 60px 0;
  background: #f6f9fe;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuoteBox = styled.div`
  background: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  text-align: center;
`;

const QuoteText = styled.p`
  font-size: 24px;
  color: #37517e;
  font-style: italic;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const QuoteAuthor = styled.p`
  font-size: 20px;
  color: #106eea;
  font-weight: 500;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #37517e;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
`;

const Quotes = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('https://api.quotable.io/quotes/?tags=inspirational&limit=89');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        const randomQuote = result.results[Math.floor(Math.random() * result.results.length)];
        setQuote(randomQuote);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching quote: {error.message}</p>;

  return (
    <QuotesContainer>
      <QuoteBox>
        <Title>
          Sometimes to get going, we only need a little push
        </Title>
        {quote && (
          <>
            <QuoteText>
              <FaQuoteLeft style={{ marginRight: '10px', color: '#106eea' }} />
              {quote.content}
              <FaQuoteRight style={{ marginLeft: '10px', color: '#106eea' }} />
            </QuoteText>
            <QuoteAuthor>— {quote.author}</QuoteAuthor>
          </>
        )}
      </QuoteBox>
    </QuotesContainer>
  );
};

export default Quotes;