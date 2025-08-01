import http from 'http';
import { WebSocket, WebSocketServer } from 'ws'
import { fetchAllStatuses } from './services/polling';

const PORT = process.env.PORT || 8080;
const server = http.createServer((_req, res) => {
    res.writeHead(200);
    res.end("Websocket server is running");
});

const clients = new Set<WebSocket>()
const wss = new WebSocketServer({ server });
wss.on("connection", (ws) => {
    clients.add(ws);
    console.log("Client connected. Total clients:", clients.size);
    ws.on("close", () => {
        console.log("Client disconnected. Total clients:", clients.size);
    });
});

setInterval(async () => {
    const statuses = await fetchAllStatuses();
    const payload = JSON.stringify({
        timestamp: Date.now(),
        statuses,
    });
    for (const client of clients) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(payload);
        }
    }
    console.log("Broadcasted new status update.");
}, 10000);

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
