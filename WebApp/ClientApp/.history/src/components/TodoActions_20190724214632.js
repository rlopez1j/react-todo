import React, { useState } from 'react';
import { Fab, Dialog, DialogTitle, DialogContent, 
    TextField, DialogActions, Button } from '@material-ui/core';
import 'typeface-roboto';
import { makeStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles(theme => {
    return {
        fab: {
            position: "fixed",
            bottom: 1,
            right: 1
        }
    }
});

const TodoActions = (props)=>{
    const classes = useStyles();

    return(<>
        <Fab color="secondary" className={classes.fab} onClick={handleDialog}>
            <AddIcon />
        </Fab>
        <Fab disabled={!hasSelectedIds}>
            <DeleteIcon />
        </Fab>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                Add item to Todo list
            </DialogTitle>
            <DialogContent>
                <TextField onChange={handleChange}
                    autoFocus
                    placeholder="Item"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    Cancel
                </Button>
                <Button disabled={!addButton} onClick={addToList}>
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    </>)
}

export default TodoActions;