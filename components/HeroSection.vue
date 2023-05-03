<template>
  <div class="relative px-6 py-32 bg-gray-800 sm:px-12 sm:py-40 lg:px-16">
    <div class="absolute inset-0 overflow-hidden">
      <img
        src="/img/hero_1.jpeg"
        alt=""
        class="object-cover object-center w-full h-full"
      />
    </div>
    <div
      aria-hidden="true"
      class="absolute inset-0 bg-gray-900 bg-opacity-50"
    />
    <div
      class="relative flex flex-col items-center max-w-3xl mx-auto text-center"
    >
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Highest quality products
      </h2>
      <p class="mt-3 text-xl text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
        delectus dolorem iste officiis tempore atque nobis dolore accusamus
        adipisci corrupti.
      </p>
      <NuxtLink
        :to="{ path: '/products' }"
        class="block w-full px-8 py-3 mt-8 text-base font-medium text-white border border-transparent rounded-md bg-orange-500/80 hover:bg-orange-500/70 sm:w-auto"
        >Check out</NuxtLink
      >
    </div>
  </div>
</template>
