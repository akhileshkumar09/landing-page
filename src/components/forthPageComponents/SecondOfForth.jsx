import { FaSackDollar } from "react-icons/fa6";

function SecondOfForth() {
  return (
    <div className="w-[300px] bg-gray-100 rounded-lg py-3 mb-4">
        <div className="flex flex-col items-center">
            <span><FaSackDollar /></span>
            <span className="text-2xl">Investors</span>
            <span className="text-sm tracking-tighter">Manage your fund so you can spend more time on</span>
            <span className="text-sm tracking-tighter">deals and less time dealing with your back office.</span>
        </div>
    </div>
  )
}

export default SecondOfForth