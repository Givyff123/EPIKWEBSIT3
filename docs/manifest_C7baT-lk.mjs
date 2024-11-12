import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { f as decodeKey } from './chunks/astro/server_BGNV8sEV.mjs';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/MS-PC-ANDY/Desktop/portfolio/","adapterName":"","routes":[{"file":"file:///C:/Users/MS-PC-ANDY/Desktop/portfolio/dist/projects/mazecraft/mazes","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects/mazecraft/mazes","isIndex":false,"type":"endpoint","pattern":"^\\/projects\\/mazecraft\\/mazes\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"mazecraft","dynamic":false,"spread":false}],[{"content":"mazes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/mazecraft/mazes.js","pathname":"/projects/mazecraft/mazes","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/MS-PC-ANDY/Desktop/portfolio/dist/projects/mazecraft/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects/mazecraft","isIndex":true,"type":"page","pattern":"^\\/projects\\/mazecraft\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"mazecraft","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/mazecraft/index.astro","pathname":"/projects/mazecraft","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/MS-PC-ANDY/Desktop/portfolio/dist/projects/monster/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects/monster","isIndex":true,"type":"page","pattern":"^\\/projects\\/monster\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"monster","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/monster/index.astro","pathname":"/projects/monster","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/MS-PC-ANDY/Desktop/portfolio/dist/projects/rps/rps","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects/rps/rps","isIndex":false,"type":"endpoint","pattern":"^\\/projects\\/rps\\/rps\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"rps","dynamic":false,"spread":false}],[{"content":"rps","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/rps/rps.js","pathname":"/projects/rps/rps","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/MS-PC-ANDY/Desktop/portfolio/dist/projects/rps/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects/rps","isIndex":true,"type":"page","pattern":"^\\/projects\\/rps\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"rps","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/rps/index.astro","pathname":"/projects/rps","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/MS-PC-ANDY/Desktop/portfolio/dist/skills/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/skills","isIndex":false,"type":"page","pattern":"^\\/skills\\/?$","segments":[[{"content":"skills","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/skills.astro","pathname":"/skills","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/MS-PC-ANDY/Desktop/portfolio/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/MS-PC-ANDY/Desktop/portfolio/src/pages/projects/mazecraft/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/MS-PC-ANDY/Desktop/portfolio/src/pages/projects/monster/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/MS-PC-ANDY/Desktop/portfolio/src/pages/projects/rps/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/MS-PC-ANDY/Desktop/portfolio/src/pages/skills.astro",{"propagation":"none","containsHead":true}],["C:/Users/MS-PC-ANDY/Desktop/portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/projects/mazecraft/mazes@_@js":"pages/projects/mazecraft/mazes.astro.mjs","\u0000@astro-page:src/pages/projects/mazecraft/index@_@astro":"pages/projects/mazecraft.astro.mjs","\u0000@astro-page:src/pages/projects/monster/index@_@astro":"pages/projects/monster.astro.mjs","\u0000@astro-page:src/pages/projects/rps/rps@_@js":"pages/projects/rps/rps.astro.mjs","\u0000@astro-page:src/pages/projects/rps/index@_@astro":"pages/projects/rps.astro.mjs","\u0000@astro-page:src/pages/skills@_@astro":"pages/skills.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_C7baT-lk.mjs","C:/Users/MS-PC-ANDY/Desktop/portfolio/src/pages/projects/mazecraft/Maze.svelte":"_astro/Maze.DkCZ-Lrr.js","C:/Users/MS-PC-ANDY/Desktop/portfolio/src/pages/projects/rps/Rps.svelte":"_astro/Rps.BnOg6G0J.js","C:/Users/MS-PC-ANDY/Desktop/portfolio/src/components/Dropdown.svelte":"_astro/Dropdown.Doh6qyY2.js","C:/Users/MS-PC-ANDY/Desktop/portfolio/src/pages/projects/monster/MonsterGame.svelte":"_astro/MonsterGame.Cd-roG50.js","@astrojs/svelte/client-v5.js":"_astro/client-v5.RXFErgVh.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///C:/Users/MS-PC-ANDY/Desktop/portfolio/dist/projects/mazecraft/mazes","/file:///C:/Users/MS-PC-ANDY/Desktop/portfolio/dist/projects/mazecraft/index.html","/file:///C:/Users/MS-PC-ANDY/Desktop/portfolio/dist/projects/monster/index.html","/file:///C:/Users/MS-PC-ANDY/Desktop/portfolio/dist/projects/rps/rps","/file:///C:/Users/MS-PC-ANDY/Desktop/portfolio/dist/projects/rps/index.html","/file:///C:/Users/MS-PC-ANDY/Desktop/portfolio/dist/skills/index.html","/file:///C:/Users/MS-PC-ANDY/Desktop/portfolio/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"E1ttwr6xIlhFfdTEFSageZBAb+zjnfCnuzHcNWmaKVw=","experimentalEnvGetSecretEnabled":false});

export { manifest };
