import logo from './logo.svg';
import './App.css';
import Liftingchild from './Liftingchild';
import {useState,createContext} from 'react'
import Contexting from './Contexting';

const Context= createContext()

function App() {
  const [asName,setAsName] = useState("mohit");
  const parent=((name)=>{
    setAsName(name);
  })

  return (
    <>
    <h1>parent function</h1>
    {/* <button onClick={parent("M")}>setAsName</button> */}
    <Context.Provider  val={"bhopal"}>
    {/* <Liftingchild value={asName} fun={parent} val="bhopal"/> */}
    <Contexting />
    </Context.Provider>
    </>
  );
}

export default App;

export {Context}