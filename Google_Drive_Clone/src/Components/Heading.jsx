import style from './Heading.module.css';
import FormatAlignJustifyOutlinedIcon from '@mui/icons-material/FormatAlignJustifyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
function Heading() {
    return (
        <>
            <div className={style.heading}>
                <div><h1>Home</h1></div>
                <div className={style.btnDiv}>
                    <button><FormatAlignJustifyOutlinedIcon /></button>
                    <button> <GridViewOutlinedIcon /></button>
                </div>
            </div>
        </>
    )
}

export default Heading;