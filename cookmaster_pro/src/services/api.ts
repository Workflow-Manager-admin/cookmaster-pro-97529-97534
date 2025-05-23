import { Recipe, Ingredient, MealPlan } from '@/types';
import { generateId } from '@/utils/helpers';

// Simulated delay for API calls
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock storage using localStorage (in a real app, this would be a server API)
const storageKeys = {
  RECIPES: 'cookmaster_recipes',
  INGREDIENTS: 'cookmaster_ingredients',
  MEAL_PLANS: 'cookmaster_meal_plans'
};

// Helper functions to work with localStorage
const getFromStorage = <T>(key: string): T[] => {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const saveToStorage = <T>(key: string, data: T[]): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(data));
};

// Recipe API
// PUBLIC_INTERFACE
export const recipeApi = {
  /**
   * Get all recipes
   * @returns Promise resolving to an array of recipes
   */
  getAll: async (): Promise<Recipe[]> => {
    await delay(300); // Simulate API delay
    return getFromStorage<Recipe>(storageKeys.RECIPES);
  },
  
  /**
   * Get a recipe by ID
   * @param id The recipe ID
   * @returns Promise resolving to a recipe or null if not found
   */
  getById: async (id: string): Promise<Recipe | null> => {
    await delay(200);
    const recipes = getFromStorage<Recipe>(storageKeys.RECIPES);
    return recipes.find(r => r.id === id) || null;
  },
  
  /**
   * Create a new recipe
   * @param recipe The recipe to create (without ID)
   * @returns Promise resolving to the created recipe with ID
   */
  create: async (recipe: Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>): Promise<Recipe> => {
    await delay(400);
    const recipes = getFromStorage<Recipe>(storageKeys.RECIPES);
    
    const newRecipe: Recipe = {
      ...recipe,
      id: generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    } as Recipe;
    
    recipes.push(newRecipe);
    saveToStorage(storageKeys.RECIPES, recipes);
    
    return newRecipe;
  },
  
  /**
   * Update an existing recipe
   * @param id The recipe ID to update
   * @param recipe The updated recipe data
   * @returns Promise resolving to the updated recipe
   */
  update: async (id: string, recipe: Partial<Recipe>): Promise<Recipe | null> => {
    await delay(400);
    const recipes = getFromStorage<Recipe>(storageKeys.RECIPES);
    
    const index = recipes.findIndex(r => r.id === id);
    if (index === -1) return null;
    
    const updatedRecipe: Recipe = {
      ...recipes[index],
      ...recipe,
      updatedAt: new Date().toISOString()
    };
    
    recipes[index] = updatedRecipe;
    saveToStorage(storageKeys.RECIPES, recipes);
    
    return updatedRecipe;
  },
  
  /**
   * Delete a recipe
   * @param id The ID of the recipe to delete
   * @returns Promise resolving to true if deleted, false if not found
   */
  delete: async (id: string): Promise<boolean> => {
    await delay(300);
    const recipes = getFromStorage<Recipe>(storageKeys.RECIPES);
    
    const initialLength = recipes.length;
    const filteredRecipes = recipes.filter(r => r.id !== id);
    
    saveToStorage(storageKeys.RECIPES, filteredRecipes);
    
    return filteredRecipes.length < initialLength;
  }
};

// Ingredient API
// PUBLIC_INTERFACE
export const ingredientApi = {
  /**
   * Get all ingredients
   * @returns Promise resolving to an array of ingredients
   */
  getAll: async (): Promise<Ingredient[]> => {
    await delay(300);
    return getFromStorage<Ingredient>(storageKeys.INGREDIENTS);
  },
  
  /**
   * Create a new ingredient
   * @param ingredient The ingredient to create (without ID)
   * @returns Promise resolving to the created ingredient with ID
   */
  create: async (ingredient: Omit<Ingredient, 'id'>): Promise<Ingredient> => {
    await delay(300);
    const ingredients = getFromStorage<Ingredient>(storageKeys.INGREDIENTS);
    
    const newIngredient: Ingredient = {
      ...ingredient,
      id: generateId()
    };
    
    ingredients.push(newIngredient);
    saveToStorage(storageKeys.INGREDIENTS, ingredients);
    
    return newIngredient;
  },
  
  /**
   * Update an ingredient
   * @param id The ID of the ingredient to update
   * @param ingredient The updated ingredient data
   * @returns Promise resolving to the updated ingredient or null if not found
   */
  update: async (id: string, ingredient: Partial<Ingredient>): Promise<Ingredient | null> => {
    await delay(300);
    const ingredients = getFromStorage<Ingredient>(storageKeys.INGREDIENTS);
    
    const index = ingredients.findIndex(i => i.id === id);
    if (index === -1) return null;
    
    const updatedIngredient: Ingredient = {
      ...ingredients[index],
      ...ingredient
    };
    
    ingredients[index] = updatedIngredient;
    saveToStorage(storageKeys.INGREDIENTS, ingredients);
    
    return updatedIngredient;
  },
  
  /**
   * Delete an ingredient
   * @param id The ID of the ingredient to delete
   * @returns Promise resolving to true if deleted, false if not found
   */
  delete: async (id: string): Promise<boolean> => {
    await delay(300);
    const ingredients = getFromStorage<Ingredient>(storageKeys.INGREDIENTS);
    
    const initialLength = ingredients.length;
    const filteredIngredients = ingredients.filter(i => i.id !== id);
    
    saveToStorage(storageKeys.INGREDIENTS, filteredIngredients);
    
    return filteredIngredients.length < initialLength;
  }
};

// Meal Plan API
// PUBLIC_INTERFACE
export const mealPlanApi = {
  /**
   * Get all meal plans
   * @returns Promise resolving to an array of meal plans
   */
  getAll: async (): Promise<MealPlan[]> => {
    await delay(300);
    return getFromStorage<MealPlan>(storageKeys.MEAL_PLANS);
  },
  
  /**
   * Create a new meal plan
   * @param mealPlan The meal plan to create (without ID)
   * @returns Promise resolving to the created meal plan with ID
   */
  create: async (mealPlan: Omit<MealPlan, 'id'>): Promise<MealPlan> => {
    await delay(400);
    const mealPlans = getFromStorage<MealPlan>(storageKeys.MEAL_PLANS);
    
    const newMealPlan: MealPlan = {
      ...mealPlan,
      id: generateId()
    };
    
    mealPlans.push(newMealPlan);
    saveToStorage(storageKeys.MEAL_PLANS, mealPlans);
    
    return newMealPlan;
  },
  
  /**
   * Update a meal plan
   * @param id The ID of the meal plan to update
   * @param mealPlan The updated meal plan data
   * @returns Promise resolving to the updated meal plan or null if not found
   */
  update: async (id: string, mealPlan: Partial<MealPlan>): Promise<MealPlan | null> => {
    await delay(400);
    const mealPlans = getFromStorage<MealPlan>(storageKeys.MEAL_PLANS);
    
    const index = mealPlans.findIndex(m => m.id === id);
    if (index === -1) return null;
    
    const updatedMealPlan: MealPlan = {
      ...mealPlans[index],
      ...mealPlan
    };
    
    mealPlans[index] = updatedMealPlan;
    saveToStorage(storageKeys.MEAL_PLANS, mealPlans);
    
    return updatedMealPlan;
  },
  
  /**
   * Delete a meal plan
   * @param id The ID of the meal plan to delete
   * @returns Promise resolving to true if deleted, false if not found
   */
  delete: async (id: string): Promise<boolean> => {
    await delay(300);
    const mealPlans = getFromStorage<MealPlan>(storageKeys.MEAL_PLANS);
    
    const initialLength = mealPlans.length;
    const filteredMealPlans = mealPlans.filter(m => m.id !== id);
    
    saveToStorage(storageKeys.MEAL_PLANS, filteredMealPlans);
    
    return filteredMealPlans.length < initialLength;
  }
};
