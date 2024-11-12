import"./disclose-version.BDr9Qe-U.js";import{p as S,f as Y,a as X,b as q,t as E,g as c,m as C,n as _,s as L}from"./template.DNpI-wNU.js";import{o as I,i as P,b as R}from"./index-client.Ch2l4I94.js";const h=[`
##### ###
# ### # #
# #   # #
# # ### #
# #   # #
#       #
#### ####
`,`
## ##########
#           #
##### ## ## #
# #   #   # #
# # ##### # #
#         # #
######## ####
`,`
# #########
#     #   #
##### # ###
#   # # # #
### # # # #
#   #     #
# ##### ###
#         #
###### ####
`,`
# ##########
# #      # #
# # #####  #
#   #   # ##
### ###    #
#   ###  # #
# ###### # #
#        # #
####   ##  #
##### ######
`,`
######  ###
#######  ##
##     #  #
## # # # ##
## # # # ##
##   #   ##
###     ###
##### #####
`,`
###########
###########
###########
###########
###########
##### #####
##### #####
##### #####
`,`
###########
###########
###########
###########
###########
###########
###########
###########
`];var A=E('<canvas id="canvas" width="1000" height="1000"></canvas> <button class="maze">Maze1</button> <button class="maze">Maze2</button> <button class="maze">Maze3</button>',1);function j(y,z){S(z,!1);let o,p,s=C();const r=40,l={maze:null,playerX:0,playerY:0,mazeHeight:0},f=[];I(()=>{o=c(s).getContext("2d"),p=document.querySelectorAll(".maze"),p.forEach((e,t)=>{e.addEventListener("click",()=>{l.maze=h[t],l.playerX=0,l.playerY=0,m()})}),l.maze=v(),m(),window.addEventListener("keypress",e=>{const t=l.playerY,n=l.playerX;let a=n,i=t;e.key==="s"?t!==c(s).height-r&&(i+=r):e.key=="w"?t!==0&&(i-=r):e.key=="d"?n!==c(s).width-r&&(a+=r):e.key=="a"&&n!==0&&(a-=r),!M(a,i)&&(l.playerX=a,l.playerY=i,m())})});function u(e,t,n,a=r){o.beginPath(),o.rect(e,t,a,a),o.fillStyle=n,o.fill()}function g(){u(l.playerX,l.playerY,"red")}function b(e,t){let n=0;for(let a=0;a<e.length;(a+=1)-1)e[a]===t&&(n+=1);return n}function w(e){f.splice(0);let t=r*5,n=0;for(let a=0;a<e.length;(a+=1)-1){let i=e[a];i==`
`&&(n+=r,t=r*5),i=="#"&&(u(t,n,"black"),f.push({x:t,y:n}),t+=r),i==" "&&(u(t,n,"white"),t+=r)}}function v(){l.maze=h[Math.floor(Math.random()*h.length)];let e=b(l.maze,`
`);return l.playerY=e*r,l.maze}function x(){o.clearRect(0,0,c(s).width,c(s).height)}function m(){x(),w(l.maze),g()}function M(e,t){for(let n=0;n<f.length;(n+=1)-1){const a=f[n];if(t==a.y&&e==a.x)return!0}return!1}P();var d=A(),k=Y(d);R(k,e=>L(s,e),()=>c(s)),_(6),X(y,d),q()}export{j as default};
