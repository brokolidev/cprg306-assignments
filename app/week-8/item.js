export default function Item({name, quantity, category, onSelect}) {
    return (
        <ul onClick={onSelect} className="border-gray-500 border
            bg-amber-200 text-amber-800 hover:cursor-pointer
            min-w-56 max-w-96 m-2 p-4">
            <li className="text-lg capitalize font-bold">{name}</li>
            <li>Buy {quantity} in {category}</li>
        </ul>
    );
}