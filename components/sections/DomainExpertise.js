"use client";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import DomainCard from "@/components/cards/DomainCard";
import { domains } from "@/constants/domains";

export default function DomainExpertise() {
  return (
    <section id="domain-expertise" className="bg-brand-50/40 py-20 dark:bg-gray-900/40 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Domain Expertise" title="Programs across the domains that matter" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain) => <DomainCard key={domain.title} {...domain} />)}
        </div>
      </Container>
    </section>
  );
}
