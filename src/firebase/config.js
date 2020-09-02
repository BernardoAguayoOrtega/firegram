//import firebase
import * as firebase from 'firebase/app'
//import storage
import 'firebase/storage'
//import fire store
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyCSuWwFnQL0ju_QmVtKqTBsqKwNgK0uCG8',
	authDomain: 'firegram-56a87.firebaseapp.com',
	databaseURL: 'https://firegram-56a87.firebaseio.com',
	projectId: 'firegram-56a87',
	storageBucket: 'firegram-56a87.appspot.com',
	messagingSenderId: '469241285845',
	appId: '1:469241285845:web:2305431cd6f893683ae65c',
	measurementId: 'G-C9ZNELYPMD',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//const for storage and export it
export const projectStorage = firebase.storage();
//const firestore and export it
export const projectFireStore = firebase.firestore();

