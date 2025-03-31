export default function IngredientsList(props){
    // console.log(props)
    
    let list = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (

    <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">{list}</ul>
        {props.ingredients.length > 3 ? 
            <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.getRecipe}> {props.showRec? "Hide the": "Get the"} recipe</button>
            </div>
        : null}
    </section>

    )
}