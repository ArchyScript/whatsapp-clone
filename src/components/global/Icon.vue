<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { createError } from 'vue-router'; // for error handling, depending on your setup

interface Props {
  name: string;
  filled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  filled: true,
});

const hasStroke = ref(false);
const icon = ref("");

const fetchIcon = async () => {
  try {
    const iconsImport = import.meta.glob("../assets/icons/**/**.svg", {
      eager: false, // Don't import immediately, load when required
      query: "?raw", // Ensures we load the raw content of the SVG
      import: "default",
    });

    const rawIcon = await iconsImport[`../assets/icons/${props.name}.svg`]();
    
    // Check if the SVG contains a 'stroke' attribute
    if (rawIcon.includes("stroke")) hasStroke.value = true;

    icon.value = rawIcon; // Set the loaded SVG content
  } catch (error) {
    throw createError({
      statusCode: 404,
       statusMessage: `Icon "${props.name}" not found`,  
    });
  }
};

// Fetch the icon when the component is first created
await fetchIcon();

// Re-fetch the icon whenever the `name` prop changes
watchEffect(() => {
  fetchIcon();
});
</script>

<template>
  <span class="base-icon" :class="{ 'icon--fill': filled, 'icon--stroke': hasStroke && !filled }" v-html="icon" />
</template>

<style scoped>
.base-icon {
  line-height: 0;
}

/* Apply fill color */
.base-icon.icon--fill,
.base-icon.icon--fill * {
  fill: currentColor !important;
}

/* Apply stroke color */
.base-icon.icon--stroke,
.base-icon.icon--stroke * {
  stroke: currentColor !important;
}
</style>
