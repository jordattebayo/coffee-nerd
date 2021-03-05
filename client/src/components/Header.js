import React from "react"
import './header.sass'

import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { user } = useAuth0();
    const { name } = user;

    return (
        <header className="header">
            <div>
                <h1>Sup Coffee Nerd</h1>
            </div>
            <div>
                <h2>Thanks for visiting {name}</h2>
            </div>
        </header> 
    )
}

export default Header