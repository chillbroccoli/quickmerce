<script setup lang="ts">
import { DisclosureButton } from "@headlessui/vue";
import { IconMenu2, IconX } from "@tabler/icons-vue";
defineProps<{ open: boolean }>();
</script>

<template>
  <DisclosureButton
    class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
  >
    <span class="sr-only">Open main menu</span>
    <IconMenu2 v-if="!open" class="block w-6 h-6" aria-hidden="true" />
    <IconX v-else class="block w-6 h-6" aria-hidden="true" />
  </DisclosureButton>
</template>
