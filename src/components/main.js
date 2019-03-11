import React from 'react';
import{Switch,Route} from 'react-router-dom'
import Landing from './landingPage'
import About from './about'
import Contacts from './contacts'
import Projects from './porject'
import Resume from './resume'

const Main = () => (
    
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route  path="/about" component={About}/>
        <Route  path="/contacts" component={Contacts}/>
        <Route  path="/porject" component={Projects}/>
        <Route  path="/resume" component={Resume}/>
    </Switch>
);

export default Main;