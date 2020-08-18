import React, { useReducer, useEffect } from 'react'
import { AppRouter } from './router/AppRouter';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/AuthReducer';

export const HeroesApp = () => {

    const init = () => {

        return JSON.parse(localStorage.getItem('user')) || {logger: false};
    }

    const [user, dispatch] = useReducer(authReducer , {} , init)

    useEffect(() => {
       
        localStorage.setItem('user', JSON.stringify(user));
        
    }, [user])

    return (

        <div>

            <AuthContext.Provider value={ { user, dispatch } }>

                <AppRouter />

            </AuthContext.Provider>
        </div>
    )
}
