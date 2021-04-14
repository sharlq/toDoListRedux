import React from 'react'
import {useDispatch} from "react-redux"
import {setCheck}    from "../../features/checkbox/check"

const ListItem = ({id,item,state}) => {
    const dispatch=useDispatch()
    const handleCheck = () =>{
        dispatch(setCheck(id))
    }
    return (
        <div key={id} className="list-item">
        <label key={id}>{item}</label>
        <input key={id} type="checkbox" name="" id={id} checked={state} onChange={()=>handleCheck()}/>
        </div>
    )
}

export default ListItem
