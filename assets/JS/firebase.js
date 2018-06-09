
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
        player1: { wins: 0,
                    losses: 0,
                    score: 0,
                    stats: 0 },
        player2: { wins: 0,
                    losses: 0,
                    score: 0,
                    stats: 0 }
    });
}

// Accessing player1 object, for example number of wins
database.ref().on('value', function(snap) {
    console.log(snap.val().player1.wins);
})
