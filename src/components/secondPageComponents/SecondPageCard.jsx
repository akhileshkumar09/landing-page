import chartImg from '../../assets/chart.png'

function SecondPageCard() {
  return (
    <div><div className="bg-[#D5FDB1] p-6 rounded-xl flex justify-center items-center min-h-full w-full">
    <div className="bg-white rounded-xl p-4 w-full ">
    
      <div className="flex items-center mb-4">
        <div className="bg-[#204E4D] text-white rounded-full p-2 flex items-center justify-center">
        
          <span className="text-lg font-bold">&#123;...&#125;</span>
        </div>
        <h2 className="ml-4 text-lg font-semibold tracking-tight">Krakatoa Venutures Fund</h2>
      </div>

     <div className="border p-2 bg-gray-100 rounded-xl">
      <div className="flex justify-between text-gray-600 text-sm mb-4 ">
        <div>
          <p className="">Found year</p>
          <p className="font-semibold">2012</p>
        </div>
        <div>
          <p className="">Total contributions</p>
          <p className="font-semibold">$14,923,368 (15%)</p>
        </div>
      </div>
      <div className="flex justify-between text-gray-600 text-sm mb-6">
        <div>
          <p className=" text-sm tracking-tighter">Total investment</p>
          <div className="bg-gray-200 h-2 rounded-full w-24 mt-1"></div>
        </div>
        <div>
          <p className="text-sm tracking-tighter">Number of investments</p>
          <div className="bg-gray-200 h-2 rounded-full w-24 mt-1"></div>
        </div>
      </div>

   
      <div className="bg-black rounded-xl h-28 relative">
      
        <img src={chartImg} alt='chart' className='h-28 w-full rounded-xl'/>
       
      </div>
      </div>
    </div>
  </div></div>
  )
}

export default SecondPageCard