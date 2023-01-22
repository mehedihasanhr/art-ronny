import { db } from "../firebase";
import { updateDoc, serverTimestamp, doc } from "firebase/firestore";

export const updateDocument = async (collection: string, id: string, data: Record<string, any>): Promise<any> => {
    const docRef = doc(db, collection, id);
    const updatedData = await updateDoc(docRef, {
        ...data,
        updatedAt: serverTimestamp(),
    });

    return updatedData;
};
