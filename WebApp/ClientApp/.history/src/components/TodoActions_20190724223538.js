import React, { useState } from 'react';
import { Fab } from '@material-ui/core';
import 'typeface-roboto';
import DeleteIcon from '@material-ui/icons/Delete'
import AddToListButton from './AddToListButton';
import addToList from './AddToList'

const [checkedIds, setCheckedIds] = useState([]);

const hasSelectedIds = checkedIds.length > 0;

const TodoActions = (props)=>{
    return(<>
        <AddToListButton />
        <Fab disabled={!hasSelectedIds}>
            <DeleteIcon />
        </Fab>
        <addToList />
    </>)
}

export default TodoActions;