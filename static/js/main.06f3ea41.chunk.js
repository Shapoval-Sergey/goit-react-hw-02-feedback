(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),l=a.n(c),o=a(3),u=a(4),i=a(5),s=a(8),d=a(7),m=function(e){var t=e.title,a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,t),a)};m.defaultProps={title:"Section Title"};var b=m,p=a(6),f=a.n(p),v=function(e){var t=e.options,a=e.onLeaveFeedback;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement("button",{key:e,type:"submit",className:f.a.button,onClick:function(){return a(e)}},e)})))},g=function(e){var t=e.message;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,t))},k=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,l=e.positivePercentage;return r.a.createElement(r.a.Fragment,null,c>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Good: ",t),r.a.createElement("p",null,"Neutral: ",a),r.a.createElement("p",null,"Bad: ",n),r.a.createElement("p",null,"Total: ",c),r.a.createElement("p",null,"Positive feedbacks: ",l,"%")),!c&&r.a.createElement(g,{message:"No feedback given"}))},E=(a(14),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.updateState=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())},e}return Object(i.a)(a,[{key:"countTotalFeedback",value:function(){return Object.values(this.state).reduce((function(e,t){return e+=t}),0)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{title:"Please leave feedback"},r.a.createElement(v,{options:Object.keys(this.state),onLeaveFeedback:this.updateState})),r.a.createElement(b,{title:"Statistics"},r.a.createElement(k,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})))}}]),a}(n.Component));l.a.render(r.a.createElement(E,null),document.querySelector("#root"))},6:function(e,t,a){e.exports={button:"FeedbackOptions_button__4Tw3j"}},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.06f3ea41.chunk.js.map