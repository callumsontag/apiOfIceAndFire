const axios = require("axios");
const fs = require("fs");

async function getCharacter() {
  const bookId = "https://anapioficeandfire.com/api/books/1";

  const response = await axios(bookId);
  const povCharacters = response.data.povCharacters;
  console.log(povCharacters);

  let html = "\n";

  for (let i = 0; i < povCharacters.length; i++) {
    const charArr = [];
    const character = await axios(povCharacters[i]);
    const charName = character.data.name;
    const playedBy = character.data.playedBy;
    html += `<div><ul><li>${charName} - ${playedBy}</li></ul></div>`;
  }

  fs.writeFile("output.html", html, (err) => {
    if (err) throw err;
  });
}

getCharacter();
