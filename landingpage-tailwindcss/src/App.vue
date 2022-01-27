<script setup>
  const menus = ['Home','About us','Blogs','Contact'];
  const features = [
    {
    icon: './src/icon/briefcase.svg',
    title: "Work-Life Balance",
    description:
      "Many remote jobs also come with flexible schedules, which means that workers can start and end their day as they choose.",
    color: "bg-orange",
  },
  {
    icon: './src/icon/location.svg',
    title: "Work Anywhere",
    description:
      "Having access to a broader range of job opportunities that aren’t limited by geographic location. This can be especially helpful.",
    color: "bg-blue",
  },
  {
    icon: './src/icon/profile.svg',
    title: "Improved Inclusivity",
    description:
      "Remote work enables companies to embrace diversity and inclusion by hiring people from different backgrounds.",
    color: "bg-pink",
  },
  ];
</script>

<template>
  <div class="w-full min-h-screen font-sans text-gray-900">
    <div class="bg-gradient-to-bottom from-[#f03232] to-white">
      <img src="/img/blob.svg" class="absolute top-0 right-0 pointer-event-none">
      <div class="px-6 mx-auto max-w-6xl">
        <div class="flex justify-between items-center py-10">
          <img src="./icon/logo.svg" alt="">
          <nav class="md:flex hidden md:items-center md:space-x-10">
            <a href="#"  v-for="menu in menus" :key="menu" class="text-gray-700 hover:text-gray-900">{{menu}}</a>
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-800">Try Now</a>
          </nav>
          <button class="md:hidden p-4">
            <img src="./icon/menu.svg" class="w-6 h-6 text-gray-800">
          </button>
        </div>
      </div>
    </div>
    <div class="px-6 mx-auto max-w-6xl">
      <div class="flex flex-col-reverse items-center md:flex-row lg:items-end">
        <div class="pt-24 pr-8 pb-24 text-center md:pb-12 md:w-1/2 md:text-left">
          <h1 class=" text-5xl md:text-6xl font-blod font-display">Daripada Stres <span class="relative after:content-[url(/img/scratch.svg)] after:absolute after:-top-1 after:-right-7 after:-z-1">
          Trading</span> Mending <span class="relative after:content-[url(/img/decoration.svg)] after:absolute after:-bottom-2 after:-right-7 after:-z-1">Ngoding</span></h1>
          <p class="pt-8 text-lg md:max-w-md leading-relaxed text-gray-500 md:text-xl">kerja dari rumah sangatlah asyik dan seru, saya dapat belajar dengan sempurna sampai saya ingin bundir di tempat</p>
          <div class="flex justify-center items-center pt-12 space-x-6 md:justify-start">
            <button class="flex justify-center items-center py-4 px-8 font-blod  traciking-wide leading-7 text-white bg-blue-600 rounded-xl hover-shadow-xl">Get Tips</button>
            <button class="flex items-center">
              <img src="./icon/play-button.svg" class="drop-shadow-lg hover:drop-shadow-xl" alt="">
              <span class="pl-4 font-bold tracking-wide">Learn More</span>
              </button>
          </div>
        </div>
        <div class="w-1/2 flex items-end border-b border-gray-400">
          <img src="../public/img/illustration.svg" alt="">
        </div>
      </div>
    </div>
    <div class="bg-gray-58">
      <div class="py-12 px-6 mx-auto max-w-6xl">
        <div class="flex flex-col md:flex-row gap-5">
          <div v-for="feature in features" :key="feature" class="flex flex-col p-8 space-y-4 bg-white rounded-lg border border-gray-200 transition-shadow duration-500 ease-out cursor-pointer hover:shadow-xl">
            <div class="flex items-center space-x-3">
              <div class="relative">
                <span :class="feature.color" class="absolute -top-3 left-7 w-3 h-3 rounded-full opacity-50"/>
              </div>
              <img v-bind:src="feature.icon" class="relative"/>
              <div class="relative">
                <span :class="feature.color" class="absolute right-0 bottom-1 w-12 h-1 opacity-50"/>
                <h2 class="text-xl font-display relative">{{feature.title}}</h2>
              </div>
            </div>
            <p class="text-sm leading-relaxed text-gray-500">{{feature.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>