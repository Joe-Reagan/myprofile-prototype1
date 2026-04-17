const functions = require("firebase-functions");
const fetch = require("node-fetch");

exports.sendToAPI = functions.firestore
  .document("messages/{id}")
  .onCreate((snap, context) => {

    const data = snap.data();

    return fetch("http://your-api-url/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
});