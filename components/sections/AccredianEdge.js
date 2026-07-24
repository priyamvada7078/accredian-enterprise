"use client";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard from "@/components/cards/FeatureCard";
import { features } from "@/constants/features";

export default function AccredianEdge() {
  return (
    <section id="accredian-edge" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="The Accredian Edge"
          title="What makes our programs different"
          subtitle="Not another course catalog — a structure built around accountability and outcomes."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
        </div>
      </Container>
    </section>
  );
}
