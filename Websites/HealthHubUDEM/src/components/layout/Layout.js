import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = styled.main`
  margin-top: 120px;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;


  > section {
    padding: 80px 0;
    
    @media (max-width: 768px) {
      padding: 60px 0;
    }
  }


  .bg-light {
    background-color: #f8f9fa;
  }

  .bg-primary {
    background-color: #106eea;
    color: white;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout; 