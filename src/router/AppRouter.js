import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Navbar } from '../components/ui/Navbar';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { AuthContext } from '../auth/AuthContext';

export const AppRouter = () => {

    const { user } = useContext( AuthContext )

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/login' component={ LoginScreen } />
                    <PrivateRoutes path='/' component={ DashboardRoutes } isAuthenticated={ user.logged }/>
                </Switch>
            </div>
        </Router>
    )
}
