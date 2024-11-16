import { Link } from "react-router-dom"
import { PiWaveSquareFill } from "react-icons/pi";



const Header = () => {
    return (
        <header className="bg-white text-white p-4 shadow-lg">
            <nav>
                <ul className="flex space-x-8 text-black items-baseline px-8">
                    <div className="flex items-baseline ">
                        <li>
                            <Link to="/">
                                <div className="flex justify-baseline items-baseline gap-x-1">
                                    <PiWaveSquareFill size={20} />
                                    <p className="font-bold text-xl">SmartStim</p>
                                </div>
                            </Link>
                        </li>

                    </div>
                    <div className="flex items-baseline space-x-8 text-neutral-500 text-md">

                        <li className="hover:text-black"><Link to="/session">Start Session</Link></li>
                        {/* <li className="hover:text-black"><Link to="/history">History</Link></li> */}
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header
