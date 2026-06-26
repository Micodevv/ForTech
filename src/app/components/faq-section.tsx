import { SectionHeading } from "./section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useI18n } from "../i18n";
import { faqs } from "../data";

export function FaqSection() {
  const { tr } = useI18n();

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow={tr({ fr: "Questions fréquentes", en: "FAQ" })}
          title={tr({ fr: "Vous avez des questions ?", en: "Got questions?" })}
        />

        <Accordion type="single" collapsible className="mt-10 flex flex-col gap-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-5 last:border-b"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5" style={{ fontWeight: 600 }}>
                {tr(f.q)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {tr(f.a)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
