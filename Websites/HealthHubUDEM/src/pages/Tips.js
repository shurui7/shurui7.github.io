import React from 'react';
import styled from '@emotion/styled';
import { FaHeartbeat, FaBrain, FaLungs, FaBone, FaStethoscope, FaMoon } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const TipsSection = styled.section`
	width: 100%;
	min-height: 100vh;
	position: relative;
	background: #f6f9fe;
	padding: 60px 0;
	overflow: hidden;
`;

const TipsContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
`;

const SectionTitle = styled.h1`
	font-size: 36px;
	font-weight: 700;
	color: #37517e;
	margin-bottom: 50px;
	text-align: center;
`;

const TipsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 30px;
	margin-top: 40px;
`;

const TipCard = styled.div`
	background: white;
	border-radius: 15px;
	padding: 30px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease;

	&:hover {
		transform: translateY(-5px);
	}

	.icon-wrapper {
		width: 60px;
		height: 60px;
		background: #f6f9fe;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 20px;

		svg {
			font-size: 24px;
			color: #106eea;
		}
	}

	h3 {
		color: #37517e;
		font-size: 24px;
		font-weight: 600;
		margin-bottom: 15px;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;

		li {
			color: #444;
			margin-bottom: 10px;
			padding-left: 25px;
			position: relative;

			&:before {
				content: "•";
				color: #106eea;
				position: absolute;
				left: 0;
			}
		}
	}
`;

const Tips = () => {
	const healthTips = [
		{
			title: "Cardiovascular Health",
			icon: <FaHeartbeat />,
			tips: [
				"Exercise regularly (30 minutes daily)",
				"Maintain a balanced diet low in saturated fats",
				"Keep blood pressure under control",
				"Get adequate sleep (7-8 hours)",
				"Manage stress levels"
			]
		},
		{
			title: "Mental Health",
			icon: <FaBrain />,
			tips: [
				"Practice mindfulness and meditation",
				"Stay socially connected",
				"Exercise regularly",
				"Maintain a regular sleep schedule",
				"Seek professional help when needed"
			]
		},
		{
			title: "Respiratory Health",
			icon: <FaLungs />,
			tips: [
				"Avoid smoking and secondhand smoke",
				"Exercise regularly to improve lung capacity",
				"Practice deep breathing exercises",
				"Maintain good indoor air quality",
				"Stay hydrated"
			]
		},
		{
			title: "Bone & Joint Health",
			icon: <FaBone />,
			tips: [
				"Get enough calcium and vitamin D",
				"Engage in weight-bearing exercises",
				"Maintain good posture",
				"Stay active but avoid overexertion",
				"Protect joints during physical activity"
			]
		},
		{
			title: "Digestive Health",
			icon: <FaStethoscope />,
			tips: [
				"Eat a fiber-rich diet",
				"Stay hydrated",
				"Practice mindful eating",
				"Include probiotics in your diet",
				"Manage stress levels"
			]
		},
		{
			title: "Sleep Health",
			icon: <FaMoon />,
			tips: [
				"Maintain a consistent sleep schedule",
				"Create a relaxing bedtime routine",
				"Keep your bedroom cool and dark",
				"Limit screen time before bed",
				"Avoid caffeine late in the day"
			]
		}
	];

	return (
		<TipsSection>
			<TipsContainer>
				<SectionTitle>Health Tips & Guidelines</SectionTitle>
				<TipsGrid>
					{healthTips.map((tip, index) => (
						<TipCard key={index}>
							<div className="icon-wrapper">
								{tip.icon}
							</div>
							<h3>{tip.title}</h3>
							<ul>
								{tip.tips.map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</ul>
						</TipCard>
					))}
				</TipsGrid>
			</TipsContainer>
		</TipsSection>
	);
};

export default Tips;
