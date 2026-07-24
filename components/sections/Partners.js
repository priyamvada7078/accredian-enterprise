import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import PartnerCard from "@/components/cards/PartnerCard";
import { partners } from "@/constants/partners";

export default function Partners() {
  return (
    <section id="partners" className="bg-brand-50/40 py-20 dark:bg-gray-900/40 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Partners" title="Built alongside institutions we trust" />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => <PartnerCard key={partner.name} {...partner} />)}
        </div>
      </Container>
    </section>
  );
}
