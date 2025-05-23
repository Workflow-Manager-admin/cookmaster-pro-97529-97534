import React, { useState } from 'react';
import { Recipe } from '@/types';

// PUBLIC_INTERFACE
export default function RecipeManagement() {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  
  // Placeholder data
  const recipes: Recipe[] = [
    {
      id: '1',
      title: 'Classic Spaghetti Carbonara',
      description: 'A traditional Italian pasta dish with eggs, cheese, pancetta, and black pepper.',
      ingredients: [
        { id: '1', name: 'Spaghetti', quantity: 400, unit: 'g', category: 'pasta' },
        { id: '2', name: 'Pancetta', quantity: 150, unit: 'g', category: 'meat' },
        { id: '3', name: 'Eggs', quantity: 4, unit: 'whole', category: 'dairy' },
        { id: '4', name: 'Parmesan', quantity: 50, unit: 'g', category: 'dairy' },
      ],
      instructions: [
        'Bring a large pot of salted water to boil and cook spaghetti according to package directions.',
        'In a large skillet, cook the pancetta over medium heat until crispy.',
        'In a bowl, whisk together eggs and grated cheese.',
        'Drain pasta, reserving some pasta water. Immediately add to the skillet with pancetta.',
        'Remove from heat and quickly stir in the egg mixture, adding pasta water as needed to create a creamy sauce.',
        'Season with freshly ground black pepper and serve immediately.'
      ],
      cookingTime: 15,
      prepTime: 10,
      servings: 4,
      difficulty: 'medium',
      tags: ['Italian', 'Pasta', 'Quick'],
      author: 'Chef Mario',
      createdAt: '2023-01-15T12:00:00Z',
      updatedAt: '2023-01-15T12:00:00Z'
    },
    // More recipe placeholders would go here
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="px-6 py-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">My Recipes</h2>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2 border rounded-lg p-1">
            <button 
              onClick={() => setView('grid')}
              className={`p-2 rounded ${view === 'grid' ? 'bg-emerald-100 dark:bg-emerald-900/40' : ''}`}
            >
              Grid
            </button>
            <button 
              onClick={() => setView('list')}
              className={`p-2 rounded ${view === 'list' ? 'bg-emerald-100 dark:bg-emerald-900/40' : ''}`}
            >
              List
            </button>
          </div>
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
            New Recipe
          </button>
        </div>
      </div>

      <div className="flex-1 px-6 py-4">
        {view === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map(recipe => (
              <div key={recipe.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-4xl">🍝</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{recipe.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 dark:text-gray-400">{recipe.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-1">
                      <span>⏱️</span>
                      <span className="text-sm">{recipe.prepTime + recipe.cookingTime} min</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
                        ❤️
                      </button>
                      <button className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
                        ⋯
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {recipes.map(recipe => (
              <div key={recipe.id} className="py-4 flex items-center hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <div className="w-16 h-16 bg-gray-200 rounded-lg mr-4 flex items-center justify-center dark:bg-gray-700">
                  <span className="text-2xl">🍝</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{recipe.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{recipe.description.substring(0, 100)}...</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">⏱️ {recipe.prepTime + recipe.cookingTime} min</span>
                  <button className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
                    ⋯
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
