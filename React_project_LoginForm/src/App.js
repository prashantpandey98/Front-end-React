import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  let ctx = useContext(AuthContext);
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Shifted all the logic to auth-context
  // useEffect(()=>{
  //   const storedUserInfo=localStorage.getItem("isLoggedIn");
  //   if(storedUserInfo==="1"){
  //     setIsLoggedIn(true);
  //   }
  // }, [])

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1")
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  return (
  //   <AuthContext.Provider value={{
  //     isLoggedIn: isLoggedIn,
  //     onLogout:logoutHandler
  // }}>

  <>
      <MainHeader/>
      <main>
        {!ctx.isLoggedIn && <Login/>}
        {ctx.isLoggedIn && <Home/>}
      </main>
  </>
      // </AuthContext.Provider>
  );
}

export default App;
