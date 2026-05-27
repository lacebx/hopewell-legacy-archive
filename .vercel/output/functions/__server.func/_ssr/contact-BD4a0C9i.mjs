import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as PageShell, P as PageHero, R as Reveal } from "./reveal-THcP2mTz.mjs";
import { l as ledger } from "./router-WGWV-_zI.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const schema = objectType({
  name: stringType().trim().min(1, "Name required").max(100),
  email: stringType().trim().email("Valid email required").max(255),
  surname: stringType().trim().max(100).optional(),
  message: stringType().trim().min(10, "Please share a few sentences").max(2e3)
});
function Page() {
  const [errors, setErrors] = reactExports.useState({});
  const [sent, setSent] = reactExports.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      surname: fd.get("surname"),
      message: fd.get("message")
    });
    if (!parsed.success) {
      const errs = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path[0]] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Hopewell archive submission, ${parsed.data.name}`);
    const body = encodeURIComponent(`Name: ${parsed.data.name}
Email: ${parsed.data.email}
Family surname: ${parsed.data.surname ?? "n/a"}

${parsed.data.message}`);
    window.location.href = `mailto:HopewellLegacyOK@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Correspondence", title: "Contact & Submit Family History", subtitle: "Reach out to ask a question, to add a name, or to send a photograph that has been waiting in a shoebox for a generation.", image: ledger }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "lg:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Direct contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 space-y-6 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary", children: "Board Member" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-serif text-2xl text-foreground", children: "Thomas Clark" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:HopewellLegacyOK@gmail.com", className: "mt-2 block font-serif text-xl text-foreground hover:text-primary", children: "HopewellLegacyOK@gmail.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary", children: "Telephone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+14054130526", className: "mt-2 block font-serif text-xl text-foreground hover:text-primary", children: "405 · 413 · 0526" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-serif text-base text-foreground", children: "501(c)(3) nonprofit · Oklahoma" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-8", delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-8 border border-border bg-card/40 p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Submission" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-serif text-3xl text-foreground md:text-4xl", children: "Add to the archive" })
        ] }),
        ["name", "email", "surname"].map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary", children: field === "surname" ? "Family surname (optional)" : field }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: field, type: field === "email" ? "email" : "text", maxLength: field === "email" ? 255 : 100, className: "mt-3 w-full border-b border-border bg-transparent py-3 font-serif text-lg text-foreground focus:border-primary focus:outline-none" }),
          errors[field] && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-destructive", children: errors[field] })
        ] }, field)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary", children: "Your story, correction, or contribution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 6, maxLength: 2e3, className: "mt-3 w-full border border-border bg-transparent p-4 font-serif text-base text-foreground focus:border-primary focus:outline-none" }),
          errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-destructive", children: errors.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs italic text-muted-foreground", children: "For photographs or large files, please reply with attachments after this initial message." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "border border-primary bg-primary px-8 py-4 text-xs uppercase tracking-[0.28em] text-primary-foreground transition hover:bg-transparent hover:text-primary", children: "Send Submission" })
        ] }),
        sent && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-base italic text-primary", children: "Thank you. Your message is being prepared for delivery. Your email client should open momentarily." })
      ] }) })
    ] }) }) })
  ] });
}
export {
  Page as component
};
