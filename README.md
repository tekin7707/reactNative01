# reactNative01

//node_modules/expo/AppEntry.js içeriği

import registerRootComponent from 'expo/build/launch/registerRootComponent';
import AppWeb from '../../AppWeb';
import App from '../../App';

  
  // Uygulamayı kaydedin
  registerRootComponent(typeof document !== 'undefined'?AppWeb:App);

