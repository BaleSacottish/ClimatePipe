/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

import Navigation from './src/screens/navigation'

AppRegistry.registerComponent(appName, () => App);

const App = () => {
    return(
        <Navigation/>
    )
}