var elList = document.querySelector('.list');

elList.innerHTML = null;

for (var pokemo of pokemons) {
   var newLi = document.createElement('li');
   var newNum = document.createElement('p');
   var newHeading = document.createElement('h2');
   var newImges = document.createElement('img');
   var newTypeList = document.createElement('ul');
   var newHeight = document.createElement('p');
   var newWeight = document.createElement('p');
   var newCandy = document.createElement('h3');
   var newCandy_count = document.createElement('p');
   var newEgg = document.createElement('p');
   var newSpawn_chance = document.createElement('p');
   var newAvg_spawns = document.createElement('strong');
   var newSpawn_time = document.createElement('time');
   var newMultipliers = document.createElement('p');
   var newWeaknessesList = document.createElement('ul');
   


   newNum.textContent = pokemo.num;
   newHeading.textContent = pokemo.name;
   newHeight.textContent = pokemo.height;
   newWeight.textContent = pokemo.weight;
   newCandy.textContent = pokemo.candy;
   newCandy_count.textContent = pokemo.candy_count;
   newEgg.textContent = pokemo.egg;
   newSpawn_chance.textContent = pokemo.spawn_chance;
   newAvg_spawns.textContent = pokemo.avg_spawns;
   newSpawn_time.textContent = 'spawn time ' + pokemo.spawn_time;
   newMultipliers.textContent = pokemo.multipliers;
 
   for (var types of pokemo.type) {
      var newTypesLi = document.createElement('li');

      newTypesLi.textContent = types;

      newTypeList.appendChild(newTypesLi);
   }

   for (var weak of pokemo.weaknesses) {
      var newWeakLi = document.createElement('li');

      newWeakLi.textContent = weak;

      newWeaknessesList.appendChild(newWeakLi);
   }

   



   newLi.setAttribute('class', 'list__item p-3 d-flex flex-column align-items-center justify-content-center shadow ');
   newNum.setAttribute('class', 'list__text');
   newHeading.setAttribute('class', 'list__heading');
   newImges.setAttribute('class', 'list__imges');
   newImges.setAttribute('src', pokemo.img);
   newImges.setAttribute('alt', pokemo.name + ' poster' );
   newImges.setAttribute('width', '120');
   newImges.setAttribute('height', '120');
   newHeight.setAttribute('class', 'list__height m-0');
   newWeight.setAttribute('class', 'list__weight m-0');
   newCandy.setAttribute('class', 'list__candy m-0 fs-5'); 
   newCandy_count.setAttribute('class', 'list__count m-0');
   newEgg.setAttribute('class', 'list__egg m-0');
   newSpawn_chance.setAttribute('class', 'list__chance m-0');
   newAvg_spawns.setAttribute('class', 'list__spawns');
   newSpawn_time.setAttribute('class', 'list__time');
   newMultipliers.setAttribute('class', 'list__multipliers');
 

   newLi.appendChild(newNum);
   newLi.appendChild(newHeading);
   newLi.appendChild(newImges);
   newLi.appendChild(newTypeList)
   newLi.appendChild(newHeight);
   newLi.appendChild(newWeight);
   newLi.appendChild(newCandy);
   newLi.appendChild(newCandy_count);
   newLi.appendChild(newEgg);
   newLi.appendChild(newSpawn_chance);
   newLi.appendChild(newAvg_spawns);
   newLi.appendChild(newSpawn_time);
   newLi.appendChild(newMultipliers);
   newLi.appendChild(newWeaknessesList);
   

   elList.appendChild(newLi);
}
