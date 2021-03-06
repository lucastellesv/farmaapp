import React from 'react';
import {Switch, Route} from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage'
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import CostumerRegister from './pages/CostumerRegister'
import PrescriptionRegister from './pages/PrescriptionRegister'

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component = {SignIn}/>
            <Route path="/signup" exact component = {SignUp}/>
            <Route path="/home" exact component = {HomePage}/>
            <Route path="/forgot" exact component = {ForgotPasswordPage}/>
            <Route path="/costumer-register" exact component = {CostumerRegister}/>
            <Route path="/prescription-register" exact component = {PrescriptionRegister}/>
        </Switch>
    )
}

export default Routes;