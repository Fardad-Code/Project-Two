import React from 'react';
import { Switch , Route } from 'react-router-dom';
import LandingPage from './landingpage';
import About from './aboutme';
import Contact from './contact';
import Projects from './projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/about" component={About} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/projects" component={Projects} />
        <Route  path="/" component={LandingPage} />

    </Switch>
)

export default Main;