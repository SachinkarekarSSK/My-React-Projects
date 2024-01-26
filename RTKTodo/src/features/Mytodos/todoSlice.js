import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState = {
    Todo : []
}

const TodoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo : (state,action)=>{
           const newTodo = {id:nanoid(), text:action.payload}
            state.Todo.push(newTodo)
            console.log(action);
        },

        deleteTodo : (state,action)=>{
            state.Todo = state.Todo.filter((item)=>{
                return item.id !== action.payload
            })
        },

        UpdateTodo : (state,action)=>{
            console.log('this is a upadate todo',action.payload.id);
            state.Todo = state.Todo.map((item)=>{
                return item.id === action.payload.id ? {...item , text : action.payload.text}:item
            })
        }


    }
})

export const {addTodo,deleteTodo,UpdateTodo} = TodoSlice.actions

export default TodoSlice.reducer