import React from 'react';
import styled from '@emotion/styled';
import { FaUsers, FaLightbulb, FaStar, FaHeart, FaHandHoldingHeart, FaChartLine } from 'react-icons/fa';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.25rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const Title = styled.h1`
  color: #2c974b;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`;

const Section = styled.div`
  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const SectionTitle = styled.h2`
  color: #2c974b;
  margin-bottom: 2rem;
  font-size: 1.75rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #eee;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(44, 151, 75, 0.1);
  }

  h3 {
    color: #2c974b;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;

    svg {
      font-size: 1.25rem;
    }
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    color: #666;

    li {
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;

      &:before {
        content: "•";
        color: #2c974b;
        position: absolute;
        left: 0;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.75rem;

    h3 {
      font-size: 1.25rem;
    }
  }
`;

const About = () => {
  return (
		<PageContainer>
			<Header>
				<Title>University of Sherbrooke Health Hub Health Hub</Title>
				<Subtitle>
					We're dedicated to providing accessible, reliable health information
					and tools to help you make informed decisions about your well-being.
					Our mission is to empower individuals to take control of their health
					journey.
				</Subtitle>
			</Header>

			<Section>
				<SectionTitle>Our Core Values</SectionTitle>
				<ContentGrid>
					<Card>
						<h3>
							<FaHeart /> Compassion
						</h3>
						<p>
							We believe in treating everyone with empathy and understanding.
						</p>
						<ul>
							<li>Patient-centered approach</li>
							<li>Inclusive healthcare resources</li>
							<li>Supportive community</li>
						</ul>
					</Card>
					<Card>
						<h3>
							<FaLightbulb /> Innovation
						</h3>
						<p>
							We continuously strive to improve and adapt to changing needs.
						</p>
						<ul>
							<li>Evidence-based solutions</li>
							<li>Modern health tools</li>
							<li>Regular updates and improvements</li>
						</ul>
					</Card>
					<Card>
						<h3>
							<FaStar /> Excellence
						</h3>
						<p>We maintain high standards in everything we do.</p>
						<ul>
							<li>Quality information</li>
							<li>Expert-reviewed content</li>
							<li>Reliable health resources</li>
						</ul>
					</Card>
				</ContentGrid>
			</Section>

			<Section>
				<SectionTitle>What We Offer</SectionTitle>
				<ContentGrid>
					<Card>
						<h3>
							<FaHandHoldingHeart /> Health Resources
						</h3>
						<p>Comprehensive tools and information for your health journey.</p>
						<ul>
							<li>Exercise database and calculators</li>
							<li>Nutrition guides and meal planning</li>
							<li>Wellness tips and advice</li>
						</ul>
					</Card>
					<Card>
						<h3>
							<FaUsers /> Community Support
						</h3>
						<p>A supportive environment for health and wellness.</p>
						<ul>
							<li>Expert-curated content</li>
							<li>Regular health updates</li>
							<li>Educational resources</li>
						</ul>
					</Card>
					<Card>
						<h3>
							<FaChartLine /> Progress Tracking
						</h3>
						<p>Tools to monitor and improve your health goals.</p>
						<ul>
							<li>Calorie tracking</li>
							<li>Exercise planning</li>
							<li>Goal setting assistance</li>
						</ul>
					</Card>
				</ContentGrid>
			</Section>
		</PageContainer>
	)
};

export default About; 