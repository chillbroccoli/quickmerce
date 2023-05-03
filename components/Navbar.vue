<script setup lang="ts">
import { Disclosure } from "@headlessui/vue";
import { nav } from "~/lib/constants/navbar";
</script>

<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex items-center flex-shrink-0">
            <img
              class="w-auto h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=600"
              alt="Your Company"
            />
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <template v-for="item in nav" :key="item.id">
              <NuxtLink
                :to="item.href"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-orange-300 hover:text-gray-700"
                active-class="inline-flex items-center px-1 pt-1 text-sm font-medium !text-orange-600 border-b-2 !border-orange-500"
                >{{ item.name }}</NuxtLink
              >
            </template>
          </div>
        </div>

        <div class="hidden sm:ml-6 sm:flex sm:items-center gap-x-4">
          <button
            type="button"
            class="px-3 py-2 text-sm font-semibold text-white bg-orange-600 rounded-md shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Sign in
          </button>
          <button
            type="button"
            class="px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-orange-300 hover:bg-orange-50"
          >
            Sign up
          </button>
        </div>

        <div class="flex items-center -mr-2 sm:hidden">
          <MobileMenuButton :open="open" />
        </div>
      </div>
    </div>

    <MobileNav />
  </Disclosure>
</template>
