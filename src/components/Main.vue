<script setup lang="ts">
import "../assets/globals.css";
import { ref } from "vue";
import SearchBar from "./SearchBar.vue";
import VehicleInformation from "./VehicleInformation.vue";
import type { TVehicleInformation } from "../types";

const loading = ref<boolean>(false);
const noResult = ref<boolean>(false);
const vehicleInformation = ref<TVehicleInformation | null>(null);

async function search(input: string) {
  if (!input.trim()) return;

  try {
    loading.value = true;
    vehicleInformation.value = null;

    const response = await fetch(`/api/get-vehicle-information/${input}`);

    loading.value = false;

    if (response.status == 200) {
      const json = (await response.json()) as TVehicleInformation;
      vehicleInformation.value = json;
      noResult.value = false;
    } else {
      noResult.value = true;
      console.log("Error while fetching vehicle information!");
    }
  } catch {
    console.log("Error while fetching vehicle information!");
  }
}
</script>

<template>
  <h2 class="text-xl lg:text-2xl text-center mt-[10dvh]">License Lookup</h2>

  <SearchBar :search="search" />

  <p
    class="text-base lg:text-lg text-center mt-[3dvh] text-gray-500"
    v-if="loading || noResult"
  >
    {{ loading ? "Laster..." : "Ingen resultater." }}
  </p>

  <VehicleInformation
    v-if="vehicleInformation"
    :vehicle-information="vehicleInformation"
  />
</template>
