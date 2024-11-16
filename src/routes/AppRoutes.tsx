import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Upload from "../pages/Upload"
import History from "../pages/History"
import Layout from "../components/Layout/Layout"

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/history" element={< History/>} />
            </Route>
            
        </Routes>
    )
}

export default AppRoutes
