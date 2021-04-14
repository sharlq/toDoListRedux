import React from 'react'
import ListItem from './listitem'
import {useSelector } from "react-redux"
import { selectTodoList } from "../../features/checkbox/check"
const List = () => {
    const items = useSelector(selectTodoList)
    return (
        <div className = "list">
           { items.map((i)=><ListItem  item={i.item} state={i.done} id={i.id}/>)}
        </div>
    )
}

export default List
