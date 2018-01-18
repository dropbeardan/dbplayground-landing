import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Routing.
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

// Store.
import store from './store';

// Layouts.
import { About, App, Blog, Err404, Home, Profiles, ProfileRecord, Projects, ProjectPortal } from './Components/Layouts';

// Browser History.
const history = syncHistoryWithStore(browserHistory, store);

const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}>
                <IndexRoute component={Home} />
            </Route>
            <Route path='/about' component={App}>
                <IndexRoute component={About} />
            </Route>
            <Route path='/blog' component={App}>
                <IndexRoute component={Blog} />
            </Route>
            <Route path='/profiles' component={App}>
                <IndexRoute component={Profiles} />
                <Route path='/profiles/:profileId' component={ProfileRecord} />
            </Route>
            <Route path='/projects' component={App}>
                <IndexRoute component={Projects} />
                <Route path='/projects/:projectId' component={ProjectPortal} />
            </Route>
            <Route path='*' component={App}>
                <IndexRoute component={Err404} />
            </Route>
        </Router>
    </Provider >,
    app
);