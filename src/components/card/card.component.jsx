
const Card = ({name, icon}) => {

    return (
        <div className="w-full p-4 bg-indigo-500 dark:bg-transparent dark:border hover:bg-black dark:border-white rounded-md flex items-center gap-4 font-sans cursor-pointer group dark:hover:border-indigo-500 transition-all">
            <div className="dark:bg-white max-w-fit p-2 text-xl rounded-sm group-hover:bg-indigo-500 dark:group-hover:text-white text-indigo-500 group-hover:text-black dark:text-black bg-black transition-all">
            {icon}
            </div>
            <span className="text-xl dark:text-white group-hover:text-indigo-500 transition-all">{name}</span>
        </div>
    )
}

export default Card;