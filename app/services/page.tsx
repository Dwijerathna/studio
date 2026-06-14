import { redirect } from "next/navigation";

/** Legacy `/services` URL → homepage services section. */
export default function ServicesPage() {
  redirect("/#services");
}
