import { Grid, TextField, Typography } from "@material-ui/core"
import Autocomplete from "@material-ui/lab/Autocomplete"
import React from "react"
import { H5 } from "src/content/pages/Components/TextTypes"

export const Seasons = ({
    seasons,
    setFieldValue
  }: {
    seasons: string[] | null;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
  }) => {
    return (
      <>
  <Grid container spacing={2} xs={12}>
  <Grid key={0} item xs={12}>
   <H5 title="Zoek op seizoen" />
   {seasons && (
    <Autocomplete
multiple
id="tags-standard"
options={seasons.map((option) => (option))}
getOptionLabel={(option) => option? option : ""}
onChange={(event,  values) => setFieldValue("seasons", values.map((option) => option? option : ""))}
renderInput={(params) => (
                 <TextField
                 {...params}
                 fullWidth
                label="Seizoenen"
                />
  )}
  />
   )}
   
  </Grid>
    </Grid>
    </>
    )
  }


export const Brands = ({
  brands,
  setFieldValue
}: {
  brands: string[] | null;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
}) => {
  return (
    <>
<Grid container spacing={2} xs={12}>
<Grid key={0} item>
 <H5 title="Zoek op merken:"/>
 {brands && (
  <Autocomplete
multiple
id="tags-standard"
options={brands.map((option) => (option))}
getOptionLabel={(option) => option? option : ""}
onChange={(event,  values) => setFieldValue("brands", values.map((option) => option? option : ""))}
renderInput={(params) => (
               <TextField
               {...params}
               fullWidth
              label="Merken"
              />
)}
/>
 )}
 
</Grid>
  </Grid>
  </>
  )
}