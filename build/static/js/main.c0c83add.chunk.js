(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,a){e.exports={img1:"Detail_img1__1IQl8",mainContainer:"Detail_mainContainer__3DZAk",container:"Detail_container__2ApKk",imageContainer:"Detail_imageContainer__3YF_f",textContainer:"Detail_textContainer__2XM7-",pokemonName:"Detail_pokemonName__2XXH0",details:"Detail_details__1iwrJ",estadisticas:"Detail_estadisticas__VFOnH",types:"Detail_types__TyBjT",tLabel:"Detail_tLabel__xboXk",button:"Detail_button__SGTlj"}},22:function(e,t,a){e.exports={card:"Card_card__1eE8R",imgContainer:"Card_imgContainer__1Tcz3",infoContainer:"Card_infoContainer__Sbc3s",text:"Card_text__3MSXi",types:"Card_types__uLNws",label:"Card_label__33GJ2"}},23:function(e,t,a){e.exports={img1:"LandingPage_img1__2CL0r",img2:"LandingPage_img2__3xld-",mainContainer:"LandingPage_mainContainer__1YU_q",container:"LandingPage_container__1C8Y0",imageContainer:"LandingPage_imageContainer__30mem",textContainer:"LandingPage_textContainer__3tBBL",button:"LandingPage_button__1wxIs"}},24:function(e,t,a){e.exports={body:"Home_body__3nqpq",filterContainer:"Home_filterContainer__6rueO",container:"Home_container__3Z4dY",searchContainer:"Home_searchContainer__1UCe8",pokedexContainer:"Home_pokedexContainer__28bbp",footer:"Home_footer__27Ver"}},26:function(e,t,a){e.exports={mainContainer:"Navbar_mainContainer__2c20y",title:"Navbar_title__1Do-7",container:"Navbar_container__1ESpZ",link:"Navbar_link__TNvz9",form:"Navbar_form__3b0xB"}},40:function(e,t,a){e.exports={container:"Pagination_container__3xQir",btn:"Pagination_btn__AV51c"}},46:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(44),r=a.n(s),i=(a(56),a(57),a(16)),o=a(26),l=a.n(o),j=a.p+"static/media/ash.a6d6a164.png",b=a.p+"static/media/title.9631a0e0.png",d=a.p+"static/media/charmander.5bc6e242.png",u=a.p+"static/media/loupe.c6544d31.png",h={image1:j,image2:b,image3:d,image4:u},m=a(1),p=function(){return Object(m.jsxs)("div",{className:l.a.mainContainer,children:[Object(m.jsx)("img",{className:l.a.title,src:h.image2,alt:"something"}),Object(m.jsxs)("div",{className:l.a.container,children:[Object(m.jsx)(i.b,{to:"/home",className:l.a.link,children:"Home"}),Object(m.jsx)(i.b,{to:"/create",className:l.a.form,children:"Form"})]})]})},O=a(17),g=a.n(O),x=a(4),f=a(15),_=a(5),v=a(11),F=a(69),y="GET_POKEMONS",k=function(){return function(){var e=Object(v.a)(Object(_.a)().mark((function e(t){var a;return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("http://localhost:3001/pokemons");case 2:return a=e.sent,e.abrupt("return",t({type:y,payload:a.data[0]}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C="GET_POKEMON",N="GET_TYPES",w="FILTER_BY_TYPE",E=function(e){return function(){var t=Object(v.a)(Object(_.a)().mark((function t(a){var n,c,s;return Object(_.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.a.get("http://localhost:3001/pokemons");case 2:if(n=t.sent,c=n.data[0],!(s=null===c||void 0===c?void 0:c.filter((function(t){var a;return null===(a=t.type)||void 0===a?void 0:a.includes(e)})))){t.next=9;break}return t.abrupt("return",a({type:w,payload:s}));case 9:return alert("This Pokemon type is not on the list"),t.abrupt("return",a({type:w,payload:c}));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D="ORDER_DAMAGE",A=function(e){return{type:D,payload:e}},P="ORDER",S=function(e){return{type:P,payload:e}},B="GET_NAME",L={normal:["#AAA67F","#FFFFFF"],fighting:["#C12239","#FFFFFF"],flying:["#A891EC","#FFFFFF"],ground:["#DEC16B","#FFFFFF"],poison:["#A43E9E","#FFFFFF"],rock:["#B69E31","#000"],bug:["#A7B723","#FFFFFF"],ghost:["#70559B","#000"],steel:["#B7B9D0","#000"],fire:["#F57D31","#FFFFFF"],water:["#6493EB","#FFFFFF"],grass:["#74CB48","#000"],electric:["#F9CF30","#FFFFFF"],psychic:["#FB5584","#FFFFFF"],ice:["#9AD6DF","#000"],dragon:["#7037FF","#FFFFFF"],dark:["#75574C","#000"],fairy:["#E69EAC","#FFFFFF"],unknown:["#526677","#000"],shadow:["#4F507B","#000"]},I={normal:"#AAA67F93",fighting:"#C1223993",flying:"#A891EC93",ground:"#DEC16B93",poison:"#A43E9E93",rock:"#B69E3193",bug:"#A7B72393",ghost:"#70559B93",steel:"#B7B9D093",fire:"#F57D3193",water:"#6493EB93",grass:"#74CB4893",electric:"#F9CF3093",psychic:"#FB558493",ice:"#9AD6DF93",dragon:"#7037FF93",dark:"#75574C93",fairy:"#E69EAC93",unknown:"#52667793",shadow:"#4F507B93"},H=["normal","fighting","flying","ground","poison","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon","dark","fairy","unknown","shadow"],T=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e})).pokemon,a=Object(x.o)().id;if(Object(n.useEffect)((function(){e(function(e){return function(){var t=Object(v.a)(Object(_.a)().mark((function t(a){var n;return Object(_.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.a.get("http://localhost:3001/pokemons/".concat(e));case 2:return n=t.sent,t.abrupt("return",a({type:C,payload:n.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(a))}),[e]),t){var c=(null===t||void 0===t?void 0:t.type)&&t.type[0],s=I["".concat(c)];return Object(m.jsx)("div",{className:g.a.mainContainer,children:Object(m.jsxs)("div",{className:g.a.container,children:[Object(m.jsx)("div",{className:g.a.imageContainer,style:{backgroundColor:"".concat(s)},children:Object(m.jsx)("img",{className:g.a.img1,src:null===t||void 0===t?void 0:t.image,alt:"something"})}),Object(m.jsxs)("div",{className:g.a.textContainer,children:[Object(m.jsxs)("div",{className:g.a.pokemonName,children:[Object(m.jsx)("h2",{children:t.name}),Object(m.jsxs)("h2",{children:["#",t.pokemonId]})]}),Object(m.jsxs)("div",{className:g.a.details,children:[Object(m.jsxs)("div",{className:g.a.estadisticas,children:[Object(m.jsxs)("h5",{children:["Hp: ",t.hp]}),Object(m.jsxs)("h5",{children:["Attack: ",t.attack]}),Object(m.jsxs)("h5",{children:["Defense: ",t.defense]})]}),Object(m.jsxs)("div",{className:g.a.estadisticas,children:[Object(m.jsxs)("h5",{children:["Speed: ",t.speed]}),Object(m.jsxs)("h5",{children:["Height: ",t.height]}),Object(m.jsxs)("h5",{children:["Weight: ",t.weight]})]}),Object(m.jsx)("div",{className:g.a.types,children:(null===t||void 0===t?void 0:t.type)&&t.type.map((function(e,t){return Object(m.jsx)("div",{className:g.a.tLabel,style:{backgroundColor:"".concat(L["".concat(e)][0]),color:"".concat(L["".concat(e)][1])},children:e},t)}))})]})]}),Object(m.jsx)(i.b,{to:"/home",style:{textDecoration:"none"},children:Object(m.jsx)("p",{className:g.a.button,children:"Close"})})]})})}},M=a(12),q=a(10),R=a(8),Y=a(6),G=a(9),X=a.n(G),z=function(){var e=Object(n.useState)({name:"",hp:"",attack:"",defense:"",speed:"",height:"",weight:"",image:"",type:[]}),t=Object(Y.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)({}),r=Object(Y.a)(s,2),i=r[0],o=r[1],l=Object(n.useState)(!1),j=Object(Y.a)(l,2),b=(j[0],j[1],Object(n.useState)(null)),u=Object(Y.a)(b,2),h=u[0],p=(u[1],Object(n.useRef)()),O=Object(n.useState)([]),g=Object(Y.a)(O,2),f=(g[0],g[1],Object(x.m)()),_=function(e){var t=e.target,n=t.name,s=t.value;c(Object(R.a)(Object(R.a)({},a),{},Object(q.a)({},n,s)));var r=v(Object(R.a)(Object(R.a)({},a),{},Object(q.a)({},n,s)));o(r)},v=function(e){var t={};return e.name?/^[a-zA-Z\xc0-\xd6\xd8-\xf6\xf8-\xff]+(([',. -][a-zA-Z\xc0-\xd6\xd8-\xf6\xf8-\xff ])?[a-zA-Z\xc0-\xd6\xd8-\xf6\xf8-\xff]*)*$/.test(e.name)||(t.name="the name cannot contain numbers"):t.name="name is required",e.hp?e.hp<1?t.hp="the hp cannot be less than 1":e.hp>100&&(t.hp="the hp cannot be more than 100"):t.hp="hp is required",e.attack?e.attack<1?t.attack="the attack cannot be less than 1":e.attack>100&&(t.attack="the attack cannot be more than 100"):t.attack="attack is required",e.defense?e.defense<1?t.defense="the defense cannot be less than 1":e.defense>100&&(t.defense="the defense cannot be more than 100"):t.defense="defense is required",e.speed?e.speed<1?t.speed="the speed cannot be less than 1":e.speed>100&&(t.speed="the speed cannot be more than 100"):t.speed="speed is required",e.height?e.height<1?t.height="the height cannot be less than 1":e.height>100&&(t.height="the height cannot be more than 100"):t.height="height is required",e.weight?e.weight<1?t.weight="the weight cannot be less than 1":e.weight>100&&(t.weight="the weight cannot be more than 100"):t.weight="weight is required",e.image||(t.image="You should select an image"),e.type.length?1===e.type.length?t.types="":e.type.length>2&&(t.types="You only can select two types."):t.types="You should select at least one type.",t},y=function(e){var t,n=e.target.value;if(e.target.checked)c(Object(R.a)(Object(R.a)({},a),{},{type:[].concat(Object(M.a)(a.type),[n])})),t=v(Object(R.a)(Object(R.a)({},a),{},{type:[].concat(Object(M.a)(a.type),[n])}));else{var s=a.type.filter((function(e){return e!==n}));c(Object(R.a)(Object(R.a)({},a),{},{type:s})),t=v(Object(R.a)(Object(R.a)({},a),{},{type:s}))}o(t)};return Object(n.useEffect)((function(){Object.keys(i).length}),[i]),Object(m.jsx)("div",{className:X.a.container,children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),Object.keys(i).length>0?alert("Please complete all the fields correctly."):(F.a.post("http://localhost:3001/pokemons",a).then((function(e){return alert("Pokemon has been created")})).catch((function(e){return alert(e)})),f("/home"))},className:X.a.form,children:[Object(m.jsx)("h1",{children:"Create Pokemon"}),Object(m.jsx)("label",{className:X.a.label,htmlFor:"name",children:"Name:"}),Object(m.jsx)("input",{placeholder:"Name",type:"text",name:"name",className:X.a.input,onChange:_,value:a.name}),Object(m.jsx)("p",{children:i.name}),Object(m.jsxs)("div",{className:X.a.imputA,children:[Object(m.jsxs)("div",{className:X.a.col,children:[Object(m.jsx)("label",{className:X.a.label,htmlFor:"vida",children:"Hp:"}),Object(m.jsx)("input",{placeholder:"Hp",type:"number",name:"hp",className:X.a.input,onChange:_,value:a.hp}),Object(m.jsx)("p",{children:i.hp}),Object(m.jsx)("label",{className:X.a.label,htmlFor:"attack",children:"Attack:"}),Object(m.jsx)("input",{placeholder:"Attack",type:"number",name:"attack",className:X.a.input,onChange:_,value:a.attack}),Object(m.jsx)("p",{children:i.attack}),Object(m.jsx)("label",{className:X.a.label,htmlFor:"defense",children:"Defense:"}),Object(m.jsx)("input",{placeholder:"Defense",type:"number",name:"defense",className:X.a.input,onChange:_,value:a.defense}),Object(m.jsx)("p",{children:i.defense})]}),Object(m.jsxs)("div",{className:X.a.col2,children:[Object(m.jsx)("label",{className:X.a.label,htmlFor:"speed",children:"Speed:"}),Object(m.jsx)("input",{placeholder:"Speed",type:"number",name:"speed",className:X.a.input,onChange:_,value:a.speed}),Object(m.jsx)("p",{children:i.speed}),Object(m.jsx)("label",{className:X.a.label,htmlFor:"height",children:"Height:"}),Object(m.jsx)("input",{placeholder:"Height",type:"number",name:"height",className:X.a.input,onChange:_,value:a.height}),Object(m.jsx)("p",{children:i.height}),Object(m.jsx)("label",{className:X.a.label,htmlFor:"weight",children:"Weight:"}),Object(m.jsx)("input",{placeholder:"Weight",type:"number",name:"weight",className:X.a.input,onChange:_,value:a.weight}),Object(m.jsx)("p",{children:i.weight})]})]}),Object(m.jsxs)("label",{className:X.a.imageLabel,htmlFor:"image",children:["Image:",Object(m.jsx)("input",{type:"text",name:"image",className:X.a.input,onChange:function(e){c(Object(R.a)(Object(R.a)({},a),{},{image:e.target.value}))},ref:p}),h&&Object(m.jsx)("img",{src:h||d,alt:"Preview",className:X.a.imagePreview})]}),Object(m.jsx)("p",{children:i.image}),Object(m.jsxs)("fieldset",{className:X.a.fieldset,children:[Object(m.jsx)("legend",{children:"Select the types:"}),H.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{style:{width:"30px"},type:"checkbox",value:e,name:e,onChange:y}),Object(m.jsx)("label",{className:X.a.typeLabel,htmlFor:e,style:{backgroundColor:"".concat(L[e][0]),color:"".concat(L[e][1])},children:e})]},e)})),Object(m.jsx)("p",{children:i.types})]}),Object(m.jsxs)("footer",{className:X.a.btnContainer,children:[Object(m.jsx)("button",{type:"submit",className:X.a.btn,children:"Create"}),Object(m.jsx)("button",{className:X.a.btn2,children:"Cancel"})]})]})})},Z=a(24),K=a.n(Z),J=a(22),U=a.n(J),Q=function(e){var t=e.element,a=L["".concat(t)];return Object(m.jsx)("div",{className:U.a.label,style:{backgroundColor:"".concat(a[0]),color:"".concat(a[1])},children:t})},V=function(e){var t=e.name,a=e.image,n=e.pokemonId,c=e.type,s=I["".concat(c[0])];return Object(m.jsx)(i.b,{to:"/detail/".concat(n),style:{textDecoration:"none",color:"black"},children:Object(m.jsxs)("div",{className:U.a.card,children:[Object(m.jsx)("div",{style:{backgroundColor:"".concat(s)},className:U.a.imgContainer,children:Object(m.jsx)("img",{className:U.a.imgCont,src:a||d,alt:"img not found",width:"200px",height:"250vh"})}),Object(m.jsxs)("div",{className:U.a.infoContainer,children:[Object(m.jsxs)("div",{className:U.a.text,children:[Object(m.jsxs)("p",{style:{color:"black"},children:["#",n]}),Object(m.jsx)("h4",{children:t})]}),Object(m.jsx)("div",{className:U.a.types,children:c.map((function(e,t){return Object(m.jsx)(Q,{element:e},t)}))})]})]})})},W=(a(66),function(){var e=Object(f.c)((function(e){return e})),t=Object(n.useState)("all"),a=Object(Y.a)(t,2),c=(a[0],a[1],Object(f.b)()),s=Object(n.useState)(!1),r=Object(Y.a)(s,2),i=(r[0],r[1]),o=Object(n.useState)("all"),l=Object(Y.a)(o,2),j=l[0],b=l[1],d=Object(f.c)((function(e){return e.order}));return Object(n.useEffect)((function(){c(function(){var e=Object(v.a)(Object(_.a)().mark((function e(t){var a,n;return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("http://localhost:3001/types");case 2:a=e.sent,n=a.data,t({type:N,payload:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),c(k())}),[c]),Object(m.jsxs)("div",{className:"filter",children:[Object(m.jsx)("h2",{children:"Filter"}),Object(m.jsxs)("div",{className:"select",children:[Object(m.jsx)("label",{children:"Type:"}),Object(m.jsxs)("select",{onChange:function(e){var t=e.target.value;"all"===t?(c(k()),i(!1)):"type"===t&&i(!0),b(t),c(E(t))},value:j,children:[Object(m.jsx)("option",{value:"all",children:"All"}),e.types.map((function(e,t){return Object(m.jsx)("option",{value:e,children:e},t)}))]})]}),Object(m.jsxs)("div",{className:"select",children:[Object(m.jsx)("label",{children:"Alphabetical Order:"}),Object(m.jsxs)("select",{onChange:function(e){c(S(e.target.value))},value:d,children:[Object(m.jsx)("option",{value:"default",children:"Default"}),Object(m.jsx)("option",{value:"asc",children:"Ascending"}),Object(m.jsx)("option",{value:"desc",children:"Descending"})]})]}),Object(m.jsxs)("div",{className:"select",children:[Object(m.jsx)("label",{children:" Attack Damage:"}),Object(m.jsxs)("select",{onChange:function(e){c(A(e.target.value))},value:d,children:[Object(m.jsx)("option",{value:"default",children:"Default"}),Object(m.jsx)("option",{value:"max",children:"Max Damage"}),Object(m.jsx)("option",{value:"min",children:"Min Damage"})]})]}),Object(m.jsx)("button",{onClick:function(){c(k()),i(!1),b("all");var e=document.querySelector("select:nth-child(2)");e&&(e.value="all")},className:"clear-btn",children:"Clear filter"})]})}),$=a(40),ee=a.n($),te=function(e){var t=e.page,a=e.setPage,c=e.max,s=Object(n.useState)(1),r=Object(Y.a)(s,2),i=r[0],o=r[1];return Object(m.jsxs)("div",{className:ee.a.container,children:[Object(m.jsx)("button",{disabled:1===t||t<1,className:ee.a.btn,onClick:function(){o(parseInt(i)-1),a(parseInt(t)-1)},children:"Back"}),Object(m.jsx)("input",{style:{width:"50px"},onChange:function(e){return function(e){o(e.target.value)}(e)},onKeyDown:function(e){return function(e){13===e.keyCode&&(a(parseInt(e.target.value)),parseInt(e.target.value<1||parseInt(e.target.value)>Math.ceil(c)||isNaN(parseInt(e.target.value)))?(a(1),o(1)):a(parseInt(e.target.value)))}(e)},name:"page",autoComplete:"off",value:i}),Object(m.jsxs)("p",{children:[" de ",Math.ceil(c)]}),Object(m.jsx)("button",{disabled:t===Math.ceil(c)||t>Math.ceil(c),className:ee.a.btn,onClick:function(){o(parseInt(i)+1),a(parseInt(t)+1)},children:"Next"})]})},ae=a(46),ne=a.n(ae),ce=function(){var e=c.a.useState(""),t=Object(Y.a)(e,2),a=t[0],n=t[1],s=Object(f.b)(),r=function(e){var t;console.log("en el search bar --",e),s((t=e,function(){var e=Object(v.a)(Object(_.a)().mark((function e(a){var n,c,s;return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.get("http://localhost:3001/pokemons/");case 3:n=e.sent,c=n.data[0],(s=c.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))).length?a({type:B,payload:s}):alert("Pokemon not found"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))};return Object(m.jsx)("input",{className:ne.a.input,placeholder:"Search...",value:a,onChange:function(e){""===e.target.value&&s(k()),n(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(0!==a.length?r(a):s(k()))}})},se=function(){var e=Object(f.c)((function(e){return e})).pokemons,t=Object(f.b)(),a=Object(n.useState)(1),c=Object(Y.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(12),o=Object(Y.a)(i,1)[0],l=e.length/o;return Object(n.useEffect)((function(){t(k())}),[t]),Object(m.jsxs)("div",{className:K.a.body,children:[Object(m.jsxs)("div",{className:K.a.searchContainer,children:[Object(m.jsx)("h1",{children:"Pokemons"}),Object(m.jsx)("p",{children:"Search for a pokemon by name or using its national pokedex number"}),Object(m.jsx)(ce,{})]}),Object(m.jsx)("aside",{className:K.a.filterContainer,children:Object(m.jsx)(W,{})}),Object(m.jsx)("main",{className:K.a.container,children:Object(m.jsx)("section",{className:K.a.pokedexContainer,children:e.slice((s-1)*o,(s-1)*o+o).map((function(e,t){return Object(m.jsx)(V,{name:null===e||void 0===e?void 0:e.name,image:null===e||void 0===e?void 0:e.image,pokemonId:null===e||void 0===e?void 0:e.pokemonId,type:null===e||void 0===e?void 0:e.type},t)}))})}),Object(m.jsx)("footer",{className:K.a.footer,children:Object(m.jsx)(te,{page:s,setPage:r,max:l})})]})},re=a(23),ie=a.n(re),oe=function(){return Object(m.jsx)("div",{className:ie.a.mainContainer,children:Object(m.jsxs)("div",{className:ie.a.container,children:[Object(m.jsx)("div",{className:ie.a.imageContainer,children:Object(m.jsx)("img",{className:ie.a.img1,src:h.image1,alt:"something"})}),Object(m.jsxs)("div",{className:ie.a.textContainer,children:[Object(m.jsx)("img",{className:ie.a.img2,src:h.image2,alt:"something"}),Object(m.jsx)("p",{children:"\xa1Bienvenido a mi nueva p\xe1gina para ver y crear Pokemones! Esta p\xe1gina ha sido creada especialmente para los fan\xe1ticos de Pokemon, que desean explorar el fascinante mundo de los Pokemon y crear sus propios monstruos de bolsillo. Aqu\xed encontrar\xe1s una amplia variedad de informaci\xf3n sobre los Pokemon, incluyendo sus caracter\xedsticas, habilidades y estad\xedsticas, as\xed como una herramienta para crear tus propios Pokemon personalizados."}),Object(m.jsx)(i.b,{to:"/home",children:Object(m.jsx)("button",{className:ie.a.button,children:"Go Home"})})]})]})})};var le=function(){var e=Object(x.k)();return Object(m.jsxs)("div",{className:"App",children:["/"!==e.pathname&&Object(m.jsx)(p,{}),Object(m.jsxs)(x.c,{children:[Object(m.jsx)(x.a,{exact:!0,path:"/",element:Object(m.jsx)(oe,{})}),Object(m.jsx)(x.a,{exact:!0,path:"/home",element:Object(m.jsx)(se,{})}),Object(m.jsx)(x.a,{exact:!0,path:"/create",element:Object(m.jsx)(z,{})}),Object(m.jsx)(x.a,{exact:!0,path:"/detail/:id",element:Object(m.jsx)(T,{})})]})]})},je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))},be=a(41),de={pokemons:[],pokemon:{},types:[]},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(R.a)(Object(R.a)({},e),{},{pokemons:t.payload});case C:return Object(R.a)(Object(R.a)({},e),{},{pokemon:Object(R.a)(Object(R.a)({},e.pokemon),t.payload)});case w:return Object(R.a)(Object(R.a)({},e),{},{pokemons:t.payload});case N:return Object(R.a)(Object(R.a)({},e),{},{types:t.payload});case P:var a;return a="asc"===t.payload?e.pokemons.sort((function(e,t){return e.name.localeCompare(t.name)})):e.pokemons.sort((function(e,t){return t.name.localeCompare(e.name)})),"default"===t.payload&&(a=e.pokemons.sort((function(e,t){return e.pokemonId-t.pokemonId}))),Object(R.a)(Object(R.a)({},e),{},{pokemons:a});case D:var n;return"max"===t.payload&&(n=e.pokemons.sort((function(e,t){return t.attack-e.attack}))),"min"===t.payload&&(n=e.pokemons.sort((function(e,t){return e.attack-t.attack}))),"default"===t.payload&&(a=e.pokemons.sort((function(e,t){return e.pokemonId-t.pokemonId}))),Object(R.a)(Object(R.a)({},e),{},{pokemons:n});case B:return Object(R.a)(Object(R.a)({},e),{},{pokemons:t.payload});default:return Object(R.a)({},e)}},he=a(47),me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.b,pe=Object(be.c)(ue,me(Object(be.a)(he.a)));r.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(f.a,{store:pe,children:Object(m.jsx)(i.a,{basename:"/client",children:Object(m.jsx)(le,{})})})),je()},9:function(e,t,a){e.exports={container:"Form_container__QGuRd",form:"Form_form__SgHMH",label:"Form_label__UdcyA",input:"Form_input__4O0Yw",select:"Form_select__1FvrY",imageLabel:"Form_imageLabel__1DzP5",btnContainer:"Form_btnContainer__2jcmJ",btn:"Form_btn__niQRS",btn2:"Form_btn2__1HEIu",typeLabel:"Form_typeLabel__3LM-7",imagePreview:"Form_imagePreview__3TgR0",fieldset:"Form_fieldset__10Zrh",imputA:"Form_imputA__13FUX",col:"Form_col__3rHhw",col2:"Form_col2__1K1iF"}}},[[67,1,2]]]);
//# sourceMappingURL=main.c0c83add.chunk.js.map