<template>
  <div class="flex items-center space-x-3 p-3   hover:bg-[#2A3942] cursor-pointer">
    <!-- Image container -->
    <div>
      <!-- Chat -->
      <!-- <div class="flex-shrink-0 w-12 h-12">
        <img class="w-full h-full rounded-full object-cover" alt="Profile"
          src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/302316460_1127145414552291_5521081876494394526_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_Q5AaIMKKU_IY-EjWMVXoSYYjAYcuD_tOi0sQRTIpntvAOqvD&amp;oe=66FDACC2&amp;_nc_sid=5e03e0&amp;_nc_cat=100" />
      </div> -->

      <!-- Group Chats -->
      <div class="relative flex items-center space-x-2  w-12 h-12">
        <!-- Parent group image container -->
        <div class="absolute top-0 h-7 w-7">
          <img alt="" draggable="false" class="h-full w-full rounded-lg object-cover"
            src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/418406963_387499087298743_9129590649284943846_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_Q5AaIAnBDnpNXeDpSFexYVRHUxQ9g_HkWFM5XwjCq1GFObs1&amp;oe=66FE4B3B&amp;_nc_sid=5e03e0&amp;_nc_cat=102" />
        </div>

        <!-- subgroup image container -->
        <div class="absolute bottom-0 right-0 h-8 w-8 p-1">
          <div class="flex items-center justify-center h-full w-full bg-gray-200 rounded-full">
            <!-- <svg viewBox="0 0 212 212" height="24" width="24" class="fill-current text-gray-400">
              <title>default-group</title>
              <path class="background"
                d="M105.946 0.25C164.318 0.25 211.64 47.596 211.64 106C211.64 164.404 164.318 211.75 105.945 211.75C47.571 211.75 0.25 164.404 0.25 106C0.25 47.596 47.571 0.25 105.946 0.25Z"
                fill="#DFE5E7"></path>
              <path class="primary" fill-rule="evenodd" clip-rule="evenodd"
                d="M102.282 77.2856C102.282 87.957 93.8569 96.5713 83.3419 96.5713C72.827 96.5713 64.339 87.957 64.339 77.2856C64.339 66.6143 72.827 58 83.3419 58C93.8569 58 102.282 66.6143 102.282 77.2856ZM150.35 80.1427C150.35 89.9446 142.612 97.857 132.954 97.857C123.296 97.857 115.5 89.9446 115.5 80.1427C115.5 70.3409 123.296 62.4285 132.954 62.4285C142.612 62.4285 150.35 70.3409 150.35 80.1427ZM83.3402 109.428C68.5812 109.428 39 116.95 39 131.928V143.714C39 147.25 41.8504 148 45.3343 148H121.346C124.83 148 127.68 147.25 127.68 143.714V131.928C127.68 116.95 98.0991 109.428 83.3402 109.428ZM126.804 110.853C127.707 110.871 128.485 110.886 129 110.886C143.759 110.886 174 116.95 174 131.929V141.571C174 145.107 171.15 148 167.666 148H134.854C135.551 146.007 135.995 143.821 135.995 141.571L135.75 131.071C135.75 121.51 130.136 117.858 124.162 113.971C122.772 113.067 121.363 112.15 120 111.143C119.981 111.123 119.962 111.098 119.941 111.07C119.893 111.007 119.835 110.931 119.747 110.886C121.343 110.747 124.485 110.808 126.804 110.853Z">
              </path>
            </svg> -->

            <Icon name="default-group" />
          </div>
        </div>
      </div>
    </div>

    <!-- Text content -->
    <div class="flex-grow text-white">
      <div class="flex items-center justify-between">
        <span class="text-sm font-medium" title="Sleekware" aria-label="">Sleekware</span>
        <div class="text-xs text-gray-500">16:51</div>
      </div>

      <div class="flex justify-between items-center">
        <!-- Chat title -->
        <!-- text-[#6C96A0] -->
        <h5 class="font-bold ">Node.JS Africa</h5>
        <!-- Date -->
        <span class="text-sm ">Yesterday</span>
      </div>

      <!-- Last message -->
      <div class="flex justify-between items-center">
        <span class="text-gray-700">
          ~ cookingApps: <span class="font-medium">Nnb</span>
        </span>

        <div class="flex space-x-2 items-center">
          <!-- Pin icon -->
          <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path
              d="M12.074 4.21 8.7 8.232l.116 4.233a.4.4 0 0 1-.657.318L.43 6.297a.4.4 0 0 1 .199-.702l4.196-.622L8.196.957a.63.63 0 0 1 .887-.078l2.914 2.445a.63.63 0 0 1 .077.887ZM1.294 14.229a.713.713 0 0 1-1.09-.915l2.674-3.64 1.536 1.288-3.12 3.267Z" />
          </svg>

          <Icon name="pin" />

          <!-- unread message -->
          <div role="gridcell" aria-colindex="1" class="flex items-center justify-center">
            <span>
              <div class="transform scale-100 opacity-100">
                <span
                  class="inline-block bg-red-500 text-white text-xs font-semibold leading-none rounded-full px-2 py-1"
                  aria-label="3 unread messages">
                  3
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional styles can go here if needed */
</style>
