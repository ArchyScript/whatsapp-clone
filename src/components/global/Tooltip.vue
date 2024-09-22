<script lang="ts" setup>

interface Props {
  text: string;
}

defineProps<Props>();
</script>

<template>
  <div
    class="absolute z-40 left-full top-1/4 ml-2 w-fit bg-white text-sm rounded-xl py-1   px-4   opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
    <p class="font-medium select-none"> {{ text }} </p>
  </div>
</template>