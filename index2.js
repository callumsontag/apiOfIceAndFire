const axios = require("axios");
const fs = require("fs");

async function getCharacter() {
  const bookId = "https://anapioficeandfire.com/api/books/1";

  // get list of pokemon
  const response = await axios(bookId);
  const povCharacters = await response.data.povCharacters;
  console.log(povCharacters);

  const char1 = await axios(povCharacters[0]);
  const char2 = await axios(povCharacters[1]);
  const char3 = await axios(povCharacters[2]);
  const char4 = await axios(povCharacters[3]);
  const char5 = await axios(povCharacters[4]);
  const char6 = await axios(povCharacters[5]);
  const char7 = await axios(povCharacters[6]);
  const char8 = await axios(povCharacters[7]);
  const char9 = await axios(povCharacters[8]);

  const char1Name = char1.data.name;
  const char1PlayedBy = char1.data.playedBy;

  const char2Name = char2.data.name;
  const char2PlayedBy = char2.data.playedBy;

  const char3Name = char3.data.name;
  const char3PlayedBy = char3.data.playedBy;

  const char4Name = char4.data.name;
  const char4PlayedBy = char4.data.playedBy;

  const char5Name = char5.data.name;
  const char5PlayedBy = char5.data.playedBy;

  const char6Name = char6.data.name;
  const char6PlayedBy = char6.data.playedBy;

  const char7Name = char7.data.name;
  const char7PlayedBy = char7.data.playedBy;

  const char8Name = char8.data.name;
  const char8PlayedBy = char8.data.playedBy;

  const char9Name = char9.data.name;
  const char9PlayedBy = char9.data.playedBy;

  let html = `<div><ul><li>${char1Name} - ${char1PlayedBy}</li></ul></div><div><ul><li>${char2Name} - ${char2PlayedBy}</li></ul></div><div><ul><li>${char3Name} - ${char3PlayedBy}</li></ul></div><div><ul><li>${char4Name} - ${char4PlayedBy}</li></ul></div><div><ul><li>${char5Name} - ${char5PlayedBy}</li></ul></div><div><ul><li>${char6Name} - ${char6PlayedBy}</li></ul></div><div><ul><li>${char7Name} - ${char7PlayedBy}</li></ul></div><div><ul><li>${char8Name} - ${char8PlayedBy}</li></ul></div><div><ul><li>${char9Name} - ${char9PlayedBy}</li></ul></div>`;
  fs.writeFile("output.html", html, (err) => {
    if (err) throw err;
  });
}

getCharacter();
