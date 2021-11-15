// declaring a variable
let pokemonList = [{
    name: 'Bulbasaur',
    height: 8,
    type: ['psychic', 'ability']
  },
  {
    name: 'Ivysaur',
    height: 1,
    type: ['chlorophyll', 'overgrow']
  },
  {
    name: 'Charmeleon',
    height: 1.1,
    type: ['blaze', 'solarPower']
  }
];
// looping through the object
for (i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 5) {
    document.write(pokemonList[i].name + ' ' + 'height:' + pokemonList[i].height + ' ' + '--Wow this is huge' + '<br>')
  } else {
    document.write(pokemonList[i].name + ' ' + 'height:' + pokemonList[i].height + ' ' + '<br>')

  }
}
