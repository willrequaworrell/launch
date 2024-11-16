import { Link } from "react-router-dom"
import { FaHandsAslInterpreting } from "react-icons/fa6";



const Header = () => {
    return (
        <header className="bg-white text-white p-4">
            <nav>
                <ul className="flex space-x-8 text-black items-baseline px-8">
                    <div className="flex items-baseline ">
                        <li>
                            <Link to="/">
                                <div className="flex justify-baseline items-baseline gap-x-1">
                                    <FaHandsAslInterpreting size={20}/>
                                    <p className="font-bold text-xl">SignSense</p>
                                </div>
                            </Link>
                        </li>

                    </div>
                    <div className="flex items-baseline space-x-8 text-neutral-500 text-md">

                        <li className="hover:text-black"><Link to="/upload">Upload</Link></li>
                        <li className="hover:text-black"><Link to="/history">History</Link></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header
