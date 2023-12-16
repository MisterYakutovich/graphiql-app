import { useContext, useState } from "react";
import { Context } from "../../main";
import "./Login.css";
import {signInWithEmailAndPassword} from "firebase/auth";


function Login() {
  const auth=useContext(Context)
  const logInWithEmailAndPassword = async (email:string, password:string) => {
  try {
    await signInWithEmailAndPassword(auth!.auth, email, password);
  } catch (err) {
    const typedError = err as Error;
    console.error(err);
    alert(typedError?.message);
    return;
    
  }
};
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  return (
    <div className="login">
    <div className="login__container">
      <input
        type="text"
        className="login__textBox"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
      />
      <input
        type="password"
        className="login__textBox"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button
        className="login__btn"
        onClick={() => logInWithEmailAndPassword(email,password)}
      >
        Login
      </button>
      <button className="login__btn login__google"  onClick={auth?.signInWithGoogle}>
        Login with Google
      </button>
    </div>
  </div>
  )
}
export default Login;
/*const auth=useContext(Context)
 console.log(auth?.auth)
 const login=async ()=>{
  const provider=new firebase.auth.GoogleAuthProvider()
  const user=await auth?.auth.signInWithPopup(provider)
 console.log(user?.user)
 }
 const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth?.auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};*/