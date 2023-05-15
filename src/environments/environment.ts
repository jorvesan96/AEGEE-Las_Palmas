// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const environment = {
  firebase: {
    projectId: 'aegee-las-palmas-370b7',
    appId: '1:466542820130:web:f85beac5df4b3b6765837b',
    databaseURL: 'https://aegee-las-palmas-370b7-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'aegee-las-palmas-370b7.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyBstD2_vKv_WXt1qm5WnuqBy0-iqThKDro',
    authDomain: 'aegee-las-palmas-370b7.firebaseapp.com',
    messagingSenderId: '466542820130',
  }
};

const app = initializeApp(environment.firebase);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
