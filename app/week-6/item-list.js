"use client"

import Item from "@/app/week-6/item";
import {useState} from "react";
import items from "@/app/week-6/items.json";

export default function ItemList() {
    // create sortBy state variable
    const [sortBy, setSortBy] = useState('name');

    // create sortedItems variable, it can be sorted by name or category
    const sortedItems = items.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else {
            return a.category.localeCompare(b.category);
        }
    });

    return (
        // render items using map function
        // create sorting buttons for name and category
        // add onClick event to the buttons to change sortBy state variable
        <div className={`p-10 ${sortBy === 'name' ? 'bg-amber-500' : 'bg-fuchsia-500'}`}>
            <div className="flex items-center justify-center gap-2 p-4">
                <button type="button" className="w-36 p-2 bg-blue-500 text-white
                   font-semibold rounded-lg shadow-md hover:bg-blue-700 text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        onClick={() => setSortBy('name')}>
                    Sort by Name
                </button>
                <button type="button" className="w-36 p-2 bg-blue-500 text-white
                       font-semibold rounded-lg shadow-md hover:bg-blue-700 text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        onClick={() => setSortBy('category')}>
                    Sort by Category
                </button>
                <button type="button" className="w-36 p-2 bg-blue-500 text-white
                       font-semibold rounded-lg shadow-md hover:bg-blue-700 text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        onClick={() => setSortBy('category')}>
                    Sort by Category
                </button>
            </div>
            <div className="flex flex-wrap">
                {sortedItems.map((item, index) => (
                    <Item key={index} name={item.name} quantity={item.quantity} category={item.category}/>
                ))}
            </div>
        </div>
    );
}