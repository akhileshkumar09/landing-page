
import { FaArrowRight } from "react-icons/fa";

function FirstComponent({img, heading}) {
  return (
    <div className="flex w-full justify-between  ">
    <img src={img} alt='fist' className='w-[150px] h-[150px] rounded-xl'/>
    <div className='text-white'>
        <h2 className='text-3xl mb-2'>{heading}</h2>
        <p className='text-sm'>Make responsible compensation decisions, stay on budget, and <br/>communicate the true value of your compensation package</p>
        <button className='text-sm text-[#D5FDB1] mt-8'>learn more <FaArrowRight className='inline ml-1' /></button>
    </div> 
    </div>
  )
}

export default FirstComponent