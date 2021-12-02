   // invoking iife function
   let pokemonRepo = (function() {

         let pokemonList = [];

         let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';
         // geting the json format of the api
         function loadList() {
           return fetch(apiUrl).then(function(response) {
             return response.json();
             // using promise to execute the json
           }).then(function(json) {
             // looping over the api
             json.results.forEach(function(item) {
               let pokemon = {
                 name: item.name,
                 detailsUrl: item.url
               };
               // calling the add funtion
               add(pokemon);
             });
           }).catch(function(e) {
             console.error(e);
           })
         }
// creating a new funtion to give extra details
         function loadDetails(items) {
           let url = items.detailsUrl;
           return fetch(url).then(function(response) {
             return response.json();
           }).then(function(details) {
             // Now we add the details to the item
             items.imageUrl = details.sprites.front_default;
             items.height = details.height;
             items.types = details.types;
           }).catch(function(e) {
             console.error(e);
           });
         }

         function add(pokemon) {
           if (Object.keys(pokemon).length === 2) {
             pokemonList.push(pokemon);
           } else {
             alert('you have to add two keys')
           }
         }

         function getAll() {
           return pokemonList;
         }

         function showDetails(pokemon) {
           loadDetails(pokemon).then(function() {
               console.log(pokemon);
               });
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
               addList: addList,
               loadList: loadList,
               loadDetails: loadDetails,
               showDetails: showDetails,
             };
           })();
         // looping through the object
         pokemonRepo.loadList().then(function() {
           // Now the data is loaded! {
           pokemonRepo.getAll().forEach(function(item) {
             pokemonRepo.addList(item);
           });
         });
