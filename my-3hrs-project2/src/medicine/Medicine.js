import React,{useContext} from 'react'
import CompanySummary from './CompanySummary'
import AvailableMeds from './AvailableMeds'
import NewMedsForm from './NewMedsForm'
import { MyContext } from '../store/ProductContext'

const Medicine = () => {
  const myCtx= useContext(MyContext);

  // const addNewMedicineHandler=(newData)=>{
  //   setNewMedsStock([...newMedsStock, newData]);
  // }

  return (
    <>
    <CompanySummary/>
    <NewMedsForm />
    <AvailableMeds MEDS={myCtx.MEDS}/>
   
    </>
  )
}
export default Medicine;