import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TableContainer, Divider, Table, TableCell, TableRow, TextField, Typography, Grid } from "@material-ui/core";
import { Autocomplete, Rating } from "@material-ui/lab";
import { FieldArray, Formik } from "formik";
import React, { useState } from "react";
import { FormField } from "src/components/form/FormField";
import { FormikSelect } from "src/components/form/FormikSelect";
import { RecipeInput, QuantityToId, StepToMethodInput, DishInput, AddIngredientInput, IngredientInput, ProductInput } from "src/globalTypes";
import { composeValidators, required } from "src/utilities/formikValidators";
import { initialValues } from "../../Dishes/filterdishes";
import { UpdateDishVariables } from "../../Dishes/types/UpdateDish";
import { useAllProductsQuery } from "../../Ingredients/api";
import { Rating1 } from "../../Menus/filtermenus/components/rating";
import { useAllSuppliersQuery, useUpdateProduct } from "../api";
import { AllSuppliers_suppliers } from "../types/AllSuppliers";
import { FilterProducts_filterProducts } from "../types/FilterProducts";
import { UpdateProductVariables } from "../types/UpdateProduct";
import { H3, H5 } from "src/content/pages/Components/TextTypes";
import { TableSupplierData } from "../AddProduct/components/SuppliersTable";
import { Price } from "../../Menus/filtermenus/components/prices";
import { supplierToQ } from "../AddProduct";

export const UpdateProductDialog = ({
  product,
    open,
    onClose,
}: {
  product: FilterProducts_filterProducts,
    open: boolean,
    onClose: () => void
}) => {
  const {data} = useAllSuppliersQuery()


    const { updateProduct, loading, error } = useUpdateProduct({
        onCompleted: () => window.location.reload(),
      });
      const [selectedSuppliers, setSuppliers] = React.useState<supplierToQ[]>([]);
      function handleDelete(index) {
        selectedSuppliers.splice(index, 1)
        setSuppliers([...selectedSuppliers])
      }
type ProductFormInput = {
  price: string,
  brand: string,
  origin: string,
  id: string,
  name: string,
  rating: string,
}

const formInput: ProductFormInput = {
  price: '',
  brand: '',
  origin: '',
  id: '',
  name: '',
  rating: '',
}

const mapProductInput = (formInput: ProductFormInput) => {
  const mapped: ProductInput = {
    price: Number(formInput.price),
    brand: formInput.brand,
    origin: formInput.origin,
    id: formInput.id,
    name: formInput.name,
    rating: Number(formInput.rating)
  }
  return mapped
}

const formState : UpdateProductVariables = {
  input: mapProductInput(formInput),
  suppliers: [],
}

    return (
    <Dialog fullScreen open={open} onClose={onClose}>
      <Formik
        initialValues={formState}
        onSubmit={(values) => {
          updateProduct({
            variables: {
                suppliers: selectedSuppliers.map((supplierToId) => supplierToId.id),
                input: {
                  brand: values.input.brand,
                  origin: values.input.origin,
                  price: values.input.price,
                id: product.id,
                name: values.input.name,
                rating: values.input.rating,
              },
            },
          });
        }}
      >
        {({ values, submitForm, setFieldValue, handleChange }) => {
          return (
            <>
              <DialogTitle style={{ fontWeight: 600 }} id="form-dialog-title">
                Product Aanpassen
              </DialogTitle>
              <DialogContent>
              <Grid container xs={12} spacing={2}>
                <Grid xs={3}>
                <H5 title="Productnaam"/>
                <FormField
                  name="input.name"
                  label="Naam"
                  validator={composeValidators(required)}
                />
                </Grid>
                <Grid xs={1}></Grid>
                <Grid xs={3}>
                <H5 title="Merknaam"/>
                <FormField
                  name="input.brand"
                  label="Merk"
                />
                </Grid> 
                <Grid xs={1}></Grid>
                <Grid xs={3}>
                <H5 title="Land van herkomst"/>
                <FormField
                  name="input.origin"
                  label="Herkomst"
                />
                </Grid> 
                <Grid xs={3}>
                <Rating1
                updateField="input.rating"
                setFieldValue={setFieldValue}
                />
                </Grid>
                <Grid xs={1}></Grid>
                <Grid xs={3}>
                <H5 title="Prijs (€)"/>
                <Price 
                setFieldValue={setFieldValue}
                />
                </Grid> 
                <Grid xs={1}></Grid>
                <Grid xs={3}>
                <H5 title="Toevoegen"/>
                <Button
                  disabled={loading}
                  onClick={() => submitForm()}
                  color="primary"
                  variant="contained"
                >
                  Gegevens toevoegen
                </Button>
                </Grid>               
                </Grid>
                <Divider/>
                <Grid container xs={12}>
                <Grid xs={6}>
                <H3 title="Leveranciers om toe te voegen"/>
                        </Grid>
                        <Grid xs={6}>
                <H3 title="Toegevoegde leveranciers"/>
                        </Grid>
                  <Grid xs={6}>
                <Grid xs={12}>
                <TableSupplierData 
                  setSuppliers={(selected) => setSuppliers([...selectedSuppliers, selected])
                  }/>
                  </Grid>                
                  </Grid>
                <Grid xs={6}>
                  <TableContainer>
                <Table size="small">
                  <TableRow>
                    <TableCell><H5 title="Naam"/></TableCell>
                    <TableCell><H5 title="Email"/></TableCell>
                    </TableRow>
                {selectedSuppliers.map((supplier, index) =>  (
                  <TableRow>
                    <TableCell>
                      {supplier.name}
                    </TableCell>
                    <TableCell>
                      {supplier.email}
                    </TableCell>
                    <TableCell>
                    <Button
                       variant="contained" 
                       color="secondary"
                        style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} type="button" 
                         onClick={() => {handleDelete(index)}}>           
                                                 -
                       </Button>
                    </TableCell>
                  </TableRow>
                ))}
                </Table>
                </TableContainer>
                </Grid>
                </Grid> 
                {error && (
                  <Typography color="error">
                    Er is een fout opgetreden, probeer het opnieuw.
                  </Typography>
                )}
              </DialogContent>

              <DialogActions>
                <Button disabled={loading} onClick={onClose} color="primary">
                  Cancel
                </Button>
                <Button
                  disabled={loading}
                  onClick={() => submitForm()}
                  color="primary"
                >
                  Gegevens toevoegen
                </Button>
              </DialogActions>
            </>
          );
        }}
      </Formik>
    </Dialog>
  );
};