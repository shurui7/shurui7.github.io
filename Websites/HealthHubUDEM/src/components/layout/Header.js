import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaTiktok, FaBars, FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1030;
  background: white;
  transition: all 0.3s ease;
`;

const TopBar = styled.div`
  background: #106eea;
  padding: 10px 0;
  color: white;
  font-size: 14px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactInfo = styled.div`
  a {
    color: white;
    text-decoration: none;
    margin-right: 20px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    
    &:hover {
      color: #e6e6e6;
    }
  }
`;

const SocialLinks = styled.div`
  a {
    color: white;
    text-decoration: none;
    margin-left: 15px;
    transition: color 0.3s ease;
    
    &:hover {
      color: #e6e6e6;
    }
  }
`;

const NavContainer = styled.nav`
  padding: 20px 0;
  background: white;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  font-size: 28px;
  font-weight: 700;
  color: #106eea;
  text-decoration: none;
  
  &:hover {
    color: #0e5ec0;
  }
`;

const NavbarToggler = styled.button`
  padding: 0;
  border: 0;
  background: transparent;
  color: #106eea;
  font-size: 24px;
  
  &:focus {
    outline: none;
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
		<HeaderContainer
			style={{
				boxShadow: isScrolled ? '0 2px 15px rgba(0, 0, 0, 0.1)' : 'none',
			}}
		>
			<TopBar>
				<div className='container'>
					<div className='row justify-content-between align-items-center'>
						<div className='col-lg-6'>
							<ContactInfo>
								<a>
									THIS IS A DEMO SITE - DO NOT USE FOR MEDICAL PURPOSES
								</a>
							</ContactInfo>
						</div>
						<div className='col-lg-6 text-end'>
							<SocialLinks>
								<a href='https://x.com/umontreal'>
									<FaTwitter />
								</a>
								<a href='https://www.facebook.com/umontreal'>
									<FaFacebook />
								</a>
								<a href='https://www.instagram.com/umontreal/'>
									<FaInstagram />
								</a>
								<a href='https://www.tiktok.com/@umontreal_officiel'>
									<FaTiktok />
								</a>
							</SocialLinks>
						</div>
					</div>
				</div>
			</TopBar>

			<NavContainer className='navbar navbar-expand-lg'>
				<div className='container'>
					<Logo to='/' className='navbar-brand'>
						University of Montreal Health Hub
					</Logo>

					<NavbarToggler
						className='navbar-toggler'
						type='button'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <FaTimes /> : <FaBars />}
					</NavbarToggler>

					<div
						className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
					>
						<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<Link to='/' className='nav-link active'>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/about' className='nav-link'>
									About
								</Link>
							</li>
							<li className='nav-item'></li>
							<li className='nav-item'>
								<Link to='/news' className='nav-link'>
									News
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/tips' className='nav-link'>
									Common health conditions and advice
								</Link>
							</li>
							<li className='nav-item dropdown'>
								<Link
									to='#'
									className='nav-link dropdown-toggle'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'
								>
									Tools
								</Link>
								<ul className='dropdown-menu'>
									<li>
										<Link to='/quotes' className='dropdown-item'>
											Motivational Quotes
										</Link>
									</li>
									<li>
										<Link to='/calculator' className='dropdown-item'>
											BMI Calculator
										</Link>
									</li>
									<li>
										<Link to='/foodanalyse' className='dropdown-item'>
											Food Analyser
										</Link>
									</li>
									<li>
										<Link to='/druganalyse' className='dropdown-item'>
											Drug Information
										</Link>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</NavContainer>
		</HeaderContainer>
	)
};

export default Header; 