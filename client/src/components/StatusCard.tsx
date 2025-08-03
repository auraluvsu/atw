interface Props {
    region: string
    data: any | null;
}

export default function StatusCard({ region, data}: Props) {
    const isOnline = data !== null;

    return (
        <div>
            <h3>{region.toUpperCase()}</h3>
            <p>Status: {isOnline ? '🟢 Online' : '🔴 Offline'}</p>
            {isOnline && (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
        </div>
    );
}
