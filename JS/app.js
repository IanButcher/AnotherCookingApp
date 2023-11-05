// Pastel colours Array
var colours = ["#FFD700", "#FFA07A", "#87CEEB", "#98FB98"]
var indiceColor = 0
// Function to change background
function changeBackgroundColor() {
    document.body.style.backgroundColor = colours[indiceColor]
    document.getElementById("cambiar-color").style.backgroundColor = colours[indiceColor]
    indiceColor = (indiceColor + 1) % colores.length
}
// Run of the function once clicked the button
document.getElementById("change-colour").addEventListener("click", changeBackgroundColor())


// New Recipe
const newRecipeInput = document.querySelector('input')
const newRecipesForm = document.querySelector('form')
const recipeHolder = document.querySelector('section')

newRecipesForm.addEventListener('submit', (a)=>{
    a.preventDefault()
    const newLi = document.createElement('li')
    newLi.innerText = newRecipeInput.value
    recipeHolder.append(newLi)
    newRecipeInput.value = ""
})
