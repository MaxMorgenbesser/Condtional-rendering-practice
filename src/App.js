import logo from './logo.svg';
import './App.css';
import DogPic from './DogPic';
import SheepPic from './SheepPic';
import {useState} from 'react'
import CatPic from './CatPic';

function App() {
  const [dog,setDog]=useState(false)
  const [sheep,setSheep]=useState(false)
  const [cat,setCat]=useState(false)
  return (
    <>

   <button onClick={()=> {
    setDog(!dog)
   }}>Show the Dog!</button>
   <h2>{dog ? <DogPic/> : <h1>Show a dog!</h1>

   }</h2>
   <button onClick={()=> {
    setSheep(!sheep)
   }}>Show the Sheep!</button>
   <h2>{sheep ? <SheepPic/> : <h1>Show a sheep!</h1>

   }</h2>

<button onClick={()=> {
    setCat(!cat)
   }}>Show a cat!</button>
   <h2>{cat ? <CatPic/> : <h1>Show a cat!</h1>

   }</h2>


   </>
  );
}

export default App;
