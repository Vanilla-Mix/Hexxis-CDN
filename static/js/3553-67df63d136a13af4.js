"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3553],{13553:function(n,t,e){var o=e(90581),i=e(64297),r=e(58408),c=e(52322),l=e(2784),s=e(45980),d=e(24949),a=e(36586),p=e(19261),h=e(59027),x=e(83584),m=e(25237),u=e.n(m),g=e(7283),f=e(82034),w=e(81004),k=e(71593),j=e(88288),b=u()(function(){return e.e(6096).then(e.bind(e,86096))},{loadableGenerated:{webpack:function(){return[86096]}}}),y=x.modalModule.showModal,v=x.modalModule.hideModal,_=x.modalModule.getCurrentModal,z=function(n){(0,i.Z)(e,n);var t=(0,r.Z)(e);function e(){var n;return(0,o.Z)(this,e),n=t.apply(this,arguments),n.onRemoveClick=function(t){setTimeout(function(){n.props.shopRemoveCartItem(t)},0)},n}var l=e.prototype;return l.componentDidMount=function(){this.props.shopFetchTax()},l.render=function(){var n=this,t=0,e=0;return void 0!==this.props.tax.vat_percent&&this.props.tax.vat_percent>0&&(t=this.props.total*this.props.tax.vat_percent,e=this.props.tax.vat_percent),(0,c.jsxs)(a.Block,{overflow:"hidden",rounded:this.props.dropdown,css:"\n          margin-bottom: 10px;\n\n          ".concat(this.props.checkout?"":"background-color: #2b2b2b;","\n        "),children:[!this.props.dropdown&&this.props.count>0&&this.props.cart.map(function(n,t){return(0,c.jsx)(b,{index:t,productID:n.product.id,name:"checkout-recipient-switcher-".concat(t)},t)}),this.props.count<1&&(0,c.jsx)(a.Block,{children:(0,c.jsx)(a.Block,{textAlign:"center",children:(0,c.jsx)(a.Strong,{display:"inline-block",px:"lg",py:"md",color:"white",children:h.l.t("Your cart is empty!")})})}),(0,c.jsx)(a.Block,{minHeight:"fit-content",maxHeight:"300px",css:"\n            overflow-y: auto;\n            overflow-x: auto;\n          ",children:this.props.count>0&&this.props.cart.map(function(t,e){var o,i=t.product,r=[t.product.image.slice(0,27),"cdn-cgi/image/width=60,f=auto/",t.product.image.slice(27),].join("");return(0,c.jsxs)(a.Flex,{className:"product-row",pl:"md",colorDark:"white",fontSize:"xl",fontWeight:"semibold",borderBottom:"1px solid #d4d7dc",py:"lg",css:"\n                    ".concat(n.props.checkout?"":"background-color: #2b2b2b !important;","\n\n                    &:last-child {\n                      border-bottom: none;\n                    }\n                    @media (max-width: 574px) {\n                      ").concat(n.props.dropdown?"":"width: fit-content;","\n                    }\n                  "),children:[(0,c.jsx)(a.Flex,{css:"\n                      @media only screen and (max-width: 730px) {\n                        flex-direction: column-reverse;\n                        align-items: center;\n                        justify-content: center;\n                      }\n                    ",children:(0,c.jsxs)(a.Flex,{className:"product-amount",alignItems:"center",children:[1,"\xd7"]})}),(0,c.jsx)(a.Flex,{alignItems:"center",children:void 0!==i&&!n.props.dropdown&&("mp4"===i.image.slice(-3)?(0,c.jsx)(a.Video,{src:i.image,autoPlay:!0,playsInline:!0,disableRemotePlayback:!0,loop:!0,css:"\n                            width: 60px;\n                            height: 60px;\n                            object-fit: contain;\n                            margin-right: 60px;\n                            margin-left: 10px;\n\n                            @media only screen and (max-width: 730px) {\n                              display: none;\n                            }\n                          "}):(0,c.jsx)(a.Image,{src:r,css:"\n                            width: 60px;\n                            height: 60px;\n                            object-fit: contain;\n                            margin-right: 60px;\n                            margin-left: 10px;\n\n                            @media only screen and (max-width: 730px) {\n                              display: none;\n                            }\n                          "}))}),(0,c.jsxs)(a.Flex,{width:"100%",whiteSpace:"normal",minWidth:"160px",css:"\n                      padding-left: 10px;\n                      padding-right: 10px;\n                      align-items: center;\n\n                      ".concat(!n.props.dropdown&&"margin-left: 20px;","\n                      ").concat(n.props.dropdown&&"\n                      font-size: 16px;\n                      white-space: nowrap;\n                    ","\n\n                    @media only screen and (max-width: 1300px) {\n                        font-size: 14px;\n                      }\n\n                      @media only screen and (max-width: 730px) {\n                        font-size: 12px;\n                        ").concat(n.props.dropdown?"":"max-width: 160px;","\n                      }\n                    "),children:[n.props.dropdown?(0,c.jsx)(a.Block,{children:!n.props.dropdown&&i.includes&&i.includes.length>0?"".concat(i.name," (").concat(i.includes.join(", "),")"):i.name.length>18?(0,c.jsx)(a.Tooltip,{"data-tip":i.name,children:"".concat(i.name.slice(0,18),"...")}):i.name}):(0,c.jsx)(a.Tooltip,{m:"sm","data-tip":i.includes&&(null==i?void 0:null===(o=i.includes)||void 0===o?void 0:o.length)>0?"".concat(i.name," (").concat(i.includes.join(", "),")"):"",children:(0,c.jsx)(k.rU,{to:i.product_url,color:"white",target:"_blank",children:!n.props.dropdown&&i.name})}),i.punishment_id&&(0,c.jsxs)(a.Text,{children:["(#",i.punishment_id,")"]})]}),!n.props.dropdown&&(0,c.jsxs)(a.Flex,{css:"\n                        align-items: center;\n                      ",children:[t.for_uuid&&(0,c.jsx)(a.Avatar,{name:t.for_uuid,size:32,rounded:!0,as:k.rU,to:"https://www.badlion.net/u/".concat(t.for_uuid),target:"_blank"}),(0,c.jsx)(k.zx,{className:"change-button",lineHeight:"1",onClick:function(){n.props.shopRecipientSet({uuid:t.for_uuid}).then(function(){return n.props.showModal("checkout-recipient-switcher-".concat(e))})},color:"gray",width:"max-content",fontSize:"lg",py:"sm",pl:"md",pr:"xl",textDecoration:"underline",css:"\n                          &:hover {\n                            color: ".concat(a.v.newColors.dark.white,";\n                          }\n                          // transition: background-color 200ms ease-in-out;\n                        "),children:h.l.t("change")})]}),(0,c.jsxs)(a.Flex,{textAlign:"right",alignItems:"center",minWidth:"100px",justifyContent:"flex-end",css:"\n                      @media only screen and (max-width: 730px) {\n                        flex-direction: column-reverse;\n                        justify-content: center;\n                        flex-grow: 1;\n                        align-items: flex-end;\n                      }\n                    ",children:[i.normal_price>t.price&&(0,c.jsx)(a.Text,{textDecoration:"line-through",pr:"md",fontSize:"sm",css:"\n                          @media only screen and (max-width: 730px) {\n                            padding-right: 0px;\n                          }\n                        ",children:(0,p.currency)(i.normal_price)}),(0,c.jsx)(a.Strong,{children:(0,p.currency)(t.price*t.qty)})]}),n.props.editable?(0,c.jsx)(a.Flex,{css:"\n                        align-items: center;\n                      ",children:(0,c.jsx)(k.zx,{className:"delete-button",lineHeight:"1",onClick:function(){return n.onRemoveClick(e)},css:"\n                          width: 24px;\n                          height: 24px;\n                          border-radius: 6px;\n                          margin-left: 20px;\n                          margin-right: 20px;\n                          background-color: #72767d;\n\n                          &:hover {\n                            background-color: #dc4040;\n                          }\n\n                          @media only screen and (max-width: 730px) {\n                            margin-right: 5px;\n                          }\n                        ",children:(0,c.jsx)(a.Icon,{width:"15px",height:"15px",name:"times",fill:"white"})})}):(0,c.jsx)(a.Block,{})]},e)})}),this.props.dropdown&&this.props.count>0?(0,c.jsxs)(a.Flex,{px:"lg",pb:"md",colorDark:"white",alignItems:"flex-end",flexColumn:!0,css:"\n              @media (max-width: ".concat(a.v.breakpoints.md,") {\n                padding: 0;\n                padding-right: 20px;\n                margin: 0;\n              }\n            "),children:[(0,c.jsx)(a.Block,{width:"100%",height:"2px",backgroundColorDark:"scrolldark",rounded:!0,my:"md"}),(0,c.jsxs)(a.Flex,{alignItems:"baseline",children:[(0,c.jsxs)(a.Block,{fontSize:"lg",fontWeight:"semibold",colorDark:"white",children:[h.l.t("Subtotal"),":"]}),(0,c.jsx)(a.Block,{fontSize:"lg",fontWeight:"semibold",colorDark:"white",minWidth:"fit-content",width:"70px",textAlign:"right",children:(0,p.currency)(this.props.normalTotal)})]}),Boolean(t)&&(0,c.jsxs)(a.Flex,{alignItems:"baseline",children:[(0,c.jsxs)(a.Block,{fontSize:"lg",fontWeight:"semibold",colorDark:"white",children:[h.l.t("VAT (%s%%)","".concat(e)),":"]}),(0,c.jsx)(a.Block,{fontSize:"lg",fontWeight:"semibold",colorDark:"white",minWidth:"fit-content",width:"70px",textAlign:"right",children:(0,p.currency)(t)})]}),this.props.normalTotal>this.props.total&&(0,c.jsxs)(a.Flex,{alignItems:"baseline",children:[(0,c.jsxs)(a.Block,{fontSize:"lg",fontWeight:"semibold",colorDark:"white",children:[h.l.t("Sale Discount"),":"]}),(0,c.jsxs)(a.Block,{fontSize:"lg",fontWeight:"semibold",colorDark:"red",minWidth:"fit-content",width:"70px",textAlign:"right",children:["-",(0,p.currency)(this.props.normalTotal-this.props.total)]})]}),(0,c.jsxs)(a.Flex,{alignItems:"baseline",children:[(0,c.jsxs)(a.Block,{fontSize:"lg",fontWeight:"semibold",colorDark:"white",children:[h.l.t("Total"),":"]}),(0,c.jsx)(a.Block,{fontSize:"lg",fontWeight:"semibold",colorDark:"white",minWidth:"fit-content",width:"70px",textAlign:"right",children:(0,p.currency)(this.props.total+t)})]})]}):(0,c.jsx)(a.Block,{})]})},e}(l.Component),B=(0,d.P1)(g.dv,g.I3,g.EO,g.zt,f.VT,_,function(n,t,e,o,i,r){return{cart:n,total:t,normalTotal:e,count:o,tax:i,modal:r}}),S={shopRemoveCartItem:g.uE,shopFetchTax:f.E3,getProduct:w.wv,showModal:y,hideModal:v,shopRecipientSet:j.Y4};t.Z=(0,s.connect)(B,S)(z)}}]);