

export type MessagesChatType = {
    userId: number,
    userName: string,
    message: string,
    photo: string
}
export type SubscriberChatType = (messages: MessagesChatType[]) => void


let subscribers = [] as SubscriberChatType[]

let ws: WebSocket
const wsCloseHandler = () => {
    console.log('close ws')
    setTimeout(connectWebSocket, 3000)
}

let wsMessageHandler = (e: MessageEvent) => {
    let newMessagesChat = JSON.parse(e.data)
    subscribers.forEach(s => s(newMessagesChat))
    }

function connectWebSocket() {
    debugger
    ws?.removeEventListener('close', wsCloseHandler)
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws.addEventListener('close', wsCloseHandler)
}

export const chatApi = {
    subscribe(callback: SubscriberChatType) {
        subscribers.push(callback)
        return () => {
            subscribers.filter(s => s !== callback)
        }
    }
}