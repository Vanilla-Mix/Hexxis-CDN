"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2202],{62202:function(e,n,o){o.r(n);var r=o(66383),t=o(52322),l=o(2784),d=o(36586),i=o(19261),a=o(59027),u=o(83584),c=o(24949),s=o(45980),h=o(71593),k=u.coreModule.getUuid,f=u.modalModule.hideModal,g=function(e){var n=e.uuid,o=e.hideModal,u=(0,r.Z)(l.useState(""),2),c=u[0],s=u[1],k=function(e){i.BL.grpc.db_gberry.Gberry.updateHolidayGiftConsent({uuid:n,fill_ip:!0,consent:e}).then(function(e){if(e.error)return s(e.error);o("store-consent-modal")})};return(0,t.jsxs)(d.DarkModal,{name:"store-consent-modal",noClose:!0,width:"600px",children:[(0,t.jsx)(d.DarkModalTitle,{children:a.l.t("Gifting Consent")}),(0,t.jsxs)(d.DarkModalContent,{p:"lg",children:[c&&(0,t.jsx)(d.Alert,{backgroundColorDark:"red",colorDark:"white",mb:"md",rounded:!0,children:c}),(0,t.jsx)(d.Block,{colorDark:"white",children:a.l.t('I would like to share my holiday gifting purchases data (Badlion "Request a Gift") on Badlion.net including number of purchases, money spent, and more.')}),(0,t.jsxs)(d.Flex,{width:"100%",alignItems:"center",justifyContent:"center",mt:"lg",gap:"15px",children:[(0,t.jsx)(h.zx,{backgroundColorDark:"blue",colorDark:"white",fontWeight:"semibold",py:"md",px:"lg",rounded:!0,onClick:function(){return k(!0)},children:a.l.t("Agree and Share")}),(0,t.jsx)(h.zx,{backgroundColorDark:"gray",colorDark:"white",fontWeight:"semibold",py:"md",px:"lg",rounded:!0,onClick:function(){return k(!1)},children:a.l.t("Do not share")})]})]})]})},p=(0,c.P1)(k,function(e){return{uuid:e}});n.default=(0,s.connect)(p,{hideModal:f})(g)}}]);