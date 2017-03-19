// let's go!
import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';

//Import Components
import Main from './components/Main';
import Single from './components/Single';
import Photogrid from './components/Photogrid';

//Import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Photogrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>
)

render(router,document.getElementById('root'));