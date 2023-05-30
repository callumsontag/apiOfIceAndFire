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
      console.log(result);
      result.forEach((newApi) => {
        console.log(newApi);
        return axios(newApi);
      });
    })
    .then((information) => {
      const name = information.data.name;
      const playedBy = information.data.playedBy;
      let html = "\n";
      html += `<ul><li>${name} - ${playedBy}</li></ul>`;
      return html;
    })
    .then((html) => {
      fs.writeFile("output.html", html, (err) => {
        if (err) throw err;
      });
    });
};

characterPov(url);

// const fileWrite = (data) => {
//   fs.writeFile("output.html", data, (err) => {
//     if (err) throw err;
//   });
// };

// fileWrite(response);

// firstPromiseFunction()
// .then((firstResolveVal) => {
//   return secondPromiseFunction(firstResolveVal);
// })
// .then((secondResolveVal) => {
//   console.log(secondResolveVal);
// });
