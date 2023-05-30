const axios = require("axios");
const fs = require("fs");

const url = "https://anapioficeandfire.com/api/books/1";

const characterPov = async (api) => {
  await axios(api)
    .then((response) => {
      const result = response.data.povCharacters;
      return result;
    })
    .then((result) => {
      for (let i = 0; i < result.length; i++) {
        let charArr = [];
        let playedByArr = [];
        let apiResult = axios(result[i]);
        charArr.push(apiResult.data.name);
        playedByArr.push(apiResult.data.playedBy);
      }
      console.log(charArr, playedByArr);
    });
};

characterPov(url);
