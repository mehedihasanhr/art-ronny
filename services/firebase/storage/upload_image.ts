import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const uploadImage = async (
    file: File,
    downloadURL: (url: string) => void,
    progressStatus?: (progress: number) => void,
    status?: (status: string) => void,
    error?: (error: string) => void,
) => {
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            progressStatus && progressStatus(progress);

            switch (snapshot.state) {
                case "paused":
                    status && status("paused");
                    break;
                case "running":
                    status && status("running");
                    break;
            }
        },
        (err) => {
            console.log(err);
            error && error(err.message);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((d_url) => {
                downloadURL(d_url);
            });
        },
    );
};
