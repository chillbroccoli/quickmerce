<script setup lang="ts">
import { IconPlus } from "@tabler/icons-vue";
import { FILTERS } from "~/lib/constants/product";

const emit = defineEmits<{ (e: "toggleFiltersOpen"): void }>();
</script>

<template>
  <aside>
    <h2 class="sr-only">Filters</h2>

    <button
      type="button"
      class="inline-flex items-center lg:hidden"
      @click="emit('toggleFiltersOpen')"
    >
      <span class="text-sm font-medium text-gray-700">Filters</span>
      <IconPlus
        :size="24"
        class="flex-shrink-0 ml-1 stroke-gray-400"
        aria-hidden="true"
      />
    </button>

    <div class="hidden lg:block">
      <form class="space-y-10 divide-y divide-gray-200">
        <div
          v-for="(section, sectionIdx) in FILTERS"
          :key="section.name"
          :class="sectionIdx === 0 ? null : 'pt-10'"
        >
          <fieldset>
            <legend class="block text-sm font-medium text-gray-900">
              {{ section.name }}
            </legend>
            <div class="pt-6 space-y-3">
              <div
                v-for="(option, optionIdx) in section.options"
                :key="option.value"
                class="flex items-center"
              >
                <input
                  :id="`${section.id}-${optionIdx}`"
                  :name="`${section.id}[]`"
                  :value="option.value"
                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  :for="`${section.id}-${optionIdx}`"
                  class="ml-3 text-sm text-gray-600"
                  >{{ option.label }}</label
                >
              </div>
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  </aside>
</template>
