<template> 
  <div class="sticky py-2 space-y-1.5"> 
<header class="flex space-x-3 items-center justify-between p-2">
  <!-- Profile Section -->
  <div class="flex items-center space-x-2" title="Profile details" role="button">
    <div class="h-10 w-10 rounded-full overflow-hidden">
      <div class="flex items-center justify-center bg-gray-200 h-full w-full">
        <span aria-hidden="true" class="">
          <svg viewBox="0 0 212 212" height="40" width="40" fill="none" class="fill-current text-gray-400">
            <title>default-group</title>
            <path class="background" d="M105.946 0.25C164.318 0.25 211.64 47.596 211.64 106C211.64 164.404 164.318 211.75 105.945 211.75C47.571 211.75 0.25 164.404 0.25 106C0.25 47.596 47.571 0.25 105.946 0.25Z" fill="#DFE5E7"></path>
            <path class="primary" fill-rule="evenodd" clip-rule="evenodd" d="M102.282 77.2856C102.282 87.957 93.8569 96.5713 83.3419 96.5713C72.827 96.5713 64.339 87.957 64.339 77.2856C64.339 66.6143 72.827 58 83.3419 58C93.8569 58 102.282 66.6143 102.282 77.2856ZM150.35 80.1427C150.35 89.9446 142.612 97.857 132.954 97.857C123.296 97.857 115.5 89.9446 115.5 80.1427C115.5 70.3409 123.296 62.4285 132.954 62.4285C142.612 62.4285 150.35 70.3409 150.35 80.1427ZM83.3402 109.428C68.5812 109.428 39 116.95 39 131.928V143.714C39 147.25 41.8504 148 45.3343 148H121.346C124.83 148 127.68 147.25 127.68 143.714V131.928C127.68 116.95 98.0991 109.428 83.3402 109.428ZM126.804 110.853C127.707 110.871 128.485 110.886 129 110.886C143.759 110.886 174 116.95 174 131.929V141.571C174 145.107 171.15 148 167.666 148H134.854C135.551 146.007 135.995 143.821 135.995 141.571L135.75 131.071C135.75 121.51 130.136 117.858 124.162 113.971C122.772 113.067 121.363 112.15 120 111.143C119.981 111.123 119.962 111.098 119.941 111.07C119.893 111.007 119.835 110.931 119.747 110.886C121.343 110.747 124.485 110.808 126.804 110.853Z"></path>
          </svg>
        </span>
      </div>
    </div>
  </div>

  <!-- Name Section -->
  <div class="flex-1 flex flex-col">
    <span class="font-bold text-white">xTransferXO</span>
    <span class="text-sm text-gray-600">Boluwatife, Overcomer, +234 903 788 9592, You</span>
  </div>

  <!-- Action Buttons Section -->
  <div class="flex space-x-2 items-center">
    <button class="h-7 w-7 flex items-center justify-center text-gray-500 hover:text-gray-700" title="Subgroup switcher" aria-label="Subgroup switcher">
      <img src="https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/418406963_387499087298743_9129590649284943846_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIKT2EH8rZc8YE_BFD7rzBgvSk-IAI1DzBTl5A0J_kHPp&oe=6723353B&_nc_sid=5e03e0&_nc_cat=102" alt="" class="rounded-full h-7 w-7">
    </button>
    <button class="h-7 w-7 flex items-center justify-center text-gray-500 hover:text-gray-700" title="Search…" aria-label="Search">
      <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
        <title>search-alt</title>
        <path d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
      </svg>
    </button>
    <button class="h-7 w-7 flex items-center justify-center text-gray-500 hover:text-gray-700" title="Get the app for calling" aria-label="Get the app for calling">
      <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
        <title>video-call</title>
        <path d="M3.27096 7.31042C3 7.82381 3 8.49587 3 9.84V14.16C3 15.5041 3 16.1762 3.27096 16.6896C3.5093 17.1412 3.88961 17.5083 4.35738 17.7384C4.88916 18 5.58531 18 6.9776 18H13.1097C14.502 18 15.1982 18 15.7299 17.7384C16.1977 17.5083 16.578 17.1412 16.8164 16.6896C17.0873 16.1762 17.0873 15.5041 17.0873 14.16V9.84C17.0873 8.49587 17.0873 7.82381 16.8164 7.31042C16.578 6.85883 16.1977 6.49168 15.7299 6.26158C15.1982 6 14.502 6 13.1097 6H6.9776C5.58531 6 4.88916 6 4.35738 6.26158C3.88961 6.49168 3.5093 6.85883 3.27096 7.31042Z"></path>
        <path d="M18.7308 9.60844C18.5601 9.75994 18.4629 9.97355 18.4629 10.1974V13.8026C18.4629 14.0264 18.5601 14.2401 18.7308 14.3916L20.9567 16.3669C21.4879 16.8384 22.3462 16.4746 22.3462 15.778V8.22203C22.3462 7.52542 21.4879 7.16163 20.9567 7.63306L18.7308 9.60844Z"></path>
      </svg>
    </button>
    <button class="h-7 w-7 flex items-center justify-center text-gray-500 hover:text-gray-700" title="Menu" aria-label="Menu">
      <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="currentColor">
        <path d="M12 7c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0 6c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"></path>
      </svg>
    </button>
  </div>
</header> 
  </div>
</template>


<script setup lang="ts"> 
</script>