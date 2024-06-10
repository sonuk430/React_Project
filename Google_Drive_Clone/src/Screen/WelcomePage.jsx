import style from './WelcomePage.module.css';
const WelcomePage = ({ singnIn }) => {

    return (
        <>
            <div>
                <button onClick={singnIn}>Login App</button>
            </div>
        </>
    )
}

export default WelcomePage