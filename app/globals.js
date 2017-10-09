const genres = [
  {
    'ROCK': generateLink('rock-music')
  },
  {
    'COUNTRY': generateLink('country-music')
  },
  {
    'ELECTRONIC': generateLink('electronic-music')
  },
  {
    'METAL': generateLink('metal-music')
  },
  {
    'CLASSIC': generateLink('classic-music')
  },
  {
    'FOLK': generateLink('folk-music')
  },
  {
    'JAZZ': generateLink('jazz')
  }
];

function generateLink(genre) {
  return `https://png.icons8.com/${genre}/ios7/50`;
}

export {genres};