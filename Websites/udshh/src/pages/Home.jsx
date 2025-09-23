import React from 'react';
import styled from '@emotion/styled';
import { FaHeartbeat, FaApple, FaRunning, FaBed, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.25rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 1rem;
  background: linear-gradient(to bottom, rgba(44, 151, 75, 0.05), transparent);
  border-radius: 16px;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin-bottom: 3rem;
  }
`;

const Title = styled.h1`
  color: #2c974b;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 2.75rem;
  line-height: 1.2;

  svg {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    flex-direction: column;
    gap: 0.75rem;

    svg {
      font-size: 1.75rem;
    }
  }
`;

const Subtitle = styled.p`
  color: #444;
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(44, 151, 75, 0.1);
  }

  h3 {
    margin-bottom: 1rem;
    color: #2c974b;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    svg {
      font-size: 1.25rem;
    }
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.75rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #2c974b;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s;
  font-size: 1rem;

  &:hover {
    background-color: #216e39;
    transform: translateX(2px);
  }

  svg {
    font-size: 0.9rem;
  }
`;

const Home = () => {
  return (
		<HomeContainer>
			<Hero>
				<Title>
					<FaHeartbeat /> University of Sherbrooke Health Hub
				</Title>
				<Subtitle>
					Your comprehensive destination for trusted health tools, expert
					resources, and evidence-based information. Empowering you to make
					informed decisions about your health and well-being.
				</Subtitle>
			</Hero>

			<Features>
				<FeatureCard>
					<h3>
						<FaApple /> Nutrition Guide
					</h3>
					<p>
						Discover personalized nutrition advice, healthy recipes, and meal
						planning tools to support your dietary goals and maintain a balanced
						lifestyle.
					</p>
					<CTAButton to='/nutrition'>
						Learn More <FaArrowRight />
					</CTAButton>
				</FeatureCard>
				<FeatureCard>
					<h3>
						<FaRunning /> Exercise Planner
					</h3>
					<p>
						Access our comprehensive exercise database, track calories burned,
						and create customized workout plans tailored to your fitness level.
					</p>
					<CTAButton to='/exercise'>
						Get Started <FaArrowRight />
					</CTAButton>
				</FeatureCard>
				<FeatureCard>
					<h3>
						<FaBed /> Wellness Tips
					</h3>
					<p>
						Explore expert advice on sleep hygiene, stress management, and daily
						habits that contribute to your overall health and vitality.
					</p>
					<CTAButton to='/conditions'>
						Explore More <FaArrowRight />
					</CTAButton>
				</FeatureCard>
			</Features>
		</HomeContainer>
	)
};

export default Home; 