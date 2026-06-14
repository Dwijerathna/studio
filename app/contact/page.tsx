import { permanentRedirect } from "next/navigation";

/** `/contact` → contact form at `/initiate` (URL alias for nav and external links). */
export default function ContactPage() {
  permanentRedirect("/initiate");
}
