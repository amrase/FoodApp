import {elements} from './base'

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
}

export const clearResults = () =>{
    elements.resultsList.innerHTML = ''
}


const limitRecipeTitle = (title, limit=17) =>{
    const newTitle = [];
    if (title.length > limit){
        title.split(" ").reduce((acc,cur)=>{
            if(acc + cur.length <= limit){
                newTitle.push(cur);
            }
            return acc + cur.length;
        },0)
    }
    return `${newTitle.join(' ')}...`
}


const renderRecipe = recipe =>{
    let html = `
        <li>
        <a class="likes__link" href="#${recipe.recipe_id}">
            <figure class="likes__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="likes__data">
                <h4 class="likes__name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="likes__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
    `

    elements.resultsList.insertAdjacentHTML('beforeend',html);
    
}

export const renderResults = recipes => {
    recipes.forEach(recipe => renderRecipe(recipe))
}