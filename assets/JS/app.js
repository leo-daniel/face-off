// Detect - generate face kye
const dBaseURL = 'https://api-us.faceplusplus.com/facepp/v3/detect?';
const dApiKey = 'api_key=NrYhlIHltmdXKjxN_XzW2D2UprgtKGnA&';
const dApiSecret = 'api_secret=QcGMDQPynptvCDh1tmMl5ZTUCYkz6jLv&';
let dImageURL = 'image_url=https://pbs.twimg.com/profile_images/650100474226458625/-nngF2Y1_400x400.jpg';

const aBaseURL = 'https://api-us.faceplusplus.com/facepp/v3/face/analyze?';
const aApiKey = 'api_key=NrYhlIHltmdXKjxN_XzW2D2UprgtKGnA&';
const aApiSecret = 'api_secret=QcGMDQPynptvCDh1tmMl5ZTUCYkz6jLv&';
let faceId;
let aFaceId = '&face_tokens=' + faceId;

let dQueryURL = dBaseURL + dApiKey + dApiSecret + dImageURL;
// let aQueryURL = aBaseURL + aApiKey + aApiSecret + aFaceId;

// }).then(function(aResponse){

//         console.log(aResponse.faces[0].face_token);
//     // console.log("id", response.request.image_id);
//     faceId = aResponse.faces[0].face_token;

$.ajax({
  url: dQueryURL,
  method: "POST",
  success: function () {
    $.ajax({
      url: aQueryURL,
      method: "POST"
    })
      .then(function (aResponse) {
        // analysis here
        console.log("Analysis will happen to: ", faceId);
      }
      ).then(function (dResponse) {
        console.log(dResponse)
        faceId = '&face_tokens=' + dResponse.faces[0].face_token;
        let aQueryURL = aBaseURL + aApiKey + aApiSecret + aFaceId;
      }
      )
  }
});


// aResponse.faces[]
