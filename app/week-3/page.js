import ItemList from "@/app/week-3/item-list";
import Link from "next/link";

export const metadata = {
    title: 'Shopping List',
};

export default function Page() {

    return (
        <main className="bg-amber-50">
            <Link href="/" className="p-5 inline-block">
                &#8592; Go Back
            </Link>
            <h1 className="font-sans text-3xl font-extrabold px-5 mb-5">
                Shopping List
            </h1>
            <div className="text-center">
                <ItemList/>
            </div>
        </main>
    );
}