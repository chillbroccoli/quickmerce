<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { FILTERS } from "~/lib/constants/product";

defineProps<{ mobileFiltersOpen: boolean }>();
const emit = defineEmits<{ (e: "toggleFiltersClose"): void }>();
</script>

<template>
  <TransitionRoot as="template" :show="mobileFiltersOpen">
    <Dialog
      as="div"
      class="relative z-40 lg:hidden"
      @close="emit('toggleFiltersClose')"
    >
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 z-40 flex">
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="translate-x-full"
        >
          <DialogPanel
            class="relative flex flex-col w-full h-full max-w-xs py-4 pb-6 ml-auto overflow-y-auto bg-white shadow-xl"
          >
            <div class="flex items-center justify-between px-4">
              <h2 class="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                class="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 hover:text-gray-500"
                @click="emit('toggleFiltersClose')"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            <!-- Filters -->
            <form class="mt-4">
              <Disclosure
                as="div"
                v-for="section in FILTERS"
                :key="section.name"
                class="pt-4 pb-4 border-t border-gray-200"
                v-slot="{ open }"
              >
                <fieldset>
                  <legend class="w-full px-2">
                    <DisclosureButton
                      class="flex items-center justify-between w-full p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span class="text-sm font-medium text-gray-900">{{
                        section.name
                      }}</span>
                      <span class="flex items-center ml-6 h-7">
                        <ChevronDownIcon
                          :class="[
                            open ? '-rotate-180' : 'rotate-0',
                            'h-5 w-5 transform',
                          ]"
                          aria-hidden="true"
                        />
                      </span>
                    </DisclosureButton>
                  </legend>
                  <DisclosurePanel class="px-4 pt-4 pb-2">
                    <div class="space-y-6">
                      <div
                        v-for="(option, optionIdx) in section.options"
                        :key="option.value"
                        class="flex items-center"
                      >
                        <input
                          :id="`${section.id}-${optionIdx}-mobile`"
                          :name="`${section.id}[]`"
                          :value="option.value"
                          type="checkbox"
                          class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                          :for="`${section.id}-${optionIdx}-mobile`"
                          class="ml-3 text-sm text-gray-500"
                          >{{ option.label }}</label
                        >
                      </div>
                    </div>
                  </DisclosurePanel>
                </fieldset>
              </Disclosure>
            </form>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
