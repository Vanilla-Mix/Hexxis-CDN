"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4304],{54304:function(t,e,n){n.r(e);var i=n(90581),r=n(64297),o=n(58408),s=n(52322),a=n(2784),p=n(45980),u=n(24949),h=n(36586),c=n(83584),l=n(59027),d=n(88288),m=n(71593),f=n(68741),g=c.coreModule.getAuth,v=c.modalModule.getModals,x=c.modalModule.hideModal,y=c.modalModule.getCurrentModal,C=function(t){(0,r.Z)(n,t);var e=(0,o.Z)(n);function n(){var t;return(0,i.Z)(this,n),t=e.apply(this,arguments),t.state={name:"",empty:!1},t.onInputChange=function(e){t.props.error&&t.props.shopRecipientClearError(),e.target&&"string"==typeof e.target.value&&t.setState({name:e.target.value}),t.state.empty&&t.setState({empty:!1})},t.onFormSubmit=function(e){if(e.preventDefault(),t.state.name){var n=t.state.name.length<=16?t.state.name:"",i=n?"":t.state.name;t.props.shopRecipientSet({username:n,uuid:i}).then(function(){return t.props.hideModal()})}else t.setState({empty:!0})},t}var a=n.prototype;return a.componentDidMount=function(){var t=this.props.recipient.uuid,e=this.props.auth.initializing;t||e||this.props.shopRecipientSet({uuid:this.props.auth.uuid})},a.componentDidUpdate=function(t){var e=this.props.recipient.uuid,n=t.auth.initializing,i=this.props.auth.initializing,r=t.auth.authenticated,o=this.props.auth.authenticated;e||!n||i?r&&!o?t.shopRecipientSet({uuid:this.props.auth.uuid}):r||!o||t.recipient.uuid||t.shopRecipientSet({uuid:this.props.auth.uuid}):t.shopRecipientSet({uuid:this.props.auth.uuid}),this.props.error&&!t.error&&this.input.focus()},a.render=function(){var t=this;return(0,s.jsxs)(h.Modal,{name:"horrible-hack",maxWidth:h.v.containers.min,store:f.store,children:[(0,s.jsx)(h.ModalTitle,{children:l.l.t("Purchase For")}),(0,s.jsx)(h.ModalContent,{children:(0,s.jsxs)(h.Form,{onSubmit:this.onFormSubmit,children:[(0,s.jsx)(h.Avatar,{size:280,name:this.state.name}),this.props.error&&(0,s.jsx)(h.Alert,{type:"warning",children:this.props.error}),this.state.empty&&(0,s.jsx)(h.Alert,{type:"warning",children:l.l.t("Please enter a username")}),(0,s.jsx)(h.Input,{name:"enter-username",m:"none",autoFocus:!0,backgroundColor:"gray",border:"none",hocRef:function(e){t.input=e},placeholder:l.l.t("Enter username"),onChange:this.onInputChange,css:"\n                &::placeholder {\n                  color: ".concat(h.v.colors.charcoal,";\n                  font-size: ").concat(h.v.fonts.sizes.sm,";\n                  font-family: ").concat(h.v.fonts.families.display,";\n                }\n              ")}),(0,s.jsxs)(h.Flex,{children:[(0,s.jsx)(m.zx,{type:"button",p:"md",theme:"red",width:"50%",onClick:this.props.hideModal,children:l.l.t("Cancel")}),(0,s.jsx)(m.zx,{p:"md",type:"submit",theme:"green",width:"50%",children:l.l.t("Confirm")})]})]})})]})},n}(a.Component),M=(0,u.P1)(y,v,d.Y3,g,d.Sg,function(t,e,n,i,r){return{current:t,modals:e,error:n,auth:i,recipient:r}}),S={shopRecipientClearError:d.$7,shopRecipientSet:d.Y4,hideModal:x};e.default=(0,p.connect)(M,S)(C)}}]);