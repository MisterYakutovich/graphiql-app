import { useContext } from "react";
import { Context } from "../../main";
import "./Login.css";
import firebase from 'firebase/compat/app';


function Login() {
 const auth=useContext(Context)
 console.log(auth?.auth)
 const login=async ()=>{
  const provider=new firebase.auth.GoogleAuthProvider()
  const user=await auth?.auth.signInWithPopup(provider)
 console.log(user?.user)
 }
  return (
    <div className="login">
    <div className="login__container">
      <input
        type="text"
        className="login__textBox"
      //  value={email}
      //  onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
      />
      <input
        type="password"
        className="login__textBox"
       // value={password}
      //  onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button
        className="login__btn"
       // onClick={() => signInWithEmailAndPassword(email, password)}
      >
        Login
      </button>
      <button className="login__btn login__google" onClick={login}>
        Login with Google
      </button>
    </div>
  </div>
  )
}
export default Login;
