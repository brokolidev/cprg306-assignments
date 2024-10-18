import Item from "@/app/week-6/item";
import useState from "react";
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
        <div>
            <button onClick={() => setSortBy('name')}>Sort by Name</button>
            <button onClick={() => setSortBy('category')}>Sort by Category</button>
            {sortedItems.map((item, index) => (
                <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
            ))}
        </div>
    );
}