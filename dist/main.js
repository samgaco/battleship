!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){t.exports=function(t){return{length:t,position:[],hits:0,hit:function(){this.isSunk()||(this.hits+=1)},isSunk:function(){return this.hits>=this.length}}}},function(t,e){t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{ships:t,table:[["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"]],placeShip:function(t,e){var n=this,r=e.length-1,o=[e[0][0],e[r][0]],i=[e[0][1],e[r][1]],a=o[1]-o[0],c=i[1]-i[0];if(!(Math.sqrt(Math.pow(a,2)+Math.pow(c,2))===t.length-1))throw Error("Not valid!");e.forEach((function(e){if("*"!==n.table[e[0]][e[1]])throw Error("Space already occupied");n.table[e[0]][e[1]]="X",t.position.push([e[0],e[1]])})),this.ships.push(t)},receiveAttack:function(t){var e=this,n=!1;return this.ships.forEach((function(r){for(var o=0;o<r.position.length;o++)if(r.position[o][0]===t[0]&&r.position[o][1]===t[1])return n=!0,r.hit(),void(e.table[t[0]][t[1]]="O")})),!1===n&&(this.table[t[0]][t[1]]="M"),this.table[t[0]][t[1]]},gameStop:function(){var t=0;return this.ships.forEach((function(e){!0===e.isSunk()&&(t+=1)})),t===this.ships.length}}}},function(t,e){t.exports=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=t,n=Array(100).fill().map((function(t,e){return e+1})),r=[],o={1:[0,0],2:[0,1],3:[0,2],4:[0,3],5:[0,4],6:[0,5],7:[0,6],8:[0,7],9:[0,8],10:[0,9],11:[1,0],12:[1,1],13:[1,2],14:[1,3],15:[1,4],16:[1,5],17:[1,6],18:[1,7],19:[1,8],20:[1,9],21:[2,0],22:[2,1],23:[2,2],24:[2,3],25:[2,4],26:[2,5],27:[2,6],28:[2,7],29:[2,8],30:[2,9],31:[3,0],32:[3,1],33:[3,2],34:[3,3],35:[3,4],36:[3,5],37:[3,6],38:[3,7],39:[3,8],40:[3,9],41:[4,0],42:[4,1],43:[4,2],44:[4,3],45:[4,4],46:[4,5],47:[4,6],48:[4,7],49:[4,8],50:[4,9],51:[5,0],52:[5,1],53:[5,2],54:[5,3],55:[5,4],56:[5,5],57:[5,6],58:[5,7],59:[5,8],60:[5,9],61:[6,0],62:[6,1],63:[6,2],64:[6,3],65:[6,4],66:[6,5],67:[6,6],68:[6,7],69:[6,8],70:[6,9],71:[7,0],72:[7,1],73:[7,2],74:[7,3],75:[7,4],76:[7,5],77:[7,6],78:[7,7],79:[7,8],80:[7,9],81:[8,0],82:[8,1],83:[8,2],84:[8,3],85:[8,4],86:[8,5],87:[8,6],88:[8,7],89:[8,8],90:[8,9],91:[9,0],92:[9,1],93:[9,2],94:[9,3],95:[9,4],96:[9,5],97:[9,6],98:[9,7],99:[9,8],100:[9,9]},i=function(){Math.round();var t=n[Math.floor(Math.random()*n.length)];return n.splice(n.indexOf(t),1),r.push(t),o[t]};return{aiPlay:i,PosTaken:n,turn:e,movesdone:r}}},function(t,e,n){"use strict";n.r(e);var r,o,i,a,c=n(1),u=n.n(c),l=n(0),s=n.n(l),d=n(2),f=n.n(d),p=(r=function(t){var e=function(t){for(var e=[],n=0;n<10;n+=1){var r=document.createElement("div");r.classList.add("row"),r.setAttribute("id","".concat(t,"-board-row-").concat(n)),e.push(r)}return e}(t);return e.forEach((function(e,n){for(var r=0;r<10;r+=1){var o=document.createElement("div");o.setAttribute("id","".concat(t,"-row-").concat(n,"-").concat(r)),o.dataset.coordinates="".concat(n).concat(r),o.classList.add("box"),e.appendChild(o)}})),e},o=function(t,e){switch(t){case"*":e.style.background="#7bd6e2";break;case"M":e.style.background="blue";break;case"X":e.style.background="black";break;case"O":e.style.background="red";break;default:e.style.background="#7bd6e2"}},i=function(t,e,n,r){e.addEventListener("click",(function(){var i=Number(e.dataset.coordinates[0]),a=Number(e.dataset.coordinates[1]),c=t.receiveAttack([i,a]);e.textContent=c,o(c,e);var u=n.aiPlay(),l=u[0],s=u[1],d=r.receiveAttack([l,s]),f=document.getElementById("player-row-".concat(u[0],"-").concat(u[1]));o(d,f),f.textContent=d}))},a=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;document.getElementById(e).childNodes.forEach((function(a,c){a.childNodes.forEach((function(a,u){"ai-board"===e?(a.style.background="#7bd6e2",i(t,a,n,r)):o(t.table[c-1][u],a)}))}))},{renderBoards:function(){var t=h.initializeBoard1(),e=h.initializeBoard2(),n=f()();r("player").forEach((function(t){document.querySelector("#player-board").appendChild(t)})),r("ai").forEach((function(t){document.querySelector("#ai-board").appendChild(t)})),a(t,"player-board",n),a(e,"ai-board",n,t)}}),h={initializeBoard1:function(){var t=u()(),e=s()(1),n=s()(2),r=s()(3),o=s()(4),i=s()(5);return t.placeShip(e,[[0,0]]),t.placeShip(n,[[2,0],[2,1]]),t.placeShip(r,[[5,5],[6,5],[7,5]]),t.placeShip(o,[[9,2],[9,3],[9,4],[9,5]]),t.placeShip(i,[[8,4],[8,5],[8,6],[8,7],[8,8]]),t},initializeBoard2:function(){var t=u()(),e=s()(1),n=s()(2),r=s()(3),o=s()(4),i=s()(5);return t.placeShip(e,[[9,9]]),t.placeShip(n,[[8,0],[8,1]]),t.placeShip(r,[[5,4],[6,4],[7,4]]),t.placeShip(o,[[9,2],[9,3],[9,4],[9,5]]),t.placeShip(i,[[2,4],[2,5],[2,6],[2,7],[2,8]]),t},startGame:function(){p.renderBoards()},switchTurns:function(t,e){return t.turn,t.turn,e.turn,{player1:t,player2:e}}};h.startGame()}]);