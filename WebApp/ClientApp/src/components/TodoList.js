import React, { useState } from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import CheckBox from '@material-ui/core/Checkbox'
let id = 2;

const TodoList = (props) => {

    const [checkedIds, setCheckedIds] = useState([]);

    const [todos, setTodos] = useState([
        { id: 1, text: 'hello' },
        { id: 2, text: 'hello2' }
    ])

    // set conditions for uncheck
    const onCheckboxChanged = todoId => event => {
        if (event.target.checked) {
            setCheckedIds([...checkedIds, todoId]);
        } else { // use off other condition
            // reomve item from array
            const newArr = [...checkedIds];
            const index = newArr.findIndex(x => x === todoId);
            if (index > -1) {
                newArr.splice(index, 1);
                setCheckedIds(newArr);
            }
        }
    }

    return (<>
        <List>
            {todos.map(todo => <ListItem key={todo.id}>
                <ListItemIcon>
                    <CheckBox onChange={onCheckboxChanged(todo.id)} />
                </ListItemIcon>
                <ListItemText
                    primary={todo.text}
                />
            </ListItem>)}
        </List>
    </>)
}

export default TodoList;