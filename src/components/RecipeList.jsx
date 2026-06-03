
import { RecipeCard } from './RecipeCard';
import { useState } from 'react';
import '../styles/recipe-list.css'

export const RecipeList = ({ recipesList, onDelete }) => {

    return (
        <div className="recipe-container">
            {recipesList.map((recipe) => {

                return (
                    <RecipeCard
                        className ='recipe-cards-list'
                        onDelete={onDelete}
                        recipe={recipe}
                        key={recipe.id} />
                )
            })

            }
        </div>
    )
}