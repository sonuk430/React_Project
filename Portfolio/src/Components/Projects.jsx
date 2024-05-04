import { projects } from '../Constants/data.jsx'
export const Projects = () => {
    return (
        <div>
            <div className='flex-row items-center pl-5 justify-center pt-3' id='OverView'>
                <span>
                    Projects
                </span>
                <hr className='w-[35%]'></hr>
                <div >
                    Following projects showcases my skill and experience through real-world examples of my work.Each project is briefly description with link to code repositories and live demos in it.It reflects my ability to solve complex problem, work with difference technologies,and manage projects effectively.
                </div>
            </div>

            <div>
                <div className='flex flex-wrap justify-center'>
                    {
                        projects.map((services, index) => (
                            <div key={index} className='h-80 w-80 border-s-4 flex items-center justify-center bg-orange-400'>
                                {services.name}
                                {services.description}
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
} 
