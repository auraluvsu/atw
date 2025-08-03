# Real-Time DevOps Dashboard (WebSocket Project)

This project provides a real-time DevOps dashboard using WebSockets.
It consists of a Node.js (TypeScript) backend and a React (TypeScript) frontend. 
The backend periodically polls regional server health endpoints 
and broadcasts the latest data to connected clients. 
The frontend displays the data in a way that's useful for DevOps teams.

---

## 📦 Tech Stack

### Backend
- Node.js + TypeScript
- `ws` for WebSockets
- `axios` for HTTP requests

### Frontend
- React + TypeScript
- TailwindCSS

---

## 📡 Features

- Polls server status from six different regions
- Broadcasts updates to all connected clients via WebSocket
- Displays real-time health metrics for DevOps visibility
- Handles errors and timeouts gracefully
- Avoids redundant polling even with multiple clients
- Built with clean, typed, and modular code

---

## 🌍 Live Demo

> 🔗 **Frontend:** [https://around-the-world-gilt.vercel.app/](https://around-the-world-gilt.vercel.app/)  
> 🔗 **Backend:** [https://atw-production.up.railway.app/](https://atw-production.up.railway.app/)

_(Replace with your actual deployed URLs)_

---

## 🚀 Getting Started (Dev Mode)

### Backend

```bash
cd server
npm install
npm run dev
