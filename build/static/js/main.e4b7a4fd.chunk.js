(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(8),l=a.n(s),r=(a(15),a(2)),i=a(3),m=a(5),o=a(4),u=a(6),d=a(1),v=(a(17),function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"createIssue",value:function(e){return c.a.createElement("li",{class:"issue-item",key:e.key},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-1"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",value:""})),c.a.createElement("div",{className:"col-11 issue-text"},c.a.createElement("p",null,e.text))))}},{key:"render",value:function(){var e=this.props.entries.map(this.createIssue);return c.a.createElement("div",{className:"issue-box"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("ul",{className:"theList"},e)))))}}]),t}(n.Component)),E=(a(19),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={itens:[]},a.addItem=a.addItem.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"addItem",value:function(e){if(""!==this._inputElement.value){var t={text:this._inputElement.value,key:Date.now()};this.setState(function(e){return{itens:e.itens.concat(t)}}),this._inputElement.value="",console.log(this.state.itens),e.preventDefault()}}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"todoListMain"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row header"},c.a.createElement("div",{className:"col-3"}),c.a.createElement("div",{className:"col-6"},c.a.createElement("h1",null,"OLAR"),c.a.createElement("form",{onSubmit:this.addItem,className:"row"},c.a.createElement("input",{ref:function(t){return e._inputElement=t},type:"text",className:"form-control col-10",placeholder:"create a Item"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary col-2"}," Add Item "))),c.a.createElement("div",{className:"col-3"})),c.a.createElement("div",{className:"row content"},c.a.createElement("div",{className:"col-2"}),c.a.createElement("div",{className:"col-8"},c.a.createElement("div",{className:"issues-box"},c.a.createElement(v,{entries:this.state.itens}))),c.a.createElement("div",{className:"col-2"}))))}}]),t}(n.Component)),p=(a(21),document.querySelector("#content"));l.a.render(c.a.createElement("div",null,c.a.createElement(E,null)),p)},9:function(e,t,a){e.exports=a(23)}},[[9,2,1]]]);
//# sourceMappingURL=main.e4b7a4fd.chunk.js.map