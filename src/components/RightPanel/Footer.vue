<template>
  <div class="sticky bottom-0 px-5 py-1 bg-[#202C33]">
    <div class="flex items-center space-x-2 w-full">
      <Icon name="times" />
      <Icon name="smiley" />

      <div class="flex-1 w-fit">
        <textarea
          class="w-full py-3 px-4 rounded-md focus:outline-none rounded-xl !bg-transparent max-h-[8rem] resize-none border border-gray-50 overflow-auto"
          rows="1"
        />
      </div>

      <Icon name="record" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
