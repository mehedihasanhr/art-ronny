import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export const authSignOut = async (cb: () => void) => {
    try {
        await signOut(auth);
        cb();
    } catch (error) {
        console.log(error);
    }
};
