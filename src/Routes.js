import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import Resume from './containers/Resume';
import Photos from './containers/Photos';
import Projects from './containers/Projects';
import NotFound from './containers/NotFound';

export default () =>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/resume" exact component={Resume} />
    <Route path="/photos" exact component={Photos} />
    <Route path="/projects" exact component={Projects} />
    <Route component={NotFound} />
    </Switch>;
