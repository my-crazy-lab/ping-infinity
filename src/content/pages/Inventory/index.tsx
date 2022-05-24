import { Button, TextField, TableBody, Container, Grid, Paper, Table, TableContainer, TableHead, TableRow, TableCell, Dialog, DialogContent, DialogTitle, CircularProgress, IconButton, MenuItem, Divider } from "@material-ui/core"
import { FieldArray, Formik } from "formik"
import React from "react"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { useNavigate } from "react-router"
import Footer from "src/components/Footer"
import { FormField, FormFieldEdit } from "src/components/form/FormField"
import { PageHeader } from "src/components/pageHeader/PageHeader"
import PageTitleWrapper from "src/components/PageTitleWrapper"
import { clearAuth } from "src/utilities/auth"
import { composeValidators, mustBeDate, mustBeNumber, required } from "src/utilities/formikValidators"
import { H5 } from "../Components/TextTypes"
import { IngredientSelectorInventory, IngredientSelectorInventory1 } from "../MyChefsbase/Content/Components/AddRecipe/Components/Utils/IngredientSelector"
import { IngredientIdsForm, IngredientNamesForm, IngredientsForm } from "../MyChefsbase/Recipes/AddRecipe"
import { useAddToInventory, useInventoryQuery } from "./api"
import { addToInventoryVariables } from "./types/addToInventory"
import { listInventory_listInventory } from "./types/listInventory"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useGetProductsForIngredients } from "../MyChefsbase/Ingredients/api"
import { validate } from "graphql"
import { FormikSelect } from "src/components/form/FormikSelect"
import { getUnitsForMaterial, units } from "../MyChefsbase/Recipes/AddRecipe/components/IngredientTable"
import { Quantity } from "../MyChefsbase/Content"
import { InventoryForm } from "src/globalTypes"

export const InventoryPage = () => {
    const navigate = useNavigate()
    const { data, loading, error } = useInventoryQuery()

    if (loading) return <CircularProgress/>

    if (error) return <CircularProgress/>
    
    
    
    return (
        <>
      <Helmet>
        <title>My Chefsbase</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
        title="Inventaris"
        name=""
        avatar='/static/images/avatars/SB_logo.png' />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
         <Content ingredients={data.listInventory}/>
          </Grid>
          <Grid item lg={8} xs={12}>
            <Button onClick={() => {
              clearAuth();
              navigate(`/`)
            }

            }>Log Out</Button>         
            </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
    )
}

const Content  = ({ingredients}: {ingredients: listInventory_listInventory[]}) => {

    const [open, setOpen] = useState(false)
    const [openInventory, setOpenInventory] = useState(false)
    const [inv, setInv] = useState<listInventory_listInventory[]>()
    return (
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell><H5 title="Ingredient"/></TableCell>
                    <TableCell><H5 title="Hoeveelheid"/></TableCell>
                    <TableCell><H5 title="Bestel"/></TableCell>
                    </TableRow>
            </TableHead>
            <TableBody>
                {ingredients && ingredients.map((inventory) => (
                    <TableRow>
                        <TableCell align="center">{inventory.ingredient.name}</TableCell>
                        <TableCell align="center">
                            <TextField 
                            size="small"
                            style={{maxWidth: '100px'}}
                            placeholder={String(inventory.quantity.quantity)} />
                            {inventory.quantity.unit}
                            </TableCell>
                        <TableCell align="center"><Button onClick={() => {
                            setOpen(true);
                            setInv(ingredients)
                            } 
                        }
                            variant="outlined">Bijbestellen</Button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <Order inventory={inv} open={open} onClose={() => setOpen(false)}/>
            <AddToInventory open={openInventory} onClose={() => setOpenInventory(false)}/>
        </Table>
        <Button fullWidth onClick={() => setOpenInventory(true)} variant="outlined">Ingredienten toevoegen</Button>
        </TableContainer>
    )
}

const emptyForm: InventoryInputForm = {
  ingredientid: '',
  ingredientname: '',
  quantity: '',
  unit: '',
  brand: '',
  price: '',
  expiration: '',
  rating: '',
  origin: '',
}
const input = {
  inputForm: [emptyForm]
}

type InventoryInputForm = {
  ingredientid: string,
  ingredientname: string,
  quantity: string,
  unit: string,
  brand: string,
  price: string,
  expiration: string,
  rating: string,
  origin: string,
}

const Row1 = ({setFieldValue, index, values}: {values: InventoryInputForm[]; setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void ; index: number}) => {

  return (
    <>
      <Grid xs={4}>
                            <IngredientSelectorInventory1
                            index={index}
                            setFieldValue={setFieldValue}
                          />
                          </Grid>
                          <Grid xs={3}>
                          <FormFieldEdit
          placeholder={values[index].quantity}
          name={`inputForm.${index}.quantity`}
          label="Hoeveelheid"
          validator={composeValidators(required, mustBeNumber)}
        />
      </Grid>
      <Grid xs={3}>
                          <FormFieldEdit
          placeholder={values[index].unit}
          name={`inputForm.${index}.unit`}
          label="Meeteenheid"
          validator={composeValidators(required)}
        />
      </Grid>
      <Grid xs={2}></Grid>
          <Grid xs={2}>
          <FormFieldEdit
          placeholder=""
          name={`inputForm.${index}.expiration`}
          label="Houdbaarheid"
          validator={composeValidators(required, mustBeDate)}
        />
          </Grid>
          <Grid xs={2}>
          <FormFieldEdit
          placeholder=""
          name={`inputForm.${index}.price`}
          label="prijs"
          validator={composeValidators(required)}
        />
          </Grid>
          <Grid xs={3}>
          <FormFieldEdit
          placeholder=""
          name={`inputForm.${index}.brand`}
          label="Merk"
          validator={composeValidators(required)}
        />
          </Grid>
          <Grid xs={3}>
          <FormFieldEdit
          placeholder=""
          name={`inputForm.${index}.origin`}
          label="Herkomst"
          validator={composeValidators(required)}
        />
          </Grid>
                          </>
  )
}


const AddToInventory = ({open, onClose}: {open: boolean; onClose:  () => void;}) => {

  const [stepHere, setStep] = useState(1)
    
    const { addToInventory, loading, error } = useAddToInventory({
        onCompleted: () => {
          window.location.reload();
        },
      });
      
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
            </DialogTitle>
            <DialogContent>
            <Formik
              initialValues={input}
              onSubmit={(values) => {
                addToInventory({
                  variables: {
                    inventoryInput : toInput(values.inputForm)
                }
            });
              }}>
              {({ values, handleChange, submitForm, setFieldValue }) => {
                console.log(values)
                return (
                  <>
                    <Grid container xs={12}>
                    <Grid xs={12}><H5 title={`Voeg ingredienten toe`}/></Grid>
                            <Grid xs={6}><H5 title="Ingredient:"/></Grid>
                            
                            <Grid xs={2}></Grid>
                            <FieldArray
                    name="inputForm"
                    render={(arrayHelpers) => (
          <>
            <Grid xs={1}></Grid>
            <Grid xs={2}></Grid>
            {values.inputForm.map((form, index) => {
              return (
              <>

    <Grid container xs={12}>
      <Row1 values={values.inputForm} setFieldValue={setFieldValue} index={index}/> 
                          <Grid xs={2}>
                          <Grid xs={6}>
                  {index >= 0 ? (
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{
                        maxWidth: "30px",
                        maxHeight: "30px",
                        minWidth: "30px",
                        minHeight: "30px",
                      }}
                      type="button"
                      onClick={() => {
                        setStep(stepHere - 1);
                        arrayHelpers.remove(index);
                      }}
                    >
                      -
                    </Button>
                  ) : (
                    <Grid xs={6}></Grid>
                  )}
                </Grid>
                <Grid xs={6}>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{
                      maxWidth: "30px",
                      maxHeight: "30px",
                      minWidth: "30px",
                      minHeight: "30px",
                    }}
                    type="button"
                    onClick={() => {
                      setStep(stepHere + 1);
                      arrayHelpers.push(emptyForm);
                    }}
                  >
                    +
                  </Button>
                </Grid> 
                          </Grid>
                          <Divider />
                </Grid> 
                </>
            )
            })}
                  </>
                )
              }
              />
              <Grid xs={4}>
              <Button
                                  onClick={() => submitForm()}
                                  color="primary"
                                  variant="outlined"
                                >
                                  Voeg toe aan inventaris
                                </Button>
                                </Grid>
                                <Grid xs={2}></Grid>
                                <Grid xs={4}><Button
                                  onClick={onClose}
                                  color="primary"
                                  variant="outlined"
                                >
                                  Sluiten
                                </Button>
                                </Grid>
              </Grid>
              
              </>
                )
              }}
            </Formik>
            </DialogContent>
            </Dialog>
            )
        }
        export const toInput = (input: InventoryInputForm[]): InventoryForm[] => {

          const result: InventoryForm[] = input.map((i) => ({
            ingredientid: i.ingredientid,
  quantity: Number(i.quantity),
  ingredientname: i.ingredientname,
  unit: i.unit,
  brand: i.brand,
  price: Number(i.price),
  expiration: i.expiration,
  rating: Number(i.rating),
  origin: i.origin,
          }))
        return result
      }

const Order = ({inventory, open, onClose}: {inventory: listInventory_listInventory[], open: boolean, onClose: () => void}) => {
    const a = '';
    const [quantity, setQuantity] = useState('0')

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                <H5 title={`Bestel bij`}/>
            </DialogTitle>
            <DialogContent>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><H5 title="Bestel bij:"/></TableCell>
                            <TableCell><H5 title="Prijs per hoeveelheid:"/></TableCell>
                            <TableCell><H5 title="Aantal:"/></TableCell>
                            </TableRow>
                    </TableHead>
                    <TableBody>
                        {inventory && inventory.map((option) => (
                            <TableRow>
                        <TableCell align="center">{option.ingredient.name}</TableCell> 
                        <TableCell align="center"> <Grid>{`€${(option.price).toFixed(2)}`} per </Grid>
                        <Grid>{option.quantity.quantity} {option.quantity.unit}</Grid></TableCell> 
                        <TableCell align="center">
                        <TextField 
                            size="small"
                            style={{maxWidth: '100px'}}
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder={String(quantity)} />
                            </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button fullWidth variant="outlined">Bestellen</Button>
            </DialogContent>
        </Dialog>
    )
}
