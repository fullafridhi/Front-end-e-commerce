import e from"postcss-selector-parser";import{selectorSpecificity as r}from"@csstools/selector-specificity";const a=["media","supports"],t=["keyframes"],s=new Set(["layer","supports","media","container","scope"]);function n(e){if("atrule"!==e.type)return!1;if("layer"!==e.name.toLowerCase())return!1;let r=e.parent;for(;r;){if("rule"===r.type)return!1;if("atrule"===r.type&&!s.has(r.name.toLowerCase()))return!1;r=r.parent}return!0}class o{constructor(){this.anonymousLayerCount=0,this.layerCount=0,this.anonymousLayerCount=0,this.layerCount=0,this.layerOrder=new Map,this.layerParamsParsed=new Map,this.layerNameParts=new Map}createAnonymousLayerName(){const e=`anonymous-${this.anonymousLayerCount}-6efdb677-bb05-44e5-840f-29d2175862fd`;return this.addLayerNameParts(e),this.layerParamsParsed.set(e,[e]),this.anonymousLayerCount++,e}createImplicitLayerName(e){const r=this.layerNameParts.get(e),a=`implicit-${r[r.length-1]}-b147acf6-11a6-4338-a4d0-80aef4cd1a2f`;return this.addLayerNameParts([...r,a]),this.layerParamsParsed.set(a,[a]),a}addLayerParams(e,r){r?"string"!=typeof r?this.layerParamsParsed.set(e,r):this.layerParamsParsed.set(e,[r]):this.layerParamsParsed.set(e,[e])}addLayerNameParts(e){"string"!=typeof e?this.layerNameParts.set(e.join("."),e):this.layerNameParts.set(e,[e])}getLayerParams(e){const r=[...this.layerParamsParsed.get(e.params)];let a=e.parent;for(;a;)"atrule"===a.type?(n(a)&&r.push(...this.layerParamsParsed.get(a.params)),a=a.parent):a=a.parent;return r.reverse(),r.flatMap((e=>this.layerNameParts.get(e)))}getLayerNameList(e){const r=this.layerNameParts.get(e),a=[];for(let e=0;e<r.length;e++){const t=r.slice(0,e+1).join(".");this.layerParamsParsed.has(t)||this.layerParamsParsed.set(t,[t]),this.layerNameParts.has(t)||this.layerNameParts.set(t,r.slice(0,e+1)),a.push(r.slice(0,e+1).join("."))}return a}sortLayerNames(){for(const[e,r]of this.layerOrder){const a=this.layerNameParts.get(e);for(let e=1;e<a.length;e++){const t=a.slice(0,e).join(".");this.layerOrder.has(t)||this.layerOrder.set(t,r)}}let e=Array.from(this.layerOrder.entries());e=e.sort(((e,r)=>{const a=this.layerNameParts.get(e[0]),t=this.layerNameParts.get(r[0]);if(a[0]!==t[0])return this.layerOrder.get(a[0])-this.layerOrder.get(t[0]);const s=Math.max(a.length,t.length);for(let e=0;e<s;e++){const r=a[e],s=t[e];if(r!==s)return r?s?this.layerOrder.get(a.slice(0,e).join("."))-this.layerOrder.get(t.slice(0,e).join(".")):-1:1}})),this.layerOrder.clear(),e.forEach(((e,r)=>{this.layerOrder.set(e[0],r)}))}}function l(r,a){const t=e().astSync(r),s=e().astSync(function(e){if(0===e)return"";let r="";for(let a=0;a<e;a++)r+=":not(#\\#)";return r}(a));let n=!1;for(let r=0;r<t.nodes[0].nodes.length;r++)if("combinator"===t.nodes[0].nodes[r].type||e.isPseudoElement(t.nodes[0].nodes[r])){t.nodes[0].insertBefore(t.nodes[0].nodes[r],s),n=!0;break}return n||t.nodes[0].insertAfter(t.nodes[0].nodes[t.nodes[0].nodes.length-1],s),t.toString()}function i(e,r){let a=!1;return e.walk((e=>{if(r(e))return a=!0,!1})),a}function u(e,r){let a=!1;return e.walkAtRules((e=>{if(r(e))return a=!0,!1})),a}function y(e){let r=e.parent;for(;r;)if("atrule"===r.type){if(n(r))return r;r=r.parent}else r=r.parent;return null}function m(e){var r;e.walk((e=>{var r;("rule"===e.type||"atrule"===e.type&&["layer",...a].includes(e.name.toLowerCase()))&&(0===(null==(r=e.nodes)?void 0:r.length)&&e.remove())})),0===(null==(r=e.nodes)?void 0:r.length)&&e.remove()}function p(e){let r=e;for(;r;){if(void 0===r.nodes)return;if(r.nodes.length>0)return;const e=r.parent;r.remove(),r=e}}function c(e,r,{result:t,options:s}){e.walkAtRules((e=>{if(!n(e))return;const o=r.getLayerParams(e),l=o.join(".");r.layerOrder.has(l)||(s.onConditionalRulesChangingLayerOrder&&function(e){let r=e.parent;for(;r;)if("atrule"===r.type){if(a.includes(r.name.toLowerCase()))return r;r=r.parent}else r=r.parent;return null}(e)&&!e.params.endsWith("b147acf6-11a6-4338-a4d0-80aef4cd1a2f")&&!e.params.endsWith("6efdb677-bb05-44e5-840f-29d2175862fd")&&e.warn(t,"handling different layer orders in conditional rules is unsupported by this plugin and will cause style differences between browser versions."),r.layerParamsParsed.has(l)||r.layerParamsParsed.set(l,[l]),r.layerNameParts.has(l)||r.layerNameParts.set(l,[...o]),r.getLayerNameList(l).forEach((e=>{r.layerOrder.has(e)||(r.layerOrder.set(e,r.layerCount),r.layerCount+=1)}))),e.nodes&&0!==e.nodes.length||e.remove()}))}const d=s=>{const d=Object.assign({onRevertLayerKeyword:"warn",onConditionalRulesChangingLayerOrder:"warn",onImportLayerRule:"warn"},s);return{postcssPlugin:"postcss-cascade-layers",OnceExit(s,{result:f}){d.onRevertLayerKeyword&&s.walkDecls((e=>{"revert-layer"===e.value.toLowerCase()&&e.warn(f,'handling "revert-layer" is unsupported by this plugin and will cause style differences between browser versions.')})),d.onImportLayerRule&&s.walkAtRules((e=>{"import"===e.name.toLowerCase()&&e.params.toLowerCase().includes("layer")&&e.warn(f,"To use @import with layers, the postcss-import plugin is also required. This plugin alone will not support using the @import at-rule.")})),function(e){e.walkDecls((e=>{if(!e.important)return;const r=e.parent;if(r.parent&&"atrule"===r.parent.type&&t.includes(r.parent.name.toLowerCase()))return;const a=r.clone();a.each((e=>{"decl"===e.type&&e.important||e.remove()})),r.each((e=>{"decl"===e.type&&e.important&&e.remove()})),r.before(a),m(r)}))}(s);const h=new o;if(function(r,t){r.walkAtRules((r=>{if(!n(r))return;if(r.params){const a=[];let s=!1;if(e().astSync(r.params).each((e=>{const r=[];e.walk((e=>{switch(e.type){case"class":case"tag":r.push(e.value);break;default:s=!0}})),s||(a.push(r.join(".")),t.addLayerNameParts(r))})),t.addLayerParams(r.params,a),r.nodes&&a.length>1&&(s=!0),s)return void(r.name="csstools-invalid-layer");if(!r.nodes||0===r.nodes.length){if(a.length<=1)return;return a.slice(0,-1).forEach((e=>{t.addLayerParams(e,e),r.cloneBefore({params:e})})),t.addLayerParams(a[a.length-1],a[a.length-1]),void(r.params=a[a.length-1])}}r.params||(r.raws.afterName=" ",r.params=t.createAnonymousLayerName());const s=u(r,(e=>n(e))),o=i(r,(e=>{if("rule"===e.type)return y(e)===r}));if(s&&o){const e=t.createImplicitLayerName(r.params),s=r.clone({params:e});s.walkAtRules((e=>{n(e)&&e.remove()})),r.walk((e=>{"atrule"===e.type&&n(e)||"atrule"===e.type&&a.includes(e.name.toLowerCase())||y(e)===r&&e.remove()})),r.append(s),m(r),p(r)}}))}(s,h),c(s,h,{result:f,options:d}),!h.layerCount)return void s.walkAtRules("csstools-invalid-layer",(e=>{e.name="layer"}));let w=0;for(s.walkRules((a=>{a.selectors.forEach((a=>{const t=r(e().astSync(a));w=Math.max(w,t.a+1)}))})),s.walkRules((e=>{e.parent&&"atrule"===e.parent.type&&t.includes(e.parent.name.toLowerCase())||y(e)||e.some((e=>"decl"===e.type&&e.important))||(e.selectors=e.selectors.map((e=>l(e,h.layerCount*w))))})),h.sortLayerNames(),function(e,r){for(;u(e,(e=>e.nodes&&u(e,(e=>n(e)))));){let a=!1;if(e.walkAtRules((t=>{if(n(t)&&t.parent!==e){if("atrule"===t.parent.type&&n(t.parent)){const e=t.parent;return r.layerNameParts.set(`${e.params}.${t.params}`,[...r.layerNameParts.get(e.params),...r.layerNameParts.get(t.params)]),r.layerParamsParsed.set(`${e.params}.${t.params}`,[`${e.params}.${t.params}`]),t.params=`${e.params}.${t.params}`,e.before(t),m(e),void p(e)}if("atrule"===t.parent.type){const e=t.parent,r=e.clone(),a=t.clone();return r.removeAll(),a.removeAll(),r.append(t.nodes),a.append(r),e.before(a),t.remove(),m(e),void p(e)}a=!0}})),a)break}}(s,h),function(e,r){e.walkAtRules((e=>{if(!n(e))return;const r=e.clone(),s=e.clone();r.walkAtRules((e=>{if(t.includes(e.name.toLowerCase())){const r=e.parent;return e.remove(),m(r),void p(r)}if(i(e,(e=>"rule"===e.type)))return;const r=e.parent;e.remove(),m(r),p(r)})),s.walkRules((e=>{if(e.parent&&"atrule"===e.parent.type&&t.includes(e.parent.name.toLowerCase()))return;const r=e.parent;e.remove(),m(r),p(r)})),s.walkAtRules((e=>{if(a.includes(e.name.toLowerCase()))return m(e),void p(e)})),r.name="csstools-layer-with-selector-rules",e.replaceWith(r,s),0===r.nodes.length&&r.remove(),0===s.nodes.length&&s.remove()})),e.nodes.sort(((e,a)=>{const t="atrule"===e.type&&"layer"===e.name.toLowerCase(),s="atrule"===a.type&&"layer"===a.name.toLowerCase();return t&&s?r.layerOrder.get(e.params)-r.layerOrder.get(a.params):t!==s?t?-1:1:0})),e.walkAtRules("csstools-layer-with-selector-rules",(e=>{e.name="layer"}))}(s,h),s.walkRules((e=>{if(e.parent&&"atrule"===e.parent.type&&t.includes(e.parent.name.toLowerCase()))return;const r=y(e);if(!r)return;const a=h.getLayerParams(r).join(".");let s=h.layerOrder.get(a)*w;e.some((e=>"decl"===e.type&&e.important))&&(s=h.layerCount-s),e.selectors=e.selectors.map((e=>l(e,s)))}));u(s,(e=>n(e)));)s.walkAtRules((e=>{n(e)&&e.replaceWith(e.nodes)}));s.walkAtRules("csstools-invalid-layer",(e=>{e.name="layer"}))}}};d.postcss=!0;export{d as default};