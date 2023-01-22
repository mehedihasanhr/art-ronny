import { signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { provider } from "./auth_google_provider_create";

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        return user as any;
    } catch (error: any) {
        console.log(error.message);
    }
};
