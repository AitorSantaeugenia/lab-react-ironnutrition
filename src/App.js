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

function App() {
	const [ food ] = useState(foods);
	//console.log(food);
	return (
		<div className="App">
			<Divider>
				<h1>Food List</h1>
			</Divider>
			<AddFoodForm food={food} />
			<Row>
				{food.map((food) => {
					//Pasamos todo el objeto food en lugar de uno por uno
					return <FoodBox food={food} key={food.name} />;
				})}
			</Row>
		</div>
	);
}
export default App;
