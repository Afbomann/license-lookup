<script setup lang="ts">
import { ref } from "vue";

defineProps<{ search: (input: string) => void }>();

const input = ref<string>("");
</script>

<template>
  <form
    @submit.prevent="search(input)"
    class="w-[600px] max-w-[85%] mx-auto mt-[2dvh] flex gap-[2dvh]"
  >
    <input
      v-model="input"
      class="flex-1 bg-slate-200 rounded-md outline outline-slate-300 px-[8px] py-[4px] text-sm lg:text-base"
      type="text"
      placeholder="search for a license number ..."
    />
    <input
      class="bg-green-400 px-[15px] py-[4px] rounded-md text-sm lg:text-base cursor-pointer"
      type="submit"
      value="Search"
    />
  </form>
</template>
