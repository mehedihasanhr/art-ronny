import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

export const deleteDocument = async (collection: string, id: string) => {
    try {
        await deleteDoc(doc(db, collection, id));
    } catch (error) {
        console.log(error);
    }
};
