/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: recipes
// ====================================================

export interface recipes_recipes {
  __typename: "Recipe";
  id: string;
  name: string;
  type: string | null;
  rating: number | null;
}

export interface recipes {
  numberOfRecipes: number | null;
  recipes: recipes_recipes[] | null;
}

export interface recipesVariables {
  name?: string | null;
  offset?: number | null;
  limit?: number | null;
}
