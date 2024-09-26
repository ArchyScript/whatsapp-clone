<script lang="ts" setup>
import { ref, watchEffect, onMounted } from "vue";

// Define the props for the component
interface Props {
  name: string; // Name of the icon (without .svg extension)
  filled?: boolean; // Optional prop to control filled/stroke SVG styles
  size?: number; // Add size prop
}

const props = withDefaults(defineProps<Props>(), {
  filled: true, // Default to `filled` being true
  size: 24, // Default size
});

const hasStroke = ref(false);
const icon = ref<string>("");

// Fetch the SVG icon dynamically
const fetchIcon = async () => {
  try {
    // Import SVG files from the `@/assets/icons` folder
    const iconsImport = import.meta.glob("@/assets/icons/**/*.svg", {
      eager: false,
      query: "?raw",
      import: "default",
    });

    const iconPath = `/src/assets/icons/${props.name}.svg`;

    if (!iconsImport[iconPath]) {
      throw new Error(`Icon "${props.name}" not found`);
    }

    const rawIcon = await iconsImport[iconPath]();
    const iconSvgContent = rawIcon as string;

    // Check if the icon contains a stroke
    hasStroke.value = iconSvgContent.includes("stroke");
    icon.value = iconSvgContent;
  } catch (error) {
    // Handle the case where the icon is not found 
    throw new Error(`Icon "${props.name}" not found`,);
  }
};

// Fetch the icon when the component is mounted
onMounted(() => fetchIcon());
// Re-fetch the icon whenever the name prop changes
watchEffect(() => fetchIcon()); 
</script>

<template>
  <!-- Render the loaded SVG content -->
  <span class="base-icon " :class="{ 'icon--fill': filled, 'icon--stroke': hasStroke && !filled }" v-html="icon"
    :style="{ width: `${props.size}px`, height: `${props.size}px` }" />
</template>

<style scoped>
/* Base styling for the icon */
.base-icon {
  line-height: 0;
}

/* Apply fill color to the icon */
.base-icon.icon--fill,
.base-icon.icon--fill * {
  fill: currentColor !important;
}

/* Apply stroke color to the icon */
.base-icon.icon--stroke,
.base-icon.icon--stroke * {
  stroke: currentColor !important;
}
</style>
