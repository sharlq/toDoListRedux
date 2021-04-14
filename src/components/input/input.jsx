import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import {saveTodos}    from "../../features/checkbox/check"


const Input = () => {
const [input,setInput] = useState('')
const dispatch = useDispatch()
const addTodo = () =>{
    console.log(`adding ${input}`)
    dispatch(saveTodos({
        item:input,
        done: false,
        id: Date.now()
    }))
}
    return (
        <div className="form">
        <input className="textbox" type="text" onChange={e=>setInput(e.target.value)}/>
        <button className="add"  onClick={()=>addTodo()}>Add</button>    
        </div>
    )
}

export default Input
