import { AppRegistry } from 'react-native';
import App from './App';
import {NativeModules} from 'react-native';

var OutputVolume = NativeModules.OutputVolume;
var AudioPlayer = NativeModules.AudioPlayer;
OutputVolume.get();
AppRegistry.registerComponent('ReactNativeRadioApp', () => App);
