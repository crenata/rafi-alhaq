if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const f=e=>i(e,c),o={module:{uri:c},exports:r,require:f};s[c]=Promise.all(n.map((e=>o[e]||f(e)))).then((e=>(t(...e),r)))}}define(["./workbox-904f8752"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"static/css/main.2ef09ed9.css",revision:"c530567c738557d1fadd32d20c13e4b8"},{url:"static/js/787.65f39308.chunk.js",revision:"a7a02f4caf5b760ce775425cfef01017"},{url:"static/js/main.6bf7528b.js",revision:"fe7244e1dbff10dfa9aff80173586c57"},{url:"index.html",revision:"c36a8b6f940d42ec85bb0aaa9e32286a"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxAgeSeconds:31536e3})]}),"GET")}));
//# sourceMappingURL=sw.js.map
