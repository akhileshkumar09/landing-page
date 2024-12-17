import dashboardIMG from '../assets/dashboard.png'

function FirstPage() {
  return (
    <div className=" relative w-full  h-[500px] bg-[#204E4D] rounded-xl text-center text-white">
    <p className="text-sm pt-20"><span className="text-[#D5FDB1] font-bold m-2 text-2xl">.</span>meet the leading</p>
    <p className="text-4xl">One Plateform<br/>Unlimited Potential</p>
    <p className='text-gray-300 text-sm mt-2'>prosper's Plateform of software and services lays the <br/> groundwork so you can focus on building the future.</p>
    <div className=' mt-4'>
    <button className="cursor-pointer text-[#1F4D4C]   bg-[#D5FDB1]  p-2 px-3 rounded-2xl mx-2">Request a demo</button>
    <button className="cursor-pointer text-[#D5FDB1] bg-[#1F4D4C] border-[#D5FDB1] border  p-2 px-3 mx-2 rounded-2xl text-sm">Contact sales</button>
    </div>
        <img className="pt-28 w-2/3 h-72 absolute bottom-0  left-1/2 -translate-x-1/2 rounded-t-xl" src={dashboardIMG} alt="dashboard"/>
       
    </div>
  )
}

export default FirstPage