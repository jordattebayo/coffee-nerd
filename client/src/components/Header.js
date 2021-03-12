import React from "react"
import './header.sass'

import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
/*     const { user } = useAuth0();
    const { name } = user; */

    return (
        <header className="header">
            <div>
                <h1>Sup Coffee Nerd</h1>
            </div>
            <div>
<<<<<<< HEAD
                <h2>Thanks for visiting {/* {name} */}</h2>
=======
{/*                 <h2>Thanks for visiting {name}</h2> */}
>>>>>>> 4ce130afa73e4588e7e004433981b7f1ec9e583a
            </div>
        </header>
    )
}

export default Header