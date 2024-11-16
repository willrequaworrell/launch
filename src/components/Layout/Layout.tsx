import { Outlet } from "react-router-dom"
import Header from "./Header"

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-red-50">
            <Header/>
            <main className="flex-grow container mx-auto px-4 py-8">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
