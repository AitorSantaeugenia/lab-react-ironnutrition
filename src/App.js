// src/App.js
import './App.css';
// To start using the pre-made Ant Design components we must first import them:
import { Card, Row, Col, Divider, Input, Button, Image } from 'antd';
//import JSON foods
import foods from './foods.json';
// Use State
import { useState } from 'react';
//components
import FoodBox from './components/FoodBox.js';

function App() {
	const [ food ] = useState(foods);
	console.log(food);
	return (
		<div className="App">
			<Divider>
				<h1>Food List</h1>
			</Divider>
			<Row>
				{food.map((food) => {
					//Pasamos todo el objeto food en lugar de uno por uno
					return (
						<FoodBox
							food={food}
							// foodname={food.name}
							// foodimage={food.image}
							// foodcalories={food.calories}
							// foodservings={food.servings}
						/>
					);
				})}
			</Row>
		</div>
	);
}
export default App;
