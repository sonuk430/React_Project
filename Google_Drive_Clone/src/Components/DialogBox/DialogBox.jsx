import style from "./DialogBox.module.css";
import { Modal } from "@mui/material";
import firebase from "firebase";
import { storage, db } from "../firebase/firebase";
import { useState } from "react";


const DialogBox = ({ open, setOpen, handleclose }) => {

    const [uploading, setUploading] = useState(false);
    const [file, setFile] = useState(null);



    function handleChange(e) {
        // console.log(e.target.files[0]);
        if (e.target.files[0]);
        {
            setFile(e.target.files[0]);
        }
    }

    function handleUpload(e) {
        e.preventDefault();
        setUploading(true);

        // stroage.ref(ref is given firebase) here we are puting(sttoring) the user data(file,img,pdf, etc.) in firebase
        storage
            .ref(`files/${file.name}`)
            .put(file)
            .then((snapshot) => {
                // console.log(snapshot);
                storage
                    .ref("files")
                    .child(file.name)
                    .getDownloadURL()
                    .then((url) => {
                        db.collection("myfiles").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            filename: file.name,
                            fileURL: url,
                            size: snapshot._delegate.bytesTransferred,
                        });
                        setUploading(false);
                        setFile(null);
                        setOpen(false);
                    });
            });

    }
    return (
        <>

            <Modal open={open} onClose={handleclose}>
                <div className={style.modle_pop}>
                    <form>


                        <div className={style.modalBody}>
                            <h3>Select file you want to upload</h3>
                            {uploading ? (
                                <p>Uploading</p>
                            ) : (
                                <>
                                    <input type="file" onChange={handleChange} className={style.file} />
                                    <input
                                        type="submit"
                                        className={style.post_submit}
                                        onClick={handleUpload}
                                    />
                                </>
                            )}
                        </div>
                    </form>
                </div>
            </Modal>

        </>
    );
};

export default DialogBox;
