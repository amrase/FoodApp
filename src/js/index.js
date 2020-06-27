//Global 
import Search from './model/Search'
import * as searchView from './view/searchView'
import { elements,renderLoader,clearLoader } from './view/base'



let state = {

}

let controllSearch = async () =>{
    const query = searchView.getInput();
    
    if(query){
        state.search = new Search(query)
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.results)

        await state.search.getResult();

        clearLoader()
        searchView.renderResults(state.search.result)
    }
}
elements.searchForm.addEventListener('submit',e =>{
    e.preventDefault();
    controllSearch();
})



