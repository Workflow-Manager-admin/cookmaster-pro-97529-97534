// Recipe related types
export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
  cookingTime: number; // in minutes
  prepTime: number; // in minutes
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  image?: string;
  nutritionInfo?: NutritionData;
  author: string;
  createdAt: string;
  updatedAt: string;
}

// Ingredient related types
export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  category: string;
  nutritionPer100g?: NutritionData;
  inPantry?: boolean;
}

// Meal planning related types
export interface MealPlan {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  meals: Meal[];
}

export interface Meal {
  id: string;
  date: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  recipeId: string;
  servings: number;
}

// Nutritional analysis related types
export interface NutritionData {
  calories: number;
  protein: number; // in grams
  carbohydrates: number; // in grams
  fat: number; // in grams
  fiber: number; // in grams
  sugar: number; // in grams
  sodium: number; // in mg
  cholesterol: number; // in mg
  vitamins?: Record<string, number>;
  minerals?: Record<string, number>;
}

// UI related types
export interface Tab {
  id: string;
  label: string;
  icon: string;
}

export interface NavigationItem {
  id: string;
  name: string;
  path: string;
  icon: string;
}
