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

     return {
       add: add,
       getAll: getAll
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
     if (item.height > 5) {
       document.write(item.name + ' ' + 'height:' + item.height + ' ' + '--Wow this is huge' + '<br>')
     } else {
       document.write(item.name + ' ' + 'height:' + item.height + ' ' + '<br>')
     }
   });
