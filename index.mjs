// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import{ndarray as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-sindex-of@esm/index.mjs";function r(e,s,r,n,d){var i;return e<=0?-1:(d+=(e-1)*n,(i=t(e,s,r,n*=-1,d))<0?i:i=e-1-i)}function n(e,t,n,d){return r(e,t,n,d,s(e,d))}e(n,"ndarray",r);export{n as default,r as ndarray};
//# sourceMappingURL=index.mjs.map
