import React from "react";
import Ingredients from "./ingredients";
import IngredientsList from "./ingredientsList";
import { getRecipeFromMistral } from "/src/ai.js";

export default function Content(){

    let [ingredients, setIngredients] = React.useState( [] )

    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addElement(formData) {
        const newitem = formData.get("ingredient");
        setIngredients(prev => [...prev, newitem])
    }

    return (
        <main>
            <form action={addElement} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="add ingredient"
                    name="ingredient"
                />
                <button >Add ingredient</button>
            </form>
            {   
                ingredients.length > 0
                && 
                <IngredientsList 
                    ingredients = {ingredients}
                    getRecipe = {getRecipe} />
            }
            
            {recipe && <Ingredients recipe={recipe}/>}


        </main>
    )
}