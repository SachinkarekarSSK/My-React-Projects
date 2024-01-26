import React from 'react'
import { useSelector } from 'react-redux'
import TodoCard from './TodoCard'
import { nanoid } from '@reduxjs/toolkit'

const AllTodos = () => {

    const todoarr = useSelector((state)=>{return state.Todo})
    console.log(todoarr);

  return (
    <>
        <div className="container m-auto flex flex-wrap gap-5">
           
           {todoarr.map((item)=>{
            return (
                <TodoCard key={item.id} item={item} />
            )
           })}
        </div>
    </>
  )
}

export default AllTodos