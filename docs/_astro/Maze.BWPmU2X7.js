import"./disclose-version.BDr9Qe-U.js";import{v as S,f as Y,a as X,w as q,b as E,g as c,m as C,u as _,d as L}from"./template.BnzkykZH.js";import{o as I,i as P,b as R}from"./index-client.DAhG2T0e.js";const d=[`
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
`];var A=E('<canvas id="canvas" width="1000" height="1000"></canvas> <button class="maze">Maze1</button> <button class="maze">Maze2</button> <button class="maze">Maze3</button>',1);function j(y,z){S(z,!1);let s,h,o=C();const r=40,l={maze:null,playerX:0,playerY:0,mazeHeight:0},f=[];I(()=>{s=c(o).getContext("2d"),h=document.querySelectorAll(".maze"),h.forEach((e,t)=>{e.addEventListener("click",()=>{l.maze=d[t],l.playerX=0,l.playerY=0,m()})}),l.maze=v(),m(),window.addEventListener("keypress",e=>{const t=l.playerY,n=l.playerX;let a=n,i=t;e.key==="s"?t!==c(o).height-r&&(i+=r):e.key=="w"?t!==0&&(i-=r):e.key=="d"?n!==c(o).width-r&&(a+=r):e.key=="a"&&n!==0&&(a-=r),!M(a,i)&&(l.playerX=a,l.playerY=i,m())})});function u(e,t,n,a=r){s.beginPath(),s.rect(e,t,a,a),s.fillStyle=n,s.fill()}function g(){u(l.playerX,l.playerY,"red")}function w(e,t){let n=0;for(let a=0;a<e.length;(a+=1)-1)e[a]===t&&(n+=1);return n}function b(e){f.splice(0);let t=r*5,n=0;for(let a=0;a<e.length;(a+=1)-1){let i=e[a];i==`
`&&(n+=r,t=r*5),i=="#"&&(u(t,n,"black"),f.push({x:t,y:n}),t+=r),i==" "&&(u(t,n,"white"),t+=r)}}function v(){l.maze=d[Math.floor(Math.random()*d.length)];let e=w(l.maze,`
`);return l.playerY=e*r,l.maze}function x(){s.clearRect(0,0,c(o).width,c(o).height)}function m(){x(),b(l.maze),g()}function M(e,t){for(let n=0;n<f.length;(n+=1)-1){const a=f[n];if(t==a.y&&e==a.x)return!0}return!1}P();var p=A(),k=Y(p);R(k,e=>L(o,e),()=>c(o)),_(6),X(y,p),q()}export{j as default};
