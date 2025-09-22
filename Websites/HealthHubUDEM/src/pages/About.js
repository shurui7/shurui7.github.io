import React from 'react';
import styled from '@emotion/styled';
import { FaHeartbeat, FaUsers, FaHandHoldingHeart, FaGraduationCap } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutSection = styled.section`
  padding: 100px 0 60px;
  background: #f6f9fe;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 50px;
  
  h2 {
    font-size: 36px;
    font-weight: 700;
    color: #37517e;
    margin-bottom: 15px;
    
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
  
  p {
    font-size: 18px;
    color: #444;
    margin: 0;
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const MissionCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  height: 100%;
  
  .icon {
    width: 64px;
    height: 64px;
    background: #f6f9fe;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    color: #106eea;
    font-size: 32px;
  }
  
  h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #37517e;
  }
  
  p {
    margin: 0;
    color: #444;
    line-height: 1.8;
  }
`;

const ValuesSection = styled.section`
  padding: 60px 0;
`;

const ValueCard = styled.div`
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
  
  .icon {
    width: 80px;
    height: 80px;
    background: #f6f9fe;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    color: #106eea;
    font-size: 40px;
  }
  
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #37517e;
  }
  
  p {
    margin: 0;
    color: #444;
    line-height: 1.6;
  }
`;

const About = () => {
  return (
    <>
      <AboutSection>
        <div className="container">
          <SectionTitle>
            <h2>About UDEM Health Hub</h2>
            <p>Empowering Health and Wellness Through Education and Support</p>
          </SectionTitle>

          <div className="row">
            <div className="col-lg-6">
              <MissionCard>
                <div className="icon">
                  <FaHeartbeat />
                </div>
                <h3>Our Mission</h3>
                <p>
                  At University of Montreal Health Hub, we are dedicated to promoting health and wellness
                  through education, support, and community engagement. Our mission is to
                  empower individuals with the knowledge and resources they need to make
                  informed decisions about their health and well-being.
                </p>
              </MissionCard>
            </div>
            <div className="col-lg-6">
              <MissionCard>
                <div className="icon">
                  <FaUsers />
                </div>
                <h3>Our Vision</h3>
                <p>
                  We envision a community where everyone has access to reliable health
                  information and support. Through our comprehensive resources and services,
                  we aim to create a healthier, more informed society where individuals
                  can thrive both physically and mentally.
                </p>
              </MissionCard>
            </div>
          </div>
        </div>
      </AboutSection>

      <ValuesSection>
        <div className="container">
          <SectionTitle>
            <h2>Our Core Values</h2>
            <p>What We Stand For</p>
          </SectionTitle>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <ValueCard>
                <div className="icon">
                  <FaHandHoldingHeart />
                </div>
                <h3>Compassion</h3>
                <p>
                  We approach every interaction with empathy and understanding, ensuring
                  that everyone feels supported in their health journey.
                </p>
              </ValueCard>
            </div>
            <div className="col-lg-3 col-md-6">
              <ValueCard>
                <div className="icon">
                  <FaGraduationCap />
                </div>
                <h3>Education</h3>
                <p>
                  We believe in the power of knowledge and strive to provide accurate,
                  up-to-date health information to our community.
                </p>
              </ValueCard>
            </div>
            <div className="col-lg-3 col-md-6">
              <ValueCard>
                <div className="icon">
                  <FaUsers />
                </div>
                <h3>Community</h3>
                <p>
                  We foster a supportive environment where individuals can connect,
                  share experiences, and learn from one another.
                </p>
              </ValueCard>
            </div>
            <div className="col-lg-3 col-md-6">
              <ValueCard>
                <div className="icon">
                  <FaHeartbeat />
                </div>
                <h3>Wellness</h3>
                <p>
                  We promote a holistic approach to health, addressing physical,
                  mental, and emotional well-being.
                </p>
              </ValueCard>
            </div>
          </div>
        </div>
      </ValuesSection>
    </>
  );
};

export default About; 