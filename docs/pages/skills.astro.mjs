import { c as createComponent, r as renderTemplate, d as addAttribute, a as renderHead, b as renderComponent, e as createAstro } from '../chunks/astro/server_BGNV8sEV.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header } from '../chunks/header_DFK72wj2.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CmxEMnKm.mjs';

const $$Astro = createAstro();
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="/global-styles.css"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Skills</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <h1>Skills</h1> <ul> <li>JS</li> <li>HTML</li> <li>CSS</li> <li>Svelte</li> <li>Astro</li> <li>Python</li> </ul> </body></html>`;
}, "C:/Users/MS-PC-ANDY/Desktop/portfolio/src/pages/skills.astro", void 0);

const $$file = "C:/Users/MS-PC-ANDY/Desktop/portfolio/src/pages/skills.astro";
const $$url = "/skills";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Skills,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
