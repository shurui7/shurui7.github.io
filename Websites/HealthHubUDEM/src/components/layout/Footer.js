import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaChevronRight, FaTiktok } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterContainer = styled.footer`
  background: #f6f9fe;
  padding-top: 60px;
`;

const FooterContent = styled.div`
  padding: 60px 0;
  
  h3 {
    font-size: 28px;
    margin-bottom: 20px;
    color: #37517e;
  }
  
  h4 {
    font-size: 16px;
    font-weight: bold;
    position: relative;
    padding-bottom: 12px;
    margin-bottom: 20px;
    color: #37517e;
    
    &:after {
      content: '';
      position: absolute;
      display: block;
      width: 50px;
      height: 2px;
      background: #106eea;
      bottom: 0;
      left: 0;
    }
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    padding: 10px 0;
    display: flex;
    align-items: center;
    
    svg {
      font-size: 12px;
      margin-right: 10px;
      color: #106eea;
    }
    
    a {
      color: #444;
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: #106eea;
      }
    }
  }
`;

const SocialLinks = styled.div`
  margin-top: 20px;
  
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: #106eea;
    color: white;
    margin-right: 10px;
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      background: #0e5ec0;
      transform: translateY(-3px);
    }
  }
`;

const Footer = () => {
  return (
		<FooterContainer>
			<FooterContent>
				<div className='container'>
					<div className='row gy-4'>
						<div className='col-lg-4 col-md-6'>
							<h3>UDEM Health Hub</h3>
							<p>
								2900 Edouard Montpetit Blvd
								<br />
								Montréal, QC H3T 1J4
								<br />
								Canada
							</p>
							<p>
								<strong>Phone:</strong> +1 514-343-6111
								<br />
								<strong>Email:</strong> info@udemhealthhub.com
							</p>
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

						<div className='col-lg-2 col-md-6'>
							<h4>Useful Links</h4>
							<FooterLinks>
								<li>
									<FaChevronRight />
									<Link to='/'>Home</Link>
								</li>
								<li>
									<FaChevronRight />
									<Link to='/about'>About us</Link>
								</li>

								<li>
									<FaChevronRight />
									<Link to='/news'>News</Link>
								</li>
								<li>
									<FaChevronRight />
									<Link to='/tips'>General advice</Link>
								</li>
							</FooterLinks>
						</div>

						<div className='col-lg-2 col-md-6'>
							<h4>Our Tools</h4>
							<FooterLinks>
								<li>
									<FaChevronRight />
									<Link to='/calculator'>BMI Calculator</Link>
								</li>
								<li>
									<FaChevronRight />
									<Link to='/quotes'>Motivational Quotes</Link>
								</li>
								<li>
									<FaChevronRight />
									<Link to='/druganalyse'>Drug Informations</Link>
								</li>
								<li>
									<FaChevronRight />
									<Link to='/foodanalyse'>Food Analyser</Link>
								</li>
							</FooterLinks>
						</div>

						<div className='col-lg-4 col-md-12'>
							<h4>About Us</h4>
							<p>
								UDEM Health Hub is your go-to destination for trusted
								health information, wellness resources, and expert advice.
								Whether you're looking to learn about common health conditions,
								stay updated with the latest medical news, or find practical
								tips for a healthier lifestyle, we're here to support you every
								step of the way.
							</p>
						</div>
					</div>
				</div>
			</FooterContent>
		</FooterContainer>
	)
};

export default Footer; 