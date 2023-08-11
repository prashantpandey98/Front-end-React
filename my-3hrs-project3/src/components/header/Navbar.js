
import classes from './Navbar.module.css'
import CartButton from './CartButton';

const Navbar=(props)=>{
    return(
        <>
        <header className={classes.header}>
        <h1>Candy Shop</h1>
        <CartButton onClick={props.onShowCart}/>
        </header>
        </>
    )
}
export default Navbar;