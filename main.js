(()=>{"use strict";const e=()=>{const e=document.createElement("h1");e.textContent="Welcome to Samurai Sakura Sushi";const t=document.createElement("img");t.setAttribute("src","https://voyapon.com/wp-content/uploads/2016/02/s_sushi-1280x720.jpg"),t.setAttribute("alt","sushiplatter"),t.setAttribute("style","width=1280 height=720");const n=document.createElement("p");return n.textContent="The creators of Samurai Sakura burn with a desire to bring authentic sushi from Kyuushu, Japan to you; \n         The knowledge and passion for top quality seafood comes from years of working at some of the world's most\n         prestigious sushi restaurants, including Sukiyabashi Jiro.",new Array(e,t,n)},t=()=>{const e=document.createElement("div"),t=document.createElement("h1");t.textContent="Contact Us";const n=document.createElement("div"),o=document.createElement("h2");o.textContent="Tako Tome, 123-456-7890";const r=document.createElement("img");return r.setAttribute("src","https://image.freepik.com/free-vector/cartoon-japanese-chef-presenting-food-sushi_61878-755.jpg"),r.setAttribute("alt","sushichef"),r.setAttribute("style","width:200px;height:200px;"),e.appendChild(t),n.appendChild(o),n.appendChild(r),new Array(e,n)},n=(()=>{const e=()=>document.createElement("div");return{createMenu:()=>new Array((()=>{let t=e(),n=document.createElement("B");n.textContent="Full Course";let o=e();return o.textContent="Omakase (chef's choice) $100, 15 course",t.append(n,o),t})(),(()=>{let t=e();t.classList.add("grid");let n=e();n.setAttribute("id","menusushi");let o=document.createElement("B");o.textContent="Sushi Menu",n.appendChild(o);let r=e();r.textContent="Nigiri $3.50/plate";let a=e();a.textContent="Sashimi $3.00/plate";let s=e();s.textContent="Makimono sushi $2.50/plate";let c=e();c.textContent="Temaki $5.00/plate";let i=e();i.textContent="Chirashi $7.50/plate";let l=e();return l.textContent="Inari $3.00/plate",t.append(n,r,a,s,c,i,l),t})(),(()=>{let t=e(),n=e(),o=document.createElement("B");o.textContent="Extras",n.appendChild(o);let r=e();r.textContent="Edamame $3.00/plate";let a=e();a.textContent="Miso Soup $3.00/bowl";let s=e();return s.textContent="Red Bean Ice Cream $5.00",t.append(n,r,a,s),t})())}})();(()=>{const o=document.querySelector("#content"),r=document.querySelector("#home"),a=document.querySelector("#menu"),s=document.querySelector("#contact");e(),t();let c=n.createMenu();console.log(c,"menudisplay"),(e=>{for(let t=0;t<e.length;t++)console.log(e[t]),o.appendChild(e[t])})(c),r.addEventListener("click",(()=>{console.log("hhh")})),a.addEventListener("click",(()=>{console.log("jjj")})),s.addEventListener("click",(()=>{console.log("iii")}))})()})();