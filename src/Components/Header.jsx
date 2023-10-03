import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-lime-600 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to={"/"}>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-yellow-200'>French Leaf</span>
                </h1>
            </Link>
            <ul className='flex gap-x-16 px-8'>
                <Link to={"/"}>
                    <li className='hidden sm:inline text-yellow-200 hover:underline'>Accueil</li>
                </Link>
                <Link to={"/achat"}>
                    <li className='hidden sm:inline text-yellow-200 hover:underline'>Achat</li>
                </Link>
                <Link to={"/profile"}>
                    <li className='hidden sm:inline text-yellow-200 hover:underline'>Ventes</li>
                </Link>
                <Link to={"/About"}>
                    <li className='hidden sm:inline text-yellow-200 hover:underline'>Recyclage</li>
                </Link>
            </ul>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type='text' 
                placeholder='Rechercher...' 
                className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                <FaSearch className='text-slate-600'/>
            </form>
            <Link to={"sign-up"}>
                <span class=" bg-lime-200 rounded-full px-3 py-2 text-sm font-semibold text-lime-700 mr-2 mb-2 hidden sm:inline">Connexion | Inscription</span>
            </Link>
        </div>
        
    </header>
  )
}
