import style from './Header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useState } from 'react';
import LightAndDarkMode from './LightAndDarkMode';
const Header = ({ user }) => {

    const [searchFileName, setsearchFileName] = useState([]);

    // this function for the logout in the app.
    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }

    console.log(user);

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
                    <LightAndDarkMode />
                    {/* <button> <SettingsIcon /></button> */}
                    {/* <button> <HelpOutlineIcon /></button> */}
                    <button onClick={logout}><span><img src={user.photoURL} alt="userLogo" /></span></button>
                </div>
            </div>
        </>
    )
}

export default Header