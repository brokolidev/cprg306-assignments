import ItemList from "@/app/week-3/item-list";
import Link from "next/link";
import NewItem from "@/app/week-4/new-item";

export const metadata = {
	title: 'Component & useState',
};

export default function Page() {

	return (
		<main className="bg-amber-50 h-screen p-10 text-center">
			<NewItem />
		</main>
	);
}