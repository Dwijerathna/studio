import CapabilitiesStrip from "@/components/CapabilitiesStrip";
import CollectionGrid from "@/components/CollectionGrid";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import ProcessPipeline from "@/components/ProcessPipeline";
import { servicesGraph } from "@/lib/jsonLd";

export default function Home() {
  return (
    <main>
      <JsonLd data={servicesGraph()} />
      <Hero name="Dinitha" />
      <CapabilitiesStrip />
      <CollectionGrid />
      <ProcessPipeline />
    </main>
  );
}
