import SecondPageCard from "@/components/secondPageComponents/SecondPageCard"
import SrcollableDiv from "@/components/secondPageComponents/SrcollableDiv"
import TextDiv from "@/components/secondPageComponents/TextDiv"


function SecondPage() {
  return (
    <div className=" w-full h-full p-12">
    <div className="relative w-full h-full p-4">
    <span className="text-2xl p-1 text-[#204E4D] absolute left-1 top-1">.</span>
     <span className="text-[#204E4D] text-sm font-semibold">Software for veture</span>
     <span className="ml-16 text-xl">Support to drive your <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;business forward</span>
    </div>

   <div className="flex pt-8 justify-between">
     <div className="p-2 w-2/5">
      <SecondPageCard/>
     </div>
     <div className="p-4 w-2/5 flex flex-col gap-6 py-12 mr-8">
      <SrcollableDiv/>
      <TextDiv title="Venture Capital"
        content=" Automate your back office and stay focused on deals with full-service
        fund administration, formations, valuations, audit and tax support,
        and portfolio insights."
      />
       <TextDiv title="Venture Capital"
        content=" Automate your back office and stay focused on deals with full-service
        fund administration, formations, valuations, audit and tax support,
        and portfolio insights."
      />
     </div>
   </div>
    
    </div>
  )
}

export default SecondPage