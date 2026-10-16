import { ServiceDetailsPage } from "@/components/ServiceDetailsPage";
import { serviceMetadata } from "@/lib/service-seo";

export const metadata = serviceMetadata("short-term");

export default function Page() {
  return <ServiceDetailsPage slug="short-term" />;
}
