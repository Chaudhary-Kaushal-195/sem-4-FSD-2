import { useReducer } from "react";
export default function UR(){
    const[state,dispatch] = useReducer(reducer,0)
    function reducer(state,action){
        switch(action.type){
            case 'increment':
                return state+1;
            case 'decrement':
                return state-1;
            default:
                return 0;
        }
       
}
 return(
            <>
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            </>
        )
    }