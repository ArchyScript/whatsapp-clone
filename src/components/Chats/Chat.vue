<template>
  <div class="flex items-center      hover:bg-[#2A3942] cursor-pointer">
    <!-- Image container -->
    <div class="p-3">
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
            <Icon name="default-group" class="text-white" />
          </div>
        </div>
      </div>
    </div>

    <!-- Text content -->
    <div class="flex-grow text-white border-b border-gray-700 p-3 pl-0 ">
      <div class="flex items-center justify-between">
        <span class="text-sm font-medium" title="Sleekware" aria-label="">Sleekware</span>
        <div class="text-xs text-gray-500">16:51</div>
      </div>

      <div class="flex justify-between items-center">
        <h5 class="font-bold ">Node.JS Africa</h5>
        <span class="text-sm ">Yesterday</span>
      </div>

      <!-- Last message -->
      <div class="flex justify-between items-center">
        <p class="flex-1 text-gray-500">
          ~ cookingApps: <span class="font-medium">Nnb</span>
        </p>

        <div class="flex space-x-2 items-center">
          <!-- Pin icon -->
          <Icon name="pin" class="!h-3.5 !w-3.5" />
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
