import React from 'react';
import {Link} from "react-router-dom";

export const Login = () => {
    return (
        <>
            <h1>logIn</h1>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </>
    )
}
