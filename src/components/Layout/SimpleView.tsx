import { useMemo } from "react";
import { ArousalStatus } from "../../types/types"
import GaugeChart from 'react-gauge-chart';
import { FaMinus, FaPlus } from "react-icons/fa";

interface SimpleViewPropsType {
    intensity: number,
    setIntensity: (value: React.SetStateAction<number>) => void
    arousalStatus: ArousalStatus | null
    endSession: () => void
    showDetailedView: boolean
    setShowDetailedView: (value: React.SetStateAction<boolean>) => void
}

const SimpleView = ({ intensity, setIntensity, arousalStatus, endSession, showDetailedView, setShowDetailedView }: SimpleViewPropsType) => {
    
    const handleIncreaseIntensity = () => {
        setIntensity(prev => Math.min(10, prev + 1))
    }

    const handleDecreaseIntensity = () => {
        setIntensity(prev => Math.max(0, prev - 1))
    }
    
    // Convert arousalStatus to a number for the gauge
    const arousalValue = useMemo(() => {
        switch (arousalStatus) {
            case 'low': return 0.16;  // Center of the first third
            case 'good': return 0.5;  // Center of the middle third
            case 'high': return 0.84; // Center of the last third
            default: return 0;
        }
    }, [arousalStatus]); // Only recalculate when arousalStatus changes

    // Memoize the entire Arousal Gauge
    const ArousalGauge = useMemo(() => (
        <GaugeChart 
            id="arousal-gauge"
            nrOfLevels={3}
            percent={arousalValue}
            colors={["#F5CD19", "#5BE12C", "#EA4228"]}
            arcWidth={0.3}
            textColor="#000000"
            formatTextValue={(value) => {
                const numValue = Number(value);
                if (numValue <= 33) return 'Low';
                if (numValue <= 67) return 'Good';
                return 'High';
            }}
        />
    ), [arousalValue]); // Only re-render when arousalValue changes

    return (
        <div className="p-4 border rounded">
            <div className="flex flex-col w-full items-center mb-8 grow" >
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
            </div>
            <div className="flex flex-row gap-8 justify-around">
                <div className="w-full md:w-1/2 bg-white rounded-xl shadow-xl p-4">
                    <h3 className="text-lg font-semibold mb-2">Intensity Level</h3>
                    <GaugeChart 
                        id="intensity-gauge"
                        nrOfLevels={10}
                        percent={intensity / 10}
                        colors={["#FFC371", "#FF5F6D"]}
                        arcWidth={0.3}
                        textColor="#000000"
                        formatTextValue={(value) => `${(Number(value) / 10).toFixed(1)}`}
                    />
                </div>
                
                <div className="w-full md:w-1/2 bg-white rounded-xl shadow-xl p-4">
                    <h3 className="text-lg font-semibold mb-2">Arousal Level</h3>
                    {ArousalGauge}
                </div>
            </div>
            
        </div>
    );
};

export default SimpleView;
