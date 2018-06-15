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
const storageRef = firebase.storage().ref();
var imagesRef1 = storageRef.child('images1.jpg');
var imagesRef2 = storageRef.child('images2.jpg');
var uImageURL1 = undefined;
var uImageURL2 = undefined;

// display persitent scores
database.ref().on('value', function (snap) {
    const wins1 = $('#wins-1');
    wins1.text(snap.val().player1.wins);
    const wins2 = $('#wins-2');
    wins2.text(snap.val().player2.wins);
    const losses1 = $('#losses-1');
    losses1.text(snap.val().player1.losses);
    const losses2 = $('#losses-2');
    losses2.text(snap.val().player2.losses);
})

// Uploading files to firebase

$(document).on('click', '#upload-submit-1', function (e) {
    e.preventDefault;
    go1 = true;
    $("#image-1").attr('src', 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif');

    const file1 = $("#upload-1").get(0).files[0];

    const metadata1 = { contentType: file1.type };

    const task = imagesRef1.put(file1, metadata1);

    const image = storageRef.child('images1.jpg');

    setTimeout(getDownloadURL, 2000);

    function getDownloadURL () {
        const urlPromise = image.getDownloadURL();
            urlPromise.then(url => {
            $("#image-1").attr('src', url);
            player1.url = url;
        });
    };


    $("#image-1").attr('src', 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif');


}).on('click', '#upload-submit-2', function (e) {
    e.preventDefault;
    go2 = true;
    $("#image-2").attr('src', 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif');

    // gets uploaded file
    const file2 = $("#upload-2").get(0).files[0];

    const metadata2 = { contentType: file2.type };

    const task = imagesRef2.put(file2, metadata2);

    const image = storageRef.child('images2.jpg');
    const urlPromise = image.getDownloadURL();

    setTimeout(getDownloadURL, 2000);

    function getDownloadURL () {
        const urlPromise = image.getDownloadURL();
            urlPromise.then(url => {
            $("#image-2").attr('src', url);
            player2.url = url;
        });
    }
});

// Sets object values to 0
// function resetDatabase() {
//     database.ref().set({
//         player1: {  anger: 0,
//                     digsgust: 0,
//                     fear: 0,
//                     happiness: 0,
//                     neutral: 0,
//                     sadness: 0,
//                     surprise: 0,
//                     wins: 0,
//                     losses: 0 },
//         player2: {  anger: 0,
//                     digsgust: 0,
//                     fear: 0,
//                     happiness: 0,
//                     neutral: 0,
//                     sadness: 0,
//                     surprise: 0,
//                     wins: 0,
//                     losses: 0 }
//     });
// }



// Accessing player1 object, for example number of wins
// database.ref().on('value', function(snap) {
//     console.log(snap.val().player1.wins);
// })

// Call reset to set player objects, remove this call when we wanting persistence - otherwise starting will overwrite
// resetDatabase();
