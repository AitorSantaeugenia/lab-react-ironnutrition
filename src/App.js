// src/App.js
import './App.css';
// To start using the pre-made Ant Design components we must first import them:
import { Row, Divider } from 'antd';
//import JSON foods
import foods from './foods.json';
// Use State
import { useState } from 'react';
//components
import FoodBox from './components/FoodBox.js';
import AddFoodForm from './components/AddFoodForm.js';
import SearchFood from './components/SearchFood.js';

//wooper -> https://gps.burgerkingencasa.es/images/products/1575468049898_Menu_Whopper.png
// TO-DO
// If we add a food, then it does not appear in the search form after we added it
// as we do with the food.name, if we have two with the same name, it will delete both

function App() {
	// food and state
	const [ foodData, setFoodData ] = useState(foods);
	//search results
	const [ searchInput, setSearchInput ] = useState('');
	//copy food to deleteFood
	const foodDataCopy = [ ...foodData ];

	//Functions to implement
	//Function ADD NEW FOOD
	const addNewFood = (newFood) => {
		const updatedFoodData = [ ...foodData, newFood ];
		setFoodData(updatedFoodData);
	};

	//Function SEARCH FOOD
	const searchFoodFilter = (e) => {
		setSearchInput(e.target.value);

		if (e.target.value === '') {
			setFoodData(foods);
		}
		const textInputValue = e.target.value.toLowerCase();

		const filteredList = foods.filter((food) => {
			const foodIncludes = food.name.toLowerCase();
			return foodIncludes.includes(textInputValue);
		});

		setFoodData(filteredList);
	};

	//Function DELETE
	const deleteFood = (name) => {
		const foodToDelete = foodDataCopy.filter((food) => {
			return food.name !== name;
		});
		setFoodData(foodToDelete);
	};

	return (
		<div className="App">
			<AddFoodForm food={foodData} addFood={addNewFood} />
			<SearchFood searchInput={searchInput} searchFoodFilter={searchFoodFilter} />
			<Divider>
				<h1>Food list</h1>
			</Divider>
			<Row>
				{foodData.map((food) => {
					//Pasamos todo el objeto food en lugar de uno por uno
					return <FoodBox food={food} key={food.name} deleteFood={deleteFood} />;
				})}
			</Row>
		</div>
	);
}
export default App;
