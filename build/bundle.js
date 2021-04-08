var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function i(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function g(){return d(" ")}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let f;function b(t){f=t}const x=[],y=[],v=[],w=[],$=Promise.resolve();let S=!1;function k(t){v.push(t)}let C=!1;const A=new Set;function E(){if(!C){C=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];b(e),j(e.$$)}for(b(null),x.length=0;y.length;)y.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];A.has(e)||(A.add(e),e())}v.length=0}while(x.length);for(;w.length;)w.pop()();S=!1,C=!1,A.clear()}}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const _=new Set;let H;function L(){H={r:0,c:[],p:H}}function B(){H.r||o(H.c),H=H.p}function O(t,e){t&&t.i&&(_.delete(t),t.i(e))}function P(t,e,n,i){if(t&&t.o){if(_.has(t))return;_.add(t),H.c.push(()=>{_.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function D(t,e){const n={},i={},o={$$scope:1};let s=t.length;for(;s--;){const r=t[s],l=e[s];if(l){for(const t in r)t in l||(i[t]=1);for(const t in l)o[t]||(n[t]=l[t],o[t]=1);t[s]=l}else for(const t in r)o[t]=1}for(const t in i)t in n||(n[t]=void 0);return n}function M(t){return"object"==typeof t&&null!==t?t:{}}function T(t){t&&t.c()}function G(t,e,i){const{fragment:r,on_mount:l,on_destroy:c,after_update:a}=t.$$;r&&r.m(e,i),k(()=>{const e=l.map(n).filter(s);c?c.push(...e):o(e),t.$$.on_mount=[]}),a.forEach(k)}function I(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function R(t,e){-1===t.$$.dirty[0]&&(x.push(t),S||(S=!0,$.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(e,n,s,r,l,c,u=[-1]){const m=f;b(e);const d=n.props||{},g=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:i(),dirty:u,skip_bound:!1};let p=!1;if(g.ctx=s?s(e,d,(t,n,...i)=>{const o=i.length?i[0]:n;return g.ctx&&l(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),p&&R(e,t)),n}):[],g.update(),p=!0,o(g.before_update),g.fragment=!!r&&r(g.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);g.fragment&&g.fragment.l(t),t.forEach(a)}else g.fragment&&g.fragment.c();n.intro&&O(e.$$.fragment),G(e,n.target,n.anchor),E()}b(m)}class N{$destroy(){I(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function q(t,e,n){const i=t.slice();return i[5]=e[n],i}function z(t){let e,n,i,o,s,r,u,f,b=t[5].name+"";return{c(){e=m("div"),n=m("img"),s=g(),r=m("span"),u=d(b),f=g(),p(n,"class","w-16 h-16"),n.src!==(i=t[5].imgSrc)&&p(n,"src",i),p(n,"alt",o=t[5].imgAlt),p(r,"class","mt-2 mx-3 text-indigo-100 text-sm"),p(e,"class","flex flex-col items-center")},m(t,i){c(t,e,i),l(e,n),l(e,s),l(e,r),l(r,u),l(e,f)},p(t,e){16&e&&n.src!==(i=t[5].imgSrc)&&p(n,"src",i),16&e&&o!==(o=t[5].imgAlt)&&p(n,"alt",o),16&e&&b!==(b=t[5].name+"")&&h(u,b)},d(t){t&&a(e)}}}function K(e){let n,i,o,s,r,f,b,x,y,v,w,$=e[4],S=[];for(let t=0;t<$.length;t+=1)S[t]=z(q(e,$,t));return{c(){n=m("a"),i=m("img"),s=g(),r=m("h3"),f=d(e[2]),b=g(),x=m("p"),y=d(e[3]),v=g(),w=m("div");for(let t=0;t<S.length;t+=1)S[t].c();i.src!==(o=e[1])&&p(i,"src",o),p(i,"alt","Sample Project"),p(i,"class","w-full h-64 object-cover"),p(r,"class","mt-3 ml-3 font-bold text-indigo-100 text-xl mb-2"),p(x,"class","mx-3 text-indigo-100 text-base pb-3"),p(w,"class","mx-3 p-2 flex justify-center items-center"),p(n,"class","bg-blue-700 rounded max-w-sm overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"),p(n,"href",e[0]),p(n,"target","_blank")},m(t,e){c(t,n,e),l(n,i),l(n,s),l(n,r),l(r,f),l(n,b),l(n,x),l(x,y),l(n,v),l(n,w);for(let t=0;t<S.length;t+=1)S[t].m(w,null)},p(t,[e]){if(2&e&&i.src!==(o=t[1])&&p(i,"src",o),4&e&&h(f,t[2]),8&e&&h(y,t[3]),16&e){let n;for($=t[4],n=0;n<$.length;n+=1){const i=q(t,$,n);S[n]?S[n].p(i,e):(S[n]=z(i),S[n].c(),S[n].m(w,null))}for(;n<S.length;n+=1)S[n].d(1);S.length=$.length}1&e&&p(n,"href",t[0])},i:t,o:t,d(t){t&&a(n),u(S,t)}}}function W(t,e,n){let{link:i=""}=e,{imageSrc:o=""}=e,{name:s=""}=e,{description:r=""}=e,{techList:l=[]}=e;return t.$$set=t=>{"link"in t&&n(0,i=t.link),"imageSrc"in t&&n(1,o=t.imageSrc),"name"in t&&n(2,s=t.name),"description"in t&&n(3,r=t.description),"techList"in t&&n(4,l=t.techList)},[i,o,s,r,l]}class J extends N{constructor(t){super(),F(this,t,W,K,r,{link:0,imageSrc:1,name:2,description:3,techList:4})}}const U={angular:{imgSrc:"img/angular.svg",imgAlt:"Angular logo",name:"Angular"},bootstrap:{imgSrc:"img/bootstrap.svg",imgAlt:"Bootstrap logo",name:"Bootstrap"},cypress:{imgSrc:"img/cypress.svg",imgAlt:"Cypress logo",name:"Cypress"},docker:{imgSrc:"img/docker.svg",imgAlt:"Docker logo",name:"Docker"},firebase:{imgSrc:"img/firebase.svg",imgAlt:"Firebase logo",name:"Firebase"},javascript:{imgSrc:"img/javascript.svg",imgAlt:"JavaScript logo",name:"JavaScript"},kubernetes:{imgSrc:"img/kubernetes.svg",imgAlt:"Kubernetes logo",name:"Kubernetes"},nodejs:{imgSrc:"img/nodejs.svg",imgAlt:"Node.js logo",name:"Node.js"},react:{imgSrc:"img/react.svg",imgAlt:"React logo",name:"React"},svelte:{imgSrc:"img/svelte.svg",imgAlt:"Svelte logo",name:"Svelte"},tailwindcss:{imgSrc:"img/tailwindcss.svg",imgAlt:"Tailwind CSS logo",name:"Tailwind CSS"},typescript:{imgSrc:"img/typescript.svg",imgAlt:"TypeScript logo",name:"TypeScript"}},V=[{name:"EddieBot",imageSrc:"https://user-images.githubusercontent.com/624760/91444835-3797dc80-e86d-11ea-8dfa-d7993a4d382d.png",description:"Discord bot for EddieHub's Discord server.",link:"https://github.com/EddieHubCommunity/EddieBot",techList:[U.typescript,U.docker]},{name:"LiveStream GitOps Demo",imageSrc:"https://user-images.githubusercontent.com/624760/91444606-e687e880-e86c-11ea-9001-522fc212c7c5.png",description:"GitOps live stream repo for EddieBot",link:"https://github.com/EddieHubCommunity/LiveStream-GitOps-Demo",techList:[U.javascript,U.nodejs,U.docker,U.kubernetes]},{name:"EddieBot Map",imageSrc:"https://user-images.githubusercontent.com/624760/91445888-9f9af280-e86e-11ea-8180-9198953bc33d.png",description:"Live streaming background with a map and maybe more ...",link:"https://github.com/EddieHubCommunity/EddieBotMap",techList:[U.javascript,U.angular,U.firebase]},{name:"EddieHub Community website",imageSrc:"https://user-images.githubusercontent.com/624760/91445058-83e31c80-e86d-11ea-8243-3ca11b384d40.png",description:"Information about our community",link:"https://github.com/EddieHubCommunity/EddieHubCommunity.github.io",techList:[U.javascript,U.svelte,U.tailwindcss,U.cypress]},{name:"Support",imageSrc:"https://user-images.githubusercontent.com/624760/91445509-1d123300-e86e-11ea-9648-c5c715355f26.png",description:"Community Help & Support and AEA (Ask Everyone Anything)",link:"https://github.com/EddieHubCommunity/support"},{name:"EddieBot UI",imageSrc:"https://user-images.githubusercontent.com/624760/91444606-e687e880-e86c-11ea-9001-522fc212c7c5.png",description:"EddieBotUI is the front end application that shows EddieHub Discord Community's public stats.",link:"https://github.com/EddieHubCommunity/EddieBotUI",techList:[U.javascript,U.react,U.bootstrap]},{name:"Awesome GitHub Profiles",imageSrc:"https://user-images.githubusercontent.com/624760/91445261-cefd2f80-e86d-11ea-8421-4553b29d2e4a.png",description:"List of GitHub profiles that have awesome customization, that you can use for inspiration",link:"https://github.com/EddieHubCommunity/awesome-github-profiles"},{name:"Hacktoberfest practice",imageSrc:"https://user-images.githubusercontent.com/624760/91445718-61053800-e86e-11ea-81c7-751328c63e85.png",description:"Repo for you to raise a Pull Request for practice",link:"https://github.com/EddieHubCommunity/hacktoberfest-practice"}],Q={community:{title:"Community",classes:"bg-yellow-400 text-black"},serverBooster:{title:"Server Booster",classes:"bg-purple-400 text-white"},python:{title:"Python",classes:"bg-green-400 text-white"},opensource:{title:"Opensource",classes:"bg-green-400 text-white"},cat:{title:"Cat Lover",classes:"bg-orange-200"}},X=[{name:"Stephen Mount",description:"After 10+ years in software engineering, I am coming up with ideas and things to reverse engineer things for the new wave of ARM etc etc",website:"https://ste.london/",imageSrc:"https://avatars1.githubusercontent.com/u/150512",github:"stemount",badges:["community","serverBooster"]},{name:"Michael Mba",description:"Linux Systems Integrator | Open Source Enthusiast | Photographer | Gamer || Starting my Python journey.",website:"https://mikeysan.hashnode.dev/",imageSrc:"https://avatars0.githubusercontent.com/u/13338176?s=460&u=d66a31344752bb3fa882a59b3effb10e084f226c&v=4",github:"mikeysan",badges:["community","python"]},{name:"Praveen Kumar Purushothaman",description:"Microsoft MVP, Web Developer and Computer Software & UX Architect. Mentor - Full Stack @Thinkful-Ed.",website:"https://praveen.science/",imageSrc:"https://i.imgur.com/XdP5iyp.png",github:"praveenscience",badges:["community","cat"]},{name:"David",description:"Job: Software Developer Consultant I love programming, more specifically w/ Kotlin... it's just the best. Very interested in Web Dev and building discord bots",website:"https://bolt04.github.io/react-ultimate-resume/",imageSrc:"https://avatars1.githubusercontent.com/u/18630253?s=460&u=36cdb692666236ff5db7aa3c71e58327bdbdecc7&v=4",github:"BOLT04",badges:["community"]},{name:"Eddie Jaoude",description:"Fullstack open source DevRel! I love code and the community :). GitHub Star ⭐ program 🤓",website:"http://youtube.com/eddiejaoude?sub_confirmation=1",imageSrc:"https://avatars3.githubusercontent.com/u/624760?s=460&v=4",github:"eddiejaoude",badges:["community","opensource"]},{name:"Petra",description:"Linux and blockchain. Looking for ways to change the world.",website:"https://metaverde.github.io/",imageSrc:"https://avatars1.githubusercontent.com/u/32101027?s=460&u=a3204811c6965f28996b6bcd36bdc800216d5dfe&v=4",github:"metaverde",badges:["community"]},{name:"Amandine Flachs",description:"",website:"https://www.flachsconsulting.com/",imageSrc:"https://avatars0.githubusercontent.com/u/29413522?s=460&v=4",github:"AmandineFlachs",badges:["community"]},{name:"Allan Regush",description:"Passionate about all things hardware and software. I consider myself a jack of all trades - a master of some.",website:"",imageSrc:"https://avatars.githubusercontent.com/u/17693494?s=400&u=5cfa4838b83a0d239c097026fbbae302611d2ccb&v=4",github:"AllanRegush",badges:["community"]},{name:"Nicholas Carrigan",description:"Developer @freecodecamp",website:"https://www.nhcarrigan.com",imageSrc:"https://avatars.githubusercontent.com/u/63889819?s=400&u=9dab24c783a82afce97cfe6438f242e6df641243&v=4",github:"nhcarrigan",badges:["community"]}],Y=[{text:"YouTube",i:"fab fa-youtube-square",link:"https://youtube.com/eddiejaoude?sub_confirmation=1"},{text:"GitHub",i:"fab fa-github-square",link:"https://github.com/EddieHubCommunity"},{text:"Discord",i:"fab fa-discord",link:"https://discord.com/invite/jZQs6Wu"}];function Z(e){let n,i,o;return{c(){n=m("button"),i=d(e[0]),p(n,"class",o="rounded px-1 mr-1 text-sm ml-auto "+e[1])},m(t,e){c(t,n,e),l(n,i)},p:t,i:t,o:t,d(t){t&&a(n)}}}function tt(t,e,n){let{type:i}=e;const{title:o,classes:s}=Q[i];return t.$$set=t=>{"type"in t&&n(2,i=t.type)},[o,s,i]}class et extends N{constructor(t){super(),F(this,t,tt,Z,r,{type:2})}}function nt(t,e,n){const i=t.slice();return i[6]=e[n],i}function it(t){let e,n,i;return{c(){e=m("div"),n=m("img"),p(n,"class","rounded-full"),n.src!==(i=t[3])&&p(n,"src",i),p(n,"alt",t[0]),p(e,"class","h-32 w-32 lg:h-48 lg:w-48 md:h-48 md:w-48")},m(t,i){c(t,e,i),l(e,n)},p(t,e){8&e&&n.src!==(i=t[3])&&p(n,"src",i),1&e&&p(n,"alt",t[0])},d(t){t&&a(e)}}}function ot(t){let e,n;return e=new et({props:{type:t[6]}}),{c(){T(e.$$.fragment)},m(t,i){G(e,t,i),n=!0},p(t,n){const i={};32&n&&(i.type=t[6]),e.$set(i)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function st(t){let e,n,i,o,s,r;return{c(){e=m("div"),n=m("a"),i=m("i"),o=g(),s=m("p"),s.textContent="GitHub",p(i,"class","fa fa-github-alt pr-1 pt-6 text-purple-500 text-lg"),p(s,"class","inline pr-5 pt-5 text-purple-500 text-lg font-medium"),p(n,"target","_blank"),p(n,"href",r="https://github.com/"+t[4]),p(e,"class","flex flex-inline")},m(t,r){c(t,e,r),l(e,n),l(n,i),l(n,o),l(n,s)},p(t,e){16&e&&r!==(r="https://github.com/"+t[4])&&p(n,"href",r)},d(t){t&&a(e)}}}function rt(t){let e,n,i,o,s;return{c(){e=m("div"),n=m("a"),i=m("i"),o=g(),s=m("p"),s.textContent="Website",p(i,"class","fa fa-link pr-1 pt-6 text-purple-500 text-lg"),p(s,"class","inline pr-5 pt-5 text-purple-500 text-lg font-medium"),p(n,"target","_blank"),p(n,"href",t[2]),p(e,"class","flex flex-inline")},m(t,r){c(t,e,r),l(e,n),l(n,i),l(n,o),l(n,s)},p(t,e){4&e&&p(n,"href",t[2])},d(t){t&&a(e)}}}function lt(t){let e,n,i,o;return{c(){e=m("div"),n=m("a"),i=m("i"),p(i,"class","fa fa-github-alt pt-5 pr-5 text-purple-500 text-xl"),p(n,"target","_blank"),p(n,"href",o="https://github.com/"+t[4])},m(t,o){c(t,e,o),l(e,n),l(n,i)},p(t,e){16&e&&o!==(o="https://github.com/"+t[4])&&p(n,"href",o)},d(t){t&&a(e)}}}function ct(t){let e,n,i;return{c(){e=m("div"),n=m("a"),i=m("i"),p(i,"class","fa fa-link pt-5 pr-5 text-purple-500 text-xl"),p(n,"target","_blank"),p(n,"href",t[2])},m(t,o){c(t,e,o),l(e,n),l(n,i)},p(t,e){4&e&&p(n,"href",t[2])},d(t){t&&a(e)}}}function at(t){let e,n,i,o,s,r,f,b,x,y,v,w,$,S,k,C,A,E=t[3]&&it(t),j=t[5],_=[];for(let e=0;e<j.length;e+=1)_[e]=ot(nt(t,j,e));const H=t=>P(_[t],1,1,()=>{_[t]=null});let D=t[4]&&st(t),M=t[2]&&rt(t),T=t[4]&&lt(t),G=t[2]&&ct(t);return{c(){e=m("div"),n=m("div"),E&&E.c(),i=g(),o=m("div");for(let t=0;t<_.length;t+=1)_[t].c();s=g(),r=m("h1"),f=d(t[0]),b=g(),x=m("p"),y=d(t[1]),v=g(),w=m("div"),D&&D.c(),$=g(),M&&M.c(),S=g(),k=m("div"),T&&T.c(),C=g(),G&&G.c(),p(r,"class","font-medium text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl font-medium pt-2 sm:pt-1 md:pt-1 lg:pt-1"),p(x,"class","font-light text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm py-1 font-normal hidden md:block lg:block break-words"),p(w,"class","hidden lg:inline-flex md:inline-flex flex flex-inline"),p(k,"class","flex-inline lg:hidden sm:flex-inline md:hidden flex flex-inline"),p(o,"class","lg:w-2/3 md:w-2/3 sm:w-2/3 px-5 pt-5 sm:pt-2 lg:pt-5 rounded-r-lg"),p(n,"class","flex flex-inline"),p(e,"class","bg-gray-0 h-32 md:h-48 lg:h-48")},m(t,a){c(t,e,a),l(e,n),E&&E.m(n,null),l(n,i),l(n,o);for(let t=0;t<_.length;t+=1)_[t].m(o,null);l(o,s),l(o,r),l(r,f),l(o,b),l(o,x),l(x,y),l(o,v),l(o,w),D&&D.m(w,null),l(w,$),M&&M.m(w,null),l(o,S),l(o,k),T&&T.m(k,null),l(k,C),G&&G.m(k,null),A=!0},p(t,[e]){if(t[3]?E?E.p(t,e):(E=it(t),E.c(),E.m(n,i)):E&&(E.d(1),E=null),32&e){let n;for(j=t[5],n=0;n<j.length;n+=1){const i=nt(t,j,n);_[n]?(_[n].p(i,e),O(_[n],1)):(_[n]=ot(i),_[n].c(),O(_[n],1),_[n].m(o,s))}for(L(),n=j.length;n<_.length;n+=1)H(n);B()}(!A||1&e)&&h(f,t[0]),(!A||2&e)&&h(y,t[1]),t[4]?D?D.p(t,e):(D=st(t),D.c(),D.m(w,$)):D&&(D.d(1),D=null),t[2]?M?M.p(t,e):(M=rt(t),M.c(),M.m(w,null)):M&&(M.d(1),M=null),t[4]?T?T.p(t,e):(T=lt(t),T.c(),T.m(k,C)):T&&(T.d(1),T=null),t[2]?G?G.p(t,e):(G=ct(t),G.c(),G.m(k,null)):G&&(G.d(1),G=null)},i(t){if(!A){for(let t=0;t<j.length;t+=1)O(_[t]);A=!0}},o(t){_=_.filter(Boolean);for(let t=0;t<_.length;t+=1)P(_[t]);A=!1},d(t){t&&a(e),E&&E.d(),u(_,t),D&&D.d(),M&&M.d(),T&&T.d(),G&&G.d()}}}function ut(t,e,n){let{name:i=""}=e,{description:o=""}=e,{website:s=""}=e,{imageSrc:r=""}=e,{github:l=""}=e,{badges:c=[]}=e;return t.$$set=t=>{"name"in t&&n(0,i=t.name),"description"in t&&n(1,o=t.description),"website"in t&&n(2,s=t.website),"imageSrc"in t&&n(3,r=t.imageSrc),"github"in t&&n(4,l=t.github),"badges"in t&&n(5,c=t.badges)},[i,o,s,r,l,c]}class mt extends N{constructor(t){super(),F(this,t,ut,at,r,{name:0,description:1,website:2,imageSrc:3,github:4,badges:5})}}function dt(e){let n,i,o,s;return{c(){n=m("a"),i=m("i"),o=g(),s=d(e[0]),p(i,"class",e[1]),p(n,"href",e[2]),p(n,"class","inline-block text-sm m-2 px-4 py-2 leading-none border rounded border-white text-white hover:border-transparent hover:text-teal-500 hover:bg-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110")},m(t,e){c(t,n,e),l(n,i),l(n,o),l(n,s)},p(t,[e]){2&e&&p(i,"class",t[1]),1&e&&h(s,t[0]),4&e&&p(n,"href",t[2])},i:t,o:t,d(t){t&&a(n)}}}function gt(t,e,n){let{text:i}=e,{i:o}=e,{link:s}=e;return t.$$set=t=>{"text"in t&&n(0,i=t.text),"i"in t&&n(1,o=t.i),"link"in t&&n(2,s=t.link)},[i,o,s]}class pt extends N{constructor(t){super(),F(this,t,gt,dt,r,{text:0,i:1,link:2})}}function ht(t,e,n){const i=t.slice();return i[0]=e[n],i}function ft(t,e,n){const i=t.slice();return i[3]=e[n],i}function bt(t,e,n){const i=t.slice();return i[6]=e[n],i}function xt(t){let n,i;const o=[t[6]];let s={};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new J({props:s}),{c(){T(n.$$.fragment)},m(t,e){G(n,t,e),i=!0},p(t,e){const i=0&e?D(o,[M(t[6])]):{};n.$set(i)},i(t){i||(O(n.$$.fragment,t),i=!0)},o(t){P(n.$$.fragment,t),i=!1},d(t){I(n,t)}}}function yt(t){let n,i;const o=[t[3]];let s={};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new mt({props:s}),{c(){T(n.$$.fragment)},m(t,e){G(n,t,e),i=!0},p(t,e){const i=0&e?D(o,[M(t[3])]):{};n.$set(i)},i(t){i||(O(n.$$.fragment,t),i=!0)},o(t){P(n.$$.fragment,t),i=!1},d(t){I(n,t)}}}function vt(e){let n,i;return n=new pt({props:{text:e[0].text,i:e[0].i,link:e[0].link}}),{c(){T(n.$$.fragment)},m(t,e){G(n,t,e),i=!0},p:t,i(t){i||(O(n.$$.fragment,t),i=!0)},o(t){P(n.$$.fragment,t),i=!1},d(t){I(n,t)}}}function wt(t){let e,n,i,o,s,r,d,h,f,b,x,y,v,w,$,S,k,C,A,E,j,_,H,D,M=V,T=[];for(let e=0;e<M.length;e+=1)T[e]=xt(bt(t,M,e));const G=t=>P(T[t],1,1,()=>{T[t]=null});let I=X,R=[];for(let e=0;e<I.length;e+=1)R[e]=yt(ft(t,I,e));const F=t=>P(R[t],1,1,()=>{R[t]=null});let N=Y,q=[];for(let e=0;e<N.length;e+=1)q[e]=vt(ht(t,N,e));const z=t=>P(q[t],1,1,()=>{q[t]=null});return{c(){e=m("div"),n=m("iframe"),o=g(),s=m("h3"),s.textContent="We believe Open Source is for everyone, yes you too!",r=g(),d=m("h2"),d.textContent="OPEN SOURCE is NOT all about code, it is also the people and collaboration.",h=g(),f=m("div"),f.innerHTML='<h2 class="text-4xl mb-8 font-semibold">Our\n      <span class="text-teal-600 border-b-2 border-teal-600">Mission</span></h2> \n    <p class="text-center text-xl leading-tight">We are invested in getting you those green squares 🟩 on GitHub!\n      Contributing to Open Source Software (OSS) is a great way for you to\n      learn, work with different people and also network.</p>',b=g(),x=m("div"),y=m("h2"),y.textContent="Our Projects",v=g(),w=m("div");for(let t=0;t<T.length;t+=1)T[t].c();$=g(),S=m("div"),S.innerHTML='<h2 class="text-center text-4xl py-5 font-semibold archivo">How to join our\n      <span class="text-teal-600 border-b-2 border-teal-600">community</span>?</h2> \n    <p class="text-center text-xl leading-tight">Raise an issue on the support repo requesting to join the community (<a class="text-blue-500 underline" target="_blank" href="https://github.com/EddieHubCommunity/support/issues?q=is%3Aissue+is%3Aclosed+label%3A%22invite+me+to+the+organisation%22">examples</a>).</p> \n    <a class="mt-5 text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1" style="transition: all 0.15s ease" target="_blank" href="https://github.com/EddieHubCommunity/support/issues/new?assignees=eddiejaoude%2C+mikeysan&amp;labels=invite+me+to+the+organization&amp;template=invitation.md&amp;title=Please+invite+me+to+the+GitHub+Community+Organization">Join us.</a>',k=g(),C=m("div"),A=m("h2"),A.textContent="Our Moderators",E=g(),j=m("div");for(let t=0;t<R.length;t+=1)R[t].c();_=g(),H=m("div");for(let t=0;t<q.length;t+=1)q[t].c();p(n,"class","w-full md:w-1/4 h-56"),n.src!==(i="https://www.youtube.com/embed/z-FKAC0I_VQ")&&p(n,"src","https://www.youtube.com/embed/z-FKAC0I_VQ"),p(n,"title","EddieHub Community"),p(n,"frameborder","0"),p(n,"allow","accelerometer; clipboard-write; autoplay=1; encrypted-media; gyroscope; picture-in-picture"),n.allowFullscreen=!0,p(s,"class","text-3xl font-semibold text-indigo-100 leading-tight relative z-10 archivo"),p(d,"class","text-xl font-semibold text-indigo-100 leading-tight relative z-10"),p(f,"class","flex flex-col items-center bg-white lg:rounded m-12 py-8 px-4 lg:px-16 lg:max-w-4xl"),p(y,"class","text-center text-3xl font-semibold text-indigo-100 mb-8 archivo"),p(w,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"),p(x,"id","projects"),p(S,"class","flex flex-col items-center bg-white lg:rounded m-12 py-8 px-4 lg:px-16 lg:max-w-4xl"),p(A,"class","text-center text-4xl mb-5 py-5 font-semibold archivo"),p(j,"class","grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2"),p(C,"class","container my-8 p-5 bg-white rounded-lg"),p(H,"class","mt-6"),p(e,"class","min-w-screen min-h-screen bg-gray-900 flex flex-col items-center justify-center px-5 py-5")},m(t,i){c(t,e,i),l(e,n),l(e,o),l(e,s),l(e,r),l(e,d),l(e,h),l(e,f),l(e,b),l(e,x),l(x,y),l(x,v),l(x,w);for(let t=0;t<T.length;t+=1)T[t].m(w,null);l(e,$),l(e,S),l(e,k),l(e,C),l(C,A),l(C,E),l(C,j);for(let t=0;t<R.length;t+=1)R[t].m(j,null);l(e,_),l(e,H);for(let t=0;t<q.length;t+=1)q[t].m(H,null);D=!0},p(t,[e]){if(0&e){let n;for(M=V,n=0;n<M.length;n+=1){const i=bt(t,M,n);T[n]?(T[n].p(i,e),O(T[n],1)):(T[n]=xt(i),T[n].c(),O(T[n],1),T[n].m(w,null))}for(L(),n=M.length;n<T.length;n+=1)G(n);B()}if(0&e){let n;for(I=X,n=0;n<I.length;n+=1){const i=ft(t,I,n);R[n]?(R[n].p(i,e),O(R[n],1)):(R[n]=yt(i),R[n].c(),O(R[n],1),R[n].m(j,null))}for(L(),n=I.length;n<R.length;n+=1)F(n);B()}if(0&e){let n;for(N=Y,n=0;n<N.length;n+=1){const i=ht(t,N,n);q[n]?(q[n].p(i,e),O(q[n],1)):(q[n]=vt(i),q[n].c(),O(q[n],1),q[n].m(H,null))}for(L(),n=N.length;n<q.length;n+=1)z(n);B()}},i(t){if(!D){for(let t=0;t<M.length;t+=1)O(T[t]);for(let t=0;t<I.length;t+=1)O(R[t]);for(let t=0;t<N.length;t+=1)O(q[t]);D=!0}},o(t){T=T.filter(Boolean);for(let t=0;t<T.length;t+=1)P(T[t]);R=R.filter(Boolean);for(let t=0;t<R.length;t+=1)P(R[t]);q=q.filter(Boolean);for(let t=0;t<q.length;t+=1)P(q[t]);D=!1},d(t){t&&a(e),u(T,t),u(R,t),u(q,t)}}}return new class extends N{constructor(t){super(),F(this,t,null,wt,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
