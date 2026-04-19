// firebase-bridge.js
// Exposes Firebase functions to non-module scripts via window globals
import { submitMessage } from './firebase.js';
 
window._firebaseSubmitMessage = submitMessage;
 