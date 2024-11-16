import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Session from "../pages/Session"
import History from "../pages/History"
import Layout from "../components/Layout/Layout"

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/session" element={<Session />} />
                <Route path="/history" element={< History/>} />
            </Route>
            
        </Routes>
    )
}

export default AppRoutes
