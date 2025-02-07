import { getVehicleInformation } from "../../../lib/vegvesen";

export async function GET({
  params,
}: {
  params: { licenseNumber: string };
}): Promise<Response> {
  const licenseNumber = params.licenseNumber;

  if (!licenseNumber)
    return new Response(null, { status: 400, statusText: "MISSING_PARAMS" });

  try {
    const vehicleInformation = await getVehicleInformation(
      params.licenseNumber
    );

    if (!vehicleInformation)
      return new Response(null, { status: 404, statusText: "NOT_FOUND" });

    return new Response(JSON.stringify(vehicleInformation), {
      status: 200,
      statusText: "OK",
    });
  } catch {
    return new Response(null, { status: 500, statusText: "ERROR" });
  }
}
