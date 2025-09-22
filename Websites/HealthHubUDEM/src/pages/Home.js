import React from 'react';
import styled from '@emotion/styled';
import { IoFastFoodOutline, IoLogoNoSmoking } from 'react-icons/io5'
import { GiHealthNormal } from 'react-icons/gi'
import { RiMentalHealthLine } from 'react-icons/ri'
import { MdHealthAndSafety, MdOutlineSportsGymnastics } from 'react-icons/md'
import {
	FaCalculator,
	FaClinicMedical,
	FaBroadcastTower,
	FaRegSmile,
	FaHeadset,
	FaUsers,
} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: #f6f9fe;
  padding: 60px 0;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const StyledContainer = styled.div`
  h1 {
    font-size: 48px;
    font-weight: 700;
    color: #37517e;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 32px;
    }

    span {
      color: #106eea;
    }
  }

  p {
    font-size: 18px;
    color: #444;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const HeroImage = styled.div`
  img {
    max-width: 100%;
    height: auto;
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
`;

const StatsCounter = styled.div`
  text-align: center;
  
  .number {
    font-size: 48px;
    font-weight: 700;
    color: #106eea;
    margin-bottom: 10px;
  }
  
  .text {
    font-size: 15px;
    color: #444;
  }
`;

const ServiceCard = styled.div`
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: white;
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
  }
  
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

const InfoCard = styled.div`
  padding: 40px 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  text-align: center;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
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
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #37517e;
  }
  
  p {
    margin: 0;
    color: #444;
    line-height: 1.8;
    font-size: 16px;
  }
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

const Home = () => {
  return (
		<>
			<HeroSection>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-6 order-2 order-lg-1'>
							<StyledContainer>
								<h1>
									Welcome to <span>University of Montreal Health Hub</span>
								</h1>
								<p className='lead'>
									Your health and well-being are our top priorities. At the
									University of Montreal Health Hub, we are committed to providing compassionate
									care, reliable health resources, and a supportive community to
									help you on your wellness journey.
								</p>
							</StyledContainer>
						</div>
						<div className='col-lg-6 order-1 order-lg-2'>
							<HeroImage>
								<img src='/logo.png' alt='Logo' className='img-fluid' />
							</HeroImage>
						</div>
					</div>
				</div>
			</HeroSection>

			<section className='py-5'>
				<div className='container'>
					<div className='row g-4'>
						<div className='col-lg-3 col-md-6'>
							<InfoCard>
								<div className='icon'>
									<IoFastFoodOutline />
								</div>
								<h3>Healthy Diet</h3>
								<p>
									A healthy lifestyle begins with a balanced diet. Eating
									fruits, vegetables, whole grains, and lean proteins while
									staying hydrated supports overall well-being. Limiting
									processed foods and unhealthy fats is also important.
								</p>
							</InfoCard>
						</div>
						<div className='col-lg-3 col-md-6'>
							<InfoCard>
								<div className='icon'>
									<MdOutlineSportsGymnastics />
								</div>
								<h3>Exercise!</h3>
								<p>
									Regular exercise keeps the body strong. At least 150 minutes
									of moderate activity per week, along with strength training
									and flexibility exercises, helps maintain fitness and prevent
									health issues.
								</p>
							</InfoCard>
						</div>
						<div className='col-lg-3 col-md-6'>
							<InfoCard>
								<div className='icon'>
									<RiMentalHealthLine />
								</div>
								<h3>Mental Health</h3>
								<p>
									Mental health matters too. Getting 7–9 hours of sleep,
									managing stress, and staying socially connected improve
									overall well-being. Regular check-ups and good hygiene also
									help prevent illnesses.
								</p>
							</InfoCard>
						</div>
						<div className='col-lg-3 col-md-6'>
							<InfoCard>
								<div className='icon'>
									<IoLogoNoSmoking />
								</div>
								<h3>Habbits</h3>
								<p>
									Healthy habits make a difference. Avoiding smoking, limiting
									alcohol, maintaining good posture, and spending time outdoors
									all contribute to long-term wellness. Small daily choices add
									up to a healthier life.
								</p>
							</InfoCard>
						</div>
					</div>
				</div>
			</section>

			<section className='py-5'>
				<div className='container'>
					<SectionTitle>
						<h2>Our Services</h2>
					</SectionTitle>
					<div className='row g-4'>
						<div className='col-md-6 col-lg-3'>
							<ServiceCard>
								<div className='icon'>
									<FaCalculator />
								</div>
								<h3>BMI Calculator</h3>
								<p>
									Easily calculate your Body Mass Index (BMI) to understand your
									weight category and overall health.
								</p>
							</ServiceCard>
						</div>
						<div className='col-md-6 col-lg-3'>
							<ServiceCard>
								<div className='icon'>
									<GiHealthNormal />
								</div>
								<h3>Common Health Conditions</h3>
								<p>
									Stay informed about a wide range of common health conditions,
									their symptoms, causes, and treatment options.
								</p>
							</ServiceCard>
						</div>
						<div className='col-md-6 col-lg-3'>
							<ServiceCard>
								<div className='icon'>
									<MdHealthAndSafety />
								</div>
								<h3>Health & Wellness Tips</h3>
								<p>
									Discover practical tips to improve your well-being, from
									nutrition and fitness to mental health and self-care.
								</p>
							</ServiceCard>
						</div>
						<div className='col-md-6 col-lg-3'>
							<ServiceCard>
								<div className='icon'>
									<FaBroadcastTower />
								</div>
								<h3>Health News & Updates</h3>
								<p>
									Stay up to date with the latest health news, medical
									breakthroughs, and wellness trends.
								</p>
							</ServiceCard>
						</div>
					</div>
				</div>
			</section>

			<section className='py-5 bg-light'>
				<div className='container'>
					<div className='row g-4'>
						<div className='col-lg-3 col-md-6'>
							<StatsCounter>
								<FaRegSmile className='mb-3 text-primary' size={40} />
								<div className='number'>237823</div>
								<div className='text'>Happy Users</div>
							</StatsCounter>
						</div>
						<div className='col-lg-3 col-md-6'>
							<StatsCounter>
								<FaClinicMedical className='mb-3 text-primary' size={40} />
								<div className='number'>25</div>
								<div className='text'>Clinics Recommending Us</div>
							</StatsCounter>
						</div>
						<div className='col-lg-3 col-md-6'>
							<StatsCounter>
								<FaHeadset className='mb-3 text-primary' size={40} />
								<div className='number'>14263</div>
								<div className='text'>Hours Of Support</div>
							</StatsCounter>
						</div>
						<div className='col-lg-3 col-md-6'>
							<StatsCounter>
								<FaUsers className='mb-3 text-primary' size={40} />
								<div className='number'>125</div>
								<div className='text'>Hard Working Experts</div>
							</StatsCounter>
						</div>
					</div>
				</div>
			</section>
		</>
	)
};

export default Home;
