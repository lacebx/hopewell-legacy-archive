import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageShell, PageHero } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import hero from "@/assets/ledger.jpg";

export const Route = createFileRoute("/contact")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Contact & Submit Family History | Hopewell Cemetery Association" },
      { name: "description", content: "Contact the Hopewell Cemetery Association, submit family histories, photographs, or oral histories." },
      { property: "og:image", content: hero },
    ],
  }),
});

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  surname: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10, "Please share a few sentences").max(2000),
});

function Page() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      surname: fd.get("surname"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path[0] as string] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Hopewell archive submission, ${parsed.data.name}`);
    const body = encodeURIComponent(
      `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nFamily surname: ${parsed.data.surname ?? "n/a"}\n\n${parsed.data.message}`
    );
    window.location.href = `mailto:HopewellLegacyOK@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Correspondence"
        title="Contact & Submit Family History"
        subtitle="Reach out to ask a question, to add a name, or to send a photograph that has been waiting in a shoebox for a generation."
        image={hero}
      />

      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">Direct contact</p>
              <ul className="mt-6 space-y-6 text-sm text-muted-foreground">
                <li>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary">Board Member</p>
                  <p className="mt-2 font-serif text-2xl text-foreground">Thomas Clark</p>
                </li>
                <li>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary">Email</p>
                  <a href="mailto:HopewellLegacyOK@gmail.com" className="mt-2 block font-serif text-xl text-foreground hover:text-primary">
                    HopewellLegacyOK@gmail.com
                  </a>
                </li>
                <li>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary">Telephone</p>
                  <a href="tel:+14054130526" className="mt-2 block font-serif text-xl text-foreground hover:text-primary">
                    405 · 413 · 0526
                  </a>
                </li>
                <li>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary">Status</p>
                  <p className="mt-2 font-serif text-base text-foreground">501(c)(3) nonprofit · Oklahoma</p>
                </li>
              </ul>
            </Reveal>

            <Reveal className="lg:col-span-8" delay={0.1}>
              <form onSubmit={onSubmit} className="space-y-8 border border-border bg-card/40 p-10">
                <div>
                  <p className="eyebrow">Submission</p>
                  <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">Add to the archive</h2>
                </div>

                {(["name", "email", "surname"] as const).map((field) => (
                  <div key={field}>
                    <label className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary">
                      {field === "surname" ? "Family surname (optional)" : field}
                    </label>
                    <input
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      maxLength={field === "email" ? 255 : 100}
                      className="mt-3 w-full border-b border-border bg-transparent py-3 font-serif text-lg text-foreground focus:border-primary focus:outline-none"
                    />
                    {errors[field] && <p className="mt-2 text-xs text-destructive">{errors[field]}</p>}
                  </div>
                ))}

                <div>
                  <label className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary">
                    Your story, correction, or contribution
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    maxLength={2000}
                    className="mt-3 w-full border border-border bg-transparent p-4 font-serif text-base text-foreground focus:border-primary focus:outline-none"
                  />
                  {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs italic text-muted-foreground">
                    For photographs or large files, please reply with attachments
                    after this initial message.
                  </p>
                  <button
                    type="submit"
                    className="border border-primary bg-primary px-8 py-4 text-xs uppercase tracking-[0.28em] text-primary-foreground transition hover:bg-transparent hover:text-primary"
                  >
                    Send Submission
                  </button>
                </div>

                {sent && (
                  <p className="font-serif text-base italic text-primary">
                    Thank you. Your message is being prepared for delivery. Your
                    email client should open momentarily.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
