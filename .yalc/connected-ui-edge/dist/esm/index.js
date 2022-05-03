import { jsx, Fragment } from 'react/jsx-runtime';
import Z from 'react';
import { motion } from 'framer-motion';

var e="colors",t="sizes",r="space",n={gap:r,gridGap:r,columnGap:r,gridColumnGap:r,rowGap:r,gridRowGap:r,inset:r,insetBlock:r,insetBlockEnd:r,insetBlockStart:r,insetInline:r,insetInlineEnd:r,insetInlineStart:r,margin:r,marginTop:r,marginRight:r,marginBottom:r,marginLeft:r,marginBlock:r,marginBlockEnd:r,marginBlockStart:r,marginInline:r,marginInlineEnd:r,marginInlineStart:r,padding:r,paddingTop:r,paddingRight:r,paddingBottom:r,paddingLeft:r,paddingBlock:r,paddingBlockEnd:r,paddingBlockStart:r,paddingInline:r,paddingInlineEnd:r,paddingInlineStart:r,top:r,right:r,bottom:r,left:r,scrollMargin:r,scrollMarginTop:r,scrollMarginRight:r,scrollMarginBottom:r,scrollMarginLeft:r,scrollMarginX:r,scrollMarginY:r,scrollMarginBlock:r,scrollMarginBlockEnd:r,scrollMarginBlockStart:r,scrollMarginInline:r,scrollMarginInlineEnd:r,scrollMarginInlineStart:r,scrollPadding:r,scrollPaddingTop:r,scrollPaddingRight:r,scrollPaddingBottom:r,scrollPaddingLeft:r,scrollPaddingX:r,scrollPaddingY:r,scrollPaddingBlock:r,scrollPaddingBlockEnd:r,scrollPaddingBlockStart:r,scrollPaddingInline:r,scrollPaddingInlineEnd:r,scrollPaddingInlineStart:r,fontSize:"fontSizes",background:e,backgroundColor:e,backgroundImage:e,borderImage:e,border:e,borderBlock:e,borderBlockEnd:e,borderBlockStart:e,borderBottom:e,borderBottomColor:e,borderColor:e,borderInline:e,borderInlineEnd:e,borderInlineStart:e,borderLeft:e,borderLeftColor:e,borderRight:e,borderRightColor:e,borderTop:e,borderTopColor:e,caretColor:e,color:e,columnRuleColor:e,fill:e,outline:e,outlineColor:e,stroke:e,textDecorationColor:e,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:t,minBlockSize:t,maxBlockSize:t,inlineSize:t,minInlineSize:t,maxInlineSize:t,width:t,minWidth:t,maxWidth:t,height:t,minHeight:t,maxHeight:t,flexBasis:t,gridTemplateColumns:t,gridTemplateRows:t,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},i=(e,t)=>"function"==typeof t?{"()":Function.prototype.toString.call(t)}:t,o=()=>{const e=Object.create(null);return (t,r,...n)=>{const o=(e=>JSON.stringify(e,i))(t);return o in e?e[o]:e[o]=r(t,...n)}},l=Symbol.for("sxs.internal"),s=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),a=e=>{for(const t in e)return !0;return !1},{hasOwnProperty:c}=Object.prototype,d=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase())),g=/\s+(?![^()]*\))/,p=e=>t=>e(..."string"==typeof t?String(t).split(g):[t]),u={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:p(((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e}))),marginInline:p(((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e}))),maxSize:p(((e,t)=>({maxBlockSize:e,maxInlineSize:t||e}))),minSize:p(((e,t)=>({minBlockSize:e,minInlineSize:t||e}))),paddingBlock:p(((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e}))),paddingInline:p(((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e})))},h=/([\d.]+)([^]*)/,f=(e,t)=>e.length?e.reduce(((e,r)=>(e.push(...t.map((e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(e)?`:is(${r})`:r):r+" "+e))),e)),[]):t,m=(e,t)=>e in b&&"string"==typeof t?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((t,r,n,i)=>r+("stretch"===n?`-moz-available${i};${d(e)}:${r}-webkit-fill-available`:`-moz-fit-content${i};${d(e)}:${r}fit-content`)+i)):String(t),b={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},S=e=>e?e+"-":"",k=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((e,n,i,o,l)=>"$"==o==!!i?e:(n||"--"==o?"calc(":"")+"var(--"+("$"===o?S(t)+(l.includes("$")?"":S(r))+l.replace(/\$/g,"-"):l)+")"+(n||"--"==o?"*"+(n||"")+(i||"1")+")":""))),y=/\s*,\s*(?![^()]*\))/,B=Object.prototype.toString,$=(e,t,r,n,i)=>{let o,l,s;const a=(e,t,r)=>{let c,g;const p=e=>{for(c in e){const R=64===c.charCodeAt(0),z=R&&Array.isArray(e[c])?e[c]:[e[c]];for(g of z){const e=/[A-Z]/.test($=c)?$:$.replace(/-[^]/g,(e=>e[1].toUpperCase())),z="object"==typeof g&&g&&g.toString===B&&(!n.utils[e]||!t.length);if(e in n.utils&&!z){const t=n.utils[e];if(t!==l){l=t,p(t(g)),l=null;continue}}else if(e in u){const t=u[e];if(t!==s){s=t,p(t(g)),s=null;continue}}if(R&&(b=c.slice(1)in n.media?"@media "+n.media[c.slice(1)]:c,c=b.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((e,t,r,n,i,o)=>{const l=h.test(t),s=.0625*(l?-1:1),[a,c]=l?[n,t]:[t,n];return "("+("="===r[0]?"":">"===r[0]===l?"max-":"min-")+a+":"+("="!==r[0]&&1===r.length?c.replace(h,((e,t,n)=>Number(t)+s*(">"===r?1:-1)+n)):c)+(i?") and ("+(">"===i[0]?"min-":"max-")+a+":"+(1===i.length?o.replace(h,((e,t,r)=>Number(t)+s*(">"===i?-1:1)+r)):o):"")+")"}))),z){const e=R?r.concat(c):[...r],n=R?[...t]:f(t,c.split(y));void 0!==o&&i(x(...o)),o=void 0,a(g,n,e);}else void 0===o&&(o=[[],t,r]),c=R||36!==c.charCodeAt(0)?c:`--${S(n.prefix)}${c.slice(1).replace(/\$/g,"-")}`,g=z?g:"number"==typeof g?g&&e in I?String(g)+"px":String(g):k(m(e,null==g?"":g),n.prefix,n.themeMap[e]),o[0].push(`${R?`${c} `:`${d(c)}:`}${g}`);}}var b,$;};p(e),void 0!==o&&i(x(...o)),o=void 0;};a(e,t,r);},x=(e,t,r)=>`${r.map((e=>`${e}{`)).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,I={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},R=e=>String.fromCharCode(e+(e>25?39:97)),z=e=>(e=>{let t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=R(t%52)+r;return R(t%52)+r})(((e,t)=>{let r=t.length;for(;r;)e=33*e^t.charCodeAt(--r);return e})(5381,JSON.stringify(e))>>>0),W=["themed","global","styled","onevar","resonevar","allvar","inline"],j=e=>{if(e.href&&!e.href.startsWith(location.origin))return !1;try{return !!e.cssRules}catch(e){return !1}},E=e=>{let t;const r=()=>{const{cssRules:e}=t.sheet;return [].map.call(e,((r,n)=>{const{cssText:i}=r;let o="";if(i.startsWith("--sxs"))return "";if(e[n-1]&&(o=e[n-1].cssText).startsWith("--sxs")){if(!r.cssRules.length)return "";for(const e in t.rules)if(t.rules[e].group===r)return `--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${i}`;return r.cssRules.length?`${o}${i}`:""}return i})).join("")},n=()=>{if(t){const{rules:e,sheet:r}=t;if(!r.deleteRule){for(;3===Object(Object(r.cssRules)[0]).type;)r.cssRules.splice(0,1);r.cssRules=[];}for(const t in e)delete e[t];}const i=Object(e).styleSheets||[];for(const e of i)if(j(e)){for(let i=0,o=e.cssRules;o[i];++i){const l=Object(o[i]);if(1!==l.type)continue;const s=Object(o[i+1]);if(4!==s.type)continue;++i;const{cssText:a}=l;if(!a.startsWith("--sxs"))continue;const c=a.slice(14,-3).trim().split(/\s+/),d=W[c[0]];d&&(t||(t={sheet:e,reset:n,rules:{},toString:r}),t.rules[d]={group:s,index:i,cache:new Set(c)});}if(t)break}if(!t){const i=(e,t)=>({type:t,cssRules:[],insertRule(e,t){this.cssRules.splice(t,0,i(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4));},get cssText(){return "@media{}"===e?`@media{${[].map.call(this.cssRules,(e=>e.cssText)).join("")}}`:e}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:i("","text/css"),rules:{},reset:n,toString:r};}const{sheet:o,rules:l}=t;for(let e=W.length-1;e>=0;--e){const t=W[e];if(!l[t]){const r=W[e+1],n=l[r]?l[r].index:o.cssRules.length;o.insertRule("@media{}",n),o.insertRule(`--sxs{--sxs:${e}}`,n),l[t]={group:o.cssRules[n+1],index:n,cache:new Set([e])};}v(l[t]);}};return n(),t},v=e=>{const t=e.group;let r=t.cssRules.length;e.apply=e=>{try{t.insertRule(e,r),++r;}catch(e){}};},T=Symbol(),w=o(),M=(e,t)=>w(e,(()=>(...r)=>{let n={type:null,composers:new Set};for(const t of r)if(null!=t)if(t[l]){null==n.type&&(n.type=t[l].type);for(const e of t[l].composers)n.composers.add(e);}else t.constructor!==Object||t.$$typeof?null==n.type&&(n.type=t):n.composers.add(C(t,e));return null==n.type&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),P(e,n,t)})),C=({variants:e,compoundVariants:t,defaultVariants:r,...n},i)=>{const o=`${S(i.prefix)}c-${z(n)}`,l=[],s=[],d=Object.create(null),g=[];for(const e in r)d[e]=String(r[e]);if("object"==typeof e&&e)for(const t in e){p=d,u=t,c.call(p,u)||(d[t]="undefined");const r=e[t];for(const e in r){const n={[t]:String(e)};"undefined"===String(e)&&g.push(t);const i=r[e],o=[n,i,!a(i)];l.push(o);}}var p,u;if("object"==typeof t&&t)for(const e of t){let{css:t,...r}=e;t="object"==typeof t&&t||{};for(const e in r)r[e]=String(r[e]);const n=[r,t,!a(t)];s.push(n);}return [o,n,l,s,d,g]},P=(e,t,r)=>{const[n,i,o,a]=L(t.composers),c="function"==typeof t.type||t.type.$$typeof?(e=>{function t(){for(let r=0;r<t[T].length;r++){const[n,i]=t[T][r];e.rules[n].apply(i);}return t[T]=[],null}return t[T]=[],t.rules={},W.forEach((e=>t.rules[e]={apply:r=>t[T].push([e,r])})),t})(r):null,d=(c||r).rules,g=`.${n}${i.length>1?`:where(.${i.slice(1).join(".")})`:""}`,p=l=>{l="object"==typeof l&&l||A;const{css:s,...p}=l,u={};for(const e in o)if(delete p[e],e in l){let t=l[e];"object"==typeof t&&t?u[e]={"@initial":o[e],...t}:(t=String(t),u[e]="undefined"!==t||a.has(e)?t:o[e]);}else u[e]=o[e];const h=new Set([...i]);for(const[n,i,o,l]of t.composers){r.rules.styled.cache.has(n)||(r.rules.styled.cache.add(n),$(i,[`.${n}`],[],e,(e=>{d.styled.apply(e);})));const t=O(o,u,e.media),s=O(l,u,e.media,!0);for(const i of t)if(void 0!==i)for(const[t,o,l]of i){const i=`${n}-${z(o)}-${t}`;h.add(i);const s=(l?r.rules.resonevar:r.rules.onevar).cache,a=l?d.resonevar:d.onevar;s.has(i)||(s.add(i),$(o,[`.${i}`],[],e,(e=>{a.apply(e);})));}for(const t of s)if(void 0!==t)for(const[i,o]of t){const t=`${n}-${z(o)}-${i}`;h.add(t),r.rules.allvar.cache.has(t)||(r.rules.allvar.cache.add(t),$(o,[`.${t}`],[],e,(e=>{d.allvar.apply(e);})));}}if("object"==typeof s&&s){const t=`${n}-i${z(s)}-css`;h.add(t),r.rules.inline.cache.has(t)||(r.rules.inline.cache.add(t),$(s,[`.${t}`],[],e,(e=>{d.inline.apply(e);})));}for(const e of String(l.className||"").trim().split(/\s+/))e&&h.add(e);const f=p.className=[...h].join(" ");return {type:t.type,className:f,selector:g,props:p,toString:()=>f,deferredInjector:c}};return s(p,{className:n,selector:g,[l]:t,toString:()=>(r.rules.styled.cache.has(n)||p(),n)})},L=e=>{let t="";const r=[],n={},i=[];for(const[o,,,,l,s]of e){""===t&&(t=o),r.push(o),i.push(...s);for(const e in l){const t=l[e];(void 0===n[e]||"undefined"!==t||s.includes(t))&&(n[e]=t);}}return [t,r,n,new Set(i)]},O=(e,t,r,n)=>{const i=[];e:for(let[o,l,s]of e){if(s)continue;let e,a=0,c=!1;for(e in o){const n=o[e];let i=t[e];if(i!==n){if("object"!=typeof i||!i)continue e;{let e,t,o=0;for(const l in i){if(n===String(i[l])){if("@initial"!==l){const e=l.slice(1);(t=t||[]).push(e in r?r[e]:l.replace(/^@media ?/,"")),c=!0;}a+=o,e=!0;}++o;}if(t&&t.length&&(l={["@media "+t.join(", ")]:l}),!e)continue e}}}(i[a]=i[a]||[]).push([n?"cv":`${e}-${o[e]}`,l,c]);}return i},A={},N=o(),D=(e,t)=>N(e,(()=>(...r)=>{const n=()=>{for(let n of r){n="object"==typeof n&&n||{};let r=z(n);if(!t.rules.global.cache.has(r)){if(t.rules.global.cache.add(r),"@import"in n){let e=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let r of [].concat(n["@import"]))r=r.includes('"')||r.includes("'")?r:`"${r}"`,t.sheet.insertRule(`@import ${r};`,e++);delete n["@import"];}$(n,[],[],e,(e=>{t.rules.global.apply(e);}));}}return ""};return s(n,{toString:n})})),H=o(),V=(e,t)=>H(e,(()=>r=>{const n=`${S(e.prefix)}k-${z(r)}`,i=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const i=[];$(r,[],[],e,(e=>i.push(e)));const o=`@keyframes ${n}{${i.join("")}}`;t.rules.global.apply(o);}return n};return s(i,{get name(){return i()},toString:i})})),G=class{constructor(e,t,r,n){this.token=null==e?"":String(e),this.value=null==t?"":String(t),this.scale=null==r?"":String(r),this.prefix=null==n?"":String(n);}get computedValue(){return "var("+this.variable+")"}get variable(){return "--"+S(this.prefix)+S(this.scale)+this.token}toString(){return this.computedValue}},F=o(),J=(e,t)=>F(e,(()=>(r,n)=>{n="object"==typeof r&&r||Object(n);const i=`.${r=(r="string"==typeof r?r:"")||`${S(e.prefix)}t-${z(n)}`}`,o={},l=[];for(const t in n){o[t]={};for(const r in n[t]){const i=`--${S(e.prefix)}${t}-${r}`,s=k(String(n[t][r]),e.prefix,t);o[t][r]=new G(r,s,t,e.prefix),l.push(`${i}:${s}`);}}const s=()=>{if(l.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const i=`${n===e.theme?":root,":""}.${r}{${l.join(";")}}`;t.rules.themed.apply(i);}return r};return {...o,get className(){return s()},selector:i,toString:s}})),U=o();var X,Y=o(),q=e=>{const t=(e=>{let t=!1;const r=U(e,(e=>{t=!0;const r="prefix"in(e="object"==typeof e&&e||{})?String(e.prefix):"",i="object"==typeof e.media&&e.media||{},o="object"==typeof e.root?e.root||null:globalThis.document||null,l="object"==typeof e.theme&&e.theme||{},s={prefix:r,media:i,theme:l,themeMap:"object"==typeof e.themeMap&&e.themeMap||{...n},utils:"object"==typeof e.utils&&e.utils||{}},a=E(o),c={css:M(s,a),globalCss:D(s,a),keyframes:V(s,a),createTheme:J(s,a),reset(){a.reset(),c.theme.toString();},theme:{},sheet:a,config:s,prefix:r,getCssText:a.toString,toString:a.toString};return String(c.theme=c.createTheme(l)),c}));return t||r.reset(),r})(e);return t.styled=(({config:e,sheet:t})=>Y(e,(()=>{const r=M(e,t);return (...e)=>{const t=r(...e),n=t[l].type,i=Z.forwardRef(((e,r)=>{const i=e&&e.as||n,{props:o,deferredInjector:l}=t(e);return delete o.as,o.ref=r,l?Z.createElement(Z.Fragment,null,Z.createElement(i,o),Z.createElement(l,null)):Z.createElement(i,o)}));return i.className=t.className,i.displayName=`Styled.${n.displayName||n.name||n}`,i.selector=t.selector,i.toString=()=>t.selector,i[l]=t[l],i}})))(t),t},K=()=>X||(X=q()),Q=(...e)=>K().createTheme(...e);//# sourceMappingUrl=index.map

const amber$1 = {
    amber1: 'hsl(36, 100%, 6.1%)',
    amber2: 'hsl(35, 100%, 7.6%)',
    amber3: 'hsl(32, 100%, 10.2%)',
    amber4: 'hsl(32, 100%, 12.4%)',
    amber5: 'hsl(33, 100%, 14.6%)',
    amber6: 'hsl(35, 100%, 17.1%)',
    amber7: 'hsl(35, 91.0%, 21.6%)',
    amber8: 'hsl(36, 100%, 25.5%)',
    amber9: 'hsl(39, 100%, 57.0%)',
    amber10: 'hsl(43, 100%, 64.0%)',
    amber11: 'hsl(39, 90.0%, 49.8%)',
    amber12: 'hsl(39, 97.0%, 93.2%)',
};

const blue$1 = {
    blue1: 'hsl(212, 35.0%, 9.2%)',
    blue2: 'hsl(216, 50.0%, 11.8%)',
    blue3: 'hsl(214, 59.4%, 15.3%)',
    blue4: 'hsl(214, 65.8%, 17.9%)',
    blue5: 'hsl(213, 71.2%, 20.2%)',
    blue6: 'hsl(212, 77.4%, 23.1%)',
    blue7: 'hsl(211, 85.1%, 27.4%)',
    blue8: 'hsl(211, 89.7%, 34.1%)',
    blue9: 'hsl(206, 100%, 50.0%)',
    blue10: 'hsl(209, 100%, 60.6%)',
    blue11: 'hsl(210, 100%, 66.1%)',
    blue12: 'hsl(206, 98.0%, 95.8%)',
};

const green$1 = {
    green1: 'hsl(146, 30.0%, 7.4%)',
    green2: 'hsl(155, 44.2%, 8.4%)',
    green3: 'hsl(155, 46.7%, 10.9%)',
    green4: 'hsl(154, 48.4%, 12.9%)',
    green5: 'hsl(154, 49.7%, 14.9%)',
    green6: 'hsl(154, 50.9%, 17.6%)',
    green7: 'hsl(153, 51.8%, 21.8%)',
    green8: 'hsl(151, 51.7%, 28.4%)',
    green9: 'hsl(151, 55.0%, 41.5%)',
    green10: 'hsl(151, 49.3%, 46.5%)',
    green11: 'hsl(151, 50.0%, 53.2%)',
    green12: 'hsl(137, 72.0%, 94.0%)',
};

const indigo$1 = {
    indigo1: 'hsl(229, 24.0%, 10.0%)',
    indigo2: 'hsl(230, 36.4%, 12.9%)',
    indigo3: 'hsl(228, 43.3%, 17.5%)',
    indigo4: 'hsl(227, 47.2%, 21.0%)',
    indigo5: 'hsl(227, 50.0%, 24.1%)',
    indigo6: 'hsl(226, 52.9%, 28.2%)',
    indigo7: 'hsl(226, 56.0%, 34.5%)',
    indigo8: 'hsl(226, 58.2%, 44.1%)',
    indigo9: 'hsl(226, 70.0%, 55.5%)',
    indigo10: 'hsl(227, 75.2%, 61.6%)',
    indigo11: 'hsl(228, 100%, 75.9%)',
    indigo12: 'hsl(226, 83.0%, 96.3%)',
};

const orange$1 = {
    orange1: 'hsl(30, 70.0%, 7.2%)',
    orange2: 'hsl(28, 100%, 8.4%)',
    orange3: 'hsl(26, 91.1%, 11.6%)',
    orange4: 'hsl(25, 88.3%, 14.1%)',
    orange5: 'hsl(24, 87.6%, 16.6%)',
    orange6: 'hsl(24, 88.6%, 19.8%)',
    orange7: 'hsl(24, 92.4%, 24.0%)',
    orange8: 'hsl(25, 100%, 29.0%)',
    orange9: 'hsl(24, 94.0%, 50.0%)',
    orange10: 'hsl(24, 100%, 58.5%)',
    orange11: 'hsl(24, 100%, 62.2%)',
    orange12: 'hsl(24, 97.0%, 93.2%)',
};

const plum$1 = {
    plum1: 'hsl(301, 20.0%, 9.4%)',
    plum2: 'hsl(300, 29.8%, 11.2%)',
    plum3: 'hsl(298, 34.4%, 15.3%)',
    plum4: 'hsl(297, 36.8%, 18.3%)',
    plum5: 'hsl(296, 38.5%, 21.1%)',
    plum6: 'hsl(295, 40.4%, 24.7%)',
    plum7: 'hsl(294, 42.7%, 30.6%)',
    plum8: 'hsl(292, 45.1%, 40.0%)',
    plum9: 'hsl(292, 45.0%, 51.0%)',
    plum10: 'hsl(295, 50.0%, 55.4%)',
    plum11: 'hsl(300, 60.0%, 62.0%)',
    plum12: 'hsl(296, 74.0%, 95.7%)',
};

const red$1 = {
    red1: 'hsl(353, 23.0%, 9.8%)',
    red2: 'hsl(357, 34.4%, 12.0%)',
    red3: 'hsl(356, 43.4%, 16.4%)',
    red4: 'hsl(356, 47.6%, 19.2%)',
    red5: 'hsl(356, 51.1%, 21.9%)',
    red6: 'hsl(356, 55.2%, 25.9%)',
    red7: 'hsl(357, 60.2%, 31.8%)',
    red8: 'hsl(358, 65.0%, 40.4%)',
    red9: 'hsl(358, 75.0%, 59.0%)',
    red10: 'hsl(358, 85.3%, 64.0%)',
    red11: 'hsl(358, 100%, 69.5%)',
    red12: 'hsl(351, 89.0%, 96.0%)',
};

const sky$1 = {
    sky1: 'hsl(205, 45.0%, 8.6%)',
    sky2: 'hsl(202, 71.4%, 9.6%)',
    sky3: 'hsl(201, 74.6%, 12.2%)',
    sky4: 'hsl(201, 77.4%, 14.4%)',
    sky5: 'hsl(200, 80.3%, 16.5%)',
    sky6: 'hsl(200, 84.1%, 18.9%)',
    sky7: 'hsl(199, 90.2%, 22.1%)',
    sky8: 'hsl(198, 100%, 26.1%)',
    sky9: 'hsl(193, 98.0%, 70.0%)',
    sky10: 'hsl(192, 100%, 77.0%)',
    sky11: 'hsl(192, 85.0%, 55.8%)',
    sky12: 'hsl(198, 98.0%, 95.8%)',
};

const slate$1 = {
    slate1: 'hsl(200, 7.0%, 8.8%)',
    slate2: 'hsl(195, 7.1%, 11.0%)',
    slate3: 'hsl(197, 6.8%, 13.6%)',
    slate4: 'hsl(198, 6.6%, 15.8%)',
    slate5: 'hsl(199, 6.4%, 17.9%)',
    slate6: 'hsl(201, 6.2%, 20.5%)',
    slate7: 'hsl(203, 6.0%, 24.3%)',
    slate8: 'hsl(207, 5.6%, 31.6%)',
    slate9: 'hsl(206, 6.0%, 43.9%)',
    slate10: 'hsl(206, 5.2%, 49.5%)',
    slate11: 'hsl(206, 6.0%, 63.0%)',
    slate12: 'hsl(210, 6.0%, 93.0%)',
};

const teal$1 = {
    teal1: 'hsl(168, 48.0%, 6.5%)',
    teal2: 'hsl(169, 77.8%, 7.1%)',
    teal3: 'hsl(170, 76.1%, 9.2%)',
    teal4: 'hsl(171, 75.8%, 11.0%)',
    teal5: 'hsl(171, 75.7%, 12.8%)',
    teal6: 'hsl(172, 75.8%, 15.1%)',
    teal7: 'hsl(172, 76.7%, 18.6%)',
    teal8: 'hsl(173, 80.2%, 23.7%)',
    teal9: 'hsl(173, 80.0%, 36.0%)',
    teal10: 'hsl(174, 83.9%, 38.2%)',
    teal11: 'hsl(174, 90.0%, 40.7%)',
    teal12: 'hsl(166, 73.0%, 93.1%)',
};

const slateA$1 = {
    slateA1: 'hsla(0, 0%, 0%, 0)',
    slateA2: 'hsla(181, 98.9%, 91.8%, 0.026)',
    slateA3: 'hsla(182, 86.7%, 91.4%, 0.057)',
    slateA4: 'hsla(209, 86.7%, 93.9%, 0.083)',
    slateA5: 'hsla(200, 90.3%, 93.4%, 0.109)',
    slateA6: 'hsla(209, 95.3%, 93.5%, 0.139)',
    slateA7: 'hsla(204, 98.5%, 93.9%, 0.182)',
    slateA8: 'hsla(209, 94.0%, 94.7%, 0.265)',
    slateA9: 'hsla(207, 97.3%, 94.0%, 0.412)',
    slateA10: 'hsla(209, 99.4%, 95.2%, 0.472)',
    slateA11: 'hsla(208, 98.7%, 96.8%, 0.615)',
    slateA12: 'hsla(211, 86.7%, 99.6%, 0.927)',
};

const amber = {
    amber1: 'hsl(39, 70.0%, 99.0%)',
    amber2: 'hsl(40, 100%, 96.5%)',
    amber3: 'hsl(44, 100%, 91.7%)',
    amber4: 'hsl(43, 100%, 86.8%)',
    amber5: 'hsl(42, 100%, 81.8%)',
    amber6: 'hsl(38, 99.7%, 76.3%)',
    amber7: 'hsl(36, 86.1%, 67.1%)',
    amber8: 'hsl(35, 85.2%, 55.1%)',
    amber9: 'hsl(39, 100%, 57.0%)',
    amber10: 'hsl(35, 100%, 55.5%)',
    amber11: 'hsl(30, 100%, 34.0%)',
    amber12: 'hsl(20, 80.0%, 17.0%)',
};

const blue = {
    blue1: 'hsl(206, 100%, 99.2%)',
    blue2: 'hsl(210, 100%, 98.0%)',
    blue3: 'hsl(209, 100%, 96.5%)',
    blue4: 'hsl(210, 98.8%, 94.0%)',
    blue5: 'hsl(209, 95.0%, 90.1%)',
    blue6: 'hsl(209, 81.2%, 84.5%)',
    blue7: 'hsl(208, 77.5%, 76.9%)',
    blue8: 'hsl(206, 81.9%, 65.3%)',
    blue9: 'hsl(206, 100%, 50.0%)',
    blue10: 'hsl(208, 100%, 47.3%)',
    blue11: 'hsl(211, 100%, 43.2%)',
    blue12: 'hsl(211, 100%, 15.0%)',
};

const green = {
    green1: 'hsl(136, 50.0%, 98.9%)',
    green2: 'hsl(138, 62.5%, 96.9%)',
    green3: 'hsl(139, 55.2%, 94.5%)',
    green4: 'hsl(140, 48.7%, 91.0%)',
    green5: 'hsl(141, 43.7%, 86.0%)',
    green6: 'hsl(143, 40.3%, 79.0%)',
    green7: 'hsl(146, 38.5%, 69.0%)',
    green8: 'hsl(151, 40.2%, 54.1%)',
    green9: 'hsl(151, 55.0%, 41.5%)',
    green10: 'hsl(152, 57.5%, 37.6%)',
    green11: 'hsl(153, 67.0%, 28.5%)',
    green12: 'hsl(155, 40.0%, 14.0%)',
};

const indigo = {
    indigo1: 'hsl(225, 60.0%, 99.4%)',
    indigo2: 'hsl(223, 100%, 98.6%)',
    indigo3: 'hsl(223, 98.4%, 97.1%)',
    indigo4: 'hsl(223, 92.9%, 95.0%)',
    indigo5: 'hsl(224, 87.1%, 92.0%)',
    indigo6: 'hsl(224, 81.9%, 87.8%)',
    indigo7: 'hsl(225, 77.4%, 82.1%)',
    indigo8: 'hsl(226, 75.4%, 74.5%)',
    indigo9: 'hsl(226, 70.0%, 55.5%)',
    indigo10: 'hsl(226, 58.6%, 51.3%)',
    indigo11: 'hsl(226, 55.0%, 45.0%)',
    indigo12: 'hsl(226, 62.0%, 17.0%)',
};

const orange = {
    orange1: 'hsl(24, 70.0%, 99.0%)',
    orange2: 'hsl(24, 83.3%, 97.6%)',
    orange3: 'hsl(24, 100%, 95.3%)',
    orange4: 'hsl(25, 100%, 92.2%)',
    orange5: 'hsl(25, 100%, 88.2%)',
    orange6: 'hsl(25, 100%, 82.8%)',
    orange7: 'hsl(24, 100%, 75.3%)',
    orange8: 'hsl(24, 94.5%, 64.3%)',
    orange9: 'hsl(24, 94.0%, 50.0%)',
    orange10: 'hsl(24, 100%, 46.5%)',
    orange11: 'hsl(24, 100%, 37.0%)',
    orange12: 'hsl(15, 60.0%, 17.0%)',
};

const plum = {
    plum1: 'hsl(292, 90.0%, 99.4%)',
    plum2: 'hsl(300, 100%, 98.6%)',
    plum3: 'hsl(299, 71.2%, 96.4%)',
    plum4: 'hsl(299, 62.0%, 93.8%)',
    plum5: 'hsl(298, 56.1%, 90.5%)',
    plum6: 'hsl(296, 51.3%, 85.8%)',
    plum7: 'hsl(295, 48.2%, 78.9%)',
    plum8: 'hsl(292, 47.7%, 70.8%)',
    plum9: 'hsl(292, 45.0%, 51.0%)',
    plum10: 'hsl(292, 50.2%, 46.9%)',
    plum11: 'hsl(292, 60.0%, 42.5%)',
    plum12: 'hsl(291, 66.0%, 14.0%)',
};

const red = {
    red1: 'hsl(359, 100%, 99.4%)',
    red2: 'hsl(359, 100%, 98.6%)',
    red3: 'hsl(360, 100%, 96.8%)',
    red4: 'hsl(360, 97.9%, 94.8%)',
    red5: 'hsl(360, 90.2%, 91.9%)',
    red6: 'hsl(360, 81.7%, 87.8%)',
    red7: 'hsl(359, 74.2%, 81.7%)',
    red8: 'hsl(359, 69.5%, 74.3%)',
    red9: 'hsl(358, 75.0%, 59.0%)',
    red10: 'hsl(358, 69.4%, 55.2%)',
    red11: 'hsl(358, 65.0%, 48.7%)',
    red12: 'hsl(354, 50.0%, 14.6%)',
};

const sky = {
    sky1: 'hsl(193, 100%, 98.8%)',
    sky2: 'hsl(193, 100%, 97.3%)',
    sky3: 'hsl(193, 99.0%, 94.7%)',
    sky4: 'hsl(193, 91.4%, 91.4%)',
    sky5: 'hsl(194, 82.0%, 86.6%)',
    sky6: 'hsl(194, 74.1%, 79.5%)',
    sky7: 'hsl(194, 72.3%, 69.6%)',
    sky8: 'hsl(193, 77.9%, 53.9%)',
    sky9: 'hsl(193, 98.0%, 70.0%)',
    sky10: 'hsl(193, 87.0%, 66.5%)',
    sky11: 'hsl(195, 100%, 31.5%)',
    sky12: 'hsl(195, 100%, 13.0%)',
};

const slate = {
    slate1: 'hsl(206, 30.0%, 98.8%)',
    slate2: 'hsl(210, 16.7%, 97.6%)',
    slate3: 'hsl(209, 13.3%, 95.3%)',
    slate4: 'hsl(209, 12.2%, 93.2%)',
    slate5: 'hsl(208, 11.7%, 91.1%)',
    slate6: 'hsl(208, 11.3%, 88.9%)',
    slate7: 'hsl(207, 11.1%, 85.9%)',
    slate8: 'hsl(205, 10.7%, 78.0%)',
    slate9: 'hsl(206, 6.0%, 56.1%)',
    slate10: 'hsl(206, 5.8%, 52.3%)',
    slate11: 'hsl(206, 6.0%, 43.5%)',
    slate12: 'hsl(206, 24.0%, 9.0%)',
};

const teal = {
    teal1: 'hsl(165, 60.0%, 98.8%)',
    teal2: 'hsl(169, 64.7%, 96.7%)',
    teal3: 'hsl(169, 59.8%, 94.0%)',
    teal4: 'hsl(169, 53.1%, 90.2%)',
    teal5: 'hsl(170, 47.1%, 85.0%)',
    teal6: 'hsl(170, 42.6%, 77.9%)',
    teal7: 'hsl(170, 39.9%, 68.1%)',
    teal8: 'hsl(172, 42.1%, 52.5%)',
    teal9: 'hsl(173, 80.0%, 36.0%)',
    teal10: 'hsl(173, 83.4%, 32.5%)',
    teal11: 'hsl(174, 90.0%, 25.2%)',
    teal12: 'hsl(170, 50.0%, 12.5%)',
};

const slateA = {
    slateA1: 'hsla(210, 92.6%, 26.5%, 0.016)',
    slateA2: 'hsla(210, 87.7%, 16.0%, 0.028)',
    slateA3: 'hsla(210, 98.8%, 14.4%, 0.055)',
    slateA4: 'hsla(210, 94.1%, 11.1%, 0.075)',
    slateA5: 'hsla(216, 91.1%, 10.9%, 0.099)',
    slateA6: 'hsla(206, 96.4%, 11.3%, 0.126)',
    slateA7: 'hsla(210, 99.1%, 10.1%, 0.157)',
    slateA8: 'hsla(205, 96.5%, 10.0%, 0.244)',
    slateA9: 'hsla(206, 98.8%, 5.9%, 0.467)',
    slateA10: 'hsla(206, 99.6%, 5.4%, 0.506)',
    slateA11: 'hsla(206, 97.0%, 4.8%, 0.593)',
    slateA12: 'hsla(202, 97.0%, 2.4%, 0.934)',
};

const stitchesThemeMap = {
    // Map these properties to the `space` scale
    ...n,
    width: "space sizes",
    height: "space sizes",
    spaceX: "space",
    spaceY: "space",
};
const stitchesUtils = {
    mx: (value) => ({
        marginLeft: value,
        marginRight: value,
    }),
    my: (value) => ({
        marginTop: value,
        marginBottom: value,
    }),
    px: (value) => ({
        paddingLeft: value,
        paddingRight: value,
    }),
    py: (value) => ({
        paddingTop: value,
        paddingBottom: value,
    }),
    size: (value) => ({ width: value, height: value }),
    spaceY: (value) => ({
        "& > :not([hidden]) ~ :not([hidden])": {
            marginTop: value,
        },
    }),
    spaceX: (value) => ({
        "& > :not([hidden]) ~ :not([hidden])": {
            marginLeft: value,
        },
    }),
    typeStyle: (styleName) => styleName === "hero"
        ? {
            fontSize: "var(--fontSizes-7)",
            fontWeight: "var(--fontWeights-heavy)",
            fontFamily: "var(--fonts-display)",
            lineHeight: "var(--lineHeights-tight)",
            letterSpacing: "var(--letterSpacings-tighter)",
        }
        : styleName === "headline"
            ? {
                fontSize: "var(--fontSizes-6)",
                lineHeight: "var(--lineHeights-tight)",
                fontFamily: "var(--fonts-display)",
                fontWeight: "var(--fontWeights-heavy)",
                letterSpacing: "var(--letterSpacings-tighter)",
            }
            : styleName === "title1"
                ? {
                    fontSize: "var(--fontSizes-5)",
                    lineHeight: "var(--lineHeights-tight)",
                    fontFamily: "var(--fonts-display)",
                    fontWeight: "var(--fontWeights-heavy)",
                    letterSpacing: "var(--letterSpacings-tight)",
                }
                : styleName === "title2"
                    ? {
                        fontSize: "var(--fontSizes-4)",
                        lineHeight: "var(--lineHeights-tight)",
                        fontFamily: "var(--fonts-display)",
                        fontWeight: "var(--fontWeights-heavy)",
                        letterSpacing: "var(--letterSpacings-tight)",
                    }
                    : styleName === "title3"
                        ? {
                            fontSize: "var(--fontSizes-3)",
                            lineHeight: "var(--lineHeights-tight)",
                            fontFamily: "var(--fonts-display)",
                            fontWeight: "var(--fontWeights-heavy)",
                            letterSpacing: "var(--letterSpacings-tight)",
                        }
                        : styleName === "heading"
                            ? {
                                fontSize: "var(--fontSizes-2)",
                                lineHeight: "var(--lineHeights-tight)",
                                fontFamily: "var(--fonts-display)",
                                fontWeight: "var(--fontWeights-heavy)",
                                letterSpacing: "var(--letterSpacings-tight)",
                            }
                            : styleName === "subhead"
                                ? {
                                    fontSize: "var(--fontSizes-1)",
                                    fontFamily: "var(--fonts-display)",
                                    fontWeight: "var(--fontWeights-heavy)",
                                    letterSpacing: "var(--letterSpacings-normal)",
                                }
                                : styleName === "body"
                                    ? {
                                        fontSize: "var(--fontSizes-0)",
                                        fontFamily: "var(--fonts-text)",
                                        letterSpacing: "var(--letterSpacings-normal)",
                                    }
                                    : styleName === "footnote"
                                        ? {
                                            fontSize: "var(--fontSizes--1)",
                                            fontFamily: "var(--fonts-text)",
                                            letterSpacing: "var(--letterSpacings-wide)",
                                        }
                                        : styleName === "caption"
                                            ? {
                                                fontSize: "var(--fontSizes--2)",
                                                fontFamily: "var(--fonts-text)",
                                            }
                                            : styleName === "micro"
                                                ? {
                                                    fontSize: "var(--fontSizes--3)",
                                                    fontFamily: "var(--fonts-text)",
                                                }
                                                : {},
};
const stitchesTheme = {
    fonts: {
        display: "circe, sans-serif",
        text: "lato, sans-serif",
    },
    fontWeights: {
        standard: 400,
        heavy: 700,
    },
    letterSpacings: {
        tightest: "-.025em",
        tighter: "-.015em",
        tight: "-.01em",
        normal: 0,
        wide: ".005em",
        wider: ".01em",
        widest: ".02em",
    },
    radii: {
        xs: "0.125rem",
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem", // 12px
    },
    fontSizes: {
        "-3": "0.6875rem",
        "-2": "0.75rem",
        "-1": "0.875rem",
        0: "1rem",
        1: "clamp(1.13rem, calc(1.10rem + 0.11vw), 1.20rem)",
        2: "clamp(1.27rem, calc(1.22rem + 0.25vw), 1.44rem)",
        3: "clamp(1.42rem, calc(1.34rem + 0.43vw), 1.73rem)",
        4: "clamp(1.60rem, calc(1.47rem + 0.67vw), 2.07rem)",
        5: "clamp(1.80rem, calc(1.61rem + 0.98vw), 2.49rem)",
        6: "clamp(2.03rem, calc(1.75rem + 1.37vw), 2.99rem)",
        7: "clamp(2.28rem, calc(1.91rem + 1.86vw), 3.58rem)",
    },
    space: {
        // t-shirts:
        // https://utopia.fyi/space/calculator?c=320,24,1.067,1280,32,1.2,7,3,&s=0.75|0.5|0.375|0.25|0.125,1.25|1.5|1.75|2|2.25|2.5|2.75|3,s-l|xs-m
        "5xs": "clamp(0.19rem, calc(0.17rem + 0.10vw), 0.25rem)",
        "4xs": "clamp(0.38rem, calc(0.33rem + 0.21vw), 0.50rem)",
        "3xs": "clamp(0.56rem, calc(0.50rem + 0.31vw), 0.75rem)",
        "2xs": "clamp(0.75rem, calc(0.67rem + 0.42vw), 1.00rem)",
        xs: "clamp(1.13rem, calc(1.00rem + 0.63vw), 1.50rem)",
        s: "clamp(1.50rem, calc(1.33rem + 0.83vw), 2.00rem)",
        m: "clamp(1.88rem, calc(1.67rem + 1.04vw), 2.50rem)",
        l: "clamp(2.25rem, calc(2.00rem + 1.25vw), 3.00rem)",
        xl: "clamp(2.63rem, calc(2.33rem + 1.46vw), 3.50rem)",
        "2xl": "clamp(3.00rem, calc(2.67rem + 1.67vw), 4.00rem)",
        "3xl": "clamp(3.38rem, calc(3.00rem + 1.88vw), 4.50rem)",
        "4xl": "clamp(3.75rem, calc(3.33rem + 2.08vw), 5.00rem)",
        "5xl": "clamp(4.13rem, calc(3.67rem + 2.29vw), 5.50rem)",
        "6xl": "clamp(4.50rem, calc(4.00rem + 2.50vw), 6.00rem)",
        // One-up scales
        "5xs-4xs": "clamp(0.19rem, calc(0.08rem + 0.52vw), 0.50rem)",
        "4xs-3xs": "clamp(0.38rem, calc(0.25rem + 0.63vw), 0.75rem)",
        "3xs-2xs": "clamp(0.56rem, calc(0.42rem + 0.73vw), 1.00rem)",
        "2xs-xs": "clamp(0.75rem, calc(0.50rem + 1.25vw), 1.50rem)",
        "xs-s": "clamp(1.13rem, calc(0.83rem + 1.46vw), 2.00rem)",
        "s-m": "clamp(1.50rem, calc(1.17rem + 1.67vw), 2.50rem)",
        "m-l": "clamp(1.88rem, calc(1.50rem + 1.88vw), 3.00rem)",
        "l-xl": "clamp(2.25rem, calc(1.83rem + 2.08vw), 3.50rem)",
        "xl-2xl": "clamp(2.63rem, calc(2.17rem + 2.29vw), 4.00rem)",
        "2xl-3xl": "clamp(3.00rem, calc(2.50rem + 2.50vw), 4.50rem)",
        "3xl-4xl": "clamp(3.38rem, calc(2.83rem + 2.71vw), 5.00rem)",
        "4xl-5xl": "clamp(3.75rem, calc(3.17rem + 2.92vw), 5.50rem)",
        "5xl-6xl": "clamp(4.13rem, calc(3.50rem + 3.13vw), 6.00rem)",
        "05": "0.25rem",
        1: "0.5rem",
        2: "1rem",
        3: "1.5rem",
        4: "2rem",
        5: "2.5rem",
        6: "3rem",
        7: "3.5rem",
        8: "4rem",
        9: "4.5rem",
        10: "5rem", // 80px
    },
    sizes: {
        micro: "20rem",
        xsmall: "30rem",
        small: "40rem",
        medium: "60rem",
        large: "80rem",
        xlarge: "90rem",
        max: "100rem",
    },
    shadows: {
        1: "0px 1px 1px rgba(0, 0, 0, 0.2)",
        2: "0px 2px 3px rgba(0, 0, 0, 0.16)",
        3: "0px 3px 4px rgba(0, 0, 0, 0.16)",
        4: "1px 4px 8px rgba(0, 0, 0, 0.16)",
        5: "0px 12px 12px rgba(0, 0, 0, 0.18)",
    },
    colors: {
        primaryBrand: "#1C66DE",
        primaryMidnight: "#030063",
        // Neutrals
        white: "#ffffff",
        black: "#000000",
        ...slate,
        ...slateA,
        // Accent palette:
        // Note: These colours wont change per theme
        accentAmber: amber.amber9,
        accentOrange: orange$1.orange10,
        accentRed: red.red9,
        accentPlum: plum$1.plum9,
        accentBlue: blue$1.blue8,
        accentSky: sky.sky8,
        accentTeal: teal.teal9,
        accentGreen: green.green8,
        // Extended palette:
        ...amber,
        ...red,
        ...plum,
        ...indigo,
        ...blue,
        ...sky,
        ...teal,
        ...green,
        ...orange,
        // !! Deprecated:
        neutral100: "#FFFFFF",
        neutral200: "#F4F8FC",
        neutral300: "#D5DDE5",
        neutral400: "#B1BCC7",
        neutral500: "#8C9AA8",
        neutral600: "#6F7F8F",
        neutral700: "#415161",
        neutral800: "#293642",
        neutral900: "#172029",
        midnight100: "#050096",
        midnight300: "#04007D",
        midnight500: "var(--colors-primaryMidnight)",
        midnight700: "#020042",
        midnight900: "#010029",
        accentOrangeDark: "#E68B18",
        accentPink: "#EA5165",
        accentPurple: "#682383",
        accentNavy: "#003D6A",
        accentRoyal: "#005695",
        accentCyan: "#00AADB",
        accentLime: "#67BA8A",
    },
    lineHeights: {
        tighter: "1.1em",
        tight: "1.2em",
        normal: "1.4em",
        wide: "1.5em",
    },
};
const stitchesMedia = {
    // Core breakpoints:
    xs: "(min-width: 0)",
    sm: "(min-width: 48rem)",
    md: "(min-width: 64rem)",
    lg: "(min-width: 80rem)",
    xl: "(min-width: 90rem)",
    // Sub Breakpoints:
    xs1: "var(--media-xs)",
    xs2: "(min-width: 480px)",
    xs3: "(min-width: 600px)",
    sm1: "var(--media-sm)",
    sm2: "(min-width: 840px)",
    sm3: "(min-width: 960px)",
    md1: "var(--media-md)",
    md2: "(min-width: 1140px)",
    md3: "(min-width: 1200px)",
    lg1: "var(--media-lg)",
    lg2: "(min-width: 1320px)",
    lg3: "(min-width: 1400px)",
    xl1: "var(--media-xl)",
    xl2: "(min-width: 1600px)",
    xl3: "(min-width: 1920px)",
};
const stitchesDarkColors = {
    colors: {
        // Neutrals
        white: "#000000",
        black: "#ffffff",
        ...slate$1,
        ...slateA$1,
        // Extended palette:
        ...amber$1,
        ...red$1,
        ...plum$1,
        ...indigo$1,
        ...blue$1,
        ...sky$1,
        ...teal$1,
        ...green$1,
        ...orange$1,
    },
};

// stitches.config.ts
const { styled, css, theme, globalCss, config, keyframes } = q({
    prefix: "",
    themeMap: {
        ...stitchesThemeMap,
    },
    media: {
        ...stitchesMedia,
    },
    theme: {
        ...stitchesTheme,
    },
    utils: {
        ...stitchesUtils,
    },
});
Q("dark", {
    ...stitchesDarkColors,
});

const StyledButton = styled(motion.button, {
    // Reset
    border: 0,
    cursor: "pointer",
    typeStyle: "body",
    fontFamily: "$display",
    fontWeight: "$heavy",
    color: "$white",
    paddingInline: "$2",
    paddingBlock: "$1",
    position: "relative",
    background: "transparent",
    ".button-inner": {
        position: "relative",
        zIndex: 2,
    },
    "&::after": {
        content: "",
        display: "block",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
    },
    variants: {
        type: {
            primary: {
                "&::after": {
                    backgroundColor: "$primaryBrand",
                    borderRadius: "$sm",
                },
            },
            secondary: {
                color: "$primaryBrand",
                "&::after": {
                    background: "transparent",
                    border: "2px solid $primaryBrand",
                    borderRadius: "$sm",
                },
                background: "transparent",
            },
        },
    },
});
const Button = (props) => {
    const { type, children, onClick } = props;
    return (jsx(Fragment, { children: jsx(StyledButton, { type: type, 
            // @ts-expect-error
            onClick: onClick, whileHover: {
                scale: 1.05,
            }, whileTap: {
                scale: 0.975,
            }, children: jsx("div", { className: "button-inner", children: children }) }) }));
};
Button.defaultProps = {
    children: "I am a button!",
    type: "primary",
};

const getTokens = (tokenObject, cssProperty = 'color') => {
    // Get the colour names array
    const tokenNames = Object.keys(tokenObject);
    // Empty object
    let newTokens = {};
    // Loop over the array to build new CSS
    tokenNames.map((name, i) => {
        newTokens[name] = {};
        newTokens[name][cssProperty] = `$${name}`;
    });
    return newTokens;
};

const typeStyleNames = [
    "hero",
    "headline",
    "title1",
    "title2",
    "title3",
    "heading",
    "subhead",
    "body",
    "footnote",
    "caption",
    "micro",
];
const getType = config.utils.typeStyle;
const getTypeStyles = () => {
    // Empty object
    let newStyle = {};
    typeStyleNames.map((name, i) => {
        newStyle[name] = getType(name);
    });
    return newStyle;
};

const StyledText = styled("div", {
    variants: {
        typeStyle: {
            ...getTypeStyles(),
        },
        color: {
            ...getTokens(theme.colors, "color"),
        },
        leading: {
            ...getTokens(theme.lineHeights, "lineHeight"),
        },
        weight: {
            ...getTokens(theme.fontWeights, "fontWeight"),
        },
        size: {
            ...getTokens(theme.fontSizes, "fontSize"),
        },
        font: {
            ...getTokens(theme.fonts, "fontFamily"),
        },
    },
    defaultVariants: {
        typeStyle: "body",
    },
});
const Text = ({ children, typeStyle, tag, color, leading, weight, size, font, }) => {
    return (jsx(StyledText, { typeStyle: typeStyle, color: color, leading: leading, weight: weight, size: size, font: font, as: tag, children: children }));
};

const getSpaces = () => {
    const obj = theme.space;
    // get array
    const spaceNames = Object.keys(obj);
    // empty object
    let newSpaces = {};
    spaceNames.map((name, i) => {
        newSpaces[name] = {};
        newSpaces[name]['& > * ~ *'] = { marginTop: `$${name}` };
    });
    return newSpaces;
};

const StyledContainer = styled("div", {
    width: "100%",
    marginInline: "auto",
    variants: {
        width: {
            ...getTokens(theme.sizes, "maxWidth"),
        },
        gap: {
            ...getSpaces(),
        },
        sidePadding: {
            none: {
                paddingInline: 0,
            },
            tight: {
                paddingInline: "$space$xs",
            },
            normal: {
                paddingInline: "$space$s",
            },
            loose: {
                paddingInline: "$space$m",
            },
        },
    },
    defaultVariants: {
        sidePadding: "normal",
        width: "max",
    },
});
const Container = ({ width, gap, sidePadding, children, }) => {
    return (jsx(StyledContainer, { width: width, gap: gap, sidePadding: sidePadding, children: children }));
};

const customStitchesStyles = {
    html: {
        boxSizing: "border-box",
    },
    "*, *:before, *:after": {
        boxSizing: "inherit",
    },
    body: {
        "-webkit-font-smoothing": "antialiased",
        fontFamily: "var(--fonts-text)",
        lineHeight: "var(--lineHeights-normal)",
        margin: 0,
    },
    // reset type
    "h1, h2, h3, h4, h5, h6": {
        margin: 0,
    },
};
const stitchesStyles = () => {
    globalCss(customStitchesStyles)();
};

const twTypeStyles = {
    ".text-hero": {
        fontSize: "var(--fontSizes-7)",
        lineHeight: "var(--lineHeights-tight)",
        fontFamily: "var(--fonts-display)",
        fontWeight: "var(--fontWeights-heavy)",
        letterSpacing: "var(--letterSpacings-tighter)",
    },
    ".text-headline": {
        fontSize: "var(--fontSizes-6)",
        lineHeight: "var(--lineHeights-tight)",
        fontFamily: "var(--fonts-display)",
        fontWeight: "var(--fontWeights-heavy)",
        letterSpacing: "var(--letterSpacings-tighter)",
    },
    ".text-title1": {
        fontSize: "var(--fontSizes-5)",
        lineHeight: "var(--lineHeights-tight)",
        fontFamily: "var(--fonts-display)",
        fontWeight: "var(--fontWeights-heavy)",
        letterSpacing: "var(--letterSpacings-tight)",
    },
    ".text-title2": {
        fontSize: "var(--fontSizes-4)",
        lineHeight: "var(--lineHeights-tight)",
        fontFamily: "var(--fonts-display)",
        fontWeight: "var(--fontWeights-heavy)",
        letterSpacing: "var(--letterSpacings-tight)",
    },
    ".text-title3": {
        fontSize: "var(--fontSizes-3)",
        lineHeight: "var(--lineHeights-tight)",
        fontFamily: "var(--fonts-display)",
        fontWeight: "var(--fontWeights-heavy)",
        letterSpacing: "var(--letterSpacings-tight)",
    },
    ".text-heading": {
        fontSize: "var(--fontSizes-2)",
        lineHeight: "var(--lineHeights-tight)",
        fontFamily: "var(--fonts-display)",
        fontWeight: "var(--fontWeights-heavy)",
        letterSpacing: "var(--letterSpacings-tight)",
    },
    ".text-subhead": {
        fontSize: "var(--fontSizes-1)",
        fontFamily: "var(--fonts-display)",
        fontWeight: "var(--fontWeights-heavy)",
        letterSpacing: "var(--letterSpacings-normal)",
    },
    ".text-body": {
        fontSize: "var(--fontSizes-0)",
        fontFamily: "var(--fonts-text)",
        letterSpacing: "var(--letterSpacings-normal)",
    },
    ".text-footnote": {
        fontSize: "var(--fontSizes--1)",
        fontFamily: "var(--fonts-text)",
        letterSpacing: "var(--letterSpacings-wide)",
    },
    ".text-caption": {
        fontSize: "var(--fontSizes--2)",
        fontFamily: "var(--fonts-text)",
    },
    ".text-micro": {
        fontSize: "var(--fontSizes--3)",
        fontFamily: "var(--fonts-text)",
    },
};
const twTheme = {
    colors: {
        transparent: "transparent",
        white: "var(--colors-white)",
        black: "var(--colors-black)",
        primary: {
            brand: "var(--colors-primaryBrand)",
            midnight: "var(--colors-primaryMidnight)",
        },
        accent: {
            amber: "var(--colors-accentAmber)",
            orange: "var(--colors-accentOrange)",
            red: "var(--colors-accentRed)",
            plum: "var(--colors-accentPlum)",
            blue: "var(--colors-accentBlue)",
            sky: "var(--colors-accentSky)",
            teal: "var(--colors-accentTeal)",
            green: "var(--colors-accentGreen)",
        },
        slate: {
            1: "var(--colors-slate1)",
            2: "var(--colors-slate2)",
            3: "var(--colors-slate3)",
            4: "var(--colors-slate4)",
            5: "var(--colors-slate5)",
            6: "var(--colors-slate6)",
            7: "var(--colors-slate7)",
            8: "var(--colors-slate8)",
            9: "var(--colors-slate9)",
            10: "var(--colors-slate10)",
            11: "var(--colors-slate11)",
            12: "var(--colors-slate12)",
        },
        amber: {
            1: "var(--colors-amber1)",
            2: "var(--colors-amber2)",
            3: "var(--colors-amber3)",
            4: "var(--colors-amber4)",
            5: "var(--colors-amber5)",
            6: "var(--colors-amber6)",
            7: "var(--colors-amber7)",
            8: "var(--colors-amber8)",
            9: "var(--colors-amber9)",
            10: "var(--colors-amber10)",
            11: "var(--colors-amber11)",
            12: "var(--colors-amber12)",
        },
        red: {
            1: "var(--colors-red1)",
            2: "var(--colors-red2)",
            3: "var(--colors-red3)",
            4: "var(--colors-red4)",
            5: "var(--colors-red5)",
            6: "var(--colors-red6)",
            7: "var(--colors-red7)",
            8: "var(--colors-red8)",
            9: "var(--colors-red9)",
            10: "var(--colors-red10)",
            11: "var(--colors-red11)",
            12: "var(--colors-red12)",
        },
        plum: {
            1: "var(--colors-plum1)",
            2: "var(--colors-plum2)",
            3: "var(--colors-plum3)",
            4: "var(--colors-plum4)",
            5: "var(--colors-plum5)",
            6: "var(--colors-plum6)",
            7: "var(--colors-plum7)",
            8: "var(--colors-plum8)",
            9: "var(--colors-plum9)",
            10: "var(--colors-plum10)",
            11: "var(--colors-plum11)",
            12: "var(--colors-plum12)",
        },
        indigo: {
            1: "var(--colors-indigo1)",
            2: "var(--colors-indigo2)",
            3: "var(--colors-indigo3)",
            4: "var(--colors-indigo4)",
            5: "var(--colors-indigo5)",
            6: "var(--colors-indigo6)",
            7: "var(--colors-indigo7)",
            8: "var(--colors-indigo8)",
            9: "var(--colors-indigo9)",
            10: "var(--colors-indigo10)",
            11: "var(--colors-indigo11)",
            12: "var(--colors-indigo12)",
        },
        blue: {
            1: "var(--colors-blue1)",
            2: "var(--colors-blue2)",
            3: "var(--colors-blue3)",
            4: "var(--colors-blue4)",
            5: "var(--colors-blue5)",
            6: "var(--colors-blue6)",
            7: "var(--colors-blue7)",
            8: "var(--colors-blue8)",
            9: "var(--colors-blue9)",
            10: "var(--colors-blue10)",
            11: "var(--colors-blue11)",
            12: "var(--colors-blue12)",
        },
        sky: {
            1: "var(--colors-sky1)",
            2: "var(--colors-sky2)",
            3: "var(--colors-sky3)",
            4: "var(--colors-sky4)",
            5: "var(--colors-sky5)",
            6: "var(--colors-sky6)",
            7: "var(--colors-sky7)",
            8: "var(--colors-sky8)",
            9: "var(--colors-sky9)",
            10: "var(--colors-sky10)",
            11: "var(--colors-sky11)",
            12: "var(--colors-sky12)",
        },
        teal: {
            1: "var(--colors-teal1)",
            2: "var(--colors-teal2)",
            3: "var(--colors-teal3)",
            4: "var(--colors-teal4)",
            5: "var(--colors-teal5)",
            6: "var(--colors-teal6)",
            7: "var(--colors-teal7)",
            8: "var(--colors-teal8)",
            9: "var(--colors-teal9)",
            10: "var(--colors-teal10)",
            11: "var(--colors-teal11)",
            12: "var(--colors-teal12)",
        },
        green: {
            1: "var(--colors-green1)",
            2: "var(--colors-green2)",
            3: "var(--colors-green3)",
            4: "var(--colors-green4)",
            5: "var(--colors-green5)",
            6: "var(--colors-green6)",
            7: "var(--colors-green7)",
            8: "var(--colors-green8)",
            9: "var(--colors-green9)",
            10: "var(--colors-green10)",
            11: "var(--colors-green11)",
            12: "var(--colors-green12)",
        },
        orange: {
            1: "var(--colors-orange1)",
            2: "var(--colors-orange2)",
            3: "var(--colors-orange3)",
            4: "var(--colors-orange4)",
            5: "var(--colors-orange5)",
            6: "var(--colors-orange6)",
            7: "var(--colors-orange7)",
            8: "var(--colors-orange8)",
            9: "var(--colors-orange9)",
            10: "var(--colors-orange10)",
            11: "var(--colors-orange11)",
            12: "var(--colors-orange12)",
        },
        // deprecated colours
        neutral: {
            100: "var(--colors-neutral100)",
            200: "var(--colors-neutral200)",
            300: "var(--colors-neutral300)",
            400: "var(--colors-neutral400)",
            500: "var(--colors-neutral500)",
            600: "var(--colors-neutral600)",
            700: "var(--colors-neutral700)",
            800: "var(--colors-neutral800)",
            900: "var(--colors-neutral900)",
        },
        midnight: {
            100: "var(--colors-midnight100)",
            300: "var(--colors-midnight300)",
            500: "var(--colors-midnight500)",
            700: "var(--colors-midnight700)",
            900: "var(--colors-midnight900)",
        },
    },
    fontSize: {
        "-3": "var(--step--3)",
        "-2": "var(--step--2)",
        "-1": "var(--step--1)",
        0: "var(--step-0)",
        1: "var(--step-1)",
        2: "var(--step-2)",
        3: "var(--step-3)",
        4: "var(--step-4)",
        5: "var(--step-5)",
        6: "var(--step-6)",
        7: "var(--step-7)",
    },
    fontFamily: {
        display: "var(--fonts-display)",
        text: "var(--fonts-text)",
        sans: "var(--fonts-text)",
    },
    lineHeight: {
        DEFAULT: "var(--lineHeights-normal)",
        tighter: "var(--lineHeights-xtight)",
        tight: "var(--lineHeights-tight)",
        normal: "var(--lineHeights-normal)",
        wide: "var(--lineHeights-loose)",
    },
    fontWeight: {
        DEFAULT: "var(--fontWeights-standard)",
        standard: "var(--fontWeights-standard)",
        heavy: "var(--fontWeights-heavy)",
    },
    letterSpacing: {
        tightest: "var(--letterSpacings-tightest)",
        tighter: "var(--letterSpacings-tighter)",
        tight: "var(--letterSpacings-tight)",
        normal: "var(--letterSpacings-normal)",
        wide: "var(--letterSpacings-wide)",
        wider: "var(--letterSpacings-wider)",
        widest: "var(--letterSpacings-widest)",
    },
    spacing: {
        0: "0rem",
        0.5: "0.25rem",
        1: "0.5rem",
        2: "1rem",
        3: "1.5rem",
        4: "2rem",
        5: "2.5rem",
        6: "3rem",
        7: "3.5rem",
        8: "4rem",
        9: "4.5rem",
        10: "10rem",
        // base scale
        "5xs": "var(--space-5xs)",
        "4xs": "var(--space-4xs)",
        "3xs": "var(--space-3xs)",
        "2xs": "var(--space-2xs)",
        xs: "var(--space-xs)",
        s: "var(--space-s)",
        m: "var(--space-m)",
        l: "var(--space-l)",
        xl: "var(--space-xl)",
        "2xl": "var(--space-2xl)",
        "3xl": "var(--space-3xl)",
        "4xl": "var(--space-4xl)",
        "5xl": "var(--space-5xl)",
        "6xl": "var(--space-6xl)",
        // One-up
        "5xs-4xs": "var(--space-5xs-4xs)",
        "4xs-3xs": "var(--space-4xs-3xs)",
        "3xs-2xs": "var(--space-3xs-2xs)",
        "2xs-xs": "var(--space-2xs-xs)",
        "xs-s": "var(--space-xs-s)",
        "s-m": "var(--space-s-m)",
        "m-l": "var(--space-m-l)",
        "l-xl": "var(--space-l-xl)",
        "xl-2xl": "var(--space-xl-2xl)",
        "2xl-3xl": "var(--space-2xl-3xl)",
        "3xl-4xl": "var(--space-3xl-4xl)",
        "4xl-5xl": "var(--space-4xl-5xl)",
        "5xl-6xl": "var(--space-5xl-6xl)", // 88px -> 96px
    },
    screens: {
        xs: "0",
        sm: "48rem",
        md: "64rem",
        lg: "80rem",
        xl: "90rem", // 1440
    },
    extend: {},
};

export { Button, Container, Text, getSpaces, getTokens, getTypeStyles, stitchesDarkColors, stitchesMedia, stitchesStyles, stitchesTheme, stitchesThemeMap, stitchesUtils, twTheme, twTypeStyles };
//# sourceMappingURL=index.js.map
