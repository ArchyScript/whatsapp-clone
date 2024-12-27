import { io, Socket } from "socket.io-client"
const baseURL = "http://localhost:5000"

let socket: Socket | null = null

export const connectSocket = (userId: string) => {
  socket = io(baseURL, {
    query: { userId }, // Send userId with connection handshake
    transports: ["websocket"],
    autoConnect: false // Avoid auto-connecting before setup
  })
  console.log("test connect")

  // Log connection events for debugging
  socket.on("connect", () => {
    console.log(`Connected with ID: ${socket?.id}`)
  })

  socket.on("disconnect", () => {
    console.log("Disconnected from server")
  })

  return socket
}

export const getSocket = () => socket // Provide access to the socket instance

/**
 * Disconnect the socket
 */
export const disconnectSocket = (): void => {
  if (socket) {
    socket.disconnect()
    socket = null
  }
}
