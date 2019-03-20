const apiURL = 'https://api.figma.com/v1/files/';
const figmaApiKey = '10024-77518709-295d-4878-b8b7-dfa93d5c5d63';
const fileHash = 'ggLMtsX0pKANma8Rfsn2ZteE';

async function getTree() {

  let result = await fetch(apiURL + fileHash, {
    method: 'GET',
    headers: {
      'X-Figma-Token': figmaApiKey
    }
  });

  let figmaTreeStructure = await result.json();

  console.log(figmaTreeStructure);

  // Elements
  let myAwesomeTitle = document.querySelector('h1');
  let myAwesomeBackground = document.querySelector('body');
  let imagePlace = document.querySelector('#imagePlace');
  let myVersion = document.querySelector('#version');

  // Assign properties
  myAwesomeTitle.innerText = figmaTreeStructure.name;
  myAwesomeTitle.style.fontFamily = 'Arial';
  myAwesomeBackground.style.backgroundColor = '#cccccc';
  imagePlace.setAttribute('src', figmaTreeStructure.thumbnailUrl);
  myVersion.innerText = figmaTreeStructure.lastModified;

}

window.onload = getTree;