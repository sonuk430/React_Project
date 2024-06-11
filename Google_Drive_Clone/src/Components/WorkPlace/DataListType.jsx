import style from "./DataListType.module.css";

const DataListType = ({ files, formatBytes }) => {

    return (
        <>
            <div className={style.dataListType}>

                {files.map((element) => (
                    <ul key={element.id}>
                        <a href={element.data.fileURL} target="black">
                            <li>{element.data.filename}</li>
                        </a>
                        <li>{formatBytes(element.data.size)}</li>
                        <li>
                            {new Date(element.data.timestamp?.seconds * 1000).toUTCString()}
                        </li>
                    </ul>
                ))}
            </div>
        </>
    );
};

export default DataListType;
