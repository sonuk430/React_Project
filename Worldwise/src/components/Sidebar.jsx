import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import style from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <Logo />
            <AppNav />
            {/* outlet for the nested route in this outlet come components from app(App.jsx) */}
            <Outlet />

            <footer className={style.footer}>
                <p className={style.copyrigth}>
                    &copy; Copyrigth {new Date().getFullYear()} by WorldWise inc.
                </p>
            </footer>
        </div>
    )
}

export default Sidebar