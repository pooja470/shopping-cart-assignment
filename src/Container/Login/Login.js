import React,{useState} from 'react';
import { useHistory } from "react-router-dom";

function Login(){
    const intialState = {
        email: "",
        password: "",
      };
      const history = useHistory();
      const [user, setUser] = useState(intialState);
      const [validation, setValidation] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = sessionStorage.getItem("email");
        const password = sessionStorage.getItem("password");
        if (user.email === email && user.password === password) {
        
            sessionStorage.setItem("status", "logged-in");
            history.push("/");
          } else {
            setValidation("Invalid credentials");
          }
    }
return(
    <div>
          <aside>
            <h1>Login</h1>
            <p>Get access to your orders, wishlist and recommedations</p>
           </aside>

    <section>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={user.email}  onChange={(event) =>
              setUser({ ...user, email: event.target.value })
            }/>
            </div>
            <div>
            <label htmlFor="password">password</label>
            <input id="password" type="password" value={user.password}  onChange={(event) =>
              setUser({ ...user, password: event.target.value })
            }/>
            </div>
             <button>Login</button>
        </form>
            </section>
      
            
    </div>
)
}

export default Login;