   // invoking iife function
   let pokemonRepo = (function() {
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

     function add(pokemon) {
       if (Object.keys(pokemon).length === 3) {
         pokemonList.push(pokemon);
       } else {
         alert('you have to add three keys')
       }
     }

     function getAll() {
       return pokemonList;
     }

     function showDetails(pokemon) {
       console.log(pokemon.name);
     }
// adding to the list
     function addList(pokemon) {
       let pkList = document.querySelector('.pokemon-list');
       let listItem = document.createElement('li');
       let button = document.createElement('button');
       button.innerText = pokemon.name;

       //adds class to button for css styling
       button.classList.add('newColor');
       listItem.appendChild(button);

       //append children
       pkList.appendChild(listItem);
       button.addEventListener('click', function() {
         showDetails(pokemon);
       });
     }



     return {
       add: add,
       getAll: getAll,
       addList: addList
     };
   })();

   // add new element
   pokemonRepo.add({
     name: 'ashuar',
     height: 10,
     type: ['vision', 'sighted']
   });
   // looping through the object
   pokemonRepo.getAll().forEach(function(item) {
     pokemonRepo.addList(item);
   });
