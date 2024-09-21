<template>
    <div class="text-sm"> {{ name }} </div>
    <!-- <component :is="resolveComponent(name)" v-bind="attrs" /> -->
</template>

<script setup lang="ts">
import { defineProps, } from 'vue';

const props = defineProps({ 
    name: String, // The name of the component to display dynamically
}); 

// const attrs = defineAttrs(); // Any attributes passed to the component
// const resolveComponent = (name) => resolveDynamicComponent(name);
</script>
