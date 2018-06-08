// Detect - generate face kye
const dBaseURL = 'https://api-us.faceplusplus.com/facepp/v3/detect?';
const apiKey = 'api_key=NrYhlIHltmdXKjxN_XzW2D2UprgtKGnA&';
const apiSecret = 'api_secret=QcGMDQPynptvCDh1tmMl5ZTUCYkz6jLv&';
let dImageURL = 'image_url=https://pbs.twimg.com/profile_images/650100474226458625/-nngF2Y1_400x400.jpg';
const aBaseURL = 'https://api-us.faceplusplus.com/facepp/v3/face/analyze?';

let faceId;
let aFaceId = '&face_tokens=' + faceId;
let dQueryURL = dBaseURL + apiKey + apiSecret + dImageURL;
const emotion = "&return_attributes=emotion";
// let aQueryURL = aBaseURL + aApiKey + aApiSecret + aFaceId;

// }).then(function(aResponse){

//         console.log(aResponse.faces[0].face_token);
//     // console.log("id", response.request.image_id);
//     faceId = aResponse.faces[0].face_token;

/* $.ajax({
  url: dQueryURL,
  method: "POST",
  success: function () {
    $.ajax({
      url: aQueryURL,
      method: "POST"
    })
      .then(function (aResponse) {
        console.log("Analysis will happen to: ", faceId);
        var happinessResponse = aResponse.faces[0].attributes.emotion.happiness;
        console.log(happinessResponse);
      }
      ).then(function (dResponse) {
        console.log(dResponse)
        faceId = '&face_tokens=' + dResponse.faces[0].face_token;
        let aQueryURL = aBaseURL + aApiKey + aApiSecret + aFaceId;
      }
      )
  }
}); */

initialAjax();

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


// aResponse.faces[0].attributes.emotion.happiness
