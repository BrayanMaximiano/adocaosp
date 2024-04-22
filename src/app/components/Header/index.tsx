import './style.css'

export default function index() {
    return(
        <div className="w-screen bg-purple-700 h-24 flex items-center justify-between pl-[120px] pr-[120px]">
            <div className="bg-white h-[90%] w-[240px] flex items-center justify-center">Logo</div>
            <div className="">
                <ul className=" flex items-center justify-center gap-4 text-white">
                    <li className="listitem hover:underline">Dicas</li>
                    <li className="listitem hover:underline">Cães</li>
                    <li className="listitem hover:underline">Gatos</li>
                    <li className="listitem hover:underline">Login/Cadastro</li>
                </ul>
                </div>
        </div>
    )
}