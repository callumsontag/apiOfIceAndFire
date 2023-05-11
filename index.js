const axios = require("axios");

const characterInput = "583";

const characterRequest = (characterId) => {
  let partUrl = "https://anapioficeandfire.com/api/characters/";
  let completeUrl = `${partUrl}${characterId}`;
  axios({
    method: "get",
    url: completeUrl,
  }).then(function (response) {
    console.log(`Character Name: ${response.data.name}`);
    console.log(`Played By: ${response.data.playedBy}`);
  });
};

characterRequest(characterInput);
