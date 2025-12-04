

const Cards = ({ title, description, image }) => {
    return (
        <div>
            
            <div className="bg-[#f2f2f2] rounded-3xl
            p-6">
                <h6 className="text-lg font-bold">{title} </h6>
                <p className="text-lg  py-6">{description}</p>
                <img src={image} className="rounded md:rounded-3xl  gap-4 w-54 h-1/3 " alt="image" />
            </div>
        </div>

    )
}

export default Cards