const AboutCard = () => {
    return (
        <div className="w-full bg-indigo-500 dark:bg-slate-700/30 dark:hover:bg-slate-700 rounded-xl transition-all flex flex-col items-center p-4">
          <div className="w-20 h-20 flex items-center justify-center text-4xl text-white bg-indigo-500 rounded-full dark:border-0 border border-white">
            <p>A</p>
          </div>
          <div className="mt-4 text-center">
            <span className="text-sm text-white">Nama Lengkap</span>
            <p className="font-bold text-white mb-4">Muhammad Rizki Siraj</p>
            <span className="text-sm text-white">Email</span>
            <p className="font-bold text-white mb-4">sijarawoods@gmail.com</p>
            <span className="text-sm text-white">Domisili</span>
            <p className="font-bold text-white">Yogyakarta & Batam</p>
          </div>
        </div>
    )
}

export default AboutCard;