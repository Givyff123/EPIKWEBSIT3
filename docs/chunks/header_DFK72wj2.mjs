import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from './astro/server_BGNV8sEV.mjs';
import 'kleur/colors';
import 'html-escaper';
import './_@astro-renderers_CmxEMnKm.mjs';
import 'esm-env';
/* empty css                         */

function Dropdown($$payload) {

	$$payload.out += `<button id="GamesDropdown" class="svelte-onhqkg">Games</button> `;

	{
		$$payload.out += "<!--[!-->";
	}

	$$payload.out += `<!--]-->`;
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-hpnw4vwy> <a href="/" id="mainA" data-astro-cid-hpnw4vwy> <h1 id="Simon" data-astro-cid-hpnw4vwy>Simon</h1> </a> <button id="menu" class="mobile" data-astro-cid-hpnw4vwy> <img src="/icons/menu.svg" alt="" data-astro-cid-hpnw4vwy> </button> <nav data-astro-cid-hpnw4vwy> <a href="/skills" data-astro-cid-hpnw4vwy> <h1 id="skills-text" class="desktop" data-astro-cid-hpnw4vwy>Skills</h1> </a> ${renderComponent($$result, "Dropdown", Dropdown, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MS-PC-ANDY/Desktop/portfolio/src/components/Dropdown.svelte", "client:component-export": "default", "data-astro-cid-hpnw4vwy": true })} </nav> </header> `;
}, "C:/Users/MS-PC-ANDY/Desktop/portfolio/src/components/header.astro", void 0);

export { $$Header as $ };
