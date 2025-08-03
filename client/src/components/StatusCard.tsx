interface Props {
    region: string
    data: any | null;
}

export default function StatusCard({ region, data}: Props) {
    const isOnline = data !== null;
    if (!isOnline) {
        return (
            <div style={{ border: '1px solid red', margin: '1rem', padding: '1rem' }}>
                <h3>{region.toUpperCase()}</h3>
                <p style={{ color: 'red' }}>Offline or no data</p>
            </div>
        );
    }

    const services = data.results?.services || {};
    const stats = data.results?.stats || {};
    const server = stats.server || {};
    return (
        <div className="status-card online">
        <h3>{region.toUpperCase()} ({data.status})</h3>
            <p><strong>Version:</strong> {data.version}</p>
            <h4>Services</h4>
            <ul>
                <li>Redis: {services.redis ? "✅" : "❌"} </li>
                <li>Database: {services.database ? "✅" : "❌"}</li>
            </ul>
            <h4>Stats</h4>
            <ul>
                <li>Server count: {stats.server_count}</li>
                <li>Status: {stats.online}</li>
                <li>Active connections: {server.active_connections}</li>
                <li>CPU Load: {(server.cpu_load * 100).toFixed(1)}%</li>
            </ul>
        </div>
    );
}
