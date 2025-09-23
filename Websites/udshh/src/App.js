import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Conditions from './pages/Conditions';
import BMI from './pages/BMI';
import News from './pages/News';
import Nutrition from './pages/Nutrition';
import Exercise from './pages/Exercise';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  background-color: #ffffff;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/bmi" element={<BMI />} />
          <Route path="/news" element={<News />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/exercise" element={<Exercise />} />
        </Routes>
      </Main>
    </AppContainer>
  );
}

export default App;
