import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
const Topbar = () => {
  return (
    <div className="bg-[#ea2e0e] text-white">
      <div className="container mx-auto flex justify-between py-3 px-4">
        <div className="hidden md:flex items-center space-x-4"> 
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>

        <div className="text-sm text-center flex-grow">
          <p>We ship worldwide-Fast and Reliable</p>
        </div>

        <div className="text-sm hidden md:block">
         <a href="tel:+1234567890" className="hover:text-gray-300">
           Call Us: +1 (234) 567-890
         </a>
        </div>
      </div>

    </div>
  );
};

export default Topbar;
