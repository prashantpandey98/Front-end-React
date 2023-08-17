import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id:"p1",
    price: 300,
    title:"Harry Potter",
    description:"Journey to Magical school of Hogwarts!!"
  },
  {
    id:"p2",
    price: 500,
    title:"Narnia",
    description:"Adventures inside the magical cupboard."
  },
  {
    id:"p3",
    price: 250,
    title:"Dragon Rider",
    description:"Magical tale of dragons and riders."
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {DUMMY_PRODUCTS.map((product)=>(
        <ProductItem
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
      />
  ))}
       
      </ul>
    </section>
  );
};

export default Products;
