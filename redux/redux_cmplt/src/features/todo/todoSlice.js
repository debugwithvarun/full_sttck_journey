import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState = {
    todos: [{
        id: "1",
        text: "Do DSA"
    }]
}

export const todoSlice = createSlice(
    {
        name: "todo",
        initialState: initialState,
        reducers: {
            addTodo: (state, action) => {
                const newtodo = {
                    id: nanoid(),
                    text: action.payload
                }
                state.todos.push(newtodo)
            },
            removeTodo: (state, action) => {
                const newtodo = state.todos.filter((item) => item.id !== action.payload.id)
                state.todos = newtodo
            },
            updateTodo: (state, action) => {
                const newtodo = state.todos.map((item) => {
                    if (item.id === action.payload.id) {
                        // console.log(item)
                        return {
                            id: item.id,
                            text: action.payload.text
                        }
                    }
                    else {
                        return item
                    }
                })
                state.todos=newtodo
                // console.log(newtodo)

            }
        }
    }
)   
export const { addTodo, removeTodo,updateTodo } = todoSlice.actions
export default todoSlice.reducer