import { getBannerData } from "@/app/api/api";
import ServicesClient from "./ServicesClient";
import { ServicesSectionProps } from "@/types";

export default async function ServicesSection({ slug }: ServicesSectionProps) {
  let servicesData = null;

  try {
    const response = await getBannerData(slug);
    if (response?.success && response?.data) {
      servicesData = response.data;
    }
  } catch (error) {
    console.error("Failed to fetch services data:", error);
  }

  if (!servicesData || !servicesData.header || !servicesData.services) {
    return null;
  }

  return <ServicesClient header={servicesData.header} services={servicesData.services} />;
}

