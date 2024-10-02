<template>
  <svg :class="['w-' + size, 'h-' + size]" :width="size" :height="size" viewBox="0 0 104 104">
    <circle
      cx="52"
      cy="52"
      r="50"
      fill="none"
      stroke-linecap="round"
      class="stroke-gray-300"
      :stroke-dashoffset="calculateDashOffset"
      :stroke-dasharray="calculateDashArray"
      stroke-width="4"
    ></circle>
  </svg>
</template>

<script setup lang="ts">
import { defineComponent, computed, defineProps   } from 'vue';
import  type { PropType } from 'vue';

interface Props {
  numberOfStrokes: number;
  size: string;
}

const props = defineProps ({
  numberOfStrokes: {
    type: Number as PropType<number>,
      required: true,
    },
  size: {
    type: String as PropType<string>,
      default: '48',
    },
},)

const calculateDashOffset = computed(() => {
  const circumference = 2 * Math.PI * 50;
  const totalStrokes = props.numberOfStrokes;
  const strokeGap = 10;
  const strokeLength = (circumference - strokeGap * (totalStrokes - 1)) / totalStrokes;
  return circumference - strokeLength;
});

const calculateDashArray = computed(() => {
  const totalStrokes = props.numberOfStrokes;
  const strokeGap = 10;
  const strokeLength = (2 * Math.PI * 50 - strokeGap * (totalStrokes - 1)) / totalStrokes;
  return `${strokeLength} ${strokeGap}`;
});

// defineComponent({
//   name: 'StrokesComponent',
  
//   setup(props: Props) {
    

//     return {
//       calculateDashOffset,
//       calculateDashArray,
//     };
//   },
// });
</script>