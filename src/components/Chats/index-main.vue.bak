<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { io, type Socket } from "socket.io-client"
import { useRoute, useRouter } from 'vue-router'
type Chat = {
  text: string
  username?: string
  time: string
  room: string
}
type User = {
  username?: string
  id: string
  room: string
}
const route = useRoute()
const router = useRouter()

const currentUser = computed(() => route.query.username)
const currentRoom = ref('')
// 
const socket = ref<Socket>()
const newMessage = ref("")
const chats = ref<Chat[]>([])
const users = ref<User[]>([])


const sendMessage = async () => {

  console.log(newMessage.value)

  socket.value?.emit('chatMessage', newMessage.value)
  await nextTick(() => newMessage.value = '')
}
const connectToSocket = () => {
  socket.value = io('http://localhost:5000')
  console.log('socket.value', socket.value)
  const { username, room } = route.query as Partial<Chat>
  if (!username || !room) return router.push('/')


  socket.value.emit('joinRoom', { username, room })
  socket.value?.on('roomUsers', (response: { room: string, users: User[] }) => {
    users.value = response.users
    currentRoom.value = response.room
  })
  socket.value?.on('message', (message: Chat) => {
    chats.value.push(message)
  })
}

const leaveRoom = () => {
  router.push('/')
}
onMounted(async () => await connectToSocket())

onBeforeUnmount(() => {
  console.log('DISCONNECTED')
  socket.value?.disconnect()
})


// const chats = ref<Chat[]>([
//   {
//     text: "Hey! How are you?",
//     time: "10:02",
//     username: 'Script',
//     room: 'room1',
//   },
//   {
//     text: "Hey! How are you?",
//     time: "10:02",
//     username: 'Script',
//     room: 'room1',
//   },
//   {
//     text: "Hey! e you?",
//     time: "10:02",
//     username: 'Toyin',
//     room: 'room1',
//   },
// ])


// const users = ref([
//   {
//     username: 'Script',
//     room: 'room1',
//     id: "Scriptdummyessage"
//   },
//   {
//     username: 'Archy',
//     room: 'room1',
//     id: "Archywewew"
//   },
//   {
//     username: 'Toyin',
//     room: 'room1',
//     id: "Screrereript"
//   }
// ])
</script>

<template>
  <div class="w-[600px]   mx-auto flex space-x-6">
    <section class=" space-y-5 rounded-sm bg-gray-50 h-[580px]  bg-white border p-4 ">
      <div class="space-y-2 pr-6 bg-white  p-4">
        <h4 class="font-semibold text-base"> Room Name </h4>
        <p class="font-bold text-xl">{{ currentRoom }} </p>
      </div>



      <div class="space-y-2 pr-6 bg-white  p-4 flex-1">
        <h4 class="font-semibold text-base">Users</h4>


        <div class="space-y-3   cursor-pointer h-60 overflow-auto">
          <p class="font-normal text-sm  hover:text-gray-400 " :class="user.id && 'border-l-4 border-green-500 pl-3'"
            v-for="user in users" :key="user.id"> {{ user.username }} </p>
        </div>
      </div>
    </section>

    <section class="relative  flex-1  h-[580px] rounded-2xl mx-auto bg-white border overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full py-4 z-1 px-[22px] bg-[#F5FDFF] rounded-t-2xl flex items-center justify-between">
        <div class="space-y-1">
          <h6 class="text-sm font-medium text-complimentary leading-5">
            Username
          </h6>
          <p class="flex items-center space-x-1">
            <span class="h-1.5 w-1.5 rounded-full bg-warning inline-block">
            </span>
            <span class="text-[10px] font-medium text-[#626262] leading-[13px]">
              Seen 3 hours ago
            </span>
          </p>
        </div>

        <button class="px-4 py-1 text-sm rounded-lg font-medium text-white bg-blue-500" @click="leaveRoom">
          Leave {{ currentRoom }}
        </button>
      </div>

      <!-- Messages Section -->
      <div class="px-4 pt-24 pb-28 h-full overflow-y-auto space-y-2">
        <div v-for="(chat, index) in chats" :key="index" class="space-y-3">
          <div v-if="chat.username == 'admin'" class="text-center ">
            <span class=" block text-green-500 text-xs font-medium">
              {{ chat.username }}
            </span>
            <span class=" block text-sm font-semibold">
              {{ chat.text }}
            </span>
          </div>

          <div v-else :class="chat.username === currentUser ? 'text-right' : 'text-left'">
            <div
              class="relative inline-block px-4 py-2.5 bg-[#F9F9F9] text-[#323232] text-sm rounded-md mb-2 max-w-3/5">
              <span class="inline-block  text-xs font-semibold">
                {{ chat.username }}
              </span>

              <p class="font-light">
                {{ chat.text }}
              </p>

              <!-- chat pointer -->
              <template v-if="chat.username !== currentUser">
                <Icon name="chat-pointer-user" class="absolute -bottom-1 -right-1" />
              </template>

              <template v-else>
                <Icon name="chat-pointer-others" class="absolute -bottom-1 -left-1" />
              </template>
            </div>

            <p class="flex items-center -mt-1" :class="chat.username === currentUser && 'flex-row-reverse'">
              <Icon name="check-double" />

              <span class="text-[11px] font-medium text-[#3C3C4399] leading-[13px] px-2">
                {{ chat.time }}
              </span>
            </p>
          </div>
        </div>
      </div>

      <!-- Input Section -->
      <div class="absolute bottom-0 left-0 w-full h-[88px] mt-4 bg-white z-1 border-t pt-3.5 px-6 rounded-b-2xl">
        <div class="flex items-center space-x-2 bg-white border p-2 pl-3 rounded-xl">

          <!-- message field -->
          <input v-model="newMessage" type="text" placeholder="Type your message..."
            class="w-fit flex-grow px-4 py-2 border-none focus:outline-none focus:border-none" />

          <!-- send btn -->
          <button @click="sendMessage" class="px-4 py-1 text-sm rounded-lg font-medium text-white bg-blue-500"
            :class="!newMessage && 'cursor-not-allowed !bg-blue-300'" :disabled="!newMessage">
            submit
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
</style>
