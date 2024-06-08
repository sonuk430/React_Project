import style from "./Sidebar.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

const Sidebar = () => {
    return (
        <>
            <div className={style.sidebar}>
                <div className={style.sidebarBtn}>
                    <button>
                        <img src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E" />
                        <span>New</span>
                    </button>
                </div>
                {/*  */}
                <div className={style.box}>
                    <div className={style.sidebarContent}>
                        <HomeOutlinedIcon />
                        <p>Home</p>
                    </div>
                    <div className={style.sidebarContent}>
                        <InsertDriveFileOutlinedIcon />
                        <p>My Drive</p>
                    </div>
                    <div className={style.sidebarContent}>
                        <ComputerOutlinedIcon />
                        <p>Computers</p>
                    </div>
                </div>
                {/*  */}
                <div className={style.box}>
                    <div className={style.sidebarContent}>
                        <GroupOutlinedIcon />
                        <p>Shared with me</p>
                    </div>
                    <div className={style.sidebarContent}>
                        <AccessAlarmOutlinedIcon />
                        <p>Recent</p>
                    </div>
                    <div className={style.sidebarContent}>
                        <StarBorderPurple500OutlinedIcon />
                        <p>Starred</p>
                    </div>
                </div>
                {/*  */}
                <div className={style.box}>
                    <div className={style.sidebarContent}>
                        <ErrorOutlineOutlinedIcon />
                        <p>Spam</p>
                    </div>
                    <div className={style.sidebarContent}>
                        <DeleteSweepOutlinedIcon />
                        <p>Trash</p>
                    </div>
                    <div className={style.sidebarContent}>
                        <CloudUploadOutlinedIcon />
                        <p>Storage</p>
                    </div>
                </div>

                <div className={style.box}>
                    <progress size="tiny" value="50" max="100" />
                    <span>105 GB  of 200 GB used</span>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
