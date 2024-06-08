import style from './Header.module.css';
const Header = () => {
    return (
        <>
            <div className={style.header}>
                <div className={style.headerLeft}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" alt="logo" />
                    <h2>Drive</h2>
                </div>
                <div className={style.headerCenter}>
                    <input type="text" />
                </div>
                <div className={style.headerRight}></div>
            </div>
        </>
    )
}

export default Header