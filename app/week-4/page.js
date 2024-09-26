import ItemList from "@/app/week-3/item-list";
import Link from "next/link";
import NewItem from "@/app/week-4/new-item";

export const metadata = {
	title: 'Component & useState',
};

export default function Page() {

	return (
		<main className="bg-amber-50 h-screen">
			<Link href="/" className="p-5 inline-block">
				&#8592; Go Back
			</Link>
			<div className="text-center">
				<NewItem />
			</div>
		</main>
	);
}