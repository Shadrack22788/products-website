
const StellaData = ({ image, title, description, }) => {
    return (

<div className="bg-[#93b6d8]">
        <div className= "w-full px-2 md:w-3/4 md:mx-auto mt-20 ">
            <div >
                <img src={image} className="rounded-full " alt="image" />
                <h6 className="p-10 font-bold">{title}</h6>
                <p className="p-2 ">{description}</p>
                
            </div>
        </div>
</div>
    )
}

export default StellaData;