import style from './WorkPlace.module.css';
import Heading from './Heading';
import SubHeading from './SubHeading';
import WorkPlaceImg from './WorkPlaceImg';
import DataListType from './DataListType';
import DataGridType from './DataGridType';
const WorkPlace = () => {

    return (
        <>
            <div className={style.workPlace}>
                <Heading />
                <SubHeading />
                <WorkPlaceImg />
                <DataListType />
                <DataGridType />
            </div>
        </>
    )
}

export default WorkPlace



