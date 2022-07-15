const variants = {
    badge: "bg-white text-indigo-500 border-indigo-500",
    menu: "bg-indigo-500 text-white border-indigo-500 hover:border-white hover:text-indigo-500 hover:bg-white hover:shadow-md"
}


const Button = ({children,variant,...props}) => {    
    return (
    <button className={`${variants[variant]} group h-12 w-12 border inline-block dark:border-white rounded-full relative overflow-hidden dark:bg-transparent dark:hover:border-indigo-500 dark:text-white dark:hover:text-indigo-500 transition-all`} {...props}> 
                    {children}
    </button>
    )
}

export default Button;