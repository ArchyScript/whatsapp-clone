<script setup lang="ts">
import ChatsPage from '../components/Chats/index.vue'
 
// socket.on('connect', () => {
//     console.log('Connected to server');
// });

// Listen for messages from the server
// socket.on('message', (data) => {
//     console.log('Received message:', data);
// });

// // Emit a message to the server
// socket.emit('message', 'Hello from the client!');

// // Listen for disconnect
// socket.on('disconnect', () => {
//     console.log('Disconnected from server');
// });
</script>

<template>
    <div class="min-h-[100vh] py-6 ">
        <ChatsPage />
    </div>
</template>
