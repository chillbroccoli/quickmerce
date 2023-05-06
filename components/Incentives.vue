<script setup lang="ts">
import { INCENTIVES } from "~/lib/constants/incentives";
</script>

<template>
  <div>
    <div
      class="grid max-w-2xl grid-cols-1 px-4 mx-auto gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3"
    >
      <div
        v-for="incentive in INCENTIVES"
        :key="incentive.name"
        class="text-center sm:flex sm:text-left lg:block lg:text-center"
      >
        <div class="sm:flex-shrink-0">
          <div class="flex items-center justify-center">
            <component
              :is="incentive.icon"
              :size="24"
              class="stroke-orange-500"
            ></component>
          </div>
        </div>
        <div class="mt-3 sm:ml-3 sm:mt-0 lg:ml-0 lg:mt-3">
          <h3 class="text-sm font-medium text-gray-900">
            {{ incentive.name }}
          </h3>
          <p class="mt-2 text-sm text-gray-500">
            {{ incentive.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
