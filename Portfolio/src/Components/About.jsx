// import { Styles } from '../util/Styles';
import Pic from '../assets/Pic.jpg';
import Resume from '../assets/Resume.pdf';
import { TiArrowDownOutline } from 'react-icons/ti';

import "../App.css"


export const About = () => {

    return (
        <div className='flex flex-wrap justify-center items-center mt-10 p-10 ' id='Home'>

            {/*  */}

            <div className='flex-1 py-4'>
                <span>
                    Hi, I'm <span className='text-orange-600'>
                        sonu Kumar
                    </span>
                    <br />

                    <span>I am a Front End Developer & <br />
                        Mechanical Desiger
                    </span>
                </span>

                <br />
                <div className='w-[14rem]'>
                    <a href={Resume} download="Resume"
                        target='blank'
                        rel='noreferrer'
                    >
                        <div className='p-4 mt-2 w-[13rem] rounded-xl text-orange-500 flex justify-center border-2 border-orange-500
                        hover:border-violet-600 hover:shadow-pink-500
                        '> <TiArrowDownOutline ></TiArrowDownOutline> Resume</div>
                    </a>

                </div>

            </div>

            {/*  */}

            <div className='flex flex-wrap'>
                <img src={Pic} alt="Pic" className='element object-contain p-4 h-80 w-80 rounded-full' />
            </div>

        </div>
    )
}
