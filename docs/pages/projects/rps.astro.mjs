import { c as createComponent, r as renderTemplate, a as renderHead, b as renderComponent } from '../../chunks/astro/server_BGNV8sEV.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header } from '../../chunks/header_DFK72wj2.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CmxEMnKm.mjs';
import 'esm-env';
/* empty css                                    */

const CONTENT_REGEX = /[&<]/g;

/**
 * @template V
 * @param {V} value
 * @param {boolean} [is_attr]
 */
function escape_html(value, is_attr) {
	const str = String(value);

	const pattern = CONTENT_REGEX;
	pattern.lastIndex = 0;

	let escaped = '';
	let last = 0;

	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}

	return escaped + str.substring(last);
}

function Rps($$payload) {
	let user = "";
	let cpu = "";
	let result = "";

	console.log(user + cpu); // 
	$$payload.out += `<div class="svelte-1ooma8j"><button id="rock" class="svelte-1ooma8j">🪨</button> <button id="paper" class="svelte-1ooma8j">📄</button> <button id="scissors" class="svelte-1ooma8j">✂️</button></div> <div id="user" class="svelte-1ooma8j">${escape_html(user)}</div> <div id="cpu" class="svelte-1ooma8j">${escape_html(cpu)}</div> <div class="svelte-1ooma8j">${escape_html(result)}</div>`;
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="/global-styles.css"><title>Document</title><!-- http://localhost:5500/challenges/rps --><!-- 
        a button that says rock
        a button that says paper
        a button that says scissors
        div with id of "user"
        div with id of "cpu"
        div with id of "result"
     -->${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <div id="div"> ${renderComponent($$result, "Rps", Rps, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MS-PC-ANDY/Desktop/portfolio/src/pages/projects/rps/Rps.svelte", "client:component-export": "default" })} </div> </body></html>`;
}, "C:/Users/MS-PC-ANDY/Desktop/portfolio/src/pages/projects/rps/index.astro", void 0);

const $$file = "C:/Users/MS-PC-ANDY/Desktop/portfolio/src/pages/projects/rps/index.astro";
const $$url = "/projects/rps";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
