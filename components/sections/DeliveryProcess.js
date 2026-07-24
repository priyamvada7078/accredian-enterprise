import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import StepCard from "@/components/cards/StepCard";

const steps = [
  { title: "Enrollment & onboarding", description: "Eligibility check, orientation, and access to the learning platform." },
  { title: "Cohort formation", description: "Grouped with peers at a similar stage for structured peer learning." },
  { title: "Live sessions", description: "Weekly live classes with faculty, recorded for later access." },
  { title: "Project-based learning", description: "Assignments and capstones tied to real business problems." },
  { title: "Mentorship checkpoints", description: "Regular 1:1s to track progress and unblock questions." },
  { title: "Certification & placement support", description: "Credentialing plus resume, interview, and referral support." },
];

export default function DeliveryProcess() {
  return (
    <section id="delivery-process" className="bg-brand-50/40 py-20 dark:bg-gray-900/40 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Delivery Process" title="From enrollment to placement" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => <StepCard key={step.title} index={index + 1} {...step} />)}
        </div>
      </Container>
    </section>
  );
}
