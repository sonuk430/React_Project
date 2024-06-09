import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import style from './DataGridType.module.css';
const DataGridType = () => {
    return (
        <>

            <div className={style.dataGridType}>
                <ul>
                    <li>kumar.jpg</li>
                    <FolderOpenOutlinedIcon />
                    <li>6.14 KB</li>
                    <li>19-06-2024</li>
                </ul>

                <ul>
                    <li>kumar.jpg</li>
                    <FolderOpenOutlinedIcon />
                    <li>6.14 KB</li>
                    <li>19-06-2024</li>
                </ul>



            </div>
        </>
    )
}

export default DataGridType