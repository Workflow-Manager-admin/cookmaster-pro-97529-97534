import React, { useState } from 'react';
// MealPlan will be used when implementing actual functionality
// import { MealPlan } from '@/types';

// PUBLIC_INTERFACE
export default function MealPlanning() {
  const [currentWeek, setCurrentWeek] = useState<Date>(new Date());
  
  // Placeholder meal plan data - keeping structure for future reference
  // const mealPlan: MealPlan = {
  //   id: '1',
  //   name: 'Weekly Plan',
  //   startDate: '2023-06-01T00:00:00Z',
  //   endDate: '2023-06-07T23:59:59Z',
  //   meals: [
  //     { id: '1', date: '2023-06-01T00:00:00Z', type: 'breakfast', recipeId: '101', servings: 2 },
  //     { id: '2', date: '2023-06-01T00:00:00Z', type: 'lunch', recipeId: '102', servings: 2 },
  //     { id: '3', date: '2023-06-01T00:00:00Z', type: 'dinner', recipeId: '103', servings: 4 },
  //     { id: '4', date: '2023-06-02T00:00:00Z', type: 'breakfast', recipeId: '104', servings: 2 },
  //     { id: '5', date: '2023-06-02T00:00:00Z', type: 'dinner', recipeId: '105', servings: 4 },
  //   ]
  // };

  // Days of the week
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const mealTypes = ['breakfast', 'lunch', 'dinner', 'snack'];

  const goToPreviousWeek = () => {
    const prevWeek = new Date(currentWeek);
    prevWeek.setDate(prevWeek.getDate() - 7);
    setCurrentWeek(prevWeek);
  };

  const goToNextWeek = () => {
    const nextWeek = new Date(currentWeek);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setCurrentWeek(nextWeek);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Meal Planning</h2>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
              New Plan
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors dark:border-gray-600 dark:hover:bg-gray-700">
              Generate Shopping List
            </button>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <button 
            onClick={goToPreviousWeek}
            className="p-2 border border-gray-300 rounded-md dark:border-gray-600"
          >
            ← Previous Week
          </button>
          <h3 className="text-lg font-medium">
            Week of {currentWeek.toLocaleDateString()}
          </h3>
          <button 
            onClick={goToNextWeek}
            className="p-2 border border-gray-300 rounded-md dark:border-gray-600"
          >
            Next Week →
          </button>
        </div>
      </div>

      <div className="flex-1 px-6 py-4 overflow-x-auto">
        <div className="min-w-max bg-white rounded-lg border border-gray-200 overflow-hidden dark:bg-gray-800 dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  Meal Type
                </th>
                {daysOfWeek.map((day) => (
                  <th key={day} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {mealTypes.map((type) => (
                <tr key={type}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium capitalize">{type}</div>
                  </td>
                  {daysOfWeek.map((day) => {
                    // This would normally find the meal for this day and type
                    const hasMeal = Math.random() > 0.5; // Just for demo
                    return (
                      <td key={`${day}-${type}`} className="px-6 py-4 whitespace-nowrap">
                        {hasMeal ? (
                          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-md dark:bg-emerald-900/20 dark:border-emerald-900/30">
                            <div className="text-sm font-medium">Sample Recipe</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">2 servings</div>
                          </div>
                        ) : (
                          <button className="w-full h-full min-h-[60px] border border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700/50">
                            + Add meal
                          </button>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
