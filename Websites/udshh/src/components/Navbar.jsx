import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { FaHome, FaInfoCircle, FaBars, FaTimes, FaStethoscope, FaCalculator, FaNewspaper, FaUtensils, FaDumbbell } from 'react-icons/fa';

const Nav = styled.nav`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  position: relative;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: bold;
  color: #2c974b;
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    color: #216e39;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    gap: 1rem;
    align-items: flex-start;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.active ? '#2c974b' : '#4a4a4a'};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.9rem;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  white-space: nowrap;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    color: #2c974b;
    background-color: #f0f9f0;
  }

  svg {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.75rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #2c974b;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Health Conditions', path: '/health-conditions' },
    { label: 'BMI Calculator', path: '/bmi' },
    { label: 'News', path: '/news' },
    { label: 'Nutrition', path: '/nutrition' },
    { label: 'Exercise', path: '/exercise' },
  ];

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">University of Sherbrooke Health Hub</Logo>
        <MenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          <NavLink to="/" active={location.pathname === '/'} onClick={() => setIsOpen(false)}>
            <FaHome /> Home
          </NavLink>
          <NavLink to="/about" active={location.pathname === '/about'} onClick={() => setIsOpen(false)}>
            <FaInfoCircle /> About
          </NavLink>
          <NavLink to="/conditions" active={location.pathname === '/conditions'} onClick={() => setIsOpen(false)}>
            <FaStethoscope /> Health Conditions
          </NavLink>
          <NavLink to="/bmi" active={location.pathname === '/bmi'} onClick={() => setIsOpen(false)}>
            <FaCalculator /> BMI Calculator
          </NavLink>
          <NavLink to="/news" active={location.pathname === '/news'} onClick={() => setIsOpen(false)}>
            <FaNewspaper /> Health News
          </NavLink>
          <NavLink to="/nutrition" active={location.pathname === '/nutrition'} onClick={() => setIsOpen(false)}>
            <FaUtensils /> Nutrition
          </NavLink>
          <NavLink to="/exercise" active={location.pathname === '/exercise'} onClick={() => setIsOpen(false)}>
            <FaDumbbell /> Exercise
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 