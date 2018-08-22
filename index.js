import React from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux/native';

import promise from 'redux-promise';
import thunk from 'redux-thunk';

import App from './app';

import allReducers from './reducers/index';


const store = createStore(allReducers, applyMiddleware(promise, thunk));

class Example extends React.Component {
    render() {
        return (
            <Provider store={store}>
                {() => <App />}
            </Provider>
        );
    }
}

AppRegistry.registerComponent('Example', () => Example);