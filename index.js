const axios = require("axios");
const fs = require("fs");

const bookId = "https://anapioficeandfire.com/api/books/1";

const main = async () => {
  const response = await fetchData(bookId);

  const structuredHtml = await dataToList(response);

  writeHtml("output.html", structuredHtml);
};

const fetchData = async (apiUrl) => {
  const response = await axios(apiUrl);
  const povCharacters = await response.data.povCharacters;
  return povCharacters;
};

const dataToList = async (inputData) => {
  let htmlData = "<div>\n<ul>\n";
  for (let i = 0; i < inputData.length; i++) {
    const character = await axios(inputData[i]);
    const charName = character.data.name;
    const playedBy = character.data.playedBy;
    htmlData += `<li>${charName} - ${playedBy}</li>\n`;
  }
  htmlData += "</ul>\n</div>";
  return htmlData;
};

const writeHtml = (fileLocation, inputData) => {
  fs.writeFile(fileLocation, inputData, (err) => {
    if (err) throw err;
  });
};

main();
