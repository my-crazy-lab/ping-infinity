import {
    Box,
    LinearProgress,
    Grid,
  } from "@material-ui/core";
import React, { useState } from "react";
import { LoadingScreen } from "src/components/layout";
import { DishFilterInput, RecipeFilterInput } from "src/globalTypes";
import { useFilterRecipesQuery } from "./api";
import { RecipeTable } from "./components/RecipeTable";
import { TopPartRecipePage } from "./components/TopPartRecipePage";
import { initialRecipeValues } from "./filterrecipes";

  export const RecipePage = ({
    page,
    setPage,
  }: {
    page: number;
    setPage: (newPage: number) => void;
  }) => {
    const [ input, setInput] = useState<RecipeFilterInput>(initialRecipeValues);

    const { loading, data } = useFilterRecipesQuery({
      input: input,
      page: page
      });
  
    let content;
    if (loading && !data) content = <LoadingScreen />;
    else if (data) {
      content = (
        <>
        <RecipeTable
        data={data}
        page={page}
        setPage={setPage}
        />
        </>
      );
    }
  
    return (
      <>
      <TopPartRecipePage
          setInput={(values) => setInput(values)}/>
        <Box height={3}>{loading && <LinearProgress />}</Box>
        {content}
      </>
    );
  };