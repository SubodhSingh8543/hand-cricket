// import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook,AiOutlineInstagram } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { ImYoutube } from "react-icons/im";

const Footer = () => {

    return(
        <div className="border border-black border-solid padding-20px h-27  flex flex-col justify-center items-center gap-5 bg-cyan-300 py-5" >
           <p className="text-[#41687b] text-md italic">
            Made by team Game Devs
           </p>
           <div className="flex justify-center items-center gap-5 text-[#1f6080] text-md">
           <FaInstagram/>
           <AiOutlineFacebook/>
           <ImYoutube />
           <FiTwitter/>
           </div>
        </div>
    )
}

export default Footer