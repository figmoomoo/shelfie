import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';


function Routes(props) {
    return (
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/new' component={Form} />
            <Route path='/edit/:id' component={Form}/>
        </Switch>
    )
}

export default Routes