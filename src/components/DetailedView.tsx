import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts"
import { SessionDataPoint } from "../types/types"
import { FaMinus, FaPlus } from "react-icons/fa"

interface DetailedViewPropType {
    sessionData: SessionDataPoint[],
    setIntensity: (value: React.SetStateAction<number>) => void
    endSession: () => void
    showDetailedView: boolean
    setShowDetailedView: (value: React.SetStateAction<boolean>) => void
}

const DetailedView = ({sessionData, setIntensity, endSession, showDetailedView, setShowDetailedView}: DetailedViewPropType) => {

    const handleIncreaseIntensity = () => {
        setIntensity(prev => Math.min(10, prev + 1))
    }

    const handleDecreaseIntensity = () => {
        setIntensity(prev => Math.max(0, prev - 1))
    }    

    return (

        <div className="p-4 border rounded flex flex-col w-full ">
            <div className="bg-white rounded-xl w-full shadow-lg p-8">
                <p className="font-bold text-md">Controls</p>
                <div className="flex py-4 gap-8">
                    <div onClick={handleDecreaseIntensity} className="h-16 w-1/4 hover:bg-neutral-700 bg-neutral-900 cursor-pointer flex justify-center items-center rounded-xl">
                        <p className="text-white text-4xl">
                            <FaMinus />
                        </p>
                    </div> 
                    <div onClick={handleIncreaseIntensity} className="h-16 w-1/4 hover:bg-neutral-700 bg-neutral-900 cursor-pointer flex justify-center items-center rounded-xl">
                        <p className="text-white text-4xl">
                            <FaPlus />
                        </p>
                    </div>
                    <button 
                        onClick={() => setShowDetailedView(!showDetailedView)} 
                        className="hover:bg-neutral-700 bg-neutral-900 text-white p-2 h-16 w-1/4 rounded-xl"
                        >
                        {showDetailedView ? 'Show Simple View' : 'Show Detailed View'}
                    </button>
                    <button onClick={endSession} className="bg-red-500 hover:bg-red-400 text-white p-2 rounded-xl h-16 w-1/4">
                        End Session
                    </button>
                    
                    

                </div>
            </div>
            <h3 className="text-lg font-semibold mt-4">EEG Wave Data Over Time</h3>
            <ResponsiveContainer width="100%" height={300} className={"bg-white rounded-lg p-2"}>
                <LineChart data={sessionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                    dataKey="timestamp" 
                    type="number" 
                    domain={['dataMin', 'dataMax']} 
                    tickFormatter={(unixTime) => new Date(unixTime).toLocaleTimeString()} 
                />
                <YAxis />
                <Tooltip labelFormatter={(label) => new Date(label).toLocaleTimeString()} />
                <Legend />
                <Line dot={false} animationDuration={500} type="monotone" dataKey="eegData.alpha" stroke="#8884d8" name="Alpha" />
                <Line dot={false} animationDuration={500} type="monotone" dataKey="eegData.beta" stroke="#82ca9d" name="Beta" />
                <Line dot={false} animationDuration={500} type="monotone" dataKey="eegData.theta" stroke="#ffc658" name="Theta" />
                <Line dot={false} animationDuration={500} type="monotone" dataKey="eegData.delta" stroke="#ff8042" name="Delta" />
                </LineChart>
            </ResponsiveContainer>

            <h3 className="text-lg font-semibold mt-4">Arousal Status Over Time</h3>
            <ResponsiveContainer width="100%" height={300} className={"bg-white rounded-lg p-2"}>
                <LineChart data={sessionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                    dataKey="timestamp" 
                    type="number" 
                    domain={['dataMin', 'dataMax']} 
                    tickFormatter={(unixTime) => new Date(unixTime).toLocaleTimeString()} 
                    />
                    <YAxis 
                    type="category"
                    dataKey="arousalStatus"
                    domain={['low', 'good', 'high']}
                    ticks={['low', 'good', 'high']}
                    />
                    <Tooltip 
                    labelFormatter={(label) => new Date(label).toLocaleTimeString()}
                    formatter={(value) => value}
                    />
                    <Legend />
                    <Line
                    dot={false} animationDuration={500} 
                    type="stepAfter" 
                    dataKey="arousalStatus" 
                    stroke="#82ca9d" 
                    name="Arousal Status" 
                    />
                </LineChart>
            </ResponsiveContainer>

            <h3 className="text-lg font-semibold mt-4">Stimulation Intensity Over Time</h3>
            <ResponsiveContainer width="100%" height={300} className={"bg-white rounded-lg p-2"}>
                <LineChart  data={sessionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                    dataKey="timestamp" 
                    type="number" 
                    domain={['dataMin', 'dataMax']} 
                    tickFormatter={(unixTime) => new Date(unixTime).toLocaleTimeString()} 
                />
                <YAxis domain={[0, 10]} />
                <Tooltip labelFormatter={(label) => new Date(label).toLocaleTimeString()} />
                <Legend />
                <Line dot={false} animationDuration={500} type="monotone" dataKey="intensity" stroke="#8884d8" name="Intensity" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default DetailedView
