import {elements} from './base'

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
}

export const clearResults = () =>{
    elements.resultsList.innerHTML = ''
}



const renderRecipe = recipe =>{
    let html = `
        <li>
        <a class="likes__link" href="#${recipe.recipe_id}">
            <figure class="likes__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="likes__data">
                <h4 class="likes__name">${recipe.title}</h4>
                <p class="likes__author">${recipe.publisher}/p>
            </div>
        </a>
    </li>
    `

    elements.resultsList.insertAdjacentHTML('beforeend',html);
    
}

export const renderResults = recipes => {
    recipes.forEach(recipe => renderRecipe(recipe))
}