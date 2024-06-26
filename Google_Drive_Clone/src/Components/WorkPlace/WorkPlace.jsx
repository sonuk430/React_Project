import style from "./WorkPlace.module.css";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import WorkPlaceImg from "./WorkPlaceImg";
import DataListType from "./DataListType";
import DataGridType from "./DataGridType";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

const WorkPlace = () => {
    const [files, setFiles] = useState([]);

    const [showList, setShowList] = useState(true);


    function handleshowList() {
        setShowList(true)
    }

    function handleshowGrid() {
        setShowList(false)
    }




    useEffect(() => {
        // this function is collect the app snapshot from firebase and storing the data in files
        db.collection("myfiles").onSnapshot((snapshot) => {
            setFiles(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });
    }, []);

    // This function for calculating size of the files
    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return "0 Bytes";

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + "" + sizes[i];
    }

    return (
        <>
            <div className={style.workPlace}>
                <Heading handleshowList={handleshowList} handleshowGrid={handleshowGrid} />

                <SubHeading />
                {
                    files.length === 0 ? <WorkPlaceImg /> : ""
                }

                {
                    showList ? <DataListType files={files} formatBytes={formatBytes} /> : <DataGridType files={files} formatBytes={formatBytes} />
                }


            </div>
        </>
    );
};

export default WorkPlace;
