import { useEffect, useState } from "react"
import { ArousalStatus, EEGData, SessionDataPoint } from "../types/types";
import { calculateNewIntensity, generateSimulatedEEGData, processEEGData } from "../utils/dataGeneration";
import SimpleView from "../components/Layout/SimpleView";
import DetailedView from "../components/DetailedView";




const Session = () => {
    const [isSessionActive, setIsSessionActive] = useState(false);
    const [intensity, setIntensity] = useState(5); // Start at middle intensity
    const [arousalStatus, setArousalStatus] = useState<ArousalStatus | null>(null);
    const [eegData, setEEGData] = useState<EEGData | null>(null);
    const [sessionData, setSessionData] = useState<SessionDataPoint[]>([]);
    const [showDetailedView, setShowDetailedView] = useState(false);

    if (eegData) console.log("test")

    const startSession = () => {
        setIsSessionActive(true);
        setSessionData([]);
      };

    const endSession = () => {
        setIsSessionActive(false);
        setArousalStatus(null);
        setEEGData(null);
        setIntensity(5);
    };  

    
    
    

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isSessionActive) {
          interval = setInterval(() => {
            const newEEGData = generateSimulatedEEGData(intensity);
            const newStatus = processEEGData(newEEGData);
            const newIntensity = calculateNewIntensity(intensity, newStatus);
            
            setEEGData(newEEGData);
            setArousalStatus(newStatus);
            setIntensity(newIntensity);

            setSessionData(prevData => [
                ...prevData,
                {
                  timestamp: Date.now(),
                  eegData: newEEGData,
                  arousalStatus: newStatus,
                  intensity: newIntensity
                }
            ]);
          }, 2000); // Every 5 seconds for demo purposes
        }
        return () => clearInterval(interval);
      }, [isSessionActive, intensity]);
    
    return (
        <div className="w-full flex  flex-col justify-center ">
            
            <div className="p-4">
                {/* <h1 className="text-2xl font-bold mb-4">EEG-based Stimulation Session Demo</h1> */}
                {!isSessionActive ? (
                    <button onClick={startSession} className="bg-blue-500 text-white p-2 rounded">
                    Start Session
                    </button>
                ) : (
                    
                    showDetailedView ? 
                        <DetailedView sessionData={sessionData} setIntensity={setIntensity} endSession={endSession} showDetailedView={showDetailedView} setShowDetailedView={setShowDetailedView} /> : 
                        <SimpleView intensity={intensity} setIntensity={setIntensity} arousalStatus={arousalStatus} endSession={endSession} showDetailedView={showDetailedView} setShowDetailedView={setShowDetailedView}/>
                    
                    
                )}
                </div>

        </div>
    )
}

export default Session
