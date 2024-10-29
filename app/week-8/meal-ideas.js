'use client';

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {

	// get meal ideas based on the ingredient
	function loadMealIdeas(ingredient) {
		if(ingredient !== '') {
			fetchMealIdeas(ingredient)
			.then(data => {
				if( data.meals === null || data === null ) {
					setTitle(`No meal ideas found for ${ingredient}`);
					setMeals([]);
				} else {
					setTitle(`Here are some meal ideas using ${ingredient}:`);
					setMeals(data.meals)
				}
			});
		}
	}

	// get ingredients for the meal
	function loadIngredientsForMeal(mealName) {
		console.log(mealName);
		fetchIngredientsForMeal(mealName)
		.then(data => {
			if( data.meals === null || data === null ) {
				setIngredientsForMeal([]);
			} else {
				const ingredientKeys = Array.from({length: 20}, (_, i) => `strIngredient${i + 1}`);
				const ingredientsArray = ingredientKeys.map(key => data.meals[0][key]).filter(Boolean);
				setIngredientsForMeal({[mealName]: ingredientsArray});
			}});
	}

	const [meals, setMeals] = useState([]);
	const [title, setTitle] = useState('Select an item to see meal ideas');
	const [ingredientsForMeal, setIngredientsForMeal] = useState({});

	// load meal ideas when the ingredient changes
	useEffect(() => {
		loadMealIdeas(ingredient);
	}, [ingredient]);

	// render meal ideas
	return (
		<div className="container m-auto">
			<h2 className="text-2xl font-bold text-center mt-4">Meal Ideas</h2>
			<p className="text-center">{title}</p>
			<div className="grid grid-cols-1 md:grid-cols-5 gap-2">
				{meals && meals.map(meal => (
					<div key={meal.idMeal}
					     onClick={() => loadIngredientsForMeal(meal.strMeal)}
					     className="border-gray-500 border
							bg-a`mber-200 text-amber-800 hover:cursor-pointer
							min-`w-56 max-w-96 m-2 p-4">
						<img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-36 object-cover" />
						<p className="text-lg capitalize font-bold">{meal.strMeal}</p>
						{ingredientsForMeal[meal.strMeal] && (
							<ul>
								{ingredientsForMeal[meal.strMeal].map((ingredient, idx) => (
									<li key={idx}>{ingredient}</li>
								))}
							</ul>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

// fetch meal ideas based on the ingredient
function fetchMealIdeas(ingredient) {
	return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
		.then(response => response.json());
}

function fetchIngredientsForMeal(mealName) {
	return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
		.then(response => response.json());
}