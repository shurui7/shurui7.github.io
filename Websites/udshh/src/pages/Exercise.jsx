import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaDumbbell, FaSearch, FaSpinner, FaInfoCircle, FaExclamationTriangle, FaFire } from 'react-icons/fa';
import CaloriesBurnedCalculator from '../components/CaloriesBurnedCalculator';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  color: #2c974b;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;

  svg {
    font-size: 1.75rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;

    svg {
      font-size: 1.25rem;
    }
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #e0e0e0;
  padding: 0 0.25rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    padding: 0;
  }
`;

const Tab = styled.button`
  background: none;
  border: none;
  padding: 0.875rem 1.25rem;
  font-size: 0.95rem;
  color: ${props => props.active ? '#2c974b' : '#666'};
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  transition: all 0.2s;
  border-bottom: 2px solid ${props => props.active ? '#2c974b' : 'transparent'};
  margin-bottom: -2px;
  letter-spacing: 0.01em;

  &:hover {
    color: #2c974b;
  }

  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
`;

const SearchContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto 1.5rem;
`;

const SearchForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  background: white;
  padding: 1.25rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 1rem;
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #2c974b;
    box-shadow: 0 0 0 3px rgba(44, 151, 75, 0.1);
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #2c974b;
    box-shadow: 0 0 0 3px rgba(44, 151, 75, 0.1);
  }
`;

const Button = styled.button`
  background-color: #2c974b;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;

  &:hover {
    background-color: #216e39;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

const ExerciseCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ExerciseContent = styled.div`
  padding: 1.25rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ExerciseTitle = styled.h3`
  color: #2c974b;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.3;
`;

const ExerciseDetails = styled.div`
  display: grid;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  background-color: #f8f9fa;
  border-radius: 6px;
  font-size: 0.875rem;

  span:first-of-type {
    color: #666;
    font-weight: 500;
  }

  span:last-of-type {
    color: #2c974b;
    font-weight: 500;
  }
`;

const Instructions = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;

  h4 {
    color: #2c974b;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    font-weight: 600;
  }

  p {
    color: #666;
    font-size: 0.875rem;
    line-height: 1.5;
  }
`;

const LoadingSpinner = styled(FaSpinner)`
  animation: spin 1s linear infinite;
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const WarningMessage = styled.div`
  background-color: #e6f3e6;
  border: 1px solid #2c974b;
  color: #2c974b;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;

  svg {
    font-size: 1.1rem;
  }
`;

const Disclaimer = styled.div`
  background-color: #fff3e0;
  border: 1px solid #ffb74d;
  color: #f57c00;
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1.4;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  svg {
    font-size: 1rem;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    font-size: 0.8rem;
    padding: 0.625rem 0.875rem;
  }
`;

const Exercise = () => {
  const [activeTab, setActiveTab] = useState('exercises');
  const [searchParams, setSearchParams] = useState({
    name: '',
    type: '',
    muscle: '',
    difficulty: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [exercises, setExercises] = useState([]);

  const muscleGroups = [
    'abdominals', 'abductors', 'adductors', 'biceps', 'calves',
    'chest', 'forearms', 'glutes', 'hamstrings', 'lats',
    'lower_back', 'middle_back', 'neck', 'quadriceps', 'traps', 'triceps'
  ];

  const exerciseTypes = [
    'cardio', 'olympic_weightlifting', 'plyometrics',
    'powerlifting', 'strength', 'stretching', 'strongman'
  ];

  const difficultyLevels = ['beginner', 'intermediate', 'expert'];

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const queryParams = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });

    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/exercises?${queryParams}`,
        {
          headers: { 'X-Api-Key': 'bra8J9UGW0P7lsY9AuZW9w==nQThXX73cTSKS4KW' }
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch exercise data');
      }

      const data = await response.json();
      
      if (data.length === 0) {
        setError('No exercises found. Try different search criteria.');
        setExercises([]);
        return;
      }

      setExercises(data);
    } catch (err) {
      setError('Failed to fetch exercise data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <PageContainer>
      <Title>Exercise Guide</Title>

      <TabContainer>
        <Tab 
          active={activeTab === 'exercises'} 
          onClick={() => setActiveTab('exercises')}
        >
          <FaDumbbell /> Exercise Database
        </Tab>
        <Tab 
          active={activeTab === 'calculator'} 
          onClick={() => setActiveTab('calculator')}
        >
          <FaFire /> Calories Calculator
        </Tab>
      </TabContainer>

      {activeTab === 'calculator' && (
        <>
          <Disclaimer>
            <FaInfoCircle /> 
            Please note: Calorie calculations are approximate and may vary based on individual factors such as metabolism, intensity, and fitness level.
          </Disclaimer>
          <CaloriesBurnedCalculator />
        </>
      )}

      {activeTab === 'exercises' && (
        <>
          <SearchContainer>
            <SearchForm onSubmit={handleSearch}>
              <SearchInput
                type="text"
                name="name"
                placeholder="Search exercises..."
                value={searchParams.name}
                onChange={handleInputChange}
              />
              <Select
                name="muscle"
                value={searchParams.muscle}
                onChange={handleInputChange}
              >
                <option value="">Select Muscle Group</option>
                {muscleGroups.map(muscle => (
                  <option key={muscle} value={muscle}>
                    {muscle.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </option>
                ))}
              </Select>
              <Select
                name="type"
                value={searchParams.type}
                onChange={handleInputChange}
              >
                <option value="">Select Exercise Type</option>
                {exerciseTypes.map(type => (
                  <option key={type} value={type}>
                    {type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </option>
                ))}
              </Select>
              <Select
                name="difficulty"
                value={searchParams.difficulty}
                onChange={handleInputChange}
              >
                <option value="">Select Difficulty</option>
                {difficultyLevels.map(level => (
                  <option key={level} value={level}>
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </option>
                ))}
              </Select>
              <Button type="submit">
                <FaSearch /> Search Exercises
              </Button>
            </SearchForm>
          </SearchContainer>

          {error && (
            <WarningMessage>
              <FaExclamationTriangle /> {error}
            </WarningMessage>
          )}

          {loading ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <LoadingSpinner size={24} />
            </div>
          ) : (
            <ResultsGrid>
              {exercises.map((exercise, index) => (
                <ExerciseCard key={index}>
                  <ExerciseContent>
                    <ExerciseTitle>{exercise.name}</ExerciseTitle>
                    <ExerciseDetails>
                      <DetailItem>
                        <span>Type</span>
                        <span>{exercise.type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
                      </DetailItem>
                      <DetailItem>
                        <span>Muscle</span>
                        <span>{exercise.muscle.charAt(0).toUpperCase() + exercise.muscle.slice(1)}</span>
                      </DetailItem>
                      <DetailItem>
                        <span>Difficulty</span>
                        <span>{exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}</span>
                      </DetailItem>
                      <DetailItem>
                        <span>Equipment</span>
                        <span>{exercise.equipment || 'None'}</span>
                      </DetailItem>
                    </ExerciseDetails>
                    <Instructions>
                      <h4>Instructions</h4>
                      <p>{exercise.instructions}</p>
                    </Instructions>
                  </ExerciseContent>
                </ExerciseCard>
              ))}
            </ResultsGrid>
          )}
        </>
      )}
    </PageContainer>
  );
};

export default Exercise; 