(this["webpackJsonpcautious-octo-pancake"]=this["webpackJsonpcautious-octo-pancake"]||[]).push([[0],{226:function(e,t,n){},227:function(e,t,n){},231:function(e,t){},233:function(e,t){},262:function(e,t){},263:function(e,t){},374:function(e,t){},545:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),r=n(213),s=n.n(r),i=(n(226),n(227),n(3));function o(){return Object(i.jsx)("div",{style:{width:"100%",position:"fixed",left:"0",right:"0",top:"0",textAlign:"center",backgroundColor:"gray"},className:"header",children:Object(i.jsx)("h4",{children:" CV Application Creator"})})}function l(){return Object(i.jsx)("div",{style:{width:"100%",clear:"both",textAlign:"center",backgroundColor:"gray",display:"inline-block",marginTop:"50px"},className:"footer",children:Object(i.jsx)("h4",{children:"Built by Vignesh B ! !"})})}function j(e){var t=e.type||"text";return Object(i.jsx)("input",{className:e.classType,name:e.name,type:t,style:{width:"70%",margin:"5px auto 5px auto",height:"20px",padding:"5px",fontSize:"15px"},placeholder:e.placeholder,onBlur:e.changeFunc,min:e.min,max:e.max,required:!0})}function u(e){var t=e.type||"text";return Object(i.jsx)("textarea",{name:e.name,type:t,style:{width:"70%",margin:"5px auto 5px auto",padding:"5px",fontSize:"15px",height:"120px"},required:!0})}function d(e){return Object(i.jsx)("label",{htmlFor:e.name,style:{width:"20%",height:"20px",padding:"5px",fontSize:"15px",float:"left",textAlign:"right"},children:e.labelInfo})}function b(e){return Object(i.jsx)("button",{onClick:e.buttonAction,style:{width:"12%",padding:"5px",margin:"5px",fontSize:"15px",display:"inline"},children:e.buttonInfo})}function m(){return Object(i.jsxs)("div",{className:"generalInfo",children:[Object(i.jsx)("h3",{children:"Personal Information"}),Object(i.jsx)(d,{name:"cv_name",labelInfo:"Name"}),Object(i.jsx)(j,{name:"cv_name"}),Object(i.jsx)("br",{}),Object(i.jsx)(d,{name:"cv_email",labelInfo:"Email Address"}),Object(i.jsx)(j,{name:"cv_email",type:"email"}),Object(i.jsx)("br",{}),Object(i.jsx)(d,{name:"cv_number",labelInfo:"Mobile Number"}),Object(i.jsx)(j,{name:"cv_number"}),Object(i.jsx)("br",{}),Object(i.jsx)(d,{name:"cv_city",labelInfo:"City"}),Object(i.jsx)(j,{name:"cv_city"}),Object(i.jsx)("br",{}),Object(i.jsx)(d,{name:"cv_linkedin",labelInfo:"Linkedin Profile"}),Object(i.jsx)(j,{name:"cv_linkedin"}),Object(i.jsx)("br",{}),Object(i.jsx)(d,{name:"cv_github",labelInfo:"Github Profile"}),Object(i.jsx)(j,{name:"cv_github"}),Object(i.jsx)("br",{})]})}var x=n(23),h=n(24),A=n(9),O=n(26),f=n(25),g=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).deleteForms=function(e){e.preventDefault();var t=e.target.parentNode.getAttribute("data-key"),n=a.state.interestList;n=n.filter((function(e){return e.key!==t})),a.setState((function(e){return{interestList:n}}))},a.addForms=function(e){e&&e.preventDefault();var t=(new Date).getTime(),n=Object(i.jsxs)("div",{"data-key":t,className:"interestForm_".concat(t),style:{marginLeft:"auto",marginRight:"auto",marginBottom:"5px"},children:[Object(i.jsx)(j,{name:"interest_name_".concat(t),placeholder:"Enter Interest"}),Object(i.jsx)(b,{buttonInfo:"Delete",buttonAction:a.deleteForms})]},t);a.setState({interestList:a.state.interestList.concat(n)})},a.state={interestList:[]},a.addForms=a.addForms.bind(Object(A.a)(a)),a.deleteForms=a.deleteForms.bind(Object(A.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.addForms()}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"interests",children:[Object(i.jsx)("h3",{children:"Personal Interests"}),this.state.interestList.map((function(e){return e})),Object(i.jsx)(b,{buttonInfo:"Add Section",buttonAction:this.addForms})]})}}]),n}(a.Component),p=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).deleteForms=function(e){e.preventDefault();var t=e.target.parentNode.getAttribute("data-key"),n=a.state.educationFormList;n=n.filter((function(e){return e.key!==t})),a.setState((function(e){return{educationFormList:n}}))},a.addForms=function(e){e&&e.preventDefault();var t=(new Date).getTime(),n=Object(i.jsxs)("div",{"data-key":t,className:"educationForm_".concat(t),style:{borderBottom:"1px dotted black",marginLeft:"auto",marginRight:"auto",marginBottom:"5px"},children:[Object(i.jsx)(d,{name:"cv_ins_".concat(t),labelInfo:"Institution Name"}),Object(i.jsx)(j,{name:"cv_ins_".concat(t)}),Object(i.jsx)("br",{}),Object(i.jsx)(d,{name:"cv_degree_".concat(t),labelInfo:"Degree"}),Object(i.jsx)(j,{name:"cv_degree_".concat(t)}),Object(i.jsx)("br",{}),Object(i.jsx)(d,{name:"cv_spcz_".concat(t),labelInfo:"Specialization"}),Object(i.jsx)(j,{name:"cv_spcz_".concat(t)}),Object(i.jsx)("br",{}),Object(i.jsx)(d,{name:"cv_years_from_".concat(t),labelInfo:"From"}),Object(i.jsx)(j,{classType:"yearInput",name:"cv_years_from_".concat(t),placeholder:"YYYY",changeFunc:a.validateYears,min:"1900",max:"2021"}),Object(i.jsx)("br",{}),Object(i.jsx)(d,{name:"cv_years_to_".concat(t),labelInfo:"To"}),Object(i.jsx)(j,{classType:"yearInput",name:"cv_years_to_".concat(t),placeholder:"YYYY",changeFunc:a.validateYears}),Object(i.jsx)("br",{}),Object(i.jsx)(d,{name:"cv_grade_".concat(t),labelInfo:"GPA/Percentage"}),Object(i.jsx)(j,{name:"cv_grade_".concat(t)}),Object(i.jsx)(b,{buttonInfo:"Delete",buttonAction:a.deleteForms})]},t);a.setState({educationFormList:a.state.educationFormList.concat(n)})},a.validateYears=function(e){var t=e.target.value;t&&(!0===isNaN(t)||t.length>4||t.length<4)&&(alert("Please enter a 4 digit numeric value for the year."),e.target.value="",e.target.focus())},a.state={educationFormList:[]},a.addForms=a.addForms.bind(Object(A.a)(a)),a.deleteForms=a.deleteForms.bind(Object(A.a)(a)),a.validateYears=a.validateYears.bind(Object(A.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.addForms()}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"education",children:[Object(i.jsx)("h3",{children:"Educational Information"}),this.state.educationFormList.map((function(e,t){return e})),Object(i.jsx)(b,{buttonInfo:"Add Section",buttonAction:this.addForms})]})}}]),n}(a.Component),v=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).deleteForms=function(e){e.preventDefault();var t=e.target.parentNode.getAttribute("data-key"),n=a.state.workList;n=n.filter((function(e){return e.key!==t})),a.setState((function(e){return{workList:n}}))},a.addForms=function(e){e&&e.preventDefault();var t=(new Date).getTime(),n=Object(i.jsxs)("div",{"data-key":t,className:"workForm_".concat(t),style:{borderBottom:"1px dotted black",marginLeft:"auto",marginRight:"auto",marginBottom:"5px"},children:[Object(i.jsx)(d,{name:"wrk_cpy_name_".concat(t),labelInfo:"Company Name"}),Object(i.jsx)(j,{name:"wrk_cpy_name_".concat(t)}),Object(i.jsx)("br",{}),Object(i.jsx)(d,{name:"wrk_designation_".concat(t),labelInfo:"Designation"}),Object(i.jsx)(j,{name:"wrk_designation_".concat(t)}),Object(i.jsx)("br",{}),Object(i.jsx)(d,{name:"wrk_years_from_".concat(t),labelInfo:"Worked From"}),Object(i.jsx)(j,{classType:"yearInput",name:"wrk_years_from_".concat(t),placeholder:"YYYY",changeFunc:a.validateYears,min:"1900",max:"2021"}),Object(i.jsx)("br",{}),Object(i.jsx)(d,{name:"wrk_years_to_".concat(t),labelInfo:"To"}),Object(i.jsx)(j,{classType:"yearInput",name:"wrk_years_to_".concat(t),placeholder:"YYYY",changeFunc:a.validateYears,min:"1900",max:"2021"}),Object(i.jsx)("br",{}),Object(i.jsx)(d,{name:"wrk_summary_".concat(t),labelInfo:"Summary"}),Object(i.jsx)(j,{name:"wrk_summary_".concat(t)}),Object(i.jsx)(d,{name:"wrk_description_".concat(t),labelInfo:"Description"}),Object(i.jsx)(u,{name:"wrk_description_".concat(t)}),Object(i.jsx)(b,{buttonInfo:"Delete",buttonAction:a.deleteForms})]},t);a.setState({workList:a.state.workList.concat(n)})},a.validateYears=function(e){var t=e.target.value;t&&(!0===isNaN(t)||t.length>4||t.length<4)&&(alert("Please enter a 4 digit numeric value for the year."),e.target.value="",e.target.focus())},a.state={workList:[]},a.addForms=a.addForms.bind(Object(A.a)(a)),a.deleteForms=a.deleteForms.bind(Object(A.a)(a)),a.validateYears=a.validateYears.bind(Object(A.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.addForms()}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"work",children:[Object(i.jsx)("h3",{children:"Work Experience"}),this.state.workList.map((function(e,t){return e})),Object(i.jsx)(b,{buttonInfo:"Add Section",buttonAction:this.addForms})]})}}]),n}(a.Component),y=n(60),w=n.n(y),B=n(111),T=n(5),k=n.p+"static/media/FontsFree-Net-arial-bold.ff542716.ttf",D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA10lEQVRIid2UQQ6CMBBFXzRwPQmoXEnEYxDXeg9dS0RcegFcq4u2hphWStsVP/lJM2nez3TawtQVAzmwB2rgKV3L2lrucVIGtMB7wDcgHQOeAzsL8K9LYGYT4AJXLobgmQdcOTHBY8R5+gbcMQw+DwBXXilofyjG1hy00BWvATuodQFdwIBOQa3urYNeuoBHwIAvqx9wDhhw0gUcAgYcdcUIaPAfcMufHzYNEKB9A32VHvDNEBzEXLYO8IKR1z7BbiYNFsdiUoT4uCrggnihnVxXwFLumbA+sVHc/44az28AAAAASUVORK5CYII=";function F(){T.Font.register({family:"Arial Bold",src:k});var e=T.StyleSheet.create({viewSection:{margin:5,padding:4},page:{margin:5,padding:4,fontSize:"14px"},view:{marginTop:15,padding:4},heading:{color:"green",fontSize:"16px"},boldOnly:{fontFamily:"Arial Bold"},bullet:{height:"8px"},soMoIcon:{height:"16px",width:"16px"}}),t=Array.from(document.getElementsByClassName("generalInfo")[0].getElementsByTagName("input")),n=Array.from(document.getElementsByClassName("skills")[0].getElementsByTagName("input")),a=Array.from(document.getElementsByClassName("education")[0].getElementsByTagName("input")),c=Array.from(document.getElementsByClassName("work")[0].getElementsByTagName("input")),r=Array.from(document.getElementsByClassName("work")[0].getElementsByTagName("textarea")),s=Array.from(document.getElementsByClassName("interests")[0].getElementsByTagName("input")),o=[];o.push(Object(i.jsxs)(T.View,{children:[Object(i.jsx)(T.Text,{style:{fontSize:"22px"},children:t[0].value},t[0].name),Object(i.jsx)(T.Text,{children:t[2].value},t[2].name),Object(i.jsx)(T.Text,{children:t[3].value},t[3].name),Object(i.jsxs)(T.View,{style:{display:"flex",flexDirection:"row"},children:[Object(i.jsx)(T.Link,{src:"mailto:".concat(t[1].value),children:Object(i.jsx)(T.Image,{style:e.soMoIcon,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADSklEQVRoge2ZzU8TQRjGn2mXD8uHhXaNJIoEDpDUD2L0H1C4cODER6He0GjikZgQvfRi4sGEGEy4oAcSaPm4GE2MBP4CY2LUanuAEDCBuF2sUspHd3c8NEVT2aUzOwVN+ru+MzvPM/vO++60QJEiRYocJyTfgWcfrp8nTu0mQNoANACoEKxlC8AyQOepLo2tPjj9KZ9JhxrwBSOlyTL3MCW4A8BhV2We6JRitHo3MRgJ+vasBloa8AUjpZvl7tcArgmVlz8LVTuJDisTljuaLHMP4/jEA8D1zXL3Y6sBpm8gk/P6ewBO4bLY0AHHpZWhushBQdM3QBz6LRy/eABwEtABs6B5ChG0FUQOB5QY7WYxqzNQXwAtfFByzixkZaCyAFJ4qTILHFVdLxgSz6TGWgmzAS88LjH+1ZSBrok4ljY05rnMChprJSxtaOgLx6GmDOYFc1FTBvrCGfGNtez7yWxgNuBFi1yCmKKhezKOb0mdedEsaspAf1hFTNHQ5JEw3e9lfgazAY/LgUm/By1yCRZVDf6wymUiKz6qpNHkkTDV54VcwZ6SXEls14Qo8YCNKsRrQqR4wGYZZTUhWjwgoA9kTTTLEhZVDTem1QOrU7baRJU0mmUJM/32xQMFaGQxRUPnuIJX0W3EtwzEtwy8/LKNznEFMYW9zh8GVyP7k+zOxhQNzbKE6jIH3n7dw90X3/8ae/VMKX7uGogpmT4S8ttvhrYM5IoP+b04WU4w9SGFmY/biCppAECLXIKeCy70XDyBHzt0f44IE9wGcpvQRO9vIYHWCgRaD77ze1wEIb93/zB3T8YR9ntwqpLv6sFl3W41EdUMAQ4DokqhKBPMK3dNiCuFuSW4N6QyP4N59exXo4gKAmRMhPze/a9cVrgO8dKGhssj6zxThfPf38isDGwemYrD+WkWsDKwWgAhfBC6YhayMEDnCqGFBwrHG7OYhQHnGAD++6I4dKKT52ZBUwMrQ3URSjFaGE0s0Kcr9+s+m0Utq1D1bmIQwIJwTfkzL9es37MaYGkgEvTtVe0kOgCM4GjTSQPoE7lmrePd7Stpq4F5/8VU/2jNR0AHKDHaQUkDxP/0mAShy4Q65qhBnlmlTZEiRYr8O/wCXRqFx39KjIoAAAAASUVORK5CYII="})},t[1].name),Object(i.jsx)(T.Link,{src:t[4].value,children:Object(i.jsx)(T.Image,{style:e.soMoIcon,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACjklEQVRoge2ZT2gTQRTGv9m0pu0mEAu2ikuJDQqCNNbWniJ6qViwFg+i0osXvTeCDfSmElIPAQ8eRK8FsQiilXqzgvWgLbbpQRFUrD0YW0ItCSbY3edFlCQ7SSd1divM7/bmvZ39vn37Z3YXUCgUCjdh1Qo8idQAiIaIoRuA7oAmAMgR2GsNlDRj4ceVCisa0EbnEiA2/G+1CRO3YuERXpJrwJNIDRDooRxNYjCN+s0rByfschp3K6IhaYoEsSwW5eW4BoihS44ccRjQzcvxOwD4JGipFT8vUcmALfuavZgaDGEtegDPB0PYu927OWmbRNjAnT4DRwwder2GiKHjdp8hQ9eGETbQ2dpYFHeVxE4jbOBN+kdRPFsSO42wgYuTS3ixlEPup4WpxSwuTX6RoWvD1Ilu8D5TwNGxDzK01IRwB7Yawh0whzvKxjyjqar53f56XO7Zgd6gD+0BLwqmhYXlPO6/XcXd+QwKJolKAVCDgVoItzTg6dl2tDT93V1DnQcRQ0fE0HGhoxn945/wNbcuPLcjp9D46WCR+FIOtTZi7FRb9bW9DY4YCAW2Va051ubDiRB3xcDFEQMWATdnVtB77yPOP1rEs89Z27pz+wPCcztyDVydTuPadPpP/ODdd0ycCeL4nuIj3rOrSXhuRzpwa3alKDaJEH/5raxupy5+PKUbIACZvFk2vrCcLxvzez3C80s3wLuzrBbKTW3Zu5BMlAG3UQbcRhlwm//eAPfZoSXma3vDkIQVC9tqrdQB+yWjK7A1Xob/bRRsRo4YcQjE1cI1oIGScuSIo8HiauEa+P1nJC5FkRB03Yx1PuFlq/9iujF30rJYlAGH4dwX6ywBrzRYyUriFQqFwn1+AXvFo7bcPPZdAAAAAElFTkSuQmCC"})},t[4].name),Object(i.jsx)(T.Link,{src:t[5].value,children:Object(i.jsx)(T.Image,{style:e.soMoIcon,src:"data:image/png;base64,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"})},t[5].name)]})]}));var l=[];a.forEach((function(t){t.name.startsWith("cv_ins_")?l.push(Object(i.jsx)(T.Text,{style:e.boldOnly,children:t.value},t.name)):t.name.startsWith("cv_degree_")?l.push(Object(i.jsx)(T.Text,{style:{color:"#333"},children:t.value},t.name)):l.push(Object(i.jsx)(T.Text,{children:t.value},t.name))}));for(var j=[],u=0;u<l.length;u+=6)j.push(Object(i.jsxs)(T.View,{style:e.viewSection,children:[Object(i.jsxs)(T.Text,{children:[l[u]," - ",l[u+1]]}),Object(i.jsxs)(T.Text,{children:[l[u+3]," - ",l[u+4]]}),Object(i.jsxs)(T.Text,{children:["Degree in ",l[u+2]," with an overall aggregate of ",l[u+5]]})]}));var d=[],b=[];r.forEach((function(t){var n=t.value.split("\n").map((function(n,a){return Object(i.jsxs)(T.Text,{children:[Object(i.jsx)(T.Image,{style:e.bullet,src:D}),n]},"".concat(t.name,"_").concat(a))}));n.forEach((function(e){return d.push(e)})),b.push(n.length)}));var m=[];c.forEach((function(t){t.name.startsWith("wrk_cpy_name_")?m.push(Object(i.jsx)(T.Text,{style:e.boldOnly,children:t.value},t.name)):t.name.startsWith("wrk_designation_")?m.push(Object(i.jsx)(T.Text,{style:{color:"#333"},children:t.value},t.name)):m.push(Object(i.jsx)(T.Text,{children:t.value},t.name))}));for(var x=function(e,t){for(var n=0,a=0;a<t;a++)n+=e[a];return n},h=[],A=0;A<m.length;A+=5){for(var O=[],f=x(b,A%5),g=f;g<f+b[A%5];g++)O.push(d[g]);h.push(Object(i.jsxs)(T.View,{style:e.viewSection,children:[Object(i.jsxs)(T.Text,{children:[m[A]," - ",m[A+1]]}),Object(i.jsxs)(T.Text,{children:[m[A+2]," - ",m[A+3]]}),Object(i.jsx)(T.Text,{children:m[A+4]}),O.map((function(e){return Object(i.jsx)(T.Text,{style:{paddingTop:"5px",fontSize:"13px",paddingLeft:"5px"},children:e})}))]}))}var p=[];s.forEach((function(t){p.push(Object(i.jsx)(T.View,{style:e.viewSection,children:Object(i.jsxs)(T.Text,{children:[Object(i.jsx)(T.Image,{style:e.bullet,src:D})," ",t.value]},t.name)}))}));var v=[];return n.forEach((function(t){v.push(Object(i.jsx)(T.View,{style:e.viewSection,children:Object(i.jsxs)(T.Text,{children:[Object(i.jsx)(T.Image,{style:e.bullet,src:D})," ",t.value]},t.name)}))})),Object(i.jsx)(T.Document,{children:Object(i.jsxs)(T.Page,{size:"A4",style:e.page,children:[Object(i.jsx)(T.View,{style:e.view,children:o}),Object(i.jsxs)(T.View,{style:e.view,children:[Object(i.jsx)(T.Text,{style:e.heading,children:"Skills"}),v]}),Object(i.jsxs)(T.View,{style:e.view,children:[Object(i.jsx)(T.Text,{style:e.heading,children:"Experience"}),h]}),Object(i.jsxs)(T.View,{style:e.view,children:[Object(i.jsx)(T.Text,{style:e.heading,children:"Education"}),j]}),Object(i.jsxs)(T.View,{style:e.view,children:[Object(i.jsx)(T.Text,{style:e.heading,children:"Personal Interests"}),p]})]})})}var I=n(221),E=n.p+"static/media/sample.f8b853ba.txt",C=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).clearCV=a.clearCV.bind(Object(A.a)(a)),a.fetchData=a.fetchData.bind(Object(A.a)(a)),a.sampleData=a.sampleData.bind(Object(A.a)(a)),a}return Object(h.a)(n,[{key:"sampleData",value:function(){var e=Object(B.a)(w.a.mark((function e(t){var n,a,c,r,s,i,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&t.preventDefault(),e.next=3,fetch(E);case 3:return n=e.sent,e.next=6,n.text();case 6:n=(n=e.sent).split("\n"),a=document.getElementsByTagName("input"),c=document.getElementsByTagName("textarea"),r="",s=0,i=0;case 12:if(!(i<n.length)){e.next=26;break}if(r&&""!==n[i]){e.next=22;break}if(""!==n[i]){e.next=19;break}return r="",e.abrupt("continue",23);case 19:r="Work Description"===n[i]?"SameBox":"NextBox";case 20:e.next=23;break;case 22:"NextBox"===r?(a[s].value=n[i],s++):c[0].value+=n[i]+"\n";case 23:i++,e.next=12;break;case 26:(o=c[0].value.split("\n")).pop(),c[0].value=o.join("\n");case 29:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"clearCV",value:function(e){e&&e.preventDefault();for(var t=document.getElementsByTagName("input"),n=0;n<t.length;n++)t[n].value="";document.getElementsByTagName("textarea")[0].value="",document.body.scrollTop=0,document.documentElement.scrollTop=0,alert("Manually added sections can be removed using their respective Delete buttons.")}},{key:"fetchData",value:function(){var e=Object(B.a)(w.a.mark((function e(t){var n,a,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!document.getElementById("cv_form").checkValidity()){e.next=11;break}return t.preventDefault(),n=document.getElementsByName("cv_name"),e.next=5,Object(T.pdf)(F());case 5:return(a=e.sent).updateContainer(F()),e.next=9,a.toBlob();case 9:c=e.sent,Object(I.saveAs)(c,"".concat(n[0].value,".pdf"));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(i.jsxs)("div",{style:{margin:"30px auto 20px auto",textAlign:"center"},id:"cvActions",children:[Object(i.jsx)("h3",{children:"CV Form Actions"}),Object(i.jsx)(b,{buttonInfo:"Clear",buttonAction:this.clearCV}),Object(i.jsx)(b,{buttonInfo:"Sample Data",buttonAction:this.sampleData}),Object(i.jsx)(b,{buttonInfo:"Generate",buttonAction:this.fetchData})]})}}]),n}(a.Component),N=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).deleteForms=function(e){e.preventDefault();var t=e.target.parentNode.getAttribute("data-key"),n=a.state.skillList;n=n.filter((function(e){return e.key!==t})),a.setState((function(e){return{skillList:n}}))},a.addForms=function(e){e&&e.preventDefault();var t=(new Date).getTime(),n=Object(i.jsxs)("div",{"data-key":t,className:"skillForm_".concat(t),style:{marginLeft:"auto",marginRight:"auto",marginBottom:"5px"},children:[Object(i.jsx)(j,{name:"skill_name_".concat(t),placeholder:"Enter Skill"}),Object(i.jsx)(b,{buttonInfo:"Delete",buttonAction:a.deleteForms})]},t);a.setState({skillList:a.state.skillList.concat(n)})},a.state={skillList:[]},a.addForms=a.addForms.bind(Object(A.a)(a)),a.deleteForms=a.deleteForms.bind(Object(A.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.addForms()}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"skills",children:[Object(i.jsx)("h3",{children:"Skills"}),this.state.skillList.map((function(e){return e})),Object(i.jsx)(b,{buttonInfo:"Add Section",buttonAction:this.addForms})]})}}]),n}(a.Component);function S(){return Object(i.jsx)("div",{style:{width:"60%",margin:"70px auto 0px auto",border:"1px solid black",textAlign:"center"},children:Object(i.jsxs)("form",{id:"cv_form",children:[Object(i.jsx)(m,{}),Object(i.jsx)(N,{}),Object(i.jsx)(v,{}),Object(i.jsx)(p,{}),Object(i.jsx)(g,{}),Object(i.jsx)(C,{})]})})}function R(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(o,{}),Object(i.jsx)(S,{}),Object(i.jsx)(l,{})]})}s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(R,{})}),document.getElementById("root"))}},[[545,1,2]]]);
//# sourceMappingURL=main.a6ee874f.chunk.js.map