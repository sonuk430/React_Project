
export const Contact = () => {
    return (
        <div>
            <div className='flex-row items-center pl-5 justify-center pt-3' id='OverView'>
                <span>
                    Contact
                </span>
                <hr className='w-[35%]'></hr>
            </div>

            <div className="mt-5">
                <div className="flex flex-wrap flex-row justify-around">
                    <div className="lg:w-[40%]">
                        <form className="m-5 flex flex-col gap-3">
                            <label className="flex flex-col gap-3">
                                <span>Your Name</span>
                                <input type="text" placeholder="Enter Your Name" />
                            </label>

                            <label className="flex flex-col gap-3">
                                <span>Your Name</span>
                                <input type="text" placeholder="Enter Your Name" />
                            </label>

                            <label className="flex flex-col gap-3">
                                <span>Your Name</span>
                                <input type="text" placeholder="Enter Your Name" />
                            </label>
                            <button>Submit</button>
                        </form>
                    </div>

                    <div className="lg:w-[50%]">
                        <img src="" alt="" className="lg:w-[50%]" />
                    </div>

                </div>
            </div>

        </div>
    )
}
