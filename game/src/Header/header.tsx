import "./header.css";

const Header = () => {

    return(
        <>
         <div className="divHeader padding-20px h-27  flex flex-col justify-center items-center bg-cyan-300" >
         {/* <h1 className="text-[#1f6080] text-5xl font-bold">Cricket</h1>
         <p className="text-[#41687b] text-2xl italic">Enjoy Your childhood again</p> */}
        </div>
        <div className="border border-black border-t-0 border-l-0 border-r-0 border-b-1 padding-20px h-27  flex flex-col justify-center items-center bg-cyan-300" >
        <h1 className="text-[#1f6080] text-5xl font-bold">Cricket</h1>
        <p className="text-[#41687b] text-2xl italic">Enjoy Your childhood again</p>
       </div>
        </>
       
    )
}

export default Header;