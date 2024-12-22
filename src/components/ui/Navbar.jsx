import navbarLogo from '../../assets/navbarLogo.png'

function Navbar() {
  return (
    <div className="flex justify-between text-[#1F4D4C] mx-12 mt-4">
        <div className="flex gap-2 cursor-pointer"><img src={navbarLogo} alt="prosper" className="w-8 h-8"/><span className="font-bold text-xl">Prosper</span></div>
        <div className="flex gap-4 text-sm">
            <span className="cursor-pointer">Invest</span>
            <span className="cursor-pointer">Resourses</span>
            <span className="cursor-pointer">Company</span>
            <span className="cursor-pointer">Learn</span>
        </div>
        <div className="flex gap-2">
        <span className="cursor-pointer text-sm">Sign in</span>
        <button className="cursor-pointer bg-[#D5FDB1] px-3  rounded-2xl text-sm mb-2">Get Started</button>
         </div>
    </div>
  )
}

export default Navbar