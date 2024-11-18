"use client"

import ItemList from "@/app/week-10/shopping-list/item-list";
import NewItem from "@/app/week-10/shopping-list/new-item";
import MealIdeas from "@/app/week-10/shopping-list/meal-ideas";
import {useState} from "react";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useEffect } from "react";

export default function Page() {

    const { user } = useUserAuth();

    const [items, setItems] = useState([]);

    // redirect to login page if user is null
    if (!user) {
        window.location.replace("/week-10");
        return;
    }

    const loadItems = async () => {
        const items = await getItems(user.uid);
        setItems(items);
    }

    useEffect(() => {
        loadItems();
    }, []);

    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (item) => {
        const newItemID = addItem(user.uid, item).then(r => {
            item.id = newItemID;
            setItems([...items, item]);
        });
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
            <Link href="/week-9" className="p-5 inline-block">
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