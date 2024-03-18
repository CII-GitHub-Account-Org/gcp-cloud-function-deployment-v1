const { dialogflow } = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});

app.intent('Default Welcome Intent', (conv) => {
  conv.ask('Welcome to my Dialogflow agent!');
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);