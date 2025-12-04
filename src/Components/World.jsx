import { BiCheck } from "react-icons/bi";

const iterms = ["Istanbul", "Moskow", "London", "S. Petersburg", "Belgrade", "Budapest", "Barcelona", "Munich", "Milan", "Birminghan", "Cologne"]

const World = ({ image }) => {
    return (
        <div className="w-3/4 mx-auto md:flex justify-between pt-8">
           <div>
            {iterms.map((iterm) =>(
        <div className="flex space-x-3 space-y-4">
            <BiCheck className="text-white bg-[#93b6d8] rounded-full"/>
            <p>{iterm}</p>
        </div>
            ))}
           </div>
            <img className="pt-20" src={image} alt="" />
        </div>
    )
}

export default World