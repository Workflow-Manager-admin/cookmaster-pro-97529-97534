import { Recipe, Ingredient, NutritionData } from '@/types';

// PUBLIC_INTERFACE
/**
 * Generate a unique ID
 * @returns A unique string ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// PUBLIC_INTERFACE
/**
 * Calculate the total nutrition data for a recipe based on its ingredients
 * @param recipe The recipe to calculate nutrition data for
 * @returns The calculated nutrition data
 */
export function calculateRecipeNutrition(recipe: Recipe): NutritionData {
  // This is a simplified calculation
  // In a real app, this would use the ingredient nutrition data and calculate based on quantities
  const baseNutrition: NutritionData = {
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
    fiber: 0,
    sugar: 0,
    sodium: 0,
    cholesterol: 0,
  };

  // Sum up the nutritional values from each ingredient
  recipe.ingredients.forEach(ingredient => {
    if (ingredient.nutritionPer100g) {
      const multiplier = ingredient.quantity / 100; // Convert to 100g units
      baseNutrition.calories += ingredient.nutritionPer100g.calories * multiplier;
      baseNutrition.protein += ingredient.nutritionPer100g.protein * multiplier;
      baseNutrition.carbohydrates += ingredient.nutritionPer100g.carbohydrates * multiplier;
      baseNutrition.fat += ingredient.nutritionPer100g.fat * multiplier;
      baseNutrition.fiber += ingredient.nutritionPer100g.fiber * multiplier;
      baseNutrition.sugar += ingredient.nutritionPer100g.sugar * multiplier;
      baseNutrition.sodium += ingredient.nutritionPer100g.sodium * multiplier;
      baseNutrition.cholesterol += ingredient.nutritionPer100g.cholesterol * multiplier;
    }
  });

  // Adjust for serving size
  const servingAdjustment = 1 / (recipe.servings || 1);
  return {
    calories: Math.round(baseNutrition.calories * servingAdjustment),
    protein: Math.round(baseNutrition.protein * servingAdjustment),
    carbohydrates: Math.round(baseNutrition.carbohydrates * servingAdjustment),
    fat: Math.round(baseNutrition.fat * servingAdjustment),
    fiber: Math.round(baseNutrition.fiber * servingAdjustment),
    sugar: Math.round(baseNutrition.sugar * servingAdjustment),
    sodium: Math.round(baseNutrition.sodium * servingAdjustment),
    cholesterol: Math.round(baseNutrition.cholesterol * servingAdjustment),
  };
}

// PUBLIC_INTERFACE
/**
 * Format a date to a readable string
 * @param dateString The date string to format
 * @returns A formatted date string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

// PUBLIC_INTERFACE
/**
 * Format time in minutes to hours and minutes
 * @param minutes The time in minutes
 * @returns A formatted time string
 */
export function formatTime(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return `${hours} hr`;
  }
  
  return `${hours} hr ${remainingMinutes} min`;
}

// PUBLIC_INTERFACE
/**
 * Create a shopping list from a meal plan
 * @param mealPlan The meal plan to generate a shopping list from
 * @param recipes Array of recipes to look up
 * @returns A list of ingredients needed for the meal plan
 */
export function createShoppingListFromMealPlan(
  mealPlan: MealPlan, 
  recipes: Recipe[]
): Ingredient[] {
  const shoppingList: Record<string, Ingredient> = {};
  
  // Go through each meal in the plan
  mealPlan.meals.forEach(meal => {
    // Find the recipe for this meal
    const recipe = recipes.find(r => r.id === meal.recipeId);
    if (!recipe) return;
    
    // Calculate the scaling factor based on servings
    const scaleFactor = meal.servings / recipe.servings;
    
    // Add each ingredient to the shopping list
    recipe.ingredients.forEach(ingredient => {
      const scaledQuantity = ingredient.quantity * scaleFactor;
      
      // If this ingredient is already in the list, increase the quantity
      if (shoppingList[ingredient.id]) {
        shoppingList[ingredient.id].quantity += scaledQuantity;
      } else {
        // Otherwise, add it to the list
        shoppingList[ingredient.id] = {
          ...ingredient,
          quantity: scaledQuantity,
          inPantry: false // Mark as needed for shopping
        };
      }
    });
  });
  
  // Convert the record to an array
  return Object.values(shoppingList);
}
