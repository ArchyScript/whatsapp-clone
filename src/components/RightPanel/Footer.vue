<template>
  <div class="sticky bottom-0 py-2 space-y-1.5">
    <footer class="flex justify-center items-center ">
      <div class="flex flex-col p-4  pt-2 rounded-lg w-full">
        <div class="flex justify-between items-center    w-full ">
          <span class=""></span>
          <div class="flex space-x-2  w-full">

            <CloseIcon />



            <!-- Open emoji panel button -->
            <button tabindex="-1" class="p-2 rounded hover:bg-gray-200" aria-label="Open emojis panel">
              <div class="flex items-center justify-center">
                <span aria-hidden="true">
                  <svg viewBox="0 0 24 24" height="24" width="24" class="fill-current">
                    <title>smiley</title>
                    <path fill="currentColor"
                      d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603zM5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965zM17.312,14.073c0,0-0.669,1.959-5.051,1.959c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073zM11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011zM12,21.354c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354zM15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z">
                    </path>
                  </svg>
                </span>
              </div>
            </button>

            <div class="flex-1  ">
              <textarea class="w-full p-2  rounded-md focus:outline-none   max-h-[8rem] resize-none  overflow-auto"
                rows="1" />
            </div>

            <!-- Open gif panel button -->
            <button tabindex="-1" class="p-2 rounded hover:bg-gray-200" aria-label="Open gif panel">
              <div class="flex items-center justify-center">
                <span aria-hidden="true">
                  <svg viewBox="0 0 24 24" height="24" width="24" class="fill-current">
                    <title>gif</title>
                    <path fill="currentColor"
                      d="M13.177,12.013l-0.001-0.125c0-0.138,0-0.285,0-0.541c0-0.256,0-0.37,0-0.512c0-0.464,0-0.827-0.002-1.178c-0.002-0.336-0.237-0.628-0.557-0.7c-0.345-0.077-0.689,0.084-0.826,0.4c-0.05,0.115-0.072,0.253-0.073,0.403c-0.003,1.065-0.003,1.917-0.002,3.834c0,0.326,0,0.326,0,0.653c0,0.074,0.003,0.136,0.009,0.195c0.032,0.302,0.272,0.562,0.57,0.619c0.477,0.091,0.878-0.242,0.881-0.734c0.002-0.454,0.003-0.817,0.002-1.633C13.178,12.353,13.177,12.202,13.177,12.013z">
                    </path>
                  </svg>
                </span>
              </div>
            </button>

            <!-- Open sticker panel button -->
            <button tabindex="-1" class="p-2 rounded hover:bg-gray-200" aria-label="Open sticker panel">
              <div class="flex items-center justify-center">
                <span aria-hidden="true">
                  <svg viewBox="0 0 24 24" height="24" width="24" class="fill-current">
                    <title>sticker</title>
                    <path fill="currentColor"
                      d="M21.799,10.183c-0.002-0.184-0.003-0.373-0.008-0.548c-0.02-0.768-0.065-1.348-0.173-1.939c-0.124-0.682-0.328-1.296-0.624-1.87c-0.301-0.587-0.695-1.124-1.171-1.594c-0.473-0.469-1.016-0.859-1.614-1.159">
                    </path>
                  </svg>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>


<script setup lang="ts">
import { CloseIcon } from '@/components/global/icons'
</script>