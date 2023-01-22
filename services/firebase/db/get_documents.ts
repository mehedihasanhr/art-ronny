import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const getDocuments = async (collectionName: string) => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const documents: any[] = [];

    querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
    });

    return documents;
};
