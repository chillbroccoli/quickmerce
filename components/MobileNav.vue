<script setup lang="ts">
import { DisclosurePanel, DisclosureButton } from "@headlessui/vue";
import { nav } from "@/lib/constants";
const NuxtLink = resolveComponent("nuxt-link");
</script>

<template>
  <DisclosurePanel class="sm:hidden">
    <div class="pt-2 pb-3 space-y-1">
      <template v-for="item in nav" :key="item.id">
        <DisclosureButton
          :as="NuxtLink"
          :to="item.href"
          class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          active-class="text-orange-700 border-orange-500 bg-orange-50"
        >
          {{ item.name }}
        </DisclosureButton>
      </template>
    </div>
  </DisclosurePanel>
</template>
