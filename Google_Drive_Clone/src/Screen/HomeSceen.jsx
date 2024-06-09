import Header from "../Components/Header/Header"
import Sidebar from "../Components/SideBar/Sidebar"
import WorkPlace from "../Components/WorkPlace/WorkPlace"

import style from './HomeSceen.module.css';
const HomeSceen = () => {
    const homePageContentFit = {
        display: "flex",
    }
    return (
        <>


            <div className={style.home}>
                <Header />
                <div style={homePageContentFit}>
                    <Sidebar />
                    <WorkPlace />
                </div>
            </div>

        </>
    )
}

export default HomeSceen