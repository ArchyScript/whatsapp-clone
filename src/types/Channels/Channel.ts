import type { ChannelMessageType } from '../Common'

export interface ChannelType {
  name: string
  imageUrl: string
  lastMessage: {
    type: ChannelMessageType
    content: string
  }
  time: string
  lastSeen: string
  unreadMessages: number
  isPinned: boolean
  isRead: boolean
  followed: boolean
  numberOfFollowers: number
}
