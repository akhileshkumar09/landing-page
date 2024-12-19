

function SrcollableDiv() {
  return (
    <div className="w-full h-28 bg-gray-100 rounded flex items-center p-4 relative overflow-hidden ">
    {/* Left Scrollbar */}
    <div className="absolute left-2 top-4 bottom-4 w-1 bg-gray-200 overflow-y-auto">
      <div className="h-1/3 bg-[#204E4D] rounded"></div>
    </div>

    {/* Content */}
    <div className="ml-6">
      <h3 className="text-lg font-semibold text-gray-900">Venture Capital</h3>
      <p className="text-sm text-gray-600 tracking-tight">
        Automate your back office and stay focused on deals with full-service
        fund administration, formations, valuations, audit and tax support,
        and portfolio insights.
      </p>
    </div>
  </div>
  )
}

export default SrcollableDiv