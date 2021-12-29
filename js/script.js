   // invoking iife function
   let pokemonRepo = (function() {

     let pokemonList = [];

     let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';

     let modalContainer = document.querySelector('#pokedex');

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

     function showModal(pokemon) {

       let modal_body = $('.modal-body');

       let modal_title = $('.modal-title');

       // Clear all existing modal content
       modal_body.empty()
       modal_title.empty()

       let titleElement = $('<h1>' + pokemon.name + '</h1>');

       let heightElement = $('<p>' + 'Height: ' + pokemon.height + '<p>');

       // Image element
       let imageElement = $('<img class="modal-img" src="" >');
       imageElement.attr('src', pokemon.imageUrl);
       // Add the new modal content
       modal_title.append(titleElement);
       modal_body.append(imageElement);
       modal_body.append(heightElement);

       $('#pokedex').modal();
     }


     function showDetails(pokemon) {
       loadDetails(pokemon).then(function() {
         showModal(pokemon);
       });
     }
     // adding to the list
     function addList(pokemon) {
       let pkList = document.querySelector('.pokemon-list');
       let listItem = document.createElement('li');
       listItem.classList.add('group-list-item')
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



     function hideModal() {
       modalContainer.classList.remove('is-visible');
     }

     // When ESC is pressed.
     window.addEventListener('keydown', (e) => {
       let modalContainer = document.querySelector('#pokedex');
       if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
         hideModal();
       }
     });


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
