(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{19:function(e,a,t){e.exports={container:"App_container__1KQXS",image:"App_image__I9Nzm"}},39:function(e,a,t){e.exports=t(68)},68:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(29),o=t.n(c),i=t(9),s=t.n(i),d=t(12),m=t(13),l=t(30),u=t(37),p=t(36),h=t(82),v=t(84),f=t(83),E=t(85),_=t(16),y=t.n(_),b=t(17),g=t.n(b),x=t(8),I=t.n(x),C=function(e){var a=e.data,t=a.confirmed,n=a.recovered,c=a.deaths,o=a.lastUpdate;return t?r.a.createElement("div",{className:I.a.container},r.a.createElement(h.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(h.a,{item:!0,xs:12,md:3,component:v.a,className:g()(I.a.card,I.a.infected)},r.a.createElement(f.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(E.a,{variant:"h5",component:"h2"},r.a.createElement(y.a,{start:0,end:t.value,duration:2.75,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2",component:"p"},"Number of active cases of COVID-19 India."))),r.a.createElement(h.a,{item:!0,xs:12,md:3,component:v.a,className:g()(I.a.card,I.a.recovered)},r.a.createElement(f.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(E.a,{variant:"h5",component:"h2"},r.a.createElement(y.a,{start:0,end:n.value,duration:2.75,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2",component:"p"},"Number of recoveries from COVID-19 India."))),r.a.createElement(h.a,{item:!0,xs:12,md:3,component:v.a,className:g()(I.a.card,I.a.deaths)},r.a.createElement(f.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(E.a,{variant:"h5",component:"h2"},r.a.createElement(y.a,{start:0,end:c.value,duration:2.75,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2",component:"p"},"Number of deaths caused by COVID-19 India."))))):"Loading..."},D=t(19),w=t.n(D),N=t(35),O=t.n(N),S=function e(){var a=this;Object(m.a)(this,e),this.apiUrl="https://covid19.mathdro.id/api",this.getResult=Object(d.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(a.apiUrl,"/countries/india"),e.next=3,O.a.get(t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))},j=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={data:{},country:""},e.data={},e.myAPI=new S,e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.myAPI.getResult();case 2:this.data=e.sent,this.setState({data:this.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:w.a.container},r.a.createElement("img",{alt:"COVIDIMAGE",className:w.a.image,src:"https://i.ibb.co/7QpKsCX/image.png"}),r.a.createElement(C,{data:this.data}))}}]),t}(r.a.Component);o.a.render(r.a.createElement(j,null),document.getElementById("root"))},8:function(e,a,t){e.exports={container:"Cards_container__3A6ZJ",card:"Cards_card__3qe0z",infected:"Cards_infected__10CN7",recovered:"Cards_recovered__3Hofo",deaths:"Cards_deaths__1lIY1"}}},[[39,1,2]]]);
//# sourceMappingURL=main.6df93ff0.chunk.js.map