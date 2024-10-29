"use client"

import Item from "@/app/week-8/item";
import {useState} from "react";


export default function ItemList({items, onItemSelect}) {
    // create sortBy state variable
    const [sortBy, setSortBy] = useState('name');
    const [grouped, setGrouped] = useState(false);

    // Function to group items by category
    const groupItemsByCategory = (items) => {
        return items.reduce((acc, item) => {
            // Create an array for each category if it doesn't exist
            if (!acc[item.category]) {
                acc[item.category] = [];
            }
            // Push the item into the corresponding category array
            acc[item.category].push(item);

            // sort array by its keys
            const keys = Object.keys(acc);
            const sortedKeys = keys.sort();
            return sortedKeys.reduce((sorted, key) => {
                sorted[key] = acc[key];
                return sorted;
            }, {});
        }, {});
    };

    // get the items from prop
    // we are going to use this copied version of items
    // to avoid mutating the original items
    const copiedItems = [...items];

    // sort items by name or category
    const sortedItems = copiedItems.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else {
            return a.category.localeCompare(b.category);
        }
    });

    const itemsToDisplay = grouped ? groupItemsByCategory(sortedItems) : sortedItems;

    return (
        // render items using map function
        // create sorting buttons for name and category
        // add onClick event to the buttons to change sortBy state variable
        <div className={`p-10 ${sortBy === 'name' ? 'bg-amber-500' : 'bg-fuchsia-500'}`}>
            <div className="flex items-center justify-center gap-2 p-4 text-white
                font-semibold">
                <p>Sort By:</p>
                <button type="button" className="w-36 p-2 bg-blue-500
                   rounded-lg shadow-md hover:bg-blue-700 text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        onClick={() => {
                            setSortBy('name');
                            setGrouped(false);
                        }}>
                     Name
                </button>
                <button type="button" className="w-36 p-2 bg-blue-500
                       rounded-lg shadow-md hover:bg-blue-700 text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        onClick={() => {
                            setSortBy('category');
                            setGrouped(false);
                        }}>
                    Sort by Category
                </button>
                <button type="button" className="w-36 p-2 bg-blue-500
                       rounded-lg shadow-md hover:bg-blue-700 text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        onClick={() => {
                            setGrouped(true);
                        }}>
                    Sort by Category
                </button>
            </div>
            <div className="flex flex-wrap">
                {grouped
                    ? Object.keys(itemsToDisplay).map((category) => (
                        <div key={category} className="w-full border-t border-gray-300 mt-4">
                            <h2 className="text-lg font-bold text-white capitalize mt-2">{category}</h2>
                            <div className="flex flex-wrap">
                                {itemsToDisplay[category].map((item) => (
                                    <Item key={item.id}
                                          onSelect={() => onItemSelect(item)}
                                          name={item.name}
                                          quantity={item.quantity}
                                          category={item.category} />
                                ))}
                            </div>
                        </div>
                    ))
                    : itemsToDisplay.map((item) => (
                        <Item key={item.id} name={item.name}
                              onSelect={() => onItemSelect(item)}
                              quantity={item.quantity} category={item.category} />
                    ))}
            </div>
        </div>
    );
}