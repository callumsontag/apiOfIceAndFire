const axios = require("axios");
const fs = require("fs");

const url = "https://anapioficeandfire.com/api/books/1";

const characterPov = async (api) => {
  console.log("About to make API request");
  await axios(api)
    .then((response) => {
      const result = response.data.povCharacters;
      console.log(result);
      return result;
    })
    .then((result) => {
      console.log("make api request on each of the elements of array");
      result.forEach((api) => {
        axios({
          method: "get",
          url: api,
        }).then((response) => {
          const name = response.data.name;
          const playedBy = response.data.playedBy;
          let html = "\n";
          html.append(`<ul><li>${name} - ${playedBy}</li></ul>`);
          fs.writeFile("output.html", html, (err) => {
            if (err) throw err;
          });
        });
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
