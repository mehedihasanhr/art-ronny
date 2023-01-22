import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const authStateListener = (callback: (user: any) => void) => {
    return onAuthStateChanged(auth, (user: any) => {
        if (user) {
            callback({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                emailVerified: user.emailVerified,
                phoneNumber: user.phoneNumber,
                isAnonymous: user.isAnonymous,
                accessToken: user.accessToken,
            });
        } else {
            callback(null);
        }
    });
};
