import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import style from './DataGridType.module.css';
const DataGridType = ({ files, formatBytes }) => {

    return (
        <>

            <div className={style.dataGridType}>

                {
                    files.map((element) => (
                        <ul key={element.id}>
                            <a href={element.data.fileURL} target="black">
                                <li className={style.name}>{element.data.filename}</li>
                            </a>
                            <FolderOpenOutlinedIcon />
                            <li>{formatBytes(element.data.size)}</li>
                            <li>
                                {
                                    new Date(element.data.timestamp?.seconds * 1000).toLocaleDateString({
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric'
                                    })
                                }
                            </li>
                        </ul>
                    ))
                }



                {/* <ul>
                    <li>kumar.jpg</li>
                    <FolderOpenOutlinedIcon />
                    <li>6.14 KB</li>
                    <li>19-06-2024</li>
                </ul> */}



            </div>
        </>
    )
}

export default DataGridType