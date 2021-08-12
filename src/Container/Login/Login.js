import React from 'react';

function Login(){
return(
    <div>
          <aside>
            <h1>Login</h1>
            <p>Get access to your orders, wishlist and recommedations</p>
           </aside>

    <section>
        <form>
            <div>
            <label for="email">Email</label>
            <input id="email" type="email"/>
            </div>
            <div>
            <label for="password">password</label>
            <input id="password" type="password"/>
            </div>
             <button>Login</button>
        </form>
            </section>
      
            
    </div>
)
}

export default Login;