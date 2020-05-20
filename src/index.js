import recipes from './assets/data/recipes.json';
import './style.css';

{
  const init = () => {
    console.log(recipes);    
    makeList();
    addListenersToRecipeLinks();
  };

  const makeList=()=>{
    recipes.forEach(recipe => {
      const $inhoud = createRecipeListItem(recipe);
      const $ol = document.querySelector(`.recipes`);
      $ol.appendChild($inhoud);
    });
  }

  const createRecipeListItem = recipe => {
    const $li = document.createElement(`li`);
    $li.classList.add(`recipe`);
    $li.innerHTML = `<div class="recipe__info">
        <span class="recipe__label">
          ${recipe.label}
        </span>
        <h2 class="recipe__title">
          ${recipe.title}
        </h2>
        <span class="recipe__by">
          by <span class="highlight">${recipe.cook}</span>
        </span>
        <span class="button" id="${recipe.id}">Show info</span>
      </div>
      <div class="recipe__img">
        <img src="${recipe.image}" alt="${recipe.title}"/>
      </div>
    `;
    return $li;
  };

  const addListenersToRecipeLinks=()=>{
    const allbuttons = document.querySelectorAll('.button');
    console.log(allbuttons);
    allbuttons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(button.id);
        const currentIndex = button.id;
        if(currentIndex == 1){
          const $lijstitem = document.querySelector(`.recipe`);
          $lijstitem.classList.add(`recipe--active`);
          console.log(`nummer 1 is aangeduid`);
          const $tekstplaats = document.querySelector(`.recipe__text`);
          $tekstplaats.innerHTML= recipes[0].text;
          const nodigeIndex = 0;
          return nodigeIndex;

        } else if(currentIndex ==2){
          console.log(`nummer 2 is aangeduid`);
          const $tekstplaats = document.querySelector(`.recipe__text`);
          $tekstplaats.innerHTML= recipes[1].text;
          const nodigeIndex = 1;
          return nodigeIndex;

        } else if(currentIndex ==3){
          console.log(`nummer 3 is aangeduid`);
          const $tekstplaats = document.querySelector(`.recipe__text`);
          $tekstplaats.innerHTML= recipes[2].text;
          const nodigeIndex = 2;
          return nodigeIndex;

        } else {
          console.log(`niets moet gebeuren`);
          const nodigeIndex = '';
          return nodigeIndex;
        }
      });
    });
  };

  init();
}
