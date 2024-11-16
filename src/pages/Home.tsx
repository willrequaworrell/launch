import { PiWaveSquareFill } from "react-icons/pi"

const Home = () => {
    return (
        <div className="flex mt-24 items-center h-full justify-center">
            <div className="">
                <PiWaveSquareFill size={200} />
            </div>
            <div>
                <p className="font-bold text-8xl">SmartStim</p>
                <p className="ml-2">Real-Time Muscle Stimulation, Powered by Your Mind.</p>
            </div>
        </div>
    )
}

export default Home
