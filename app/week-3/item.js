
export default function Item({name, quantity, category}) {
    return (
        <ul className="border-gray-500 border
        bg-amber-200 inline-block
        text-amber-800
        max-w-96 m-5 p-4 min-h-32">
            <li>Item Name: {name}</li>
            <li>Quantity: {quantity}</li>
            <li>Category: {category}</li>
        </ul>
    );
}