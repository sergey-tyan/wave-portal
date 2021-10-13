(this["webpackJsonpsergey-waveportal"]=this["webpackJsonpsergey-waveportal"]||[]).push([[0],{100:function(f){f.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"WavePortal","sourceName":"contracts/WavePortal.sol","abi":[{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"color","type":"string"},{"indexed":false,"internalType":"uint256","name":"x","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"y","type":"uint256"}],"name":"NewCell","type":"event"},{"inputs":[{"internalType":"string","name":"_color","type":"string"},{"internalType":"uint256","name":"_x","type":"uint256"},{"internalType":"uint256","name":"_y","type":"uint256"}],"name":"addCell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllCells","outputs":[{"components":[{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"color","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct WavePortal.Cell[10][10]","name":"","type":"tuple[10][10]"}],"stateMutability":"view","type":"function"}],"bytecode":"0x60806040526200004f6040518060400160405280601981526020017f57652068617665206265656e20636f6e737472756374656421000000000000008152506200005560201b620003a51760201c565b620001e9565b620000f5816040516024016200006c919062000162565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620000f860201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60006200012e8262000186565b6200013a818562000191565b93506200014c818560208601620001a2565b6200015781620001d8565b840191505092915050565b600060208201905081810360008301526200017e818462000121565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620001c2578082015181840152602081019050620001a5565b83811115620001d2576000848401525b50505050565b6000601f19601f8301169050919050565b610c6780620001f96000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063112007bd1461003b57806336718eae14610059575b600080fd5b610043610075565b604051610050919061092d565b60405180910390f35b610073600480360381019061006e91906106b6565b6101f1565b005b61007d610503565b6000600a80602002604051908101604052809291906000905b828210156101e8578382601e0201600a80602002604051908101604052809291906000905b828210156101d5578382600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461013a90610b48565b80601f016020809104026020016040519081016040528092919081815260200182805461016690610b48565b80156101b35780601f10610188576101008083540402835291602001916101b3565b820191906000526020600020905b81548152906001019060200180831161019657829003601f168201915b50505050508152602001600282015481525050815260200190600101906100bb565b5050505081526020019060010190610096565b50505050905090565b6102306040518060400160405280600d81526020017f25732068617320776176656421000000000000000000000000000000000000008152503361043e565b60405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200184815260200142815250600083600a811061029b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b601e020182600a81106102d7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6003020160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101908051906020019061033e929190610531565b50604082015181600201559050503373ffffffffffffffffffffffffffffffffffffffff167fb05456de6625b2eb96da0e34934965ac1e20112c7a2b85658ce21c6520a64ac44285858560405161039894939291906109a1565b60405180910390a2505050565b61043b816040516024016103b9919061094f565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506104da565b50565b6104d68282604051602401610454929190610971565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506104da565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b604051806101400160405280600a905b61051b6105b7565b8152602001906001900390816105135790505090565b82805461053d90610b48565b90600052602060002090601f01602090048101928261055f57600085556105a6565b82601f1061057857805160ff19168380011785556105a6565b828001600101855582156105a6579182015b828111156105a557825182559160200191906001019061058a565b5b5090506105b391906105e5565b5090565b604051806101400160405280600a905b6105cf610602565b8152602001906001900390816105c75790505090565b5b808211156105fe5760008160009055506001016105e6565b5090565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001600081525090565b600061064c61064784610a12565b6109ed565b90508281526020810184848401111561066457600080fd5b61066f848285610b06565b509392505050565b600082601f83011261068857600080fd5b8135610698848260208601610639565b91505092915050565b6000813590506106b081610c1a565b92915050565b6000806000606084860312156106cb57600080fd5b600084013567ffffffffffffffff8111156106e557600080fd5b6106f186828701610677565b9350506020610702868287016106a1565b9250506040610713868287016106a1565b9150509250925092565b600061072983836107d8565b905092915050565b600061073d83836108bf565b905092915050565b61074e81610aca565b82525050565b61075d81610aca565b82525050565b600061076e82610a57565b6107788185610a92565b93508360208202850161078a85610a43565b8060005b858110156107c657848403895281516107a7858261071d565b94506107b283610a78565b925060208a0199505060018101905061078e565b50829750879550505050505092915050565b60006107e382610a62565b6107ed8185610a9d565b9350836020820285016107ff85610a4d565b8060005b8581101561083b578484038952815161081c8582610731565b945061082783610a85565b925060208a01995050600181019050610803565b50829750879550505050505092915050565b600061085882610a6d565b6108628185610aa8565b9350610872818560208601610b15565b61087b81610c09565b840191505092915050565b600061089182610a6d565b61089b8185610ab9565b93506108ab818560208601610b15565b6108b481610c09565b840191505092915050565b60006060830160008301516108d76000860182610745565b50602083015184820360208601526108ef828261084d565b9150506040830151610904604086018261090f565b508091505092915050565b61091881610afc565b82525050565b61092781610afc565b82525050565b600060208201905081810360008301526109478184610763565b905092915050565b600060208201905081810360008301526109698184610886565b905092915050565b6000604082019050818103600083015261098b8185610886565b905061099a6020830184610754565b9392505050565b60006080820190506109b6600083018761091e565b81810360208301526109c88186610886565b90506109d7604083018561091e565b6109e4606083018461091e565b95945050505050565b60006109f7610a08565b9050610a038282610b7a565b919050565b6000604051905090565b600067ffffffffffffffff821115610a2d57610a2c610bda565b5b610a3682610c09565b9050602081019050919050565b6000819050919050565b6000819050919050565b6000600a9050919050565b6000600a9050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600081905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610ad582610adc565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610b33578082015181840152602081019050610b18565b83811115610b42576000848401525b50505050565b60006002820490506001821680610b6057607f821691505b60208210811415610b7457610b73610bab565b5b50919050565b610b8382610c09565b810181811067ffffffffffffffff82111715610ba257610ba1610bda565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610c2381610afc565b8114610c2e57600080fd5b5056fea26469706673582212207a408b4a6ebd78bf7f10bd58f28da2ee6d8d4f0b3ebe4dda768e00c669d92e4464736f6c63430008040033","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100365760003560e01c8063112007bd1461003b57806336718eae14610059575b600080fd5b610043610075565b604051610050919061092d565b60405180910390f35b610073600480360381019061006e91906106b6565b6101f1565b005b61007d610503565b6000600a80602002604051908101604052809291906000905b828210156101e8578382601e0201600a80602002604051908101604052809291906000905b828210156101d5578382600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461013a90610b48565b80601f016020809104026020016040519081016040528092919081815260200182805461016690610b48565b80156101b35780601f10610188576101008083540402835291602001916101b3565b820191906000526020600020905b81548152906001019060200180831161019657829003601f168201915b50505050508152602001600282015481525050815260200190600101906100bb565b5050505081526020019060010190610096565b50505050905090565b6102306040518060400160405280600d81526020017f25732068617320776176656421000000000000000000000000000000000000008152503361043e565b60405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200184815260200142815250600083600a811061029b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b601e020182600a81106102d7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6003020160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101908051906020019061033e929190610531565b50604082015181600201559050503373ffffffffffffffffffffffffffffffffffffffff167fb05456de6625b2eb96da0e34934965ac1e20112c7a2b85658ce21c6520a64ac44285858560405161039894939291906109a1565b60405180910390a2505050565b61043b816040516024016103b9919061094f565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506104da565b50565b6104d68282604051602401610454929190610971565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506104da565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b604051806101400160405280600a905b61051b6105b7565b8152602001906001900390816105135790505090565b82805461053d90610b48565b90600052602060002090601f01602090048101928261055f57600085556105a6565b82601f1061057857805160ff19168380011785556105a6565b828001600101855582156105a6579182015b828111156105a557825182559160200191906001019061058a565b5b5090506105b391906105e5565b5090565b604051806101400160405280600a905b6105cf610602565b8152602001906001900390816105c75790505090565b5b808211156105fe5760008160009055506001016105e6565b5090565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001600081525090565b600061064c61064784610a12565b6109ed565b90508281526020810184848401111561066457600080fd5b61066f848285610b06565b509392505050565b600082601f83011261068857600080fd5b8135610698848260208601610639565b91505092915050565b6000813590506106b081610c1a565b92915050565b6000806000606084860312156106cb57600080fd5b600084013567ffffffffffffffff8111156106e557600080fd5b6106f186828701610677565b9350506020610702868287016106a1565b9250506040610713868287016106a1565b9150509250925092565b600061072983836107d8565b905092915050565b600061073d83836108bf565b905092915050565b61074e81610aca565b82525050565b61075d81610aca565b82525050565b600061076e82610a57565b6107788185610a92565b93508360208202850161078a85610a43565b8060005b858110156107c657848403895281516107a7858261071d565b94506107b283610a78565b925060208a0199505060018101905061078e565b50829750879550505050505092915050565b60006107e382610a62565b6107ed8185610a9d565b9350836020820285016107ff85610a4d565b8060005b8581101561083b578484038952815161081c8582610731565b945061082783610a85565b925060208a01995050600181019050610803565b50829750879550505050505092915050565b600061085882610a6d565b6108628185610aa8565b9350610872818560208601610b15565b61087b81610c09565b840191505092915050565b600061089182610a6d565b61089b8185610ab9565b93506108ab818560208601610b15565b6108b481610c09565b840191505092915050565b60006060830160008301516108d76000860182610745565b50602083015184820360208601526108ef828261084d565b9150506040830151610904604086018261090f565b508091505092915050565b61091881610afc565b82525050565b61092781610afc565b82525050565b600060208201905081810360008301526109478184610763565b905092915050565b600060208201905081810360008301526109698184610886565b905092915050565b6000604082019050818103600083015261098b8185610886565b905061099a6020830184610754565b9392505050565b60006080820190506109b6600083018761091e565b81810360208301526109c88186610886565b90506109d7604083018561091e565b6109e4606083018461091e565b95945050505050565b60006109f7610a08565b9050610a038282610b7a565b919050565b6000604051905090565b600067ffffffffffffffff821115610a2d57610a2c610bda565b5b610a3682610c09565b9050602081019050919050565b6000819050919050565b6000819050919050565b6000600a9050919050565b6000600a9050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600081905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610ad582610adc565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610b33578082015181840152602081019050610b18565b83811115610b42576000848401525b50505050565b60006002820490506001821680610b6057607f821691505b60208210811415610b7457610b73610bab565b5b50919050565b610b8382610c09565b810181811067ffffffffffffffff82111715610ba257610ba1610bda565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610c2381610afc565b8114610c2e57600080fd5b5056fea26469706673582212207a408b4a6ebd78bf7f10bd58f28da2ee6d8d4f0b3ebe4dda768e00c669d92e4464736f6c63430008040033","linkReferences":{},"deployedLinkReferences":{}}')},116:function(f,e,b){},118:function(f,e,b){},228:function(f,e){},236:function(f,e){},239:function(f,e,b){"use strict";b.r(e);var a=b(1),t=b.n(a),n=b(99),c=b.n(n),r=(b(116),b(34)),o=b(3),s=b.n(o),d=b(25),i=b(23),u=b(68),l=(b(118),b(100)),p=b(109),h=b(9),j=l.abi,x=function(f){var e=new u.a.providers.Web3Provider(f).getSigner();return new u.a.Contract("0x0AdC3DF39f80783a79Df184B01e0fe9e07B6678D",j,e)};function m(){return Object(h.jsxs)("div",{className:"lds-ring",children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})}function y(){var f=Object(a.useState)(!1),e=Object(i.a)(f,2),b=e[0],t=e[1],n=Object(a.useState)(!1),c=Object(i.a)(n,2),o=c[0],u=c[1],l=Object(a.useState)({x:0,y:0}),j=Object(i.a)(l,2),y=j[0],v=j[1],O=Object(a.useState)("#fff"),g=Object(i.a)(O,2),w=g[0],k=g[1],C=Object(a.useState)([]),N=Object(i.a)(C,2),T=N[0],E=N[1],S=Object(a.useState)(""),M=Object(i.a)(S,2),P=M[0],B=M[1],F=function(){u(!1)},L=Object(a.useCallback)((function(f){27===f.keyCode&&F()}),[]);Object(a.useEffect)((function(){return document.addEventListener("keydown",L,!1),function(){document.removeEventListener("keydown",L,!1)}}));var W=function(){var f=Object(d.a)(s.a.mark((function f(){var e,b,a,n;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,b=e.ethereum){f.next=4;break}return f.abrupt("return",console.log("Ethereum object doesn't exist!"));case 4:return a=x(b),t(!0),f.next=8,a.addCell(w,y.x,y.y,{gasLimit:3e5});case 8:return n=f.sent,f.next=11,n.wait();case 11:return f.next=13,D(a);case 13:f.next=18;break;case 15:f.prev=15,f.t0=f.catch(0),console.log(f.t0);case 18:return f.prev=18,t(!1),f.finish(18);case 21:case"end":return f.stop()}}),f,null,[[0,15,18,21]])})));return function(){return f.apply(this,arguments)}}(),_=function(f,e,b,a){console.log({x:f,y:e,color:b}),E((function(t){var n=Object(r.a)(t);return n[f][e].color=b,n[f][e].author=a,n}))},D=function(){var f=Object(d.a)(s.a.mark((function f(e){var b,a;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.getAllCells();case 2:b=f.sent,a=[],b.forEach((function(f){var e=[];f.forEach((function(f){e.push({color:f.color,author:f.author})})),a.push(e)})),console.log({cells:a,rawGrid:b}),E(a);case 7:case"end":return f.stop()}}),f)})));return function(e){return f.apply(this,arguments)}}(),A=function(){var f=Object(d.a)(s.a.mark((function f(){var e,b,a;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,b=e.ethereum){f.next=4;break}return f.abrupt("return",console.log("Ethereum object doesn't exist!"));case 4:return a=x(b),f.next=7,D(a);case 7:a.on("NewCell",(function(f,e,b,a,t){console.log({from:f,timestamp:e,color:b,x:a,y:t}),_(a,t,b,f)})),f.next=13;break;case 10:f.prev=10,f.t0=f.catch(0),console.log(f.t0);case 13:case"end":return f.stop()}}),f,null,[[0,10]])})));return function(){return f.apply(this,arguments)}}(),q=function(){var f=Object(d.a)(s.a.mark((function f(){var e,b,a,t;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,b=e.ethereum){f.next=5;break}return console.log("Make sure you have metamask!"),f.abrupt("return");case 5:return console.log("We have the ethereum object",b),f.next=8,b.request({method:"eth_accounts"});case 8:0!==(a=f.sent).length?(t=a[0],console.log("Found an authorized account:",t),B(t)):console.log("No authorized account found"),f.next=15;break;case 12:f.prev=12,f.t0=f.catch(0),console.log(f.t0);case 15:case"end":return f.stop()}}),f,null,[[0,12]])})));return function(){return f.apply(this,arguments)}}(),z=function(){var f=Object(d.a)(s.a.mark((function f(){var e,b,a;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,b=e.ethereum){f.next=5;break}return alert("Get MetaMask!"),f.abrupt("return");case 5:return f.next=7,b.request({method:"eth_requestAccounts"});case 7:a=f.sent,console.log("Connected",a[0]),B(a[0]),f.next=15;break;case 12:f.prev=12,f.t0=f.catch(0),console.log(f.t0);case 15:case"end":return f.stop()}}),f,null,[[0,12]])})));return function(){return f.apply(this,arguments)}}();Object(a.useEffect)((function(){A()}),[]),Object(a.useEffect)((function(){q()}),[]);var G=o&&Object(h.jsxs)("div",{style:{position:"absolute",left:42*y.y,top:42*y.x+53,display:"flex",flexDirection:"column",rowGap:10},children:[Object(h.jsx)(p.a,{color:w,onChangeComplete:function(f){k(f.hex)}}),Object(h.jsxs)("div",{className:"button-container",children:[Object(h.jsx)("button",{onClick:W,children:"Update Cell"}),Object(h.jsx)("button",{onClick:F,children:"Cancel"})]})]}),I=Object(h.jsx)("div",{className:"closePicker",onClick:F,style:{zIndex:b?1:0,backgroundColor:b?"rgb(255 123 11 / 50%)":"transparent"},children:b&&Object(h.jsx)(m,{})});return Object(h.jsxs)("div",{className:"mainContainer",children:[I,Object(h.jsx)("div",{className:"header",children:"\ud83e\ude80 Hey there! Choose a grid cell and update its color on a blockchain!"}),Object(h.jsxs)("div",{className:"dataContainer",children:[!P&&Object(h.jsx)("button",{className:"waveButton",onClick:z,children:"Connect Wallet"}),G,Object(h.jsx)("div",{className:"grid-container",children:T.map((function(f,e){return Object(h.jsx)("div",{className:"row",children:f.map((function(f,b){var a=o&&e===y.x&&y.y===b?w:f.color||"#fff";return Object(h.jsx)("div",{className:"cell",style:{backgroundColor:a},onClick:function(){v({x:e,y:b}),k(a),u(!0)},children:f.color&&Object(h.jsx)("span",{className:"tooltiptext",children:f.author})},b)}))},e)}))})]})]})}var v=function(f){f&&f instanceof Function&&b.e(3).then(b.bind(null,242)).then((function(e){var b=e.getCLS,a=e.getFID,t=e.getFCP,n=e.getLCP,c=e.getTTFB;b(f),a(f),t(f),n(f),c(f)}))};c.a.render(Object(h.jsx)(t.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),v()}},[[239,1,2]]]);
//# sourceMappingURL=main.fd7e07ea.chunk.js.map