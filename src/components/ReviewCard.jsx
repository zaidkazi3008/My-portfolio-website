/* eslint-disable react/no-unescaped-entities */
import Starts from "../assets/starts.png"
import Avatar1 from "../assets/Avatar1.jpg"
import Avatar2 from "../assets/Avatar2.jpg"
import Avatar3 from "../assets/Avatar3.jpg"

const ReviewCard = () => {
    return (
        <>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border border-[#a8cdcd] p-8 rounded'>
                    <div className="shadow-xl rounded-lg" >
                        <img src={Starts} alt=""  className='h-4'/>
                        <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit illo tenetur facere laboriosam quo? Deleniti quia cum fugit quisquam amet possimus tenetur officia temporibus aut? Harum animi aut facilis amet!</p>
                        <div className='flex gap-4 items-center'>
                            <img src={Avatar1} alt="" className='h-10' />
                            <div>
                                <p>Dianne Russell</p>
                                <p className='text-sm'>Starbucks</p>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-xl rounded-lg" >
                    <img src={Starts} alt=""  className='h-4'/>
                        <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit illo tenetur facere laboriosam quo? Deleniti quia cum fugit quisquam amet possimus tenetur officia temporibus aut? Harum animi aut facilis amet!</p>
                        <div className='flex gap-4 items-center'>
                            <img src={Avatar2} alt="" className='h-10' />
                            <div>
                                <p>Kristin Watson</p>
                                <p className='text-sm'>Starbucks</p>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-xl rounded-lg">
                    <img src={Starts} alt=""  className='h-4'/>
                        <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit illo tenetur facere laboriosam quo? Deleniti quia cum fugit quisquam amet possimus tenetur officia temporibus aut? Harum animi aut facilis amet!</p>
                        <div className='flex gap-4 items-center'>
                            <img src={Avatar3} alt="" className='h-10' />
                            <div>
                                <p>Kathryn Murphy</p>
                                <p className='text-sm'>McDonald's</p>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default ReviewCard;