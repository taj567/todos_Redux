import { TEXT, TODOS, STATUS, FILTER, COMPTODO, UNCOMPTODO, ALLTODO} from './ActionTypes.js';

const initialState = {
    inputText: '',
    todos: [],
    status: "All"
}

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case TEXT:
            //console.log(action.inputText)
            return {
                ...state,
                inputText: action.inputText,
                // todos: state.todos.map((data) => <ul>{data.collectionData}</ul>)
                // inputText: [
                //     {
                //         id: Math.random()*1000,
                //         inputText: action.inputText,
                //         completed: false
                //     }
                // ]
            }
        case TODOS:
            console.log(action.todos)
            return {
                ...state,
                todos: action.todos,
            }

        case STATUS:
            console.log(action.status)
            //console.log(action.todos)
            return {
                ...state,
                status: action.status,
                //todos: action.state,
            }
        case FILTER:
            return {
                ...state,
                todos: action.todos,
                // todos: [
                // state.todos.filter((todoooss) => todoooss.id !== action.collectionData)
                // ]
            }
        case COMPTODO:
            return {
                ...state,
                todos: action.todos,
            }

        case UNCOMPTODO:
            return {
                ...state,
                todos: action.todos,
            }
        case ALLTODO:
            return {
                ...state,
                todos: action.todos,
            }
        // case COMPTODOFILTER:
        //     console.log(action.status)
        //     console.log(action.todos)
        //     return {
        //         ...state,
        //         todos: action.todos,
        //         status: action.status,
        //     }
        // case FILTEREDTODO:
        //     return {
        //         ...state,
        //         todos: action.todos,
        //         status: action.status,
        //     }
        default:
        return state
    }
}
export default todoReducer;