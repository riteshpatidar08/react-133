import React from "react";
import { useReducer } from "react";

function Todo (){
    const initialState = {todos : 0};

    const todoReducer = (state,action)=>{
        if(action.type === "ADD TODO"){
            return{
                todos:state.todos + 1
            }
        }
        return state ;
    }

    const [state,dispatch] = useReducer(todoReducer,initialState);

    return (
        <div>
            <h1>todo page</h1>
            todos:{state.todos}

            <button onClick={()=>{
                dispatch({type:"ADD TODO"})
            }}> Add todo </button>
        </div>
    )
}

export default Todo ;
