<script setup lang="ts">
import { ref, onMounted } from "vue"
import { RouterView } from "vue-router"

const fullHeightDiv = ref<HTMLDivElement | null>(null)

const getHeight = () => {
  const screenHeight = window.screen.height
  const viewportHeight = window.innerHeight
  const addressBarHeight = screenHeight - viewportHeight
  const adjustedHeight = viewportHeight - addressBarHeight
  console.log("test")
  console.log("screenHeight", screenHeight)
  console.log("viewportHeight", viewportHeight)
  console.log("addressBarHeight", addressBarHeight)
  console.log("adjustedHeight", adjustedHeight)

  if (fullHeightDiv.value) {
    fullHeightDiv.value.style.height = `${adjustedHeight}px`
  }
}
onMounted(() => {
  getHeight()
})
// window.addEventListener("resize", getHeight)
</script>

<template>
  <div ref="fullHeightDiv">
    <RouterView />
  </div>
</template>

<style scoped></style>
