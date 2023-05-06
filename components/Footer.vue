<script setup>
import { FOOTER_NAV } from "@/lib/constants/footer_navigation";
</script>

<template>
  <footer>
    <div class="md:flex md:items-center md:justify-between">
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          v-for="item in FOOTER_NAV"
          :key="item.name"
          :href="item.href"
          class="text-gray-400 hover:text-gray-500"
          target="_blank"
        >
          <span class="sr-only">{{ item.name }}</span>
          <component
            :is="item.icon"
            :size="24"
            class="stroke-orange-500"
            aria-hidden="true"
          />
        </a>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-xs leading-5 text-center text-gray-500">
          &copy; {{ new Date().getFullYear() }} Quickmerce, Inc. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
