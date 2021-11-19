/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: recipe
// ====================================================

export interface recipe_recipe_method {
  __typename: "StepToMethod";
  step: number;
  method: string;
}

export interface recipe_recipe_nutrition_vitamins {
  __typename: "Vitamins";
  c: number | null;
  e: number | null;
  dTotal: number | null;
  kTotal: number | null;
}

export interface recipe_recipe_nutrition_carbs {
  __typename: "Carbs";
  carbs: number | null;
  sugar: number | null;
}

export interface recipe_recipe_nutrition_protein {
  __typename: "Proteins";
  total: number | null;
}

export interface recipe_recipe_nutrition_fat {
  __typename: "Fats";
  total: number | null;
}

export interface recipe_recipe_nutrition {
  __typename: "Nutrition";
  vitamins: recipe_recipe_nutrition_vitamins | null;
  carbs: recipe_recipe_nutrition_carbs | null;
  protein: recipe_recipe_nutrition_protein | null;
  fat: recipe_recipe_nutrition_fat | null;
  kcal: number | null;
}

export interface recipe_recipe_ingredients_ingredient {
  __typename: "Ingredient";
  id: string;
  name: string;
}

export interface recipe_recipe_ingredients_quantity {
  __typename: "Quantity";
  quantity: number;
  unit: string;
}

export interface recipe_recipe_ingredients {
  __typename: "QuantityToIngredient";
  ingredient: recipe_recipe_ingredients_ingredient;
  quantity: recipe_recipe_ingredients_quantity;
}

export interface recipe_recipe {
  __typename: "Recipe";
  id: string;
  name: string;
  rating: number | null;
  type: string | null;
  method: recipe_recipe_method[] | null;
  nutrition: recipe_recipe_nutrition | null;
  ingredients: recipe_recipe_ingredients[] | null;
}

export interface recipe {
  recipe: recipe_recipe | null;
}

export interface recipeVariables {
  id: string;
}
