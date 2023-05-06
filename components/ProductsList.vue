<script setup lang="ts">
const { data: products } = await useFetch("/api/products", {
  query: {
    limit: 9,
  },
});
</script>

<template>
  <section
    v-if="products"
    aria-labelledby="product-heading"
    class="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
  >
    <h2 id="product-heading" class="sr-only">Products</h2>

    <div
      class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="relative flex flex-col overflow-hidden bg-white border border-gray-200 rounded-lg group"
      >
        <div
          class="bg-gray-200 aspect-h-4 aspect-w-3 sm:aspect-none group-hover:opacity-75 sm:h-96"
        >
          <img
            :src="product.image"
            :alt="product.model"
            class="object-cover object-center w-full h-full sm:h-full sm:w-full"
          />
        </div>
        <div class="flex flex-col flex-1 p-4 space-y-2">
          <h3 class="text-sm font-medium text-gray-900">
            <a href="#">
              <span aria-hidden="true" class="absolute inset-0" />
              {{ product.model }}
            </a>
          </h3>
          <div class="flex flex-col justify-end flex-1">
            <p class="text-sm italic text-gray-500">
              {{ product.color }}
            </p>
            <p class="text-base font-medium text-gray-900">
              {{ product.price }} $
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
