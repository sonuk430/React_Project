import style from './WorkPlace.module.css';
import Heading from './Heading';
import SubHeading from './SubHeading';
import WorkPlaceImg from './WorkPlaceImg';
const WorkPlace = () => {
    return (
        <>
            <div className={style.workPlace}>
                <Heading />
                <SubHeading />
                <WorkPlaceImg />
            </div>
        </>
    )
}

export default WorkPlace



