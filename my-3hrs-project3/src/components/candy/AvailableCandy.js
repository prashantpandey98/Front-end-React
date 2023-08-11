import React,{useState} from 'react'
import classes from "./AvailableCandy.module.css";
import Card from "../../UI/Card"
import CandyList from './CandyList';
import NewCandyForm from './NewCandyForm';


const CANDIES=[{
    id:"candy1",
    name: "Eclairs",
    desc: "Choclaty",
    price:2,
  },
  {
    id:"candy2",
    name: "Pulse",
    desc: "Tangy and Sour",
    price:5,
  },
  {
    id:"candy3",
    name: "Center Fresh",
    desc: "Chewing Gum",
    price:1,
  }
]

 const Availablecandy = () => {
    const [newCandyStock, setNewCandyStock]= useState(CANDIES)

    const addNewCandyHandler=(newData)=>{
        setNewCandyStock([...newCandyStock, newData]);
    }

const candyList= newCandyStock.map((candy, index)=>(<CandyList key={index+1}
  name={candy.name} id={`candy${index+1}`} desc={candy.desc} price={candy.price}/>));

  return (
    <>
    <NewCandyForm onAddNewCandy={addNewCandyHandler}/>
    <section className={classes.candy}>
    <Card>
    <ul>{candyList}</ul>
    </Card>  
    </section>
    </>
  );
}
export default Availablecandy;