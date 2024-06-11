import style from './Heading.module.css';
import FormatAlignJustifyOutlinedIcon from '@mui/icons-material/FormatAlignJustifyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
function Heading({ handleshowList, handleshowGrid }) {
    return (
        <>
            <div className={style.heading}>
                <div><h1>Home</h1></div>
                <div className={style.btnDiv}>
                    <button onClick={handleshowList}><FormatAlignJustifyOutlinedIcon /></button>
                    <button onClick={handleshowGrid}> <GridViewOutlinedIcon /></button>
                </div>
            </div>
        </>
    )
}

export default Heading;