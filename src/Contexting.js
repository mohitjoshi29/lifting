import React from 'react'
import {useState,useContext} from 'react'
import {Context} from './App'

export default function Contexting(props) {
    const [add,setAdd]=useState("indore");
    const context = useContext(Context);
    // const child_fun=((val)=>{
    //     setAdd(val)
    // })
    console.log(context);

    const child_fun = (val) =>{
       setAdd(val) 
    }

  return (
      <>
      {props.value}
      <h1>{add}</h1>
      <p>{context}</p>
      {/* <button onClick={()=>{props.fun}}>lifting</button> */}
      <button onClick={()=>child_fun(context.val)}>parent to child</button>
      </>
  )
}
