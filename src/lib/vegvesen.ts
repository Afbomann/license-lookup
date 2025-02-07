import type { TVehicleInformation } from "../types";

const VEGVESEN_URL = import.meta.env.VEGVESEN_URL;
const VEGVESEN_API_KEY = import.meta.env.VEGVESEN_API_KEY;

export async function getVehicleInformation(
  licenseNumber: string
): Promise<TVehicleInformation | null> {
  try {
    const response = await fetch(
      `${VEGVESEN_URL}/enkeltoppslag/kjoretoydata?kjennemerke=${licenseNumber}`,
      {
        method: "GET",
        headers: { "SVV-Authorization": `Apikey ${VEGVESEN_API_KEY}` },
      }
    );

    switch (response.status) {
      case 200:
        const json = (await response.json()) as TVehicleInformation;
        return json;
      case 400:
        console.log(
          `Error while fetching vehicle information!\nStatus: 400 | Status text: ${response.statusText}`
        );
        break;
      case 403:
        console.log(
          `Error while fetching vehicle information!\nStatus: 403 | Status text: ${response.statusText}`
        );
        break;
      case 429:
        console.log(
          `Error while fetching vehicle information!\nStatus: 429 | Status text: ${response.statusText}`
        );
        break;
      default:
        console.log(
          `Error while fetching vehicle information!\nStatus: ${response.status} | Status text: ${response.statusText}`
        );
        break;
    }

    return null;
  } catch (err: unknown) {
    console.log(`Error while fetching vehicle information!\nError: ${err}`);
    return null;
  }
}
