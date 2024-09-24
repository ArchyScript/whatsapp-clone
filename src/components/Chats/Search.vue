<template>
  <div tabindex="-1" class="focus:outline-none px-4">
    <div class="flex bg-[#202C33]   rounded-md">
      <div class="flex-grow">
        <div class="flex items-center w-full">
          <div class="flex items-center space-x-4 w-12">
            <button class="p-1.5 rounded-full hover:bg-gray-200" aria-label="Search or start new chat" tabindex="-1">
              <div class="flex items-center">
                <span aria-hidden="true" class="text-gray-700">
                  <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor" class="w-6 h-6">
                    <title>search</title>
                    <path
                      d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z">
                    </path>
                  </svg>
                </span>
              </div>

              <!-- <div class="flex items-center">
                <span aria-hidden="true" class="text-gray-700">
                  <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor" class="w-6 h-6">
                    <title>back</title>
                    <path d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                  </svg>
                </span>
              </div> -->
            </button>
          </div>

          <div class="  flex-1 w-full  ">
            <input type="text" placeholder="Search"
              class="w-full p-1.5 h-auto text-gray-700 bg-[#202C33]  focus:outline-none" v-model="value"
              @focus="isFocused = true" @blur="isFocused = false" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
const isFocused = ref(false);
</script>
