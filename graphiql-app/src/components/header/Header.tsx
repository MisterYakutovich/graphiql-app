import { Link,useNavigate } from 'react-router-dom';
//import { isAuth } from '../../utils/flag';
import './Header.css';
import { LOGIN_ROUTE, MAIN_ROUTE, WELCOME_ROUTE } from '../../utils/consts';
import { useContext, useEffect } from 'react';
import { Context } from '../../main';
import {useAuthState} from "react-firebase-hooks/auth"
function Header() {
  const auth=useContext(Context)
  const [user,loading] = useAuthState(auth?.auth)
  const navigate=useNavigate()
  useEffect(() => {
    if (loading) {     
      return;
    }
    if (user) navigate(`${MAIN_ROUTE}`);
  }, [user, loading]);
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header_wrapper">
          <nav className="header-nav_welcome">
           <ul>
            <Link to={WELCOME_ROUTE}>
           <li className="header_link_welcome">WELCOME</li>  
           </Link> 
           </ul>           
          </nav>
          <nav className="navbar">
            <ul className="header_list">
              {user ?
              <>
              <Link to={MAIN_ROUTE}>
              <button className="button">MAIN</button>
              </Link>
              <button onClick={()=>auth?.auth.signOut()} className="button">SIGN OUT</button>
              </>
              :
              <>
              <Link to={LOGIN_ROUTE}>
              <button className="button">SIGN IN</button>
              </Link>
              <button className="button">SIGN UP</button>
              </>
              }               
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
