<template>
  <div>
    <div class="max-w-2xl px-4 mx-auto lg:max-w-none">
      <div class="max-w-3xl">
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Use it your way
        </p>
        <p class="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore harum
          recusandae cum molestiae iste odio quos ipsa repellendus accusantium
          similique.
        </p>
      </div>

      <div
        class="pt-10 mt-10 space-y-16 border-t border-gray-200 sm:mt-16 sm:pt-16"
      >
        <div
          v-for="feature in features"
          :key="feature.name"
          class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
        >
          <div class="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
            <h3 class="text-lg font-medium text-gray-900">
              {{ feature.name }}
            </h3>
            <p class="mt-2 text-sm text-gray-500">
              {{ feature.description }}
            </p>
          </div>
          <div class="flex-auto lg:col-span-7 xl:col-span-8">
            <div
              class="overflow-hidden bg-gray-100 rounded-lg aspect-h-2 aspect-w-5"
            >
              <img
                :src="feature.imageSrc"
                :alt="feature.imageAlt"
                class="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    name: "Adventure-ready",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat id illo officia autem ipsam cum aspernatur tempore, earum animi excepturi eaque? Odio rerum architecto totam debitis sit officiis reprehenderit nesciunt.",
    imageSrc: "/img/product_5.jpeg",
    imageAlt: "Printed photo of bag being tossed into the sky on top of grass.",
  },
  {
    name: "Minimal and clean",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsam dolorum ipsum necessitatibus, sint eveniet magnam. Consectetur reiciendis ipsam repellendus? Quibusdam, quidem rem! Necessitatibus eum sequi eos iusto qui? Nostrum?",
    imageSrc: "/img/product_6.jpeg",
    imageAlt: "Double stitched black canvas hook loop.",
  },
  {
    name: "Organized",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad vel facilis, quas totam accusantium odit tenetur asperiores illum magnam, iusto aperiam cum corrupti libero eos. Aliquid porro dolore vel perspiciatis.",
    imageSrc: "/img/product_7.jpeg",
    imageAlt: "Black canvas body with chrome zipper and key ring.",
  },
];
</script>
