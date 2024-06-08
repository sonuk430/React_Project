import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import WorkPlace from '../Components/WorkPlace';
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