import Input from "../Reusables/Input"
import Button from "../UI/Button"
import { useState } from "react"


const Form=(props)=>{
    const [prodId, setProdId]=useState("");
    const [sellPrice, setSellPrice]= useState("");
    const [itemName, setItemName]= useState("");
    const [itemCategory, setItemCategory]= useState("Select a Category");

    const prodIdHandler=(e)=>{
        setProdId(e.target.value);
    }
    const priceHandler= (e)=>{
        setSellPrice(e.target.value);
    }
    const nameHandler=(e)=>{
        setItemName(e.target.value);
    }

    const formSubmitHandler =(e)=>{
        e.preventDefault();

        const item={
            id: prodId,
            price: sellPrice,
            name: itemName,
            category: itemCategory
        }
        props.onAddProduct(item)
       
        setProdId("");
        setSellPrice("");
        setItemName("");
        setItemCategory("Select a Category");
    }


    return (
        <>
        <form onSubmit={formSubmitHandler}>
        <Input type="text" label={"Product ID : "} id="productId" name="productId" value={prodId} onChange={prodIdHandler} />
        <Input type="number" label={"Selling Price : "} id="price" name="price" value={sellPrice} onChange={priceHandler} />
        <Input type="text" label={"Product Name : "} id="name" name="name" value={itemName} onChange={nameHandler} />
        <label htmlFor="category">Choose a Category : </label>
        <select id="category" value={itemCategory} onChange={(e)=> setItemCategory(e.target.value)}>
                <option disabled>Select a Category</option>
                <option>Electronics</option>
                <option>Food</option>
                <option>Skincare</option>
                <option>Clothes</option>
                <option>Footwear</option>
            </select>
            <Button type="submit" >Add Product</Button>
            </form>
        </>
    )
}
export default Form