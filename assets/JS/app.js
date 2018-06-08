////// ID's for HTML tags //////
// USER INPUT URLS: #user-input1 #user-input-2
// EMOTION DROPDOWN: #emotion-dropdown
// USER IMAGES: #image-1 #image-2
// FINAL SUBMIT BUTTON: #play-button
// SCORES: wins-1 wins-2 losses-1 lossed-2

$(document).ready(function() {
    // Detect - generate face key
    // Replaced the old API key with Jordan's API key, to make sure we aren't sending too many requests
const apiKey = 'api_key=4AW8dHolxjkb_gEXzZJp8TNc_XG3SBDF';
const apiSecret = '&api_secret=clKHyanKY2E8wf7CgphWTZgAhTJdUbae';
const dBaseURL = 'https://api-us.faceplusplus.com/facepp/v3/detect?';
let dImageURL = '&image_url=https://pbs.twimg.com/profile_images/650100474226458625/-nngF2Y1_400x400.jpg';
let dQueryURL = dBaseURL + apiKey + apiSecret + dImageURL;


const aBaseURL = 'https://api-us.faceplusplus.com/facepp/v3/face/analyze?';
let faceId;
let aFaceId = '&face_tokens=' + faceId;
const emotion = "&return_attributes=emotion";

    // jquery

$("#submit-1").on('click', function() {
    let playerOneURL = $("#user-input-1").val().trim();
    $("#image-1").attr('src', playerOneURL);
    let imgURL1 = 'image_url=' + playerOneURL;
});

$("#submit-2").on('click', function() {
    let playerTwoURL = $("#user-input-2").val().trim();
    $("#image-2").attr('src', playerTwoURL);
    let imgURL2 = 'image_url=' + playerTwoURL;
});

$("#play-button").on('click', function() {
    let imgOneSrc = $("#image-1").attr('src')
    let imgTwoSrc = $("#image-2").attr('src')
    let imgOneSrcAPI = '&image_url' + imgOneSrc;
    let ImgTwoSrcAPI = '&image_url' + imgTwoSrc;
    let selectEmotion = $("#emotion-dropdown").find(":selected").text();    

    // This stops the game from playing if the user hasn't uploaded any images and/or hasn't selected an emotion from the dropdown
    if (imgOneSrc === 'http://via.placeholder.com/200' || imgTwoSrc === 'http://via.placeholder.com/200' || selectEmotion === 'Select an emotion...') {
        console.log('Please input two images and select an emotion');
    } else {
        let dQueryURL = dBaseURL + apiKey + apiSecret + imgOneSrcAPI;
        initialAjax();
    }
});

// ajax
// initialAjax();

function initialAjax() {
    console.log('initial Ajax fired');
    $.ajax({
        url: dQueryURL,
        method: "POST",
        success: handleToken
    });
}

function handleToken(response) {
    console.log("Handle Token Fired");
    faceId = response.faces[0].face_token;
    aFaceId = '&face_tokens=' + faceId;
    aQueryURL = aBaseURL + apiKey + apiSecret + aFaceId + emotion;
    console.log('faceID', faceId);
    console.log('aQuery', aQueryURL);
    $.ajax({
        url: aQueryURL,
        method: "POST",
        success: faceData
    })
};

function faceData(response) {
    console.log("response", response);
}

// Closing brackets for jQuery document ready below
});

// aResponse.faces[0].attributes.emotion.happiness
