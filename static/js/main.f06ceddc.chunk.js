(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{103:function(e,t,n){},23:function(e,t,n){},335:function(e,t,n){},336:function(e,t,n){},338:function(e,t,n){"use strict";n.r(t);var c,s=n(0),a=n(3),i=n.n(a),r=n(24),o=n.n(r),l=(n(96),n(10)),j=(n(37),n(85)),b=n(86),u=n(90),d=n(89),p=n(35),h=n.n(p),m=(n(97),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"cbl",style:{justifyContent:"center",alignContent:"center",marginLeft:"2rem",marginTop:"1rem",marginBottom:"1rem",display:"inline-block",verticalAlign:"top",marginRight:this.props.marginRight},children:Object(s.jsx)(h.a,{className:"Tilt shadow-2 pointer",options:{max:70},children:Object(s.jsx)("div",{className:"Tilt-inner",children:Object(s.jsx)("a",{href:this.props.link,children:Object(s.jsx)("img",{src:this.props.picture,alt:"logo",style:{marginTop:this.props.marginTop,alignSelf:"center"}})})})})})}}]),n}(i.a.Component)),g=n.p+"static/media/Logo1.2fd05451.png",O=n.p+"static/media/logo2.e744f904.png",f=n.p+"static/media/logo3test.337c2494.png",x=n(6),v=(n(103),function(e){return{type:"SET_USER",payload:e}}),N=function(e){return{type:"SET_PAGE",payload:e}},w=function(e){var t=e.signOut,n=Object(x.b)(),i=Object(a.useState)(""),r=Object(l.a)(i,2),o=r[0],j=r[1],b=Object(x.c)((function(e){return e.page}));return Object(a.useEffect)((function(){"signIn"===b?(c="register",j("Register")):"register"===b?(c="signIn",j("Sign In")):(c="signIn",j("Sign Out"))}),[b]),Object(s.jsxs)("div",{className:"textDiv",children:["signIn"!==b&&"register"!==b&&"menu"!==b?Object(s.jsxs)("div",{className:"navigation",children:[Object(s.jsx)("button",{onClick:function(){n(N("faceReco"))},className:"text dim pointer",children:"Face Reco"}),Object(s.jsx)("button",{onClick:function(){n(N("foodReco"))},className:"text dim pointer",children:"Food Reco"}),Object(s.jsx)("button",{onClick:function(){n(N("colorReco"))},className:"text dim pointer",children:"Color Reco"})]}):Object(s.jsx)("div",{}),Object(s.jsx)("button",{onClick:function(){return t(c)},className:"text dim pointer",children:Object(s.jsx)("div",{children:o})})]})},y=n(88),k=n.n(y),C=(n(335),function(e){var t=e.onClick,n=Object(a.useState)(""),c=Object(l.a)(n,2),i=c[0],r=c[1],o=Object(x.c)((function(e){return e.user})),j=Object(x.b)();return Object(s.jsxs)("div",{className:"Form",children:[Object(s.jsx)("p",{style:{textAlign:"center"},children:Object(s.jsxs)("b",{children:["Hello ",o.name,", your pressed submit: ",o.entries," times"]})}),Object(s.jsx)("button",{className:"clear pointer",onClick:function(){return r("")},children:" Clear "}),Object(s.jsx)("input",{type:"text",name:"text",placeholder:"enter image link",value:i,className:"FormInput",onChange:function(e){return r(e.target.value)}}),Object(s.jsx)("button",{type:"button",className:"Submit pointer",onClick:function(){fetch("https://whispering-peak-11656.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:o.id})}).then((function(e){return e.json()})).then((function(e){console.log(e[0]),j({type:"SET_ENTRIES",payload:e[0]})})).catch(console.log),t(i)},children:"Submit"})]})}),S=(n(23),function(e){var t=e.link;return Object(s.jsx)("div",{children:Object(s.jsx)("img",{alt:"",src:t,height:"330px",width:"auto",id:"facePic",style:{marginRight:"5px"}})})}),_=function(e){var t=e.box,n=Object(x.c)((function(e){return e.page}));return console.log(t),Object.keys(t).length>0&&"faceReco"===n?Object(s.jsx)("div",{children:t.map((function(e){return Object(s.jsx)("div",{className:"box",style:{top:e.top_row,bottom:e.bottom_row,left:e.left_col,right:e.right_col}})}))}):Object(s.jsx)("div",{})},T=function(e){var t=e.url,n=e.boxParms,c=e.count,a=e.onClickFace;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"result",children:Object(s.jsxs)("div",{className:"parentDiv",children:[Object(s.jsx)(S,{link:t}),Object(s.jsx)(_,{box:n})]})}),Object(s.jsx)("div",{className:"form",children:Object(s.jsx)(C,{onClick:a,count:c})})]})},R=(n(83),function(){var e=Object(x.b)(),t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),j=o[0],b=o[1];return Object(s.jsx)("article",{className:"br2 ba dark-gray b--black-10  w100\r In ",children:Object(s.jsx)("main",{className:"pa4 washed-blue",children:Object(s.jsxs)("form",{className:"measure center",children:[Object(s.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(s.jsx)("legend",{className:"f4 fw6 ph0 mh0 washed-blue",children:"Sign In"}),Object(s.jsxs)("div",{className:"mt3",children:[Object(s.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(s.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:function(e){return i(e.target.value)}})]}),Object(s.jsxs)("div",{className:"mv3",children:[Object(s.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(s.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:function(e){return b(e.target.value)}})]})]}),Object(s.jsx)("div",{className:"",children:Object(s.jsx)("input",{onClick:function(t){t.preventDefault(),console.log("called"),fetch("https://whispering-peak-11656.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,password:j})}).then((function(e){return e.json()})).then((function(t){t.id?(console.log(t.id),e(v(t)),e(N("menu"))):alert("Incorrect login info")}))},className:"b ph3 pv2 input-reset ba washed-blue bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(s.jsx)("div",{className:"reg",children:Object(s.jsx)("input",{onClick:function(){return e(N("register"))},className:"b ph3 pv2 input-reset ba washed-blue bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})}),E=function(){var e=Object(x.b)(),t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),j=o[0],b=o[1],u=Object(a.useState)(""),d=Object(l.a)(u,2),p=d[0],h=d[1];return Object(s.jsx)("article",{className:"br2 ba dark-gray b--black-10  w100\r In ",children:Object(s.jsx)("main",{className:"pa4 washed-blue",children:Object(s.jsxs)("form",{className:"measure center",children:[Object(s.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(s.jsx)("legend",{className:"f4 fw6 ph0 mh0 washed-blue",children:"Register"}),Object(s.jsxs)("div",{className:"mt3",children:[Object(s.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(s.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:function(e){return i(e.target.value)}})]}),Object(s.jsxs)("div",{className:"mt3",children:[Object(s.jsx)("label",{className:"db fw6 lh-copy f6",for:"Username",children:"Username"}),Object(s.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"Username",name:"Username",id:"Username",onChange:function(e){return b(e.target.value)}})]}),Object(s.jsxs)("div",{className:"mv3",children:[Object(s.jsx)("label",{className:"db fw6 lh-copy f6",for:"password",children:"Password"}),Object(s.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:function(e){return h(e.target.value)}})]})]}),Object(s.jsx)("div",{className:"",children:Object(s.jsx)("input",{onClick:function(t){console.log("called"),t.preventDefault();for(var n=!1,s=0;s<c.length;s++)"@"===c[s]&&(n=!0);if(!1===n)return alert("enter a valid email"),0;var a={email:c,name:j,password:p};fetch("https://whispering-peak-11656.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,name:j,password:p})}).then((function(e){return e.json()})).then((function(t){console.log(t),"Fill in the required fields"===t||"User already exsists"===t?alert(t):t?(e(N("menu")),e(v(a))):alert("unable to register")}))},className:"b ph3 pv2 input-reset ba washed-blue bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})},I=(n(336),n(84),function(e){var t=e.picture,n=e.text,c=e.page,a=Object(x.b)();return Object(s.jsx)("div",{className:"cbl",style:{justifyContent:"center",alignContent:"center",marginLeft:"2rem",marginTop:"1rem",marginBottom:"1rem",display:"inline-block",verticalAlign:"top"},children:Object(s.jsx)(h.a,{className:"TiltMenu shadow-2 pointer",options:{max:70},children:Object(s.jsxs)("div",{className:"Tilt-inner",children:[Object(s.jsx)("p",{className:"menuText",children:Object(s.jsx)("strong",{children:n})}),Object(s.jsx)("div",{onClick:function(){return a(N(c))},children:Object(s.jsx)("img",{src:t,alt:"logo",style:{marginTop:"0.5rem",alignSelf:"center"}})})]})})})}),F=n.p+"static/media/face.8a646a7d.png",D=n.p+"static/media/food1.215be36e.jpg",P=n.p+"static/media/color.6e0e514a.jpg",U=function(e){e.onRouteChange;return Object(s.jsxs)("div",{className:"Menu",children:[Object(s.jsx)(I,{picture:F,text:"Facial Recognition",page:"faceReco"}),Object(s.jsx)(I,{picture:D,text:"Food Recognition",page:"foodReco"}),Object(s.jsx)(I,{picture:P,text:"Color Detection",page:"colorReco"})]})},J=function(e){var t=e.foodText,n=Object(x.c)((function(e){return e.page}));return console.log(t),t.length&&"foodReco"===n?Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"probabilities:"}),t.map((function(e){return Object(s.jsx)("p",{children:Object(s.jsx)("bold",{children:e})})}))]}):Object(s.jsx)("div",{})},L=function(e){var t=e.url,n=e.onClickFood,c=e.foodText;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"result",children:Object(s.jsx)("div",{className:"parentDiv",children:Object(s.jsx)(S,{link:t})})}),Object(s.jsx)("div",{className:"form",children:Object(s.jsx)(C,{onClick:n})}),Object(s.jsx)("div",{className:"foodText",children:Object(s.jsx)(J,{foodText:c})})]})},V=function(e){var t=e.colorValues;console.log(t);var n=Object(x.c)((function(e){return e.page}));return t.length>0&&"colorReco"===n?Object(s.jsxs)("div",{children:["Color Values:",t.map((function(e){return console.log(e),Object(s.jsxs)("p",{style:{background:e.raw_hex,textShadow:"2px 2px #423525",textAlign:"left"},children:["  ",e.raw_hex," ",e.w3c.name," ",(100*e.value).toFixed(0),"%  "]})}))]}):Object(s.jsx)("div",{})},A=function(e){var t=e.url,n=e.onClickColor,c=e.colorValues;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"result",children:Object(s.jsx)("div",{className:"parentDiv",children:Object(s.jsx)(S,{link:t})})}),Object(s.jsx)("div",{className:"form",children:Object(s.jsx)(C,{onClick:n})}),Object(s.jsxs)("div",{className:"foodText",children:[Object(s.jsx)("br",{}),Object(s.jsx)(V,{colorValues:c})]})]})},B={particles:{number:{value:350,desnity:{enable:!0,value_area:200,page:""}}},retina_detect:!0,line_linked:{enable:!0,distance:500},move:{direction:"none"},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}},modes:{repulse:{distance:100,duration:.4}}}},X=function(){var e=Object(x.b)(),t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),j=o[0],b=o[1],u=Object(a.useState)(""),d=Object(l.a)(u,2),p=d[0],h=d[1],v=Object(a.useState)({}),y=Object(l.a)(v,2),C=y[0],S=y[1],_=Object(a.useState)({}),I=Object(l.a)(_,2),F=I[0],D=I[1],P=Object(a.useState)([]),J=Object(l.a)(P,2),V=J[0],X=J[1],G=Object(x.c)((function(e){return e.page}));return Object(s.jsxs)("div",{children:[Object(s.jsx)(w,{className:"nav",signOut:function(t){b(""),h(""),i(""),D({}),e(N(t))}}),Object(s.jsx)(k.a,{className:"particles",params:B}),Object(s.jsxs)("div",{className:"inline",children:[Object(s.jsx)(m,{picture:g,marginTop:"2rem",link:"https://github.com/BenasPalivonas"}),Object(s.jsx)(m,{picture:O,marginTop:"1rem",link:"https://www.instagram.com/benusiaog/"}),Object(s.jsx)(m,{picture:f,marginRight:"2rem",link:"https://www.facebook.com/benas.palivonas"})]}),"signIn"===G?Object(s.jsx)("div",{className:"signIn",children:Object(s.jsx)(R,{className:"signIn"})}):"register"===G?Object(s.jsx)("div",{className:"signIn",children:Object(s.jsx)(E,{})}):"menu"===G?Object(s.jsx)("div",{className:"menu",children:Object(s.jsx)(U,{})}):"faceReco"===G?Object(s.jsx)("div",{children:Object(s.jsx)(T,{onClickFace:function(e){i(e),e.length>0&&fetch("https://whispering-peak-11656.herokuapp.com/getapi",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e})}).then((function(e){return e.json()})).then((function(e){console.log(e),S(function(e,t){for(var n=document.getElementById("facePic"),c=Number(n.width),s=Number(n.height),a=[],i=0;i<t;i++){var r=e.outputs[0].data.regions[i].region_info.bounding_box;a.push({id:i,top_row:Number(r.top_row)*s,left_col:Number(r.left_col)*c,bottom_row:s-s*Number(r.bottom_row),right_col:c-c*Number(r.right_col)})}return a}(e,e.outputs[0].data.regions.length))})).catch((function(e){console.log(e)}))},url:c,boxParms:C})}):"foodReco"===G?Object(s.jsx)("div",{children:Object(s.jsx)(L,{onClickFood:function(e){b(e),fetch("https://whispering-peak-11656.herokuapp.com/getfoodapi",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=[];e.outputs[0].data.concepts.forEach((function(e){if(100*e.value>20){var n=(100*e.value).toString()[0]+(100*e.value).toString()[1]+"%";t.push(e.name+": "+n)}})),D(t)})).catch((function(e){console.log(e)}))},foodText:F,url:j})}):"colorReco"===G?Object(s.jsx)("div",{children:Object(s.jsx)(A,{onClickColor:function(e){h(e),fetch("https://whispering-peak-11656.herokuapp.com/getcolorapi",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e})}).then((function(e){return e.json()})).then((function(e){console.log(e),X(e.outputs[0].data.colors)})).catch((function(e){console.log(e)}))},url:p,colorValues:V})}):Object(s.jsx)("div",{children:N("signIn")})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,339)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))},M=(n(337),n(22)),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.payload;case"SET_ENTRIES":return Object.assign(e,{entries:t.payload});default:return e}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"signIn",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":return t.payload;default:return e}},z=Object(M.b)({user:q,page:H}),K=Object(M.c)(z,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(Object(s.jsx)(x.a,{store:K,children:Object(s.jsx)(X,{})}),document.getElementById("root")),G()},37:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){}},[[338,1,2]]]);
//# sourceMappingURL=main.f06ceddc.chunk.js.map