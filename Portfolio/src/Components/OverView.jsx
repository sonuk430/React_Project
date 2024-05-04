import { technologies, services } from '../Constants/data.jsx'
export const OverView = () => {
    console.log(technologies);
    return (
        <div>
            <div className='flex-row items-center pl-5 justify-center pt-3' id='OverView'>
                <span>
                    Introduction
                </span>
                <hr className='w-[35%]'></hr>
                <div >
                    I'am a skilled developer with exprience in javaScript and experties in frameworks like React, Node.js I'm a quick learner and collaborate,scalable and user-friendly solution that solve real-world problems.Let's work together to bring your ideas to Life!
                </div>
            </div>

            <div className='flex flex-wrap justify-center'>
                {
                    services.map((services, index) => (
                        <div key={index} className='h-80 w-80 border-s-4 flex items-center justify-center bg-orange-400'>
                            {services.name}
                            {services.description}
                        </div>
                    ))
                }
            </div>

            {/* technology */}

            <div className='flex flex-wrap items-center justify-center'>
                {
                    technologies.map((technologies, index) => (
                        <div key={index} className='m-4 mt-5 h-[100px] w-[100px] rounded-3xl shadow-2xl border-[1px] border-violet-400'>
                            <img src={technologies.icon} alt={technologies.name} className='p-2' />
                            <div className='text-violet-600 justify-center flex'>
                                {technologies.name}
                            </div>
                        </div>
                    ))
                }

            </div>

        </div >
    )
}
