import  { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { Context } from "../../main";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection} from "firebase/firestore";
function Register() {
    const auth=useContext(Context)
    console.log(auth?.db)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const registerWithEmailAndPassword = async (name:string, email:string, password:string) => {
    try {
      const res = await createUserWithEmailAndPassword(auth!.auth, email, password);
      const user = res.user;
      await addDoc(collection(auth!.db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      const typedError = err as Error;
      console.error(err);
      alert(typedError?.message);
      return;
     
     
    }
  };
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  return (
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <button
          className="register__btn register__google"
          onClick={auth?.signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;