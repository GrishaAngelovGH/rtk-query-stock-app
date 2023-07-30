import { WebSocket } from 'ws'

const socket = new WebSocket('ws://127.0.0.1:5000')

socket.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
});