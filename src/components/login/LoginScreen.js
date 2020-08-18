import React, { useContext } from 'react';
import './LoginScreen.css';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { user, dispatch } = useContext( AuthContext );

    const handleLogin = () => {
        
        dispatch({
            type: types.login,
            payload: {
                name: 'Matias',
                logged: true
            }
        })

        history.push('/');
    }

    return (
        <div className="cnt-login">
            <h1>Login screen</h1>
            <button
                onClick={ handleLogin }
            >CLICK ME TO LOGIN</button>
        </div>
    )
}
