import React, { useState } from 'react';
import { Recipe, NutritionData } from '@/types';

// PUBLIC_INTERFACE
export default function NutritionalAnalysis() {
  const [activeView, setActiveView] = useState<'recipe' | 'daily'>('recipe');
  
  // Placeholder data for a recipe's nutritional information
  const recipeNutrition: NutritionData = {
    calories: 450,
    protein: 25,
    carbohydrates: 45,
    fat: 20,
    fiber: 5,
    sugar: 2,
    sodium: 400,
    cholesterol: 55,
    vitamins: {
      'Vitamin A': 15, // % of daily value
      'Vitamin C': 25,
      'Vitamin D': 10,
      'Vitamin E': 8,
    },
    minerals: {
      'Calcium': 20,
      'Iron': 15,
      'Potassium': 8,
      'Magnesium': 12,
    }
  };

  // Placeholder data for daily nutritional intake
  const dailyNutrition = {
    consumed: {
      calories: 1850,
      protein: 85,
      carbohydrates: 220,
      fat: 65,
    },
    target: {
      calories: 2400,
      protein: 120,
      carbohydrates: 300,
      fat: 80,
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Nutritional Analysis</h2>
          <div className="flex space-x-2 border rounded-lg p-1">
            <button 
              onClick={() => setActiveView('recipe')}
              className={`px-4 py-2 rounded ${
                activeView === 'recipe' 
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300'
                : ''
              }`}
            >
              Recipe Analysis
            </button>
            <button 
              onClick={() => setActiveView('daily')}
              className={`px-4 py-2 rounded ${
                activeView === 'daily' 
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300'
                : ''
              }`}
            >
              Daily Nutrition
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 py-4">
        {activeView === 'recipe' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Recipe: Classic Spaghetti Carbonara</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg dark:bg-gray-900/30">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Calories</div>
                    <div className="text-2xl font-bold">{recipeNutrition.calories}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">kcal per serving</div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg dark:bg-gray-900/30">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Protein</div>
                    <div className="text-2xl font-bold">{recipeNutrition.protein}g</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">per serving</div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg dark:bg-gray-900/30">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Carbs</div>
                    <div className="text-2xl font-bold">{recipeNutrition.carbohydrates}g</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">per serving</div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg dark:bg-gray-900/30">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Fat</div>
                    <div className="text-2xl font-bold">{recipeNutrition.fat}g</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">per serving</div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-3">Nutrition Breakdown</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Protein</span>
                        <span>{recipeNutrition.protein}g</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${(recipeNutrition.protein / 50) * 100}%` }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Carbohydrates</span>
                        <span>{recipeNutrition.carbohydrates}g</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: `${(recipeNutrition.carbohydrates / 300) * 100}%` }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Fat</span>
                        <span>{recipeNutrition.fat}g</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-red-500 h-2.5 rounded-full" style={{ width: `${(recipeNutrition.fat / 80) * 100}%` }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Fiber</span>
                        <span>{recipeNutrition.fiber}g</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${(recipeNutrition.fiber / 25) * 100}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-lg font-medium mb-4">Vitamins & Minerals</h3>
                
                <div className="space-y-4">
                  <h4 className="font-medium text-sm uppercase text-gray-500 dark:text-gray-400">Vitamins</h4>
                  {Object.entries(recipeNutrition.vitamins || {}).map(([vitamin, value]) => (
                    <div key={vitamin}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{vitamin}</span>
                        <span>{value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${value}%` }}></div>
                      </div>
                    </div>
                  ))}
                  
                  <h4 className="font-medium text-sm uppercase text-gray-500 dark:text-gray-400 mt-6">Minerals</h4>
                  {Object.entries(recipeNutrition.minerals || {}).map(([mineral, value]) => (
                    <div key={mineral}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{mineral}</span>
                        <span>{value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div className="bg-cyan-500 h-2 rounded-full" style={{ width: `${value}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Daily Nutrition Summary</h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg dark:bg-gray-900/30">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Calories</div>
                    <div className="text-2xl font-bold">
                      {dailyNutrition.consumed.calories} 
                      <span className="text-sm text-gray-500 dark:text-gray-400"> / {dailyNutrition.target.calories}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2 dark:bg-gray-700">
                      <div
                        className="bg-emerald-500 h-1.5 rounded-full"
                        style={{ width: `${(dailyNutrition.consumed.calories / dailyNutrition.target.calories) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg dark:bg-gray-900/30">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Protein</div>
                    <div className="text-2xl font-bold">
                      {dailyNutrition.consumed.protein}g
                      <span className="text-sm text-gray-500 dark:text-gray-400"> / {dailyNutrition.target.protein}g</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2 dark:bg-gray-700">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full"
                        style={{ width: `${(dailyNutrition.consumed.protein / dailyNutrition.target.protein) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg dark:bg-gray-900/30">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Carbs</div>
                    <div className="text-2xl font-bold">
                      {dailyNutrition.consumed.carbohydrates}g
                      <span className="text-sm text-gray-500 dark:text-gray-400"> / {dailyNutrition.target.carbohydrates}g</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2 dark:bg-gray-700">
                      <div
                        className="bg-yellow-500 h-1.5 rounded-full"
                        style={{ width: `${(dailyNutrition.consumed.carbohydrates / dailyNutrition.target.carbohydrates) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg dark:bg-gray-900/30">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Fat</div>
                    <div className="text-2xl font-bold">
                      {dailyNutrition.consumed.fat}g
                      <span className="text-sm text-gray-500 dark:text-gray-400"> / {dailyNutrition.target.fat}g</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2 dark:bg-gray-700">
                      <div
                        className="bg-red-500 h-1.5 rounded-full"
                        style={{ width: `${(dailyNutrition.consumed.fat / dailyNutrition.target.fat) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-3">Meal Nutrition Breakdown</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg flex justify-between items-center dark:bg-gray-900/30">
                      <div>
                        <div className="font-medium">Breakfast</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Oatmeal with Berries</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">350 kcal</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">P: 12g | C: 55g | F: 8g</div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg flex justify-between items-center dark:bg-gray-900/30">
                      <div>
                        <div className="font-medium">Lunch</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Grilled Chicken Salad</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">450 kcal</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">P: 35g | C: 25g | F: 22g</div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg flex justify-between items-center dark:bg-gray-900/30">
                      <div>
                        <div className="font-medium">Dinner</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Spaghetti Carbonara</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">650 kcal</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">P: 25g | C: 75g | F: 25g</div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg flex justify-between items-center dark:bg-gray-900/30">
                      <div>
                        <div className="font-medium">Snacks</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Mixed Nuts, Apple</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">400 kcal</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">P: 13g | C: 45g | F: 20g</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-lg font-medium mb-4">Nutritional Goals</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Calories</span>
                      <span className="text-gray-700 dark:text-gray-300">{dailyNutrition.consumed.calories} / {dailyNutrition.target.calories}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div
                        className={`${dailyNutrition.consumed.calories <= dailyNutrition.target.calories ? 'bg-emerald-500' : 'bg-orange-500'} h-2 rounded-full`}
                        style={{ width: `${Math.min((dailyNutrition.consumed.calories / dailyNutrition.target.calories) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Water Intake</span>
                      <span className="text-gray-700 dark:text-gray-300">1.8L / 2.5L</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: '72%' }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Protein</span>
                      <span className="text-gray-700 dark:text-gray-300">{dailyNutrition.consumed.protein}g / {dailyNutrition.target.protein}g</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${(dailyNutrition.consumed.protein / dailyNutrition.target.protein) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm font-medium uppercase text-gray-500 dark:text-gray-400 mb-3">Daily Activity</h4>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Steps</span>
                        <span className="text-gray-700 dark:text-gray-300">8,245 / 10,000</span>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span>Active Calories</span>
                        <span className="text-gray-700 dark:text-gray-300">320 kcal</span>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span>Exercise</span>
                        <span className="text-gray-700 dark:text-gray-300">45 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
