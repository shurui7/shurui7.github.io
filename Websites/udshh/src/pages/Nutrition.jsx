import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaSearch, FaHeart, FaSpinner, FaInfoCircle, FaExclamationTriangle } from 'react-icons/fa';

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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0 auto 2rem;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
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

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid #e0e0e0;
`;

const Tab = styled.button`
  padding: 1rem 2rem;
  background: none;
  border: none;
  color: ${props => props.active ? '#2c974b' : '#666'};
  font-weight: ${props => props.active ? '600' : '400'};
  font-size: 1.1rem;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #2c974b;
    transform: scaleX(${props => props.active ? '1' : '0'});
    transition: transform 0.2s;
  }

  &:hover {
    color: #2c974b;
  }
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FoodCard = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;


const FoodContent = styled.div`
  padding: 1.5rem;
`;

const FoodTitle = styled.h3`
  color: #2c974b;
  margin-bottom: 1rem;
  font-size: 1.25rem;
`;

const NutritionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const NutritionItem = styled.div`
  background-color: #f8f9fa;
  padding: 0.5rem;
  border-radius: 4px;
  text-align: center;

  span {
    display: block;
    &:first-of-type {
      color: #666;
      font-size: 0.9rem;
    }
    &:last-of-type {
      color: #2c974b;
      font-weight: 600;
    }
  }
`;

const Button = styled.button`
  background-color: #2c974b;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #216e39;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const LoadingSpinner = styled(FaSpinner)`
  animation: spin 1s linear infinite;
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const MealPlanCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const MealTitle = styled.h3`
  color: #2c974b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MealList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MealItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;


const NutritionSummary = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const MealItemContent = styled.div`
  flex: 1;
`;

const MealItemTitle = styled.div`
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const MealItemStats = styled.div`
  font-size: 0.9rem;
  color: #666;

  span {
    margin-right: 1rem;
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

const Nutrition = () => {
  const [activeTab, setActiveTab] = useState('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [savedMeals, setSavedMeals] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/nutrition?query=${encodeURIComponent(searchQuery)}`,
        {
          headers: { 'X-Api-Key': 'bra8J9UGW0P7lsY9AuZW9w==nQThXX73cTSKS4KW' }
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch food data');
      }

      const data = await response.json();
      
      if (data.length === 0) {
        setError('No food items found. Please try a different search term.');
        setSearchResults([]);
        return;
      }

      // Filter out items with invalid nutritional data
      const validResults = data.filter(item => (
        !isNaN(item.carbohydrates_total_g) &&
        !isNaN(item.fat_total_g) &&
        !isNaN(item.fiber_g) &&
        !isNaN(item.sugar_g)
      ));

      if (validResults.length === 0) {
        setError('Unable to get valid nutritional information for this food. Please try a different search term.');
        setSearchResults([]);
        return;
      }

      setSearchResults(validResults);
    } catch (err) {
      setError('Failed to fetch food data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveMeal = (food) => {
    setSavedMeals(prev => [...prev, food]);
  };

  return (
    <PageContainer>
      <Title>Nutrition Guide</Title>

      <TabContainer>
        <Tab 
          active={activeTab === 'search'} 
          onClick={() => setActiveTab('search')}
        >
          Food Search
        </Tab>
        <Tab 
          active={activeTab === 'meals'} 
          onClick={() => setActiveTab('meals')}
        >
          Saved Meals
        </Tab>
      </TabContainer>

      {activeTab === 'search' && (
        <>
          <SearchContainer>
            <form onSubmit={handleSearch}>
              <SearchIcon>
                <FaSearch />
              </SearchIcon>
              <SearchInput
                type="text"
                placeholder="Search for a food (e.g., 1 cup rice, 2 eggs)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
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
              {searchResults.map((result, index) => (
                <FoodCard key={index}>
                  <FoodContent>
                    <FoodTitle>{result.name}</FoodTitle>
                    <NutritionGrid>
                      <NutritionItem>
                        <span>Carbs</span>
                        <span>{Math.round(result.carbohydrates_total_g)}g</span>
                      </NutritionItem>
                      <NutritionItem>
                        <span>Fat</span>
                        <span>{Math.round(result.fat_total_g)}g</span>
                      </NutritionItem>
                      <NutritionItem>
                        <span>Fiber</span>
                        <span>{Math.round(result.fiber_g)}g</span>
                      </NutritionItem>
                      <NutritionItem>
                        <span>Sugar</span>
                        <span>{Math.round(result.sugar_g)}g</span>
                      </NutritionItem>
                    </NutritionGrid>
                    <Button onClick={() => handleSaveMeal(result)}>
                      <FaHeart /> Save to Meals
                    </Button>
                  </FoodContent>
                </FoodCard>
              ))}
            </ResultsGrid>
          )}
        </>
      )}

      {activeTab === 'meals' && (
        <div>
          {savedMeals.length === 0 ? (
            <MealPlanCard>
              <MealTitle><FaInfoCircle /> No Saved Meals</MealTitle>
              <p>Search for foods and save them to create your meal plan.</p>
            </MealPlanCard>
          ) : (
            <MealPlanCard>
              <MealTitle><FaHeart /> Saved Meals</MealTitle>
              <NutritionSummary>
                {savedMeals.length > 0 && (
                  <>
                    <NutritionGrid>
                      <NutritionItem>
                        <span>Total Carbs</span>
                        <span>{Math.round(savedMeals.reduce((sum, meal) => sum + (isNaN(meal.carbohydrates_total_g) ? 0 : meal.carbohydrates_total_g), 0))}g</span>
                      </NutritionItem>
                      <NutritionItem>
                        <span>Total Fat</span>
                        <span>{Math.round(savedMeals.reduce((sum, meal) => sum + (isNaN(meal.fat_total_g) ? 0 : meal.fat_total_g), 0))}g</span>
                      </NutritionItem>
                      <NutritionItem>
                        <span>Total Fiber</span>
                        <span>{Math.round(savedMeals.reduce((sum, meal) => sum + (isNaN(meal.fiber_g) ? 0 : meal.fiber_g), 0))}g</span>
                      </NutritionItem>
                    </NutritionGrid>
                  </>
                )}
              </NutritionSummary>
              <MealList>
                {savedMeals.map((meal, index) => (
                  <MealItem key={index}>
                    <MealItemContent>
                      <MealItemTitle>{meal.name}</MealItemTitle>
                      <MealItemStats>
                        <span>{Math.round(meal.carbohydrates_total_g)}g carbs</span>
                        <span>{Math.round(meal.fat_total_g)}g fat</span>
                        <span>{Math.round(meal.fiber_g)}g fiber</span>
                      </MealItemStats>
                    </MealItemContent>
                  </MealItem>
                ))}
              </MealList>
            </MealPlanCard>
          )}
        </div>
      )}
    </PageContainer>
  );
};

export default Nutrition; 