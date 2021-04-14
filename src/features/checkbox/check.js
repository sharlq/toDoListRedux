import { createSlice } from '@reduxjs/toolkit'


// lets compare it to const [toDoList,setToDoList] = useState({})
// teh initialState is equal to useState({})
const initialState = {
     toDoList:[]
}
const check = createSlice({
    name: "toDos",
    initialState,
    reducers: {
    
        saveTodos:(state,action)=>{ //the name with the one
        state.toDoList.push(action.payload)
        
    },
    setCheck:(state,action)=>{
        console.log(state,initialState)
         state.toDoList.map((i)=>{
             if(action.payload===i.id){i.done= !i.done}
         })
    }
    }
});

export const {saveTodos,setCheck} = check.actions //th nam he ts connecte with the name with one
export const selectTodoList = state => state.todos.toDoList
export default check.reducer