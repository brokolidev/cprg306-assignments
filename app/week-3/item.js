export default function Item({name, quantity, category}) {
    return (
        <ul className="border-gray-500 border
            bg-amber-200 text-amber-800
            max-w-96 m-5 p-4">
            <li className="text-lg capitalize font-bold">{name}</li>
            <li>Buy {quantity} in {category}</li>
        </ul>
    );
}