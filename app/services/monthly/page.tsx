import { ServiceDetailsPage } from "@/components/ServiceDetailsPage";
import { serviceMetadata } from "@/lib/service-seo";

export const metadata = serviceMetadata("monthly");

export default function Page() {
  return <ServiceDetailsPage slug="monthly" />;
}
