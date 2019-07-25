import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => {
    return {
        fab: {
            position: "fixed",
            bottom: 1,
            right: 1
        }
    }
});

// hooks
const [open, setAddButtonOpen] = useState(false)


const onAddButtonClick = () => {
    setAddButtonOpen(true);
}

const AddToListButton = (props)=>{
    return(<>
        <Fab color="secondary" className={classes.fab} onClick={onAddButtonClick}>
            <AddIcon />
        </Fab>    
    </>)
}

export default AddToListButton;