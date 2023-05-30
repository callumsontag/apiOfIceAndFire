const axios = require("axios");
const fs = require("fs");

const bookId = "https://anapioficeandfire.com/api/books/1";

const main = async () => {
  const povCharacters = await fetchPovCharacters(bookId);

  const listOfChars = await dataToList(povCharacters);

  const htmlData = formatHtml(listOfChars);

  writeHtml("output.html", htmlData);
};

const fetchPovCharacters = async (apiUrl) => {
  const response = await axios(apiUrl);
  return response.data.povCharacters;
};

const dataToList = async (inputData) => {
  let charList = "";
  for (let i = 0; i < inputData.length; i++) {
    const character = await axios(inputData[i]);
    const charName = character.data.name;
    const charPlayedBy = character.data.playedBy;
    charList += `${charName} - ${charPlayedBy}\n`;
  }
  return charList;
};

const formatHtml = (input) => {
  let splitData = input.split(/\r?\n/);
  let html = "<div>\n<ul>\n";
  for (let i = 0; i < splitData.length; i++) {
    html += `<li>${splitData[i]}</li>\n`;
  }
  html += "</ul>\n</div>";
  return html;
};

const writeHtml = (fileLocation, inputData) => {
  fs.writeFile(fileLocation, inputData, (err) => {
    if (err) throw err;
  });
};

main();
