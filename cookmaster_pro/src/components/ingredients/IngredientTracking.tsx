import React, { useState } from 'react';
import { Ingredient } from '@/types';

// PUBLIC_INTERFACE
export default function IngredientTracking() {
  const [activeTab, setActiveTab] = useState<'pantry' | 'shopping'>('pantry');
  
  // Placeholder data
  const ingredients: Ingredient[] = [
    { id: '1', name: 'Eggs', quantity: 12, unit: 'whole', category: 'dairy', inPantry: true },
    { id: '2', name: 'Milk', quantity: 1, unit: 'liter', category: 'dairy', inPantry: true },
    { id: '3', name: 'Flour', quantity: 1000, unit: 'g', category: 'baking', inPantry: true },
    { id: '4', name: 'Sugar', quantity: 500, unit: 'g', category: 'baking', inPantry: true },
    { id: '5', name: 'Chicken Breast', quantity: 600, unit: 'g', category: 'meat', inPantry: false },
    { id: '6', name: 'Tomatoes', quantity: 6, unit: 'whole', category: 'produce', inPantry: false },
  ];

  const pantryItems = ingredients.filter(ing => ing.inPantry);
  const shoppingItems = ingredients.filter(ing => !ing.inPantry);

  return (
    <div className="h-full flex flex-col">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-semibold">Ingredient Tracking</h2>
        <div className="mt-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex">
            <button
              onClick={() => setActiveTab('pantry')}
              className={`py-3 px-6 border-b-2 ${
                activeTab === 'pantry'
                  ? 'border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400'
                  : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              Pantry Items
            </button>
            <button
              onClick={() => setActiveTab('shopping')}
              className={`py-3 px-6 border-b-2 ${
                activeTab === 'shopping'
                  ? 'border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400'
                  : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              Shopping List
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 py-4">
        {activeTab === 'pantry' ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <input
                  type="text"
                  placeholder="Search pantry items..."
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                Add Item
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden dark:bg-gray-800 dark:border-gray-700">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-900/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                      Item
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {pantryItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="px-6 py-4">
                        <div className="font-medium">{item.name}</div>
                      </td>
                      <td className="px-6 py-4">
                        {item.quantity} {item.unit}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <button className="px-3 py-1 text-xs text-emerald-600 hover:bg-emerald-50 rounded dark:text-emerald-400 dark:hover:bg-emerald-900/20">
                            Edit
                          </button>
                          <button className="px-3 py-1 text-xs text-red-600 hover:bg-red-50 rounded dark:text-red-400 dark:hover:bg-red-900/20">
                            Remove
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <input
                  type="text"
                  placeholder="Add item to shopping list..."
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors dark:border-gray-600 dark:hover:bg-gray-700">
                  Generate from Recipes
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {shoppingItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 dark:bg-gray-700"
                      />
                      <span className="ml-3 font-medium">{item.name}</span>
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                        ({item.quantity} {item.unit})
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-2 py-1 text-sm text-emerald-600 hover:bg-emerald-50 rounded dark:text-emerald-400 dark:hover:bg-emerald-900/20">
                        Add to Pantry
                      </button>
                      <button className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded dark:text-gray-400 dark:hover:bg-gray-700/50">
                        ⋯
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
