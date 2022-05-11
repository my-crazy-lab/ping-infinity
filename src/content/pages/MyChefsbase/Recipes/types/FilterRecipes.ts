/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RecipeFilterInput } from "./../../../../../globalTypes";

// ====================================================
// GraphQL query operation: FilterRecipes
// ====================================================

export interface FilterRecipes_filterRecipes_quantity {
  __typename: "Quantity";
  quantity: number;
  unit: string;
}

export interface FilterRecipes_filterRecipes {
  __typename: "Recipe";
  id: string;
  name: string;
  rating: number | null;
  type: string | null;
  quantity: FilterRecipes_filterRecipes_quantity | null;
}

export interface FilterRecipes {
  numberOfRecipes: number | null;
  filterRecipes: FilterRecipes_filterRecipes[] | null;
}

export interface FilterRecipesVariables {
  input?: RecipeFilterInput | null;
  offset?: number | null;
  limit?: number | null;
}