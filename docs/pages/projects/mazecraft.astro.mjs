import { c as createComponent, r as renderTemplate, a as renderHead, b as renderComponent } from '../../chunks/astro/server_BGNV8sEV.mjs';
import 'kleur/colors';
import 'html-escaper';
import { p as push, a as pop } from '../../chunks/_@astro-renderers_CmxEMnKm.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CmxEMnKm.mjs';
import 'esm-env';
import { $ as $$Header } from '../../chunks/header_DFK72wj2.mjs';

function Maze($$payload, $$props) {
	push();

	$$payload.out += `<canvas id="canvas" width="1000" height="1000"></canvas> <button class="maze">Maze1</button> <button class="maze">Maze2</button> <button class="maze">Maze3</button>`;
	pop();
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="style.css"><title>🌎New Tab</title><link rel="stylesheet" href="/global-styles.css">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Maze", Maze, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MS-PC-ANDY/Desktop/portfolio/src/pages/projects/mazecraft/Maze.svelte", "client:component-export": "default" })}</body></html>`;
}, "C:/Users/MS-PC-ANDY/Desktop/portfolio/src/pages/projects/mazecraft/index.astro", void 0);

const $$file = "C:/Users/MS-PC-ANDY/Desktop/portfolio/src/pages/projects/mazecraft/index.astro";
const $$url = "/projects/mazecraft";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$Index,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
