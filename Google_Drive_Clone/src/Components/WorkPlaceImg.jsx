import style from './WorkPlaceImg.module.css';
const WorkPlaceImg = () => {
    return (
        <>
            <div className={style.workPlaceImg}>
                <img src="https://gdisk.vercel.app/no-files.svg" alt="Hero img" />
                <h1>Welcome to Drive, the home for all your files</h1>
                <p>Use the “New” button to upload</p>
            </div>
        </>
    )
}

export default WorkPlaceImg