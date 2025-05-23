"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Recipe, Ingredient, MealPlan } from '@/types';

interface AppContextType {
  recipes: Recipe[];
  ingredients: Ingredient[];
  mealPlans: MealPlan[];
  addRecipe: (recipe: Recipe) => void;
  updateRecipe: (id: string, recipe: Recipe) => void;
  deleteRecipe: (id: string) => void;
  addIngredient: (ingredient: Ingredient) => void;
  updateIngredient: (id: string, ingredient: Ingredient) => void;
  deleteIngredient: (id: string) => void;
  addMealPlan: (mealPlan: MealPlan) => void;
  updateMealPlan: (id: string, mealPlan: MealPlan) => void;
  deleteMealPlan: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// PUBLIC_INTERFACE
export function AppProvider({ children }: { children: ReactNode }) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);

  const addRecipe = (recipe: Recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const updateRecipe = (id: string, recipe: Recipe) => {
    setRecipes(recipes.map(r => r.id === id ? recipe : r));
  };

  const deleteRecipe = (id: string) => {
    setRecipes(recipes.filter(r => r.id !== id));
  };

  const addIngredient = (ingredient: Ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  const updateIngredient = (id: string, ingredient: Ingredient) => {
    setIngredients(ingredients.map(i => i.id === id ? ingredient : i));
  };

  const deleteIngredient = (id: string) => {
    setIngredients(ingredients.filter(i => i.id !== id));
  };

  const addMealPlan = (mealPlan: MealPlan) => {
    setMealPlans([...mealPlans, mealPlan]);
  };

  const updateMealPlan = (id: string, mealPlan: MealPlan) => {
    setMealPlans(mealPlans.map(m => m.id === id ? mealPlan : m));
  };

  const deleteMealPlan = (id: string) => {
    setMealPlans(mealPlans.filter(m => m.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        recipes,
        ingredients,
        mealPlans,
        addRecipe,
        updateRecipe,
        deleteRecipe,
        addIngredient,
        updateIngredient,
        deleteIngredient,
        addMealPlan,
        updateMealPlan,
        deleteMealPlan
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
