
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDoqLPhtslGgaOM5DJj5XoHfcyccYCAUyw",
    authDomain: "face-app-42a2f.firebaseapp.com",
    databaseURL: "https://face-app-42a2f.firebaseio.com",
    projectId: "face-app-42a2f",
    storageBucket: "face-app-42a2f.appspot.com",
    messagingSenderId: "825540843976"
  };
  firebase.initializeApp(config);

const database = firebase.database();

// Sets object values to 0
function resetDatabase() {
    database.ref().set({
        player1: {  anger: 0,
                    digsgust: 0,
                    fear: 0,
                    happiness: 0,
                    neutral: 0,
                    sadness: 0,
                    surprise: 0,
                    wins: 0,
                    losses: 0 },
        player2: {  anger: 0,
                    digsgust: 0,
                    fear: 0,
                    happiness: 0,
                    neutral: 0,
                    sadness: 0,
                    surprise: 0,
                    wins: 0,
                    losses: 0 }           
    });
}



// Accessing player1 object, for example number of wins
database.ref().on('value', function(snap) {
    console.log(snap.val().player1.wins);
})

// Call reset to set player objects, remove this call when we wanting persistence - otherwise starting will overwrite
resetDatabase();

