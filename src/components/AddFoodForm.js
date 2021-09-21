//imports from antd
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm({ food }) {
	return (
		<form className="formAddFoodForm">
			<Divider>Add Food Entry</Divider>

			<label className="boldText">Name</label>
			<Input value={food.name} type="text" onChange={() => {}} />

			<label className="boldText">Image</label>
			<Input value={food.name} type="text" onChange={() => {}} />

			<label className="boldText">Calories</label>
			<Input value={food.name} type="number" onChange={() => {}} />

			<label className="boldText">Servings</label>
			<Input value={food.name} type="number" onChange={() => {}} />

			<button type="submit">Create</button>
		</form>
	);
}

export default AddFoodForm;
