import React from 'react';

function Navbar(){
    const userAuthentication=false;
return(
<div>
    <header>
        <nav>
            <div>
            <img src="../static/images/logo.png"/>
            </div>
            <div>
                <ul>
                    <li>
                       Home
                    </li>
                    <li>
                       Product
                    </li>
                </ul>
            </div>
            <div>
                {
                    userAuthentication?
                    (<ul><li>Logout</li></ul>):(<ul><li>Sign in </li><li>Register</li></ul>)
                }
            </div>
            <div>
                <img src="../static/images/cart.svg" height="20" width="20"/>
                <span>
                    items
                </span>
            </div>
            
          
        </nav>
    </header>
</div>
)
}

export default Navbar;