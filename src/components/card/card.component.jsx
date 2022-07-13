
const Card = ({name, icon}) => {

    return (
        <div className="w-full p-4 border border-white rounded-md flex items-center gap-4 font-sans cursor-pointer group hover:border-indigo-500 transition-all">
            <div className="bg-white max-w-fit p-2 text-xl rounded-sm group-hover:bg-indigo-500 group-hover:text-white transition-all">
            {icon}
            </div>
            <span className="text-xl text-white group-hover:text-indigo-500 transition-all">{name}</span>
        </div>
    )
}

export default Card;