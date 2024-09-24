<template>
  <div data-tab="4" class="sticky py-1        " aria-label="Archived">
    <header class="flex items-center justify-between  text-white px-4 py-1  ">
      <div class="flex items-center space-x-4 flex-1 ">
        <div class="text-xl font-semibold w-full">Chats</div>
      </div>
      <!-- <Icon name="communities"  /> -->

      <div class="flex space-x-3">
        <!-- New chat button -->
        <button aria-label="New chat" class="p-2 rounded-full hover:bg-gray-200">
          <svg viewBox="0 0 24 24" height="24" width="24" fill="none">
            <title>new-chat-outline</title>
            <path
              d="M9.53277 12.9911H11.5086V14.9671C11.5086 15.3999 11.7634 15.8175 12.1762 15.9488C12.8608 16.1661 13.4909 15.6613 13.4909 15.009V12.9911H15.4672C15.9005 12.9911 16.3181 12.7358 16.449 12.3226C16.6659 11.6381 16.1606 11.0089 15.5086 11.0089H13.4909V9.03332C13.4909 8.60007 13.2361 8.18252 12.8233 8.05119C12.1391 7.83391 11.5086 8.33872 11.5086 8.991V11.0089H9.49088C8.83941 11.0089 8.33411 11.6381 8.55097 12.3226C8.68144 12.7358 9.09947 12.9911 9.53277 12.9911Z"
              fill="currentColor"></path>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M0.944298 5.52617L2.99998 8.84848V17.3333C2.99998 18.8061 4.19389 20 5.66665 20H19.3333C20.8061 20 22 18.8061 22 17.3333V6.66667C22 5.19391 20.8061 4 19.3333 4H1.79468C1.01126 4 0.532088 4.85997 0.944298 5.52617ZM4.99998 8.27977V17.3333C4.99998 17.7015 5.29845 18 5.66665 18H19.3333C19.7015 18 20 17.7015 20 17.3333V6.66667C20 6.29848 19.7015 6 19.3333 6H3.58937L4.99998 8.27977Z"
              fill="currentColor"></path>
          </svg>
        </button>

        <!-- Menu button -->
        <button aria-label="Menu" class="p-2 rounded-full hover:bg-gray-200">
          <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor" class="h-6 w-6">
            <title>menu</title>
            <path
              d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z">
            </path>
          </svg>
        </button>
      </div>
    </header>

    <!-- Archived Button -->
    <div data-tab="4" class="text-white relative w-full  flex items-center space-x-3 px-3 py-2" aria-label="Archived">
      <div class="flex items-center w-12 justify-center">
        <div class="flex items-center justify-center">
          <span aria-hidden="true" data-icon="archived-outline">
            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none">
              <title>archived-outline</title>
              <path
                d="M21.4889 4.47778L19.9444 2.61111C19.6444 2.23333 19.1889 2 18.6667 2H5.33333C4.81111 2 4.35556 2.23333 4.04444 2.61111L2.51111 4.47778C2.18889 4.85556 2 5.35556 2 5.88889V19.7778C2 21 3 22 4.22222 22H19.7778C21 22 22 21 22 19.7778V5.88889C22 5.35556 21.8111 4.85556 21.4889 4.47778ZM5.6 4.22222H18.4L19.3 5.3H4.71111L5.6 4.22222ZM4.22222 19.7778V7.55556H19.7778V19.7778H4.22222ZM13.6111 9.77778H10.3889V13.1111H7.55556L12 17.5556L16.4444 13.1111H13.6111V9.77778Z"
                fill="currentColor"></path>
            </svg>
          </span>
        </div>
      </div>

      <div class="flex-1 flex items-center space-x-2 ">
        <div class="font-medium text-sm ">Archived</div>

        <div class="  text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
          (5)
        </div>
      </div>
    </div>

  </div>
</template>