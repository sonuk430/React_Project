import { useState } from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/SideBar/Sidebar";
import WorkPlace from "../Components/WorkPlace/WorkPlace";
import DialogBox from '../Components/DialogBox/DialogBox';
import style from "./HomeSceen.module.css";


const HomeSceen = ({ user }) => {


    const [open, setOpen] = useState(false);

    function handleclose() {
        setOpen(false);
    }

    function handleOpen() {
        setOpen(true);
    }


    const homePageContentFit = {
        display: "flex",
    };
    return (
        <>
            <div className={style.home}>
                <Header user={user} />
                <div style={homePageContentFit}>
                    <Sidebar handleOpen={handleOpen} />
                    <DialogBox open={open} setOpen={setOpen} handleclose={handleclose} />
                    <WorkPlace />
                </div>
            </div>
        </>
    );
};

export default HomeSceen;
