"use client";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import StatCard from "@/components/cards/StatCard";
import { stats } from "@/constants/stats";

export default function TrackRecord() {
  return (
    <section id="track-record" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Track Record"
          title="Numbers that reflect real outcomes"
          subtitle="Every program is measured against learner outcomes, not vanity metrics."
        />
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
        </div>
      </Container>
    </section>
  );
}
