import React from 'react';
import propic from '../../public/cvpimg.png'
import SkillBar from 'react-skillbars';

const Cv1 = ({ cv }) => {

    const skills = [
        { type: "skill-1", level: 100 },
        { type: "skill-2", level: 75 },
        { type: "skill-3", level: 75 },
        { type: "skill-4", level: 75 },
        { type: "skill-5", level: 75 },
    ];
    const colors = {
        bar: "#3498db",
        title: {
            text: "#fff",
            background: "#2980b9"
        }
    };


    return (
        <div>

            <div className=' mx-auto bg-slate-50 rounded-lg my-10 p-5'>


                {/* Personal Information Part  */}
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 ">
                    <div>
                        <img src={propic} ></img>
                    </div>

                    <div>
                        <h1 className='text-2xl font-semibold'>{cv.firstName}</h1>
                        <h1 className='text-2xl font-semibold'>{cv.lastName}</h1>
                        <p className='text-sm'>{cv.profession ?? ""}</p>
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-xs'><i className="las la-phone-alt"></i> {cv.phone}</h1>
                        <h1 className='text-xs'> <i className="las la-envelope"></i> {cv.email}</h1>
                        <h1 className='text-xs'> <i className="las la-map-marker-alt"></i> {cv.address} <br></br> {cv.city},{cv.zipcode} </h1>


                    </div>


                </div>

                {/* Profile And Business Objective Part  */}

                <div className='bg-sky-100 mt-5'>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-10 px-3 py-5">
                        <div>

                            <h1 className='text-sky-500 text-md font-semibold'>Profile</h1>
                            <p className='text-xs'>{cv.phistory}</p>
                        </div>
                        <div >

                            <h1 className='text-sky-500 text-md font-semibold'>Business Objective</h1>
                            <p className='text-xs'>{cv.businessobjective}</p>
                        </div>


                    </div>



                </div>


                {/* Expertise and work experiance part */}

                <div className='mx-2 my-5'>
                    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-10 px-3 py-5">
                        <div>
                            <div class="grid grid-rows-4 grid-flow-col gap-4">
                                <div>
                                    <h1 className='text-md font-semibold text-sky-500'>Expertise</h1>
                                    <SkillBar skills={skills} height={14} colors={colors} />

                                </div>

                                <div >
                                    <h1 className='text-md font-semibold text-sky-500'>
                                        language
                                    </h1>
                                </div>
                            </div>


                        </div>
                        <div>
                            <div class="grid grid-rows-4 grid-flow-col gap-4">
                                <div>
                                    <h1 className='text-md font-semibold text-sky-500'>Work Experiance</h1>

                                    <div>

                                        <div className='flex justify-between'>
                                            <h1 className='text-md font-semibold'>{cv.jobtitle}</h1> <span className='text-xs mt-2'><i class="las la-map-marker-alt"></i>{cv.jobLocation} </span>
                                        </div>
                                        <span className='text-xs'>at {cv.cname} </span>

                                        <p className='text-sm'>{cv.jobdetails}</p>

                                    </div>
                                </div>

                                <div> language</div>
                            </div>


                        </div>
                    </div>
                </div>






            </div>

        </div>
    );
};

export default Cv1;