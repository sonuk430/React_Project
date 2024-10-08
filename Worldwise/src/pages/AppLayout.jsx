import AppNav from "../components/AppNav";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import style from "./AppLayout.module.css"

const AppLayout = () => {
    return (
        <div className={style.app}>
            <Sidebar />
            <Map />
        </div>
    )
}

export default AppLayout