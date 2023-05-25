const axios = require("axios");
const fs = require("fs");

async function getCharacter() {
  const bookId = "https://anapioficeandfire.com/api/books/1";

  const response = await axios(bookId);

  const povCharacters = await response.data.povCharacters;

  console.log(povCharacters);

  async function apiFunc(api) {
    api.forEach((link) => {
      axios(link).then((response) => {
        let html = "\n";
        html += `<div><ul><li>${response.data.name} - ${response.data.playedBy}</li></ul></div>`;
        const result = html;
        return result;
      });
    });
  }

  const apiLoop = await apiFunc(povCharacters);

  async function writeFile(data) {
    fs.writeFile("output.html", data, (err) => {
      if (err) throw err;
    });
  }

  writeFile(apiLoop);
}

getCharacter();
