if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let r={};const o=e=>i(e,t),f={module:{uri:t},exports:r,require:o};s[t]=Promise.all(c.map((e=>f[e]||o(e)))).then((e=>(n(...e),r)))}}define(["./workbox-904f8752"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"static/css/main.2ef09ed9.css",revision:"c530567c738557d1fadd32d20c13e4b8"},{url:"static/js/787.65f39308.chunk.js",revision:"a7a02f4caf5b760ce775425cfef01017"},{url:"static/js/main.1fea5cdd.js",revision:"71c5a6e05ce5e2482aafa22170317523"},{url:"index.html",revision:"9e802d7310ef787e2f8660c37cda1448"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxAgeSeconds:31536e3})]}),"GET")}));
//# sourceMappingURL=sw.js.map