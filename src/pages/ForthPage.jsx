import FirstOfForth from '@/components/forthPageComponents/FirstOfForth'
import SecondOfForth from '@/components/forthPageComponents/SecondOfForth';


function ForthPage() {
  return (
    <div>
    <div className='border-white border rounded-xl relative -bottom-3 bg-white'>
    <FirstOfForth />
    <div className='grid grid-cols-2 gap-2 justify-items-center px-44 my-20 '>
        <SecondOfForth/>
        <SecondOfForth/>
        <SecondOfForth/>
        <SecondOfForth/>
    </div>
    </div>
    <div className='bg-[#204E4D] h-[200px] rounded-b-xl'>
    <div className="relative w-full h-full p-4 top-8">
    <span className="text-2xl p-1 text-[#D5FDB1] absolute left-1 top-3">.</span>
     <span className="text-[#204E4D] text-sm  text-white">Software for veture</span>
     <span className="ml-16 text-3xl text-white ">We can't wait to see <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What you built next!</span>

     <button className="cursor-pointer text-[#1F4D4C]   bg-[#D5FDB1]  p-2 px-3 rounded-2xl mx-2 absolute right-20">Request a demo</button>
    </div>
    </div>
    </div>
  )
}

export default ForthPage