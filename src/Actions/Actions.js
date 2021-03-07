import { TEXT, TODOS, STATUS, FILTER, COMPTODO, UNCOMPTODO, FILTEREDTODO, ALLTODO} from './ActionTypes.js';

export function textTodos(inputText)   {
    return {
        type: TEXT,
        inputText,
    }
}

export function todosList(todos) {
    return {
       type: TODOS,
       todos,
        // payload: {
        //  todos:todos,
        //  collectionData:
        //  todos !== ""
        //    ? todos
        //    : todos.map((data) => {
        //   return (
        //   <ul>{data.action}</ul>
        //       )
        //   })
        // }
    }
}

export function todoStatus(status) {
    //console.log(todos)
    return {
       type: STATUS,
       status,
    }
}
export function todoFilter(todos ) {
    return {
        type: FILTER,
        todos,
    }
}

export function completeTodo(todos) {
    //console.log(todos)
    return {
        type: COMPTODO,
        todos,
    }
}

export function unCompleteTodo(todos) {
    return {
        type: UNCOMPTODO,
        todos,
    }
}

export function allTodo(todos) {
    return {
        type: ALLTODO,
        todos,
    }
}
// export function compTodoFilter(todos, status) {
//     console.log(todos)
//     return {
//         type: COMPTODOFILTER,
//         status,
//         todos,
//     }
// }


export const filteredTodo= (todos, status) => (dispatch) => {
    dispatch({
        type: FILTEREDTODO,
        status,
       payload: {
        todos: todos,
        status:
        todos === ""
        ? completeTodo.filter((todos) => todos.completed === true)
        : unCompleteTodo((todos) => todos.completed === false)
        // if(todos.completed === true) {
        // }
        //status: status,
        // status:
        //    todoStatus === ""
        //    ? completeTodo === true
        //    : uncompletedTodo === false
        //    todos.filter((x) => x.id !== action.id)
        // }
    }
    })
}