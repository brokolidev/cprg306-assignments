'use client';

import {useState} from "react";

export default function NewItem() {

	const [quantity, setQuantity] = useState(1);

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

	return (
		<div className="flex justify-center gap-2 items-center">
			<label>Quantity</label>
			<input type="text" name="quantity" id="quantity"
			       value={quantity}
			       className="block w-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
			       ring-gray-300 placeholder:text-gray-400 focus:ring-2
			       focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2" />
			<button onClick={increment}
					disabled={quantity >= 20}
			        type="button" class="disabled:bg-gray-400 rounded-full bg-indigo-600 p-1 text-white shadow-sm
			        hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
			        focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
				     stroke-width="1.5" stroke="currentColor" class="size-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
				</svg>
			</button>
			<button onClick={decrement}
					disabled={quantity <= 1}
			        type="button" className="disabled:bg-gray-400 rounded-full bg-indigo-600 p-1 text-white
			        shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
			        focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
				     stroke-width="1.5" stroke="currentColor" class="size-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
				</svg>
			</button>
		</div>
	);
}