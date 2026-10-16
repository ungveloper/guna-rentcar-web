import { ServiceDetailsPage } from "@/components/ServiceDetailsPage";
import { serviceMetadata } from "@/lib/service-seo";

export const metadata = serviceMetadata("long-term");

export default function Page() {
  return <ServiceDetailsPage slug="long-term" />;
}
