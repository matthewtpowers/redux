// let's go!
import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';

//Import Components
import App from './components/App';
import Single from './components/Single';
import Photogrid from './components/Photogrid';

//Import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store/Store';

import Raven from 'raven-js';
import { sentry_url } from './data/config';

Raven.config(sentry_url).install();

//console.log(window.doesNotExist.nope);

const router = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Photogrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router,document.getElementById('root'));