import style from './SubHeading.module.css';
const SubHeading = () => {
    return (
        <>
            <div className={style.subHeading}>
                <ul>
                    <li>File Name</li>
                    <li>Size</li>
                    <li>Last Modified</li>
                </ul>
            </div>
        </>
    )
}

export default SubHeading