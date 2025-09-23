import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaSearch, FaHeart, FaLungs, FaBrain, FaAllergies, 
         FaWeight, FaHeadSideCough, FaStomach, FaBone } from 'react-icons/fa';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  color: #2c974b;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0 auto 3rem;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #2c974b;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

const ConditionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ConditionCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    color: #2c974b;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;

    h2 {
      font-size: 1.25rem;
    }
  }
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const Advice = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;

  h3 {
    color: #2c974b;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  ul {
    margin: 0;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const conditions = [
  {
    id: 1,
    name: 'Heart Disease',
    icon: FaHeart,
    description: 'A group of conditions affecting the heart and blood vessels, including coronary artery disease and heart failure.',
    advice: [
      'Maintain a heart-healthy diet low in saturated fats',
      'Exercise regularly for at least 30 minutes daily',
      'Monitor blood pressure and cholesterol levels',
      'Quit smoking and limit alcohol consumption'
    ]
  },
  {
    id: 2,
    name: 'Asthma',
    icon: FaLungs,
    description: 'A chronic condition affecting the airways, causing breathing difficulties, wheezing, and chest tightness.',
    advice: [
      'Identify and avoid triggers',
      'Take prescribed medications regularly',
      'Keep rescue inhaler readily available',
      'Create an asthma action plan with your doctor'
    ]
  },
  {
    id: 3,
    name: 'Migraine',
    icon: FaBrain,
    description: 'Severe headaches often accompanied by sensitivity to light, sound, and nausea.',
    advice: [
      'Identify and avoid trigger foods and situations',
      'Maintain regular sleep schedule',
      'Stay hydrated and manage stress',
      'Consider keeping a migraine diary'
    ]
  },
  {
    id: 4,
    name: 'Allergies',
    icon: FaAllergies,
    description: 'Immune system reactions to substances like pollen, dust, or certain foods.',
    advice: [
      'Monitor local pollen counts',
      'Keep windows closed during high pollen seasons',
      'Use air purifiers in your home',
      'Take prescribed antihistamines as directed'
    ]
  },
  {
    id: 5,
    name: 'Diabetes',
    icon: FaWeight,
    description: 'A metabolic disorder affecting how your body processes glucose (blood sugar).',
    advice: [
      'Monitor blood sugar levels regularly',
      'Follow a balanced diet plan',
      'Exercise regularly',
      'Take medications as prescribed'
    ]
  },
  {
    id: 6,
    name: 'Common Cold',
    icon: FaHeadSideCough,
    description: 'A viral infection causing runny nose, sore throat, and cough.',
    advice: [
      'Get plenty of rest',
      'Stay hydrated',
      'Use over-the-counter medications for symptom relief',
      'Practice good hand hygiene'
    ]
  }
];

const Conditions = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredConditions = conditions.filter(condition =>
    condition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    condition.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageContainer>
      <Title>Health Conditions</Title>
      
      <SearchContainer>
        <SearchIcon>
          <FaSearch />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search conditions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>

      {filteredConditions.length === 0 && searchTerm !== '' ? (
        <div style={{ textAlign: 'center', color: 'red', marginBottom: '2rem' }}>
          No matching conditions found. Please consult a doctor for further advice.
        </div>
      ) : (
        <ConditionsGrid>
          {filteredConditions.map(condition => (
            <ConditionCard key={condition.id}>
              <h2>
                <condition.icon /> {condition.name}
              </h2>
              <Description>{condition.description}</Description>
              <Advice>
                <h3>General Advice:</h3>
                <ul>
                  {condition.advice.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Advice>
            </ConditionCard>
          ))}
        </ConditionsGrid>
      )}
    </PageContainer>
  );
};

export default Conditions; 