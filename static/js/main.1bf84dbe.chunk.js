(this.webpackJsonpexercise=this.webpackJsonpexercise||[]).push([[0],{121:function(e,a,t){},122:function(e,a,t){},195:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(24),s=t.n(c),i=(t(121),t(35)),u=t(36),o=t(39),j=t(38),d=(t(122),t(92)),h=t(113),l=t(55),b=t(31),O=t(197),p=t(198),f=t(199),m=t(115),g=t(7),v=function(e){Object(o.a)(t,e);var a=Object(j.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return Object(g.jsxs)(p.a,{onFinish:function(a){return e.props.add(a)},children:[Object(g.jsx)(p.a.Item,{label:"name",name:"name",children:Object(g.jsx)(f.a,{})}),Object(g.jsx)(p.a.Item,{label:"weight",name:"weight",children:Object(g.jsx)(f.a,{})}),Object(g.jsx)(p.a.Item,{label:"value",name:"value",children:Object(g.jsx)(f.a,{})}),Object(g.jsx)(p.a.Item,{children:Object(g.jsx)(m.a,{type:"primary",htmlType:"submit",children:"Add Data"})})]})}}]),t}(r.a.Component),S=function(e){Object(o.a)(t,e);var a=Object(j.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(f.a.TextArea,{value:this.props.json,onChange:function(a){return e.props.handleRawDataChange(a)}}),Object(g.jsx)(m.a,{type:"primary",onClick:function(){e.props.save(e.props.json)},children:"Submit Raw Data"})]})}}]),t}(r.a.Component),x=function(e){Object(o.a)(t,e);var a=Object(j.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).handleAddData=function(e){var a=n.handleValidate(e);a.length>0?h.a.error({message:"Create Data Failed",description:a.join(".")}):(n.state.dataSource.push(e),n.setState({rawData:JSON.stringify(n.state.dataSource)}),h.a.success({message:"Create Data Success"}))},n.handleSaveRawData=function(e){try{var a=JSON.parse(e),t=a.reduce((function(e,a){var t=n.handleValidate(a);return[].concat(Object(d.a)(e),Object(d.a)(t))}),[]);if(t.length>0)return h.a.error({message:"Save Raw Data Failed",description:Array.from(new Set(t)).join(".")}),void n.setState({rawData:JSON.stringify(n.state.dataSource)});n.setState({dataSource:a}),h.a.success({message:"Save Raw Data Success"})}catch(r){h.a.error({message:"Save Raw Data Failed",description:"must be valid JSON"}),n.setState({rawData:JSON.stringify(n.state.dataSource)})}},n.handleValidate=function(e){var a=[];return e.name&&e.name.length>50&&a.push("data.name must be string and less than 50 characters"),e.weight&&isNaN(Number(e.weight))&&a.push("data.weight must be integer"),n.state.dataSource.length>50&&a.push("array.length <= 50"),a},n.handleRawDataChange=function(e){n.setState({rawData:e.target.value})},n.state={rawData:"",dataSource:[]},n}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return Object(g.jsxs)(l.a,{children:[Object(g.jsxs)(b.a,{span:8,children:[Object(g.jsx)(O.a,{title:"Data Input",children:Object(g.jsx)(v,{add:function(a){return e.handleAddData(a)}})}),Object(g.jsx)(O.a,{title:"Raw Data Input",children:Object(g.jsx)(S,{save:function(a){return e.handleSaveRawData(a)},json:this.state.rawData,handleRawDataChange:function(a){return e.handleRawDataChange(a)}})})]}),Object(g.jsx)(b.a,{span:16,children:Object(g.jsx)("p",{children:JSON.stringify(this.state.dataSource)})})]})}}]),t}(r.a.Component),w=function(e){Object(o.a)(t,e);var a=Object(j.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(x,{})})}}]),t}(r.a.Component),D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,200)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root")),D()}},[[195,1,2]]]);
//# sourceMappingURL=main.1bf84dbe.chunk.js.map