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

//wooper -> https://gps.burgerkingencasa.es/images/products/1575468049898_Menu_Whopper.png

function App() {
	//const [ food ] = useState(foods);
	const [ foodData, setFoodData ] = useState(foods);
	const [ formDataInfo, setFormDataInfoState ] = useState(foods);

	//Functions to implement
	const addNewFood = (newFood) => {
		const updatedMoviesData = [ ...foodData, newFood ];
		const updatedMovies = [ ...formDataInfo, newFood ];

		setFoodData(updatedMoviesData);
		setFormDataInfoState(updatedMovies);
	};
	//console.log(food);
	return (
		<div className="App">
			<Divider>
				<h1>Food List</h1>
			</Divider>
			<AddFoodForm food={foodData} addFood={addNewFood} />
			<Row>
				{foodData.map((food) => {
					//Pasamos todo el objeto food en lugar de uno por uno
					return <FoodBox food={food} key={food.name} />;
				})}
			</Row>
		</div>
	);
}
export default App;
