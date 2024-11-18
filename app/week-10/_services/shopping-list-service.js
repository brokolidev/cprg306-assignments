import { db } from "../_utils/firebase";
import { where, doc, collection, getDocs, addDoc, query } from "firebase/firestore";

// Async function to get items
export async function getItems(userId) {

	const q = query(
		collection(db, "users", userId, "items"),
		where("quantity", ">", 0)
	);

	const querySnapshot = await getDocs(q);

	const items = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));

	return items;
}

export async function addItem(userId, item) {
	try {
		const docRef = await addDoc(collection(db, "users", userId, "items"), item);

		// Return the id of the newly created document
		return docRef.id;
	} catch (error) {
		console.error("Error adding item: ", error);
		throw error;
	}
}
