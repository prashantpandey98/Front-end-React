import axios from 'axios'
import React,{createContext,useState,useEffect} from 'react'

export const MyContext=createContext()

const ProductContext = (props) => {

    const MEDS=[{
        id:"med1",
        name: "Paracetamol",
        desc: "Take in Fever",
        price:10,
        totalQuantity:50
      },
      {
        id:"med2",
        name: "Solvin Cold",
        desc: "Deals with Cold and Cough",
        price:20,
        totalQuantity:70
      },
      {
        id:"med4",
        name: "Citizen",
        desc: "Take when allergic..",
        price:25,
        totalQuantity:90
      }]
      const [newMedsStock, setNewMedsStock]= useState(MEDS)

    //   useEffect(async()=>{
    //     const res= await axios.get(`https://crudcrud.com/api/c985eac801594a9c829a197d80662a37/products`)
    //     console.log(res.data);
    //   },[]);
      
      const addMedsHandler= async(product)=>{
        setNewMedsStock([...newMedsStock, product]);
        const res= await axios.post(`https://crudcrud.com/api/c985eac801594a9c829a197d80662a37/products`, product)
        console.log(res.data);
      }
      const removeMedsHandler=()=>{

      }

  return (
    <>
    <MyContext.Provider value={{MEDS, addMedsHandler, removeMedsHandler}}>{props.children}</MyContext.Provider>
    </>
  )
}

export default ProductContext