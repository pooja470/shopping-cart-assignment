import React from 'react';
// import "./Signup.scss";

function Signup() {
    return (
        <div className="signin-main">
            <aside>
                <h1>Signup</h1>
                <p>We do not share your personal details with anyone</p>
            </aside>
            <section>
                <form>
                <div>
                    <label htmlFor="firstname">
                        First Name
                    </label>
                    <input id="firstname" type="text" placeholder="First Name" />
                </div>
                <div>
                    <label htmlFor="lastname">
                        Last Name
                    </label>
                    <input id="lasttname" type="text"  placeholder="Last Name"/>
                </div>
                <div>
                    <label htmlFor="emailid">
                        Email
                    </label>
                    <input id="emailid" type="email"  placeholder="Email"/>
                </div>
                <div>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input id="password" type="password"  placeholder="Password"/>
                </div>
                <div>
                    <label htmlFor="confirm_password">
                        Password
                    </label>
                    <input id="confirm_password" type="password"  placeholder="Confirm Password" />
                </div>
                <button>Signup</button>
                </form>
            </section>
        </div>
    )
}

export default Signup
