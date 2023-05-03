<script setup lang="ts">
const { data: products } = await useFetch("/api/products", {
  query: {
    limit: 4,
  },
});
</script>

<template>
  <div class="bg-white">
    <div>
      <h2 class="text-xl font-bold text-gray-900">Featured products</h2>

      <div
        class="grid grid-cols-1 mt-8 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        <div v-for="product in products" :key="product.id">
          <NuxtLink :to="{ path: `/products/${product.id}` }">
            <div class="relative">
              <div class="relative w-full overflow-hidden rounded-lg h-72">
                <img
                  :src="product.image"
                  :alt="product.model"
                  class="object-cover object-center w-full h-full"
                />
              </div>

              <div class="relative mt-4">
                <h3 class="text-sm font-medium text-gray-900 capitalize">
                  {{ product.model }}
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
              </div>

              <div
                class="absolute inset-x-0 top-0 flex items-end justify-end p-4 overflow-hidden rounded-lg h-72"
              >
                <div
                  aria-hidden="true"
                  class="absolute inset-x-0 bottom-0 opacity-50 h-36 bg-gradient-to-t from-black"
                />
                <p class="relative text-lg font-semibold text-white">
                  {{ product.price }}
                </p>
              </div>
            </div>
          </NuxtLink>

          <div class="mt-6">
            <button
              class="relative flex items-center justify-center w-full px-8 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-orange-500/90 hover:bg-orange-500/80"
            >
              Add to bag<span class="sr-only">, {{ product.model }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
