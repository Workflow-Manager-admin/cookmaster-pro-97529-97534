"use client";

import React, { useState } from 'react';
import Header from '@/components/shared/Header';
import Sidebar from '@/components/shared/Sidebar';
import Footer from '@/components/shared/Footer';
import RecipeManagement from '@/components/recipe/RecipeManagement';
import IngredientTracking from '@/components/ingredients/IngredientTracking';
import MealPlanning from '@/components/planning/MealPlanning';
import NutritionalAnalysis from '@/components/nutrition/NutritionalAnalysis';

// PUBLIC_INTERFACE
export default function MainContainer() {
  const [activeTab, setActiveTab] = useState<string>('recipes');

  // Render the active component based on the selected tab
  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'recipes':
        return <RecipeManagement />;
      case 'ingredients':
        return <IngredientTracking />;
      case 'meal-planning':
        return <MealPlanning />;
      case 'nutrition':
        return <NutritionalAnalysis />;
      case 'shopping':
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-2xl font-semibold mb-2">Shopping List</h2>
              <p className="text-gray-500 dark:text-gray-400">
                This feature is coming soon!
              </p>
            </div>
          </div>
        );
      case 'favorites':
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="text-6xl mb-4">⭐</div>
              <h2 className="text-2xl font-semibold mb-2">Favorites</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Your favorite recipes will appear here.
              </p>
            </div>
          </div>
        );
      default:
        return <RecipeManagement />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        
        <main className="flex-1 overflow-y-auto">
          {renderActiveComponent()}
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
