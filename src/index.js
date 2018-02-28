import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import MainLayout from './components/Commonality/MainLayout/MainLayout';
import {Provider} from 'react-redux';
import store from './stores/store';
import NotFoundPage from './components/Commonality/NotFoundPage/NotFoundPage';
import Index from './components/Commonality/Index/index';

window.store = {};
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Index}/>
                    {/*<Route path="/login" component={Login}/>*/}
                    <Route path='/404' component={NotFoundPage}/>
                    <Route path="/:gameId" component={MainLayout}/>
                </Switch>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));
