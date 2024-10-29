"use client"

import ItemList from "@/app/week-8/item-list";
import NewItem from "@/app/week-8/new-item";
import MealIdeas from "@/app/week-8/meal-ideas";
import itemsData from "@/app/week-8/items.json";
import {useState} from "react";

import Link from "next/link";


export default function Page() {

    const [items, setItems] = useState(itemsData);

    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }

    const handleItemSelect = (item) => {
        // remove emoji from item name and remove after comma
        let name = item.name.split(',')[0];

        // Remove any emojis
        name = name.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').trim();
        setSelectedItemName(name);
    }

    return (
        <main className="bg-amber-50">
            <Link href="/" className="p-5 inline-block">
                &#8592; Go Back
            </Link>
            <h1 className="font-sans text-3xl font-extrabold px-5 mb-5">
                Shopping List
            </h1>
            <div className="text-center">
                <NewItem onAddItem={handleAddItem}/>
            </div>
            <div className="text-center">
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <MealIdeas ingredient={selectedItemName} />
        </main>
    );
}