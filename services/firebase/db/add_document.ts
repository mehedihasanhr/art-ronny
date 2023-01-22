import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export const addDocument = async (collectionName: string, data: any) => {
    const docRef = await addDoc(collection(db, collectionName), data);

    // return the document id of the newly created document
    return { id: docRef.id, ...data };
};
