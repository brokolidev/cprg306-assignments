'use client';

import {useState} from "react";

export default function NewItem({onAddItem}) {

	const [quantity, setQuantity] = useState(1);
	const [name, setName] = useState("");
	const [category, setCategory] = useState("produce");

	const increment = () => {
		if(quantity < 20) {
			setQuantity(quantity + 1);
		} else {
			alert("You can't buy more than 20 items at a time!");
		}
	}

	const decrement = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		} else {
			alert("You can't buy less than 1 item!");
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const newItem = {
			// generate random string id
			id: Math.random().toString(36).substring(2, 9),
			name: name,
			quantity: quantity,
			category: category
		}

		onAddItem(newItem);

		resetAll();
	}

	const resetAll = () => {
		setName("");
		setCategory("produce");
		setQuantity(1);
	}

	return (
		<div className="container m-auto">
			<form onSubmit={handleSubmit}>
				<div className="flex justify-center gap-2 items-center my-2">
					<label>Name</label>
					<input type="text" name="name" id="name" required
					       value={name}
					       onChange={(e) => setName(e.target.value)}
					       className="block w-36 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
				       ring-gray-300 placeholder:text-gray-400 focus:ring-2
				       focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
				</div>
				<div className="flex justify-center gap-2 items-center my-2">
					<label>Quantity</label>
					<input type="text" name="quantity" id="quantity"
					       value={quantity}
					       onChange={(e) => setQuantity(e.target.value)}
					       className="block w-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
				       ring-gray-300 placeholder:text-gray-400 focus:ring-2
				       focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
					<button onClick={increment}
					        disabled={quantity >= 20}
					        type="button" className="disabled:bg-gray-400 rounded-full bg-indigo-600 p-1 text-white shadow-sm
				        hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
				        focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
						     stroke="currentColor" className="size-6">
							<path d="M12 4.5v15m7.5-7.5h-15"/>
						</svg>
					</button>
					<button onClick={decrement}
					        disabled={quantity <= 1}
					        type="button" className="disabled:bg-gray-400 rounded-full bg-indigo-600 p-1 text-white
				        shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
				        focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
						     stroke="currentColor" className="size-6">
							<path d="M5 12h14"/>
						</svg>
					</button>
				</div>
				<div className="flex justify-center gap-2 items-center my-2">
					<label>Category</label>
					<select className="block w-36 rounded-md border-0 py-2 px-1
						text-gray-900 shadow-sm ring-1 ring-inset
						ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600
						sm:max-w-xs sm:text-sm sm:leading-6"
					        onChange={(e) => setCategory(e.target.value)}
					        name="category" value={category}>
						<option value="produce">Produce</option>
						<option value="dairy">Dairy</option>
						<option value="bakery">Bakery</option>
						<option value="meat">Meat</option>
						<option value="frozen foods">Frozen Foods</option>
						<option value="canned goods">Canned Goods</option>
						<option value="dry goods">Dry Goods</option>
						<option value="beverages">Beverages</option>
						<option value="snacks">Snacks</option>
						<option value="household">Household</option>
						<option value="other">Other</option>
					</select>
				</div>
				<div className="flex justify-center gap-2 items-center my-2">
					<button type="submit" id="submit"
					        className="w-36 mt-4 py-2 px-4 bg-blue-500 text-white
								       font-semibold rounded-lg shadow-md hover:bg-blue-700
								       focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
						Add
					</button>
				</div>
			</form>
		</div>
	);
}