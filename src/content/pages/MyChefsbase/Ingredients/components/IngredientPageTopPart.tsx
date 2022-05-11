import { useQuery } from "@apollo/client";
import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { LoadingScreen } from "src/components/layout";
import { IngredientFilterInput } from "src/globalTypes";
import { IngredientsData } from "../api";
import { IngredientFilter } from "../filterIngredients";


export const TopPartIngredientPage = ({
    setInput,
}: {
  setInput: (values: IngredientFilterInput) => void;
}) => {
  const { loading, data, error } = useQuery(IngredientsData)
  if (loading) return <CircularProgress />;
  if (error) return <CircularProgress />;

  return (
    <IngredientFilter
    allCategories={data.allCategories}
    onChange={(values) => setInput(values)}
    />
  )
}