import { motion } from "framer-motion";

const Modal = ({selectedId, setSelectedId}) => {
    return (
<>
<div id="staticModal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-[50] bg-black/80 flex justify-center items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full md:h-full">
    <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} className="relative w-full h-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {selectedId.title}
                </h3>
                <button onClick={() => setSelectedId('')} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="staticModal">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                </button>
            </div>
            <div className="p-6 space-y-6">
                <img src={selectedId.picture} alt={`${selectedId.title}`} className='w-full h-2/6' />
                <div className="mt-2">
                    <h2 className="text-base font-bold dark:text-white">Deskripsi</h2>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {selectedId.description}
                    </p>
                </div>
                <div className="mt-2">
                    <h2 className="text-base font-bold dark:text-white">Teknologi</h2>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {selectedId.technology}
                    </p>
                </div>
                <div className="mt-2">
                    <h2 className="text-base font-bold dark:text-white mb-4">Link Proyek</h2>
                    <div>
                            <a className="p-2 dark:bg-slate-500/40 rounded-lg dark:text-white dark:hover:bg-slate-500" href={selectedId.githubLink} target="_blank" rel="noreferrer">Github</a>
                            {
                                selectedId.webLink && <a className="p-2 ml-2 dark:bg-slate-500/40 rounded-lg dark:text-white dark:hover:bg-slate-500" href={selectedId.webLink} target="_blank" rel="noreferrer">Website</a>
                            }
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
</div>
</>
)
}

export default Modal;