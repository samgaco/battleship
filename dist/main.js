!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=3)}([function(t,n){t.exports=function(t){return{length:t,position:[],hits:0,hit:function(){this.isSunk()||(this.hits+=1)},isSunk:function(){return this.hits>=this.length}}}},function(t,n){t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{ships:t,table:[["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"]],placeShip:function(t,n){var e=this,r=n.length-1,i=[n[0][0],n[r][0]],o=[n[0][1],n[r][1]],a=i[1]-i[0],c=o[1]-o[0];if(!(Math.sqrt(Math.pow(a,2)+Math.pow(c,2))===t.length-1))throw Error("Not valid!");n.forEach((function(n){if("*"!==e.table[n[0]][n[1]])throw Error("Space already occupied");e.table[n[0]][n[1]]="X",t.position.push([n[0],n[1]])})),this.ships.push(t)},receiveAttack:function(t){var n=this,e=!1;return this.ships.forEach((function(r){for(var i=0;i<r.position.length;i++)if(r.position[i][0]===t[0]&&r.position[i][1]===t[1])return e=!0,r.hit(),void(n.table[t[0]][t[1]]="O")})),!1===e&&(this.table[t[0]][t[1]]="M"),this.table[t[0]][t[1]]},gameStop:function(){var t=0;return this.ships.forEach((function(n){!0===n.isSunk()&&(t+=1)})),t===this.ships.length}}}},function(t,n){function e(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}t.exports=function(){var t,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=n,i=Array(100).fill().map((function(t,n){return n+1})),o=[],a=(e(t={1:[0,0],2:[0,1],3:[0,2],4:[0,3],5:[0,4],6:[0,5],7:[0,6],8:[0,7],9:[0,8],10:[0,9],11:[1,0],12:[1,1],13:[1,2],14:[1,3],15:[1,4],16:[1,5],17:[1,6],18:[1,7],19:[1,8],20:[1,9],21:[2,0],22:[2,1],23:[2,2],24:[2,3],25:[2,4],26:[2,5],27:[2,6],28:[2,7],29:[2,8],30:[2,9],31:[3,0],32:[3,1],33:[3,2],34:[3,3],35:[3,4],36:[3,5],37:[3,6],38:[3,7],39:[3,8],40:[3,9],41:[4,0],42:[4,1],43:[4,2],44:[4,3],45:[4,4],46:[4,5],47:[4,6],48:[4,7],49:[4,8]},"40",[4,9]),e(t,51,[5,0]),e(t,52,[5,1]),e(t,53,[5,2]),e(t,54,[5,3]),e(t,55,[5,4]),e(t,56,[5,5]),e(t,57,[5,6]),e(t,58,[5,7]),e(t,59,[5,8]),e(t,60,[5,9]),e(t,61,[6,0]),e(t,62,[6,1]),e(t,63,[6,2]),e(t,64,[6,3]),e(t,65,[6,4]),e(t,66,[6,5]),e(t,67,[6,6]),e(t,68,[6,7]),e(t,69,[6,8]),e(t,70,[6,9]),e(t,71,[7,0]),e(t,72,[7,1]),e(t,73,[7,2]),e(t,74,[7,3]),e(t,75,[7,4]),e(t,76,[7,5]),e(t,77,[7,6]),e(t,78,[0,7]),e(t,79,[7,8]),e(t,80,[7,9]),e(t,81,[8,0]),e(t,82,[8,1]),e(t,83,[8,2]),e(t,84,[8,3]),e(t,85,[8,4]),e(t,86,[8,5]),e(t,87,[8,6]),e(t,88,[8,7]),e(t,89,[8,8]),e(t,90,[8,9]),e(t,91,[9,0]),e(t,92,[9,1]),e(t,93,[9,2]),e(t,94,[9,3]),e(t,95,[9,4]),e(t,96,[9,5]),e(t,97,[9,6]),e(t,98,[9,7]),e(t,99,[9,8]),e(t,100,[9,9]),t),c=function(){Math.round();var t=i[Math.floor(Math.random()*i.length)];return i.splice(i.indexOf(t),1),o.push(t),a[t]};return{aiPlay:c,PosTaken:i,turn:r,movesdone:o}}},function(t,n,e){"use strict";e.r(n);var r,i,o,a,c=e(1),u=e.n(c),l=e(0),s=e.n(l),f=e(2),d=e.n(f),p=(r=function(t){var n=function(t){for(var n=[],e=0;e<10;e+=1){var r=document.createElement("div");r.classList.add("row"),r.setAttribute("id","".concat(t,"-board-row-").concat(e)),n.push(r)}return n}(t);return n.forEach((function(n,e){for(var r=0;r<10;r+=1){var i=document.createElement("div");i.setAttribute("id","".concat(t,"-row-").concat(e,"-").concat(r)),i.dataset.coordinates="".concat(e).concat(r),i.classList.add("box"),n.appendChild(i)}})),n},i=function(t,n,e){n.addEventListener("click",(function(){console.log(e);var n=e.aiPlay(),r=n[0],i=n[1],o=t.receiveAttack([r,i]);document.getElementById("ai-row-".concat(n[0],"-").concat(n[1])).textContent=o}))},o=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];document.getElementById(n).childNodes.forEach((function(r,o){r.childNodes.forEach((function(r,c){"ai-board"===n&&e?(r.textContent="",i(t,r,e)):(r.textContent=t.table[o-1][c],a(t,r))}))}))},a=function(t,n){n.addEventListener("click",(function(){var e=Number(n.dataset.coordinates[0]),r=Number(n.dataset.coordinates[1]),i=t.receiveAttack([e,r]);n.textContent=i}))},{renderBoards:function(){var t=h.initializeBoard1(),n=h.initializeBoard2(),e=d()();r("player").forEach((function(t){document.querySelector("#player-board").appendChild(t)})),r("ai").forEach((function(t){document.querySelector("#ai-board").appendChild(t)})),o(t,"player-board",!1),o(n,"ai-board",e)}}),h={initializeBoard1:function(){var t=u()(),n=s()(1),e=s()(2),r=s()(3),i=s()(4),o=s()(5);return t.placeShip(n,[[0,0]]),t.placeShip(e,[[2,0],[2,1]]),t.placeShip(r,[[5,5],[6,5],[7,5]]),t.placeShip(i,[[9,2],[9,3],[9,4],[9,5]]),t.placeShip(o,[[8,4],[8,5],[8,6],[8,7],[8,8]]),t},initializeBoard2:function(){var t=u()(),n=s()(1),e=s()(2),r=s()(3),i=s()(4),o=s()(5);return t.placeShip(n,[[9,9]]),t.placeShip(e,[[8,0],[8,1]]),t.placeShip(r,[[5,4],[6,4],[7,4]]),t.placeShip(i,[[9,2],[9,3],[9,4],[9,5]]),t.placeShip(o,[[2,4],[2,5],[2,6],[2,7],[2,8]]),t},startGame:function(){p.renderBoards()},switchTurns:function(t,n){return t.turn,t.turn,n.turn,{player1:t,player2:n}}};h.startGame()}]);