<script setup lang="ts">
import { ref, onMounted } from "vue"
import { RouterView } from "vue-router"

const fullHeightDiv = ref<HTMLDivElement | null>(null)

const getHeight = () => {
  const screenHeight = window.screen.height
  const viewportHeight = window.innerHeight
  const addressBarHeight = screenHeight - viewportHeight
  const adjustedHeight = viewportHeight - addressBarHeight
  if (fullHeightDiv.value) {
    fullHeightDiv.value.style.height = `${adjustedHeight}px`
  }
}

const enterFullScreenAndMeasure = async () => {
  try {
    await document.documentElement.requestFullscreen()
    const fullScreenHeight = window.innerHeight

    // Exit fullscreen
    document.exitFullscreen()

    // Calculate the difference
    const statusBarHeight = window.screen.height - fullScreenHeight
    console.log("Estimated Status Bar Height:", statusBarHeight)
  } catch (error) {
    console.error("Fullscreen mode could not be enabled:", error)
  }
}

onMounted(() => {
  // enterFullScreenAndMeasure()
  getHeight()
})
// window.addEventListener("resize", getHeight)
</script>

<template>
  <!-- <button @click="enterFullScreenAndMeasure" class="text-white bg-green-600 py-3 px-6">
    Measure Status Bar Height
  </button> -->
  <div ref="fullHeightDiv">
    <RouterView />
  </div>
</template>

<style scoped></style>
