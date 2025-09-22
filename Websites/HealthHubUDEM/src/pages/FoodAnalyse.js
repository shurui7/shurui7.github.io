import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaUtensils, FaCarrot, FaChartPie, FaBreadSlice, FaDrumstickBite, FaCalendarAlt, FaList, FaPlus, FaMinus } from 'react-icons/fa';


const FoodAnalyseSection = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: #f6f9fe;
  padding: 60px 0;
  overflow: hidden;
`;

const FoodAnalyseContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;

  h1 {
    font-size: 36px;
    font-weight: 700;
    color: #37517e;
    margin-bottom: 30px;
    text-align: center;
  }

  .form-label {
    color: #37517e;
    font-weight: 500;
  }

  .form-control {
    border: 2px solid #e9ecef;
    border-radius: 8px;
    padding: 12px;
    &:focus {
      border-color: #106eea;
      box-shadow: none;
    }
  }

  .btn-analyse {
    background: #106eea;
    color: white;
    padding: 12px 30px;
    border-radius: 8px;
    border: none;
    font-weight: 500;
    width: 100%;
    margin-top: 20px;
    transition: all 0.3s ease;

    &:hover {
      background: #37517e;
      transform: translateY(-2px);
    }
  }

  .result-section {
    margin-top: 30px;
    padding: 20px;
    border-radius: 8px;
    background: #f8f9fa;
    text-align: left;
    display: none;

    &.show {
      display: block;
    }

    h3 {
      color: #37517e;
      margin-bottom: 15px;
      text-align: center;
    }

    .nutrition-value {
      font-size: 18px;
      color: #37517e;
      margin: 10px 0;
    }
  }
`;



function FoodAnalyse() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [mealPlan, setMealPlan] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);

  const analyseNutrition = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/nutrition?query=${query}`,
        {
          headers: { 'X-Api-Key': 'i/2gROZGMI/LypFOxp8Sog==ztyBYjArk5bTKJN3' }
        }
      );
      const data = await response.json();
      setResults(data);
      setShowResult(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const addToMealPlan = (food) => {
    const formattedFood = {
      ...food,
      carbohydrates_total_g: Number(food.carbohydrates_total_g) || 0,
      fat_total_g: Number(food.fat_total_g) || 0
    };
    
    setSelectedFoods(prev => [...prev, formattedFood]);
    calculateMealPlan([...selectedFoods, formattedFood]);
  };

  const removeFromMealPlan = (index) => {
    const updatedFoods = selectedFoods.filter((_, i) => i !== index);
    setSelectedFoods(updatedFoods);
    calculateMealPlan(updatedFoods);
  };

  const calculateMealPlan = (foods) => {
    const totals = foods.reduce((acc, food) => {
      acc.carbs += food.carbohydrates_total_g;
      acc.fat += food.fat_total_g;
      return acc;
    }, { carbs: 0, fat: 0 });

    setMealPlan(totals);
  };

  return (
    <FoodAnalyseSection>
      <div className="container">
        <FoodAnalyseContainer>
          <h1>
            <FaUtensils className="me-2" />
            Food Nutrition & Meal Planner
          </h1>

          {/* Nutrition Analysis Section */}
          <div className="mb-5">
            <h2>
              <FaCarrot className="me-2" />
              Nutrition Analysis
            </h2>
            <form onSubmit={analyseNutrition}>
              <div className="mb-3">
                <label htmlFor="food" className="form-label">
                  <FaList className="me-2" />
                  Food Items
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="food"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g., 1lb brisket and fries"
                  required
                />
              </div>
              <button type="submit" className="btn btn-analyse">
                <FaChartPie className="me-2" />
                Analyse Nutrition
              </button>
            </form>

            <div className={`result-section ${showResult ? 'show' : ''}`}>
              <h3>
                <FaUtensils className="me-2" />
                Nutrition Analysis
              </h3>
              {results.map((item, index) => (
                <div key={index} className="mb-3">
                  <h4>{item.name}</h4>
                  <div className="nutrition-value">
                    <FaBreadSlice className="me-2" />
                    Carbs: {item.carbohydrates_total_g.toFixed(1)}g
                  </div>
                  <div className="nutrition-value">
                    <FaDrumstickBite className="me-2" />
                    Fat: {item.fat_total_g.toFixed(1)}g
                  </div>
                  <button 
                    className="btn btn-sm btn-analyse mt-2"
                    onClick={() => addToMealPlan(item)}
                  >
                    <FaPlus className="me-1" />
                    Add to Meal Plan
                  </button>
                  <hr />
                </div>
              ))}
            </div>
          </div>

          {/* Meal Planning Section */}
          <div>
            <h2>
              <FaCalendarAlt className="me-2" />
              Meal Planning
            </h2>
            {selectedFoods.length > 0 ? (
              <div className="result-section show">
                <h3>
                  <FaCalendarAlt className="me-2" />
                  Your Meal Plan
                </h3>
                {selectedFoods.map((food, index) => (
                  <div key={index} className="mb-3">
                    <h4>{food.name}</h4>
                    <div className="nutrition-value">
                      <FaBreadSlice className="me-2" />
                      Carbs: {food.carbohydrates_total_g.toFixed(1)}g
                    </div>
                    <div className="nutrition-value">
                      <FaDrumstickBite className="me-2" />
                      Fat: {food.fat_total_g.toFixed(1)}g
                    </div>
                    <button 
                      className="btn btn-sm btn-danger mt-2"
                      onClick={() => removeFromMealPlan(index)}
                    >
                      <FaMinus className="me-1" />
                      Remove
                    </button>
                    <hr />
                  </div>
                ))}

                <h3>Total Nutrition</h3>
                <div className="nutrition-value">
                  <FaBreadSlice className="me-2" />
                  Carbs: {mealPlan.carbs.toFixed(1)}g
                </div>
                <div className="nutrition-value">
                  <FaDrumstickBite className="me-2" />
                  Fat: {mealPlan.fat.toFixed(1)}g
                </div>
              </div>
            ) : (
              <div className="instruction-section">
                <h3>
                  How to Use the Meal Planner
                </h3>
                <ol className="instruction-list">
                  <li>
                    <FaCarrot className="me-2" />
                    Analyze your desired foods in the Nutrition Analysis section above
                  </li>
                  <li>
                    <FaPlus className="me-2" />
                    Click "Add to Meal Plan" on the foods you want to include
                  </li>
                  <li>
                    <FaChartPie className="me-2" />
                    View your total nutrition values here
                  </li>
                  <li>
                    <FaMinus className="me-2" />
                    Remove items as needed to adjust your meal plan
                  </li>
                </ol>
              </div>
            )}
          </div>
        </FoodAnalyseContainer>
      </div>
    </FoodAnalyseSection>
  );
}

export default FoodAnalyse;