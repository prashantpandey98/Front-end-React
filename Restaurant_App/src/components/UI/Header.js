import './Header.css'
const Header=(props)=>{
    return(
        <>
        <div className="outer">
        <div style={{color:'white', marginLeft:"20px"}}><h1>ReactMeals</h1></div>
        <div className="inner"> 
        <i class="fa-solid fa-cart-shopping"></i>
        <h2>Your Cart</h2>
        <div className='counter'>
        0
        </div>
        </div>
        </div>
        <div className="lower"></div>
        </>
    )
}
export default Header;