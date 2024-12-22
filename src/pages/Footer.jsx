import footerLogo from '../assets/footerLogo.png'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-8 border border-black ">
      <div className="container mx-auto flex flex-wrap justify-between">
        
        <div className="w-full sm:w-1/3">
          <div className="flex items-center space-x-3">
            <img
              src={footerLogo}
              alt="Prosper"
              className="w-8 h-8"
            />
            <h1 className="text-xl font-semibold">Prosper</h1>
          </div>
        </div>

      
        <div className="w-full sm:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-12">
      
          <div>
            <h3 className="font-semibold mb-4">PRODUCTS</h3>
            <ul className='text-sm'>
              <li>Benchmarking</li>
              <li>Total Rewards Statement</li>
              <li>Tender Offers</li>
              <li>Scenario Modelling</li>
              <li>Portfolio Insights</li>
            </ul>
          </div>

        
          <div>
            <h3 className="font-semibold mb-4">RESOURCES</h3>
            <ul className='text-sm'>
              <li>Partnerships</li>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Education Center</li>
              <li>Form CRS</li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-semibold mb-4">COMPANY</h3>
            <ul className='text-sm'>
              <li>About Us</li>
              <li>Executive Team</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Support Doc</li>
              <li>Product Release</li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-semibold mb-4">OFFICES</h3>
            <ul className='text-sm'>
              <li>Netherlands - Kanaalweg 1 2628 EB Delft</li>
              <li>Germany - Johannisstraße 3 10117 Berlin</li>
              <li>United Kingdom - 119 Marylebone Rd London</li>
            </ul>
          </div>
        </div>
      </div>

    
      <div className="pb-4 flex items-center justify-between border-y border-gray-700 mt-12 pt-6 text-center text-sm ">
        <p>© Prosper Technology Corp. 2024 &nbsp; &nbsp; | &nbsp; &nbsp; Terms of Use &nbsp;&nbsp; Privacy Policy &nbsp;&nbsp; Cookies</p>
        <div className='flex gap-4 text-lg'>
        <FaSquareXTwitter /> <FaInstagram /> <FaLinkedin />
        </div>
        
        </div>
        <div className='text-sm'>
        <p className="mt-4 text-gray-400">
          Disclaimer: Assets on the platform represent the funds managed using
          Prosper’s software, not through Prosper’s affiliated adviser, Prosper
          Advisors, LLC.
        </p>
        <p className="my-4 text-gray-400">
          This information is for informational and discussion purposes only and
          is not an investment recommendation or advice. Any investment
          opportunities or products will be offered through formal documents
          detailing risks, minimum investment, fees, and expenses. Terms of any
          product, service, or investment opportunity may differ from those
          presented here and are subject to change without notice. For more
          information on Prosper, please see here.
        </p>
        <p className='text-gray-400'>Quotes related to prosper's services should not be seen as endorsements of its advice or analysis.</p>
      </div>
    </footer>
  );
};

export default Footer;
