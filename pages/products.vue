<script setup lang="ts">
const mobileFiltersOpen = ref(false);

const toggleFiltersOpen = () => (mobileFiltersOpen.value = true);
const toggleFiltersClose = () => (mobileFiltersOpen.value = false);
</script>

<template>
  <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
    <MobileFilterDialog
      @toggle-filters-close="toggleFiltersClose"
      :mobile-filters-open="mobileFiltersOpen"
    />

    <main>
      <div class="pt-12 pb-10 border-b border-gray-200">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900">
          New Arrivals
        </h1>
        <p class="mt-4 text-base text-gray-500">
          Checkout out the latest release of Basic Tees, new and improved with
          four openings!
        </p>
      </div>

      <div class="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
        <Filters @toggle-filters-open="toggleFiltersOpen" />

        <ProductsList />
      </div>
    </main>
  </div>
</template>
