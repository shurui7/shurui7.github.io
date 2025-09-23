import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaFire, FaExclamationTriangle, FaSpinner } from 'react-icons/fa';

const Container = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  color: #2c974b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;

  svg {
    font-size: 1.1rem;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e8e8e8;
  border-radius: 8px;
  font-size: 0.875rem;
  transition: all 0.2s;
  background-color: #fcfcfc;

  &:focus {
    outline: none;
    border-color: #2c974b;
    box-shadow: 0 0 0 3px rgba(44, 151, 75, 0.08);
    background-color: white;
  }

  &::placeholder {
    color: #999;
  }
`;

const Button = styled.button`
  background-color: #2c974b;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.875rem 1.5rem;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  letter-spacing: 0.01em;

  svg {
    font-size: 1rem;
  }

  &:hover {
    background-color: #216e39;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

const ResultCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.25rem;
  text-align: center;
  border: 1px solid #eee;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ResultValue = styled.div`
  color: #2c974b;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0.375rem 0;
  line-height: 1.2;
`;

const ResultLabel = styled.div`
  color: #666;
  font-size: 0.875rem;
  letter-spacing: 0.01em;
`;

const WarningMessage = styled.div`
  background-color: #e6f3e6;
  border: 1px solid #2c974b;
  color: #2c974b;
  padding: 1rem 1.25rem;
  margin: 1.25rem 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.9rem;
  line-height: 1.4;

  svg {
    font-size: 1.1rem;
    flex-shrink: 0;
  }
`;

const WeightInputGroup = styled.div`
  position: relative;
  width: 100%;
`;

const WeightConversion = styled.div`
  position: absolute;
  right: 0.5rem;
  bottom: -1.25rem;
  font-size: 0.75rem;
  color: #777;
  background: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const UnitToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #666;
  padding: 0 0.25rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.2s;
  font-size: 0.875rem;

  &:hover {
    color: #2c974b;
  }

  input {
    accent-color: #2c974b;
  }
`;

const CaloriesBurnedCalculator = () => {
  const [formData, setFormData] = useState({
    activity: '',
    weight: '',
    duration: ''
  });
  const [weightUnit, setWeightUnit] = useState('kg'); // 'kg' or 'lbs'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);

  const convertWeight = (weight, from = 'kg', to = 'lbs') => {
    if (from === to) return weight;
    return from === 'kg' ? weight * 2.20462 : weight / 2.20462;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWeightUnitChange = (e) => {
    const newUnit = e.target.value;
    setWeightUnit(newUnit);
    if (formData.weight) {
      // Convert the current weight value to the new unit
      const convertedWeight = convertWeight(
        parseFloat(formData.weight),
        weightUnit,
        newUnit
      );
      setFormData(prev => ({
        ...prev,
        weight: Math.round(convertedWeight * 100) / 100
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.activity) {
      setError('Please enter an activity');
      return;
    }

    setLoading(true);
    setError(null);

    // Convert weight to pounds for API call
    const weightInPounds = formData.weight ? 
      (weightUnit === 'kg' ? convertWeight(parseFloat(formData.weight), 'kg', 'lbs') : parseFloat(formData.weight)) :
      160;
    const duration = formData.duration || 60;

    if (weightInPounds < 50 || weightInPounds > 500) {
      setError('Weight must be between 23kg and 227kg (50-500 lbs)');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/caloriesburned?activity=${encodeURIComponent(formData.activity)}&weight=${Math.round(weightInPounds)}&duration=${duration}`,
        {
          headers: { 'X-Api-Key': 'bra8J9UGW0P7lsY9AuZW9w==nQThXX73cTSKS4KW' }
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch calorie data');
      }

      const data = await response.json();
      
      if (data.length === 0) {
        setError('No data found for this activity. Try a different activity name.');
        setResults(null);
        return;
      }

      setResults(data[0]);
    } catch (err) {
      setError('Failed to fetch calorie data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>
        <FaFire /> Calories Burned Calculator
      </Title>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="activity"
          placeholder="Enter activity (e.g., skiing, running)"
          value={formData.activity}
          onChange={handleInputChange}
          required
        />
        <WeightInputGroup>
          <UnitToggle>
            <RadioLabel>
              <input
                type="radio"
                name="weightUnit"
                value="kg"
                checked={weightUnit === 'kg'}
                onChange={handleWeightUnitChange}
              />
              kg
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="weightUnit"
                value="lbs"
                checked={weightUnit === 'lbs'}
                onChange={handleWeightUnitChange}
              />
              lbs
            </RadioLabel>
          </UnitToggle>
          <Input
            type="number"
            name="weight"
            placeholder={`Weight in ${weightUnit} (default: ${weightUnit === 'kg' ? '73' : '160'})`}
            value={formData.weight}
            onChange={handleInputChange}
            min={weightUnit === 'kg' ? '23' : '50'}
            max={weightUnit === 'kg' ? '227' : '500'}
            step="0.1"
          />
          {formData.weight && (
            <WeightConversion>
              ≈ {Math.round(convertWeight(formData.weight, weightUnit, weightUnit === 'kg' ? 'lbs' : 'kg') * 10) / 10} {weightUnit === 'kg' ? 'lbs' : 'kg'}
            </WeightConversion>
          )}
        </WeightInputGroup>
        <Input
          type="number"
          name="duration"
          placeholder="Duration in minutes (default: 60)"
          value={formData.duration}
          onChange={handleInputChange}
          min="1"
        />
        <Button type="submit" disabled={loading}>
          {loading ? <FaSpinner className="spin" /> : <FaFire />} Calculate
        </Button>
      </Form>

      {error && (
        <WarningMessage>
          <FaExclamationTriangle /> {error}
        </WarningMessage>
      )}

      {results && (
        <ResultsContainer>
          <ResultCard>
            <ResultLabel>Activity</ResultLabel>
            <ResultValue style={{ fontSize: '1.5rem' }}>{results.name}</ResultValue>
          </ResultCard>
          <ResultCard>
            <ResultLabel>Calories Burned Per Hour</ResultLabel>
            <ResultValue>{Math.round(results.calories_per_hour)}</ResultValue>
            <ResultLabel>calories</ResultLabel>
          </ResultCard>
          <ResultCard>
            <ResultLabel>Total Calories Burned</ResultLabel>
            <ResultValue>{Math.round(results.total_calories)}</ResultValue>
            <ResultLabel>for {formData.duration || 60} minutes</ResultLabel>
          </ResultCard>
        </ResultsContainer>
      )}
    </Container>
  );
};

export default CaloriesBurnedCalculator; 