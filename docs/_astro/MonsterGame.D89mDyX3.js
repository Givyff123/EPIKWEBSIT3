import"./disclose-version.BDr9Qe-U.js";import{e as y,j as c,k as f,i as E,q as u,v as x,w,x as B,y as g,n as M,z as k,A as _,B as $,C as D,f as H,a as G,D as L,b as T,d as v,g as m,m as b,s as j,c as R,r as S}from"./template.Bazufh5u.js";import{o as A,i as N,b as P}from"./index-client.CZ-6ZrSi.js";function O(l,o,p,r,s){var h=l,i="",a;y(()=>{if(i===(i=o()??"")){c&&f();return}a!==void 0&&($(a),a=void 0),i!==""&&(a=E(()=>{if(c){u.data;for(var e=f(),d=e;e!==null&&(e.nodeType!==8||e.data!=="");)d=e,e=x(e);if(e===null)throw w(),B;g(u,d),h=M(e);return}var t=i+"",n=k(t);g(_(n),n.lastChild),h.before(n)}))})}var Y=T('<div id="monsters"></div> <div id="text"><!></div>',1);function I(l,o){D(o,!1);let p=b(""),r=b();A(()=>{let d=new s(1,"PLAYER A"),t=new s(1,"PLAYER B");d.target=t,t.target=d});class s{static weapons={stick:2,knife:4,"baseball bat":8};static types=["rock","paper","scissors"];static images={rock:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3ba2f338720525.576c1e374eff9.jpg",paper:"https://img.freepik.com/premium-photo/paper-monster-paper-style-generative-ai_566661-20266.jpg",scissors:"https://spaces-cdn.clipsafari.com/vg8bjd843pggbxfg7m8fzjbsymct"};static multipliers={rock:{rock:1,scissors:1.25,paper:.75},paper:{rock:1.25,scissors:.75,paper:1},scissors:{rock:.75,scissors:1,paper:1.25}};constructor(t,n){this.lvl=t,this.name=n,this.weapon="stick",this.weaponDMG=s.weapons[this.weapon],this.exp=0,this.expNeeded=this.lvl*10,this.hp=this.lvl*3+10,this.maxHp=this.lvl*3+10,this.money=0,this.dmg=this.lvl+this.weaponDMG,this.type=s.types[Math.floor(Math.random()*3)],this.defence=0,this.createMonsterElement()}displayMessage(t){v(p,`
                <div class="message" style="color:red">
                    ${t}
                </div>
            `)}createMonsterElement(){this.monsterElement=document.createElement("div"),this.monsterElement.classList="monster",this.meter=document.createElement("meter"),this.meter.value=this.hp,this.meter.max=this.maxHp,this.meter.min=0,this.fightButton=document.createElement("button"),this.fightButton.innerText="fight",this.fightButton.disabled=!1,this.fightButton.addEventListener("click",()=>{this.attack(this.target)}),this.defendButton=document.createElement("button"),this.defendButton.innerText="defend",this.defendButton.disabled=!1,this.defendButton.addEventListener("click",()=>{this.defend()}),this.statsElement=document.createElement("div"),m(r).append(this.monsterElement),this.monsterElement.innerHTML+=`<h2>${this.name}</h2>`,this.monsterElement.append(this.meter),this.monsterElement.append(this.fightButton),this.monsterElement.append(this.statsElement),this.monsterElement.append(this.defendButton),this.updateStats()}get totalDMG(){let t=s.multipliers[this.type][this.target?.type]||1;return(this.dmg+this.weaponDMG)*t}attack(){let t=this.target;t.defence>this.totalDMG?(t.hp-=1,t.meter.value-=1):(t.hp-=this.totalDMG,t.hp+=t.defence,t.meter.value-=this.totalDMG,t.meter.value+=t.defence),this.displayMessage(`${this.name} attacked ${t.name} with a ${this.weapon}`),this.displayMessage(`${t.name} is now at ${t.hp} HP`),this.fightButton.disabled=!0,this.defendButton.disabled=!0,t.fightButton.disabled=!1,t.defendButton.disabled=!1,t.hp<1&&(this.displayMessage(`${t.name} has fainted`),t.hp=t.maxHp,this.displayMessage(`${this.name} has gained ${t.lvl*2} Exp`),t.meter.value=this.maxHp,this.exp+=t.lvl*3,this.exp>this.expNeeded&&(this.lvl+=1,this.dmg+=1,this.maxHp+=3,this.hp=this.maxHp,this.meter.max=this.maxHp,this.meter.value=this.maxHp,this.exp=0,this.money+=t.lvl*2,this.expNeeded=this.lvl*10)),this.updateStats(),t.updateStats()}defend(){this.defence+=this.dmg/2,this.fightButton.disabled=!0,this.defendButton.disabled=!0,this.target.fightButton.disabled=!1,this.target.defendButton.disabled=!1,this.updateStats()}updateStats(){this.statsElement.innerHTML=`
                <table border="1">
                    <tr>
                        <td>Type</td>
                        <td>${this.type}</td>
                    </tr>
                    <tr>
                        <td>Level</td>
                        <td>${this.lvl}</td>
                    </tr>
                    <tr>
                        <td>Exp</td>
                        <td>${this.exp}</td>
                    </tr>
                    <tr>
                        <td>Exp needed</td>
                        <td>${this.expNeeded}</td>
                    </tr>
                    <tr>
                        <td>Total Damage</td>
                        <td>${this.totalDMG}</td>
                    </tr>
                    <tr>
                        <td>Defence</td>
                        <td>${this.defence}</td>
                    </tr>
                    <tr>
                        <td>HP</td>
                        <td>${this.hp}</td>
                    </tr>
                </table>
            `}switch(t){if(!Object.keys(s.weapons).includes(t)){displayMessage("weapon does not exist");return}this.money>9?(this.money-=10,this.weaponDMG=s.weapons[t],this.weapon=t):displayMessage("not enough money")}}N();var h=Y(),i=H(h);P(i,d=>v(r,d),()=>m(r));var a=j(i,2),e=R(a);O(e,()=>m(p)),S(a),G(l,h),L()}export{I as default};
