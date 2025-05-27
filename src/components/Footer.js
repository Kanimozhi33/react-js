import { GiNoodles } from "react-icons/gi";
import { RiCopyrightLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link  } from "react-router";
import { GITHUB } from "../utils/constants";
import { MAIL } from "../utils/constants";
import { LINKED_IN } from "../utils/constants";
import { GrMail } from "react-icons/gr";
const Footer = () =>{

    return (
        <div className="flex bg-orange-500 h-[150px] justify-between py-4
        position:absolute bottom-0 w-full">
            <div className="flex items-center justify-center">
                <GiNoodles className="p-3 flex ml-4 items-center justify-center h-16 w-16 opacity-0 animate-in-1 "/>
               </div>
               <div className="flex  items-center justify-center">
                <p className="font-semibold font-caveat flex text-center text-gray text-xl justify-center opacity-0 animate-in-1">MEAL MINIT
                     <RiCopyrightLine className="mr-1 justify center flex ablosute right-2 top-2 opacity-0 animate-in-1"/><br></br>
                     <label className="font-light text-center">2025</label>
                </p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center space-x-4 p-3">
                        <a href={GITHUB}className="hover:bg-white rounded-3xl p-2 opacity-0 animate-in-1 transform duration-300 transition-all" title="Github"><BsGithub /></a>
                        
                        <a href={LINKED_IN}  className="hover:bg-white rounded-3xl p-2 opacity-0 animate-in-1 transform duration-300 transition-all" title="LinkedIn"><BsLinkedin /></a>
                       
                        <a href={MAIL} className="hover:bg-white rounded-3xl p-2 opacity-0 animate-in-1 transform duration-300 transition-all" title="Mail"><GrMail /> </a>
                       
                    </div>
                </div>
            

        </div>
    )
};

export default Footer;