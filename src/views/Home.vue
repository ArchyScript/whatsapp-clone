<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { io, type Socket } from "socket.io-client"
import { useRouter } from 'vue-router';
type Message = {
    text: string
    name?: string
    timeStamp: string
    sender: "user" | "friend"
}

// 
const socket = ref<Socket>()
const router = useRouter()
const rooms = ['vue installation', 'vue guide', 'vue api', 'vue examples']
const state = reactive({
    username: '',
    roomIndex: 1
})
const onSubmit = () => {
    console.log("SUBMIT")
    router.push(`/chats?username=${state.username}&room=${rooms[state.roomIndex - 1]}`)
}
// onMounted(() => {
//     socket.value = io('http://localhost:5000')
//     console.log('socket.value', socket.value)
// })

// onBeforeUnmount(() => {
//     console.log('DISCONNECTED')
//     socket.value?.disconnect()
// })
</script>

<template>
    <div class="min-h-[100vh] py-6 w-96 mx-auto ">
        <div class="relative w-full max-h-[580px] space-y-6 p-6 rounded-2xl mx-auto bg-white border ">
            <div class="space-y-2 w-full">
                <label class="text-xs foont-medium">
                    Username
                </label>

                <input v-model="state.username" required type="text" placeholder="Enter username"
                    class="block w-full rounded-lg  flex-grow px-4 py-2 border focus:outline-none  "
                    :class="!state.username && '!border-red-300'" />
            </div>
            <div class="space-y-2 w-full">
                <label class="text-xs foont-medium">
                    Room Index
                </label>

                <input v-model="state.roomIndex" required :min="1" :max="4" type="number"
                    :class="+state.roomIndex < 1 || +state.roomIndex > 4 && '!border-red-300'"
                    placeholder=" Enter roomIndex"
                    class="block w-full rounded-lg  flex-grow px-4 py-2 border focus:outline-none  " />
            </div>

            <!-- send btn -->
            <button @click="onSubmit" :class="!state.username && 'cursor-not-allowed !bg-blue-300'"
                :disabled="!state.username || +state.roomIndex < 1 || +state.roomIndex > 4"
                class="block w-full px-4 py-2.5 text-sm rounded-lg font-medium text-white bg-blue-500">
                submit
            </button>
        </div>
    </div>
</template>

<style scoped></style>
