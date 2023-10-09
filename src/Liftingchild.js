import React from 'react'
import {useState,useContext} from 'react'
import Context from './App'


export default function Liftingchild(props) {
    const [add,setAdd]=useState("indore");
    const context = useContext(Context);
    const child_fun=((valll)=>{
        setAdd(valll)
    })
  return (
      <>
      {props.value}
      <h1>{add}</h1>
      <button onClick={()=>{props.fun("joshi...")}}>lifting</button>
      <button onClick={()=>child_fun(props.val)}>parent to child</button>
      </>
  )
}
