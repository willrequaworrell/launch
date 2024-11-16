import { Link } from "react-router-dom"


const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav>
                <ul className="flex space-x-4">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/upload">Upload</Link></li>
                <li><Link to="/conversions">History</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
