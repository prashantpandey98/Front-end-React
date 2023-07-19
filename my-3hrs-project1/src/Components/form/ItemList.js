import Button from "../UI/Button";

const ItemList =(props)=>{

    const deleteItem=(id)=>{
        localStorage.removeItem(id);
        props.onDeleteProduct(id);
    }

    return(
        <>
        <h1>Products</h1>
        <ul>
        <h2>Electronic Items</h2>
        {props.items.map((product)=>{
            if(product.category=== "Electronics"){
                return (
                    <li key={product.id}>
                    {product.price} - {product.category} - {product.name}{"  "}
                    <Button type="button" onClick={()=> deleteItem(product.id)}>Delete Product</Button>
                    </li>
                )
            }
        })}
        </ul>
        <ul>
        <h2>Food Items</h2>
        {props.items.map((product)=>{
            if(product.category=== "Food"){
                return (
                    <li key={product.id}>
                    {product.price} - {product.category} - {product.name}{"  "}
                    <Button type="button" onClick={()=> deleteItem(product.id)}>Delete Product</Button>
                    </li>
                )
            }
        })}
        </ul>
        <ul>
        <h2>Skincare Items</h2>
        {props.items.map((product)=>{
            if(product.category=== "Skincare"){
                return (
                    <li key={product.id}>
                    {product.price} - {product.category} - {product.name}{"  "}
                    <Button type="button" onClick={()=> deleteItem(product.id)}>Delete Product</Button>
                    </li>
                )
            }
        })}
        </ul>
        <ul>
        <h2>Clothe Items</h2>
        {props.items.map((product)=>{
            if(product.category=== "Clothes"){
                return (
                    <li key={product.id}>
                    {product.price} - {product.category} - {product.name}{"  "}
                    <Button type="button" onClick={()=> deleteItem(product.id)}>Delete Product</Button>
                    </li>
                )
            }
        })}
        </ul>
        <ul>
        <h2>Footwear Items</h2>
        {props.items.map((product)=>{
            if(product.category=== "Footwear"){
                return (
                    <li key={product.id}>
                    {product.price} - {product.category} - {product.name}{"  "}
                    <Button type="button" onClick={()=> deleteItem(product.id)}>Delete Product</Button>
                    </li>
                )
            }
        })}
        </ul>
        </>
    )
}
export default  ItemList;