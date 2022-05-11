import { Dialog, DialogTitle, DialogContent, Card, CardActionArea, Grid, Typography, TableContainer, TableBody, TableCell, TableHead, TableRow, List, ListItem, Button, DialogActions } from "@material-ui/core"
import React, { useState } from "react"
import { LoadingScreen } from "src/components/layout"
import { ItemString, ItemInt, ItemDouble } from "../../Menus/menuDialog"
import { useGetProductQuery } from "../api"
import { product_product_suppliers } from "../types/product"
import { UpdateProductDialog } from "./updateProductDialog"

export const ProductDialog = ({
    setId,
    id,
    open,
    onClose,
}: {
    id: string;
    setId: () => void;
    open: boolean;
    onClose: () => void
}) => {

    const { data, loading, error } = useGetProductQuery({id: id, onCompleted: (result) =>  {}})

    const [openUpdateDialog, setUpdateDialog] = useState(false)

    if (loading) return <LoadingScreen/>
    if (error) return <LoadingScreen/>

    let product = data.product

    return (
        <>
        <Dialog open={open} onClose={onClose}>
            {product && (
             <>
                <DialogTitle style={{ fontWeight: 600 }} id="form-dialog-title">Product: {product.name}</DialogTitle>
                <DialogActions>
                <Button variant="contained" onClick={onClose}>
                  Terug
                </Button>
                <Button variant="contained" onClick={() => {
                        setId();
                        setUpdateDialog(true);
                        onClose()
                }}>
                  Product aanpassen
                </Button>
              </DialogActions>
              <DialogContent>
                  <Card>
                      <Grid container spacing={2} xs={12}>
                       <ItemInt 
                       title="rating"
                       item={product.rating}
                       />
                       <ItemString
                      title="Merk"
                      item={product.brand}
                      />
                      <ItemDouble 
                      title="Prijs"
                      item={product.price.price}
                      />
                      <ItemString
                      title="Herkomst"
                      item={product.origin}
                      />
                      <ItemSuppliers
                      title="Leveranciers"
                      item={product.suppliers}
                      />
                      </Grid>
                  </Card>
              </DialogContent>
            </>
            )}
        </Dialog>
        <UpdateProductDialog
        id={product.id}
        open={openUpdateDialog}
        onClose={() => setUpdateDialog(false)}
        />
        </>
    )
}
export const ItemSuppliers = ({title, item}: {title: string, item: product_product_suppliers []| null;}) => {
    return (
        <>
        <Grid key={0} item xs={12}>
        <Typography style={{ fontWeight: 600 }}>{title}</Typography>
        </Grid> 
        <Grid key={1} item xs={12}>
                <TableContainer>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Leverancier Opties</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {item && item.map((product) => (
                <>
                        <TableRow>
                            <TableCell align="center">
                            {product.name}
                            </TableCell>
                        </TableRow>
                        </>
                    ))}
                    </TableBody>
                </TableContainer>
            </Grid>
            </>
    )
}
