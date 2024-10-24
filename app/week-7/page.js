"use client"

import ItemList from "@/app/week-7/item-list";
import NewItem from "@/app/week-7/new-item";
import itemsData from "@/app/week-7/items.json";
import {useState} from "react";

import Link from "next/link";

export default function Page() {

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) => {
        setItems([...items, item]);
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
                <ItemList items={items} />
            </div>
            <div className="text-center">
                <NewItem onAddItem={handleAddItem} />
            </div>
        </main>
    );
}