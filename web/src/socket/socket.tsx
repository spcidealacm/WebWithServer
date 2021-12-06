import { useState, useEffect } from 'react'
import { io, Socket } from "socket.io-client"

export default function useSocket(address: string): [Socket | undefined, boolean] {
  const [socket, setSocket] = useState<Socket>()
  const [status, setStatus] = useState(false)
  useEffect(() => {
    socket?.disconnect()
    setSocket(io(address))
    setStatus(false)
  }, [address])
  useEffect(() => {
    socket?.on('connect', () => {
      setStatus(status => true)
    })
    socket?.on('disconnect', () => {
      setStatus(status => false)
    })
  }, [socket])

  return [socket, status]
}