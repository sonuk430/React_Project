import style from './Header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
const Header = () => {
    return (
        <>
            <div className={style.header}>
                <div className={style.headerLeft}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" alt="logo" />
                    <h2>Drive</h2>
                </div>
                <div className={style.headerCenter}>
                    <div className={style.headerCenterContent}>
                        <SearchIcon />
                        <input type="text" placeholder='Search in Drive' />
                        <TuneIcon />
                    </div>
                </div>
                <div className={style.headerRight}>
                    <button> <SettingsIcon /></button>
                    <button> <HelpOutlineIcon /></button>
                    <span><img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" alt="userLogo" /></span>
                </div>
            </div>
        </>
    )
}

export default Header