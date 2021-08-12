import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
// import "./Signup.scss";

function Signup() {
    const history = useHistory();
    const intialState = {
        firstName: "",
        lastName: "",
        emailId: "",
        password: "",
        confirmPassword: "",
      };
    const [user, setUser] = useState(intialState);
    const handleSubmit =(e)=>{
        e.preventDefault();
          sessionStorage.setItem("email", user.emailId);
          sessionStorage.setItem("password", user.password);
          setUser(intialState);
          setTimeout(() => history.push("/login"), 2000);

    }
    return (
        <div className="signin-main">
            <aside>
                <h1>Signup</h1>
                <p>We do not share your personal details with anyone</p>
            </aside>
            <section>
                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstname">
                        First Name
                    </label>
                    <input id="firstname" type="text" placeholder="First Name" value={user.firstName} onChange={(event) =>
              setUser({ ...user, firstName: event.target.value })}/>
                </div>
                <div>
                    <label htmlFor="lastname">
                        Last Name
                    </label>
                    <input id="lastName" type="text"  placeholder="Last Name" value={user.lastName} onChange={(event) =>
              setUser({ ...user, lastName: event.target.value })}/>
                </div>
                <div>
                    <label htmlFor="emailId">
                        Email
                    </label>
                    <input id="emailId" type="email"  placeholder="Email" value={user.emailId} onChange={(event) =>
              setUser({ ...user, emailId: event.target.value })}/>
                </div>
                <div>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input id="password" type="password"  placeholder="Password" value={user.password} onChange={(event) =>
              setUser({ ...user, password: event.target.value })}/>
                </div>
                <div>
                    <label htmlFor="confirmPassword">
                        Password
                    </label>
                    <input id="confirmPassword" type="password"  placeholder="Confirm Password" value={user.confirmPassword} onChange={(event) =>
              setUser({ ...user, confirmPassword: event.target.value })
            }/>
                </div>
                <button>Signup</button>
                </form>
            </section>
        </div>
    )
}

export default Signup
