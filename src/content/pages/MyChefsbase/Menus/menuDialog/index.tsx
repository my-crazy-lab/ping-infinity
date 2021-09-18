import { Dialog, DialogTitle, DialogContent, Card, CardActionArea, Grid, Typography, TableContainer, TableBody, TableCell, TableHead, TableRow, List, ListItem, Button, DialogActions } from "@material-ui/core"
import React from "react"
import { useState } from "react"
import { FilterMenus_filterMenus, FilterMenus_filterMenus_courses } from "../types/FilterMenus"
import { UpdateMenuDialog } from "./UpdateMenu"

export const MenuDialog = ({
    menu,
    open,
    onClose,
    setOpenUpdateDialog,
}: {
    setOpenUpdateDialog: () => void;
    menu: FilterMenus_filterMenus;
    open: boolean;
    onClose: () => void
}) => {
    console.log(menu.rating)

    return (
        <Dialog open={open} onClose={onClose}>
            {menu && (
             <>
                <DialogTitle id="form-dialog-title">Menu: {menu.name}</DialogTitle>
                <DialogActions>
                <Button variant="contained" onClick={onClose}>
                  Terug
                </Button>
                <Button variant="contained" onClick={() => setOpenUpdateDialog()}>
                  Menu aanpassen
                </Button>
              </DialogActions>
              <DialogContent>
                  <Card>
                      <Grid container spacing={2} xs={12}>
                       <ItemString 
                       title="seizoen"
                       item={menu.season}
                       />
                       <ItemString 
                       title="thema"
                       item={menu.theme}
                       />
                       <ItemInt 
                       title="rating"
                       item={menu.rating}
                       />
                      <ItemPeriod 
                      title="periode"
                      startdate={menu.periodstartdate}
                      enddate={menu.periodenddate}
                      />
                      <ItemCourses
                      title="Gangen"
                      item={menu.courses}
                      />
                      </Grid>
                  </Card>
              </DialogContent>
            </>

            )}
        </Dialog>
    )
}

export const ItemCourses = ({title, item}: {title: string, item: FilterMenus_filterMenus_courses []| null;}) => {
    const size = item?.length
    return (
        <>
        <Grid key={0} item xs={12}>
        <Typography>{title}</Typography>
        </Grid> 
        <Grid key={1} item xs={12}>
                <TableContainer>
                    <TableHead>
                        <TableRow>
                            <TableCell>Gang</TableCell>
                            <TableCell>Gerechten</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {item && item.map((course) => (
                <>
                        <TableRow>
                            <TableCell align="left">
                            {course?.course?.courseType}
                            </TableCell>
                            <TableCell align="left">
                            <List>
                            {course?.dishes?.map((dish) => (
                                <>
                                <ListItem key={dish?.id}>
                                - {dish?.name}
                                </ListItem>
                                </>
                            ))}
                            </List>
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

export const ItemString = ({title, item}: {title: string, item: string | null}) => {
    return (
        <>
        <Grid key={0} item xs={3}>
        <Typography>{title}</Typography>
        </Grid>  
        <Grid key={1} item xs={9}>
        {item? item : "Geen "+ title + "bekend"}
        </Grid> 
        </> 
    )
}

export const ItemInt = ({title, item}: {title: string, item: number | null}) => {
    return (
        <>
        <Grid key={0} item xs={3}>
        <Typography>{title}</Typography>
        </Grid>  
        <Grid key={1} item xs={9}>
        {item}
        </Grid> 
        </> 
    )
}

export const ItemPeriod = ({title, startdate, enddate}: {title: string, startdate: string | null, enddate: string | null}) => {
    return (
        <>
        <Grid key={0} item xs={3}>
        <Typography>{title}</Typography>
        </Grid>  
        <Grid key={1} item xs={9}>
        Vanaf {startdate? startdate : "Geen "+ startdate + "bekend"} tot {enddate? enddate : "Geen "+ enddate + "bekend"}
        </Grid> 
        </> 
    )
}