/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import TestApp from './src/component/TestApp';
import App from './src/component/App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './src/redux/store/index'
const RNRedux=()=>(
    <Provider store={store}>
        <TestApp/>
    </Provider>
)
AppRegistry.registerComponent(appName, () => RNRedux);
