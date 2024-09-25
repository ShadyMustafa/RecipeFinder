const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')
const RecipeList = document.getElementById('list')
const apiKey = 'H7DF12LMlt8KFUB02KBBlw==fa4w2lMQQ1FFGPoo'


function searchRecipe(){
    const search = searchInput.value
    if(!search) alert('Please Enter anything in the search bar')

    const apiUrl = `https://api.api-ninjas.com/v1/recipe?query=${search}`

    RecipeList.innerHTML = '<p>Loading...</p>';

    fetch(apiUrl,{
        method:'GET',
        headers: {
            'X-Api-Key' : apiKey
        }
    })
    .then(response=>response.json())
    .then((data)=>{
        displayList(data)
    })
    .catch(error=>{
        alert('Recipe Not Found')
    })
}

function displayList(recipes){
    RecipeList.innerHTML=''
    if(RecipeList.length === 0){
        RecipeList.innerHTML = '<p>No Recipe Found</p>'
    }

    recipes.forEach(recipe=>{
        const recipeItem = document.createElement('li');
        
        const titleElement = document.createElement('p');
        titleElement.textContent = `Title: ${recipe.title}`;
        
        const ingredientsElement = document.createElement('p');
        ingredientsElement.textContent = `Ingredients: ${recipe.ingredients}`;
        
        const servingsElement = document.createElement('p');
        servingsElement.textContent = `Servings: ${recipe.servings}`;
        
        // Append the individual pieces to the recipe item (li)
        recipeItem.appendChild(titleElement);
        recipeItem.appendChild(ingredientsElement);
        recipeItem.appendChild(servingsElement);

        // Append the recipe item to the list
        RecipeList.appendChild(recipeItem);
    })
}