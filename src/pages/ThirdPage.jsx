import FirstComponent from "@/components/thirdPageComponents/FirstComponent"
import firstImg from '../assets/first.png'
import secondImg from '../assets/second.png'
import thirdImg from '../assets/Third.png'
import SecondComponent from "@/components/thirdPageComponents/SecondComponent"


function ThirdPage() {
  return (
    <div>
    <div className="bg-black w-full min-h-screen rounded-xl p-12 relative -bottom-2 z-10">
    <div className="relative w-full h-full p-4">
    <span className="text-3xl p-1 text-[#D5FDB1] absolute left-1 top-1">.</span>
     <span className="text-white text-sm font-semibold">Software for veture</span>
     <span className="ml-16 text-2xl  text-white">Focused on the future</span>
     <span className="text-white text-sm block ml-40 mt-3"> innovation starts from within, so we're always evolving our suite <br/>of products to keep you forward.</span>
    </div>

    <div className="px-40 mt-10 mb-32">
     <FirstComponent img={firstImg} heading="Fund Administration"/>
     <hr className="w-full bg-gray-200  my-12"/>
     <FirstComponent img={secondImg} heading='Total Compensation'/>
     <hr className="w-full bg-gray-200  my-12"/>
     <FirstComponent img={thirdImg} heading="Equity Advisory"/>
    </div>
    </div>
    <div className="w-full min-h-[350px] bg-gray-200 relative rounded-b-xl ">
      <SecondComponent/>
      <div className=" absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex gap-12">
          <span className="flex flex-col items-center">
            <span className="text-4xl font-semibold">$2.5T</span>
            <span className="text-sm tracking-tighter">Assets on plateform</span>
          </span>

          <span className="flex flex-col items-center">
            <span className="text-4xl font-semibold">$126B</span>
            <span className="text-sm tracking-tighter">Assets under administration</span>
          </span>

          <span className="flex flex-col items-center">
            <span className="text-4xl font-semibold">10,000+</span>
            <span className="text-sm tracking-tighter">Companies</span>
          </span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ThirdPage