import { useState, useEffect} from 'react'
import type { WSMessage } from './types'
import StatusCard from './components/StatusCard'
import './App.css'

function App() {
    const [statusData, setStatusData] = useState<WSMessage | null>(null)
    useEffect(() => {
        const socket = new WebSocket(import.meta.env.VITE_WS_URL!);
        socket.onopen = () => console.log('Connected to WebSocket server');
        socket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                setStatusData(data);
            } catch (err) {
                console.error('Failed to parse WebSocket message:', err)
            }
        };
        socket.onerror = (err) => console.error('WebSocket error:', err);
        socket.onclose = () => console.log('WebSocket disconnected');
        return () => socket.close();
    }, []);
    
    return (
        <div>
            <h1>Real-Time Devops Dashboard</h1>

            {!statusData ? (
                <p>Loading Server data...</p>
            ) : (
                <div>
                    {statusData.statuses.map((status) => (
                        <StatusCard
                        key={status.region}
                        region={status.region}
                        data={status.data}
                        />
                     ))}
                </div>
            )}
        </div>
    );
}

export default App
