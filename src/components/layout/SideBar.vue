<template>
    <div class="w-full h-full  flex flex-col justify-between    ">
        <div class="flex w-full flex-col items-center space-y-3   flex-1 py-2">
            <!-- Links -->
            <div v-for="link in sideBarTabs " class="relative">
                <div class="w-10 h-10  cursor-pointer rounded-full flex justify-center items-center text-[#AEBAC1] transition duration-300 ease-in-out "
                    :class="{
                        'bg-[#374248]': link.title === activeTab,
                    }" @click="selectTab(link.title)">
                    <Icon :name="activeTab === link.title ? link.icon : `${link.icon}-outline`" />
                </div>

                <!-- tooltip -->
                <Tooltip :text="link.title" />

                <!-- active state -->
                <span class="absolute  inline-block right-0.5 top-0.5    h-2 w-2 rounded-full bg-green-400 ">
                </span>
            </div>

            <!-- Meta AI -->
            <div class="relative">
                <div @click="selectTab('meta')"
                    class="w-10 h-10  cursor-pointer rounded-full flex justify-center items-center  transition duration-300 ease-in-out "
                      :class="{
                        'bg-[#374248]': activeTab === 'settings',
                    }"
                    >
                    <img src="@/assets/images/meta-ai.png" class="h-6 w-6" />
                </div>

                <Tooltip text="Meta" />
            </div>
        </div>

        <div class="flex w-full flex-col items-center space-y-3     py-2">
            <div class="relative">
                <div @click="selectTab('settings')"
                    class="w-10 h-10  cursor-pointer rounded-full flex justify-center items-center text-[#AEBAC1] hover:bg-[#374248] transition duration-300 ease-in-out ">
                    <Icon :name="activeTab === 'settings' ? 'settings' : 'settings-outline'" />
                </div>

                <!-- tooltip -->
                <Tooltip text="Settings" />
            </div>

            <!-- Meta AI -->
            <div class="relative">
                <div @click="selectTab('profile')"
                    class="w-8 h-8  cursor-pointer rounded-full flex justify-center items-center   transition duration-300 ease-in-out "> 
                    <img src="@/assets/images/bg-light.png" class="h-full w-full rounded-full" />
                </div>
                <Tooltip text="Profile" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref,computed } from "vue";
import { useAppStore } from '@/stores/app';
const { setActiveTab } = useAppStore();

const activeTab = computed(() => useAppStore().activeTab)  
// const activeTab = ref('chats')
const sideBarTabs = [
    {
        title: 'chats',
        icon: 'chat',
    },
    {
        title: 'status',
        icon: 'status',
    },
    {
        title: 'channels',
        icon: 'newsletter',
    },
    {
        title: 'communities',
        icon: 'communities',
    },
]

const selectTab = (tab: string) => {
    // activeTab.value = tab
    console.log('65789')
    setActiveTab(tab);
};
</script>


<style scoped>
.relative:hover .opacity-0 {
    opacity: 1;
} 

</style>