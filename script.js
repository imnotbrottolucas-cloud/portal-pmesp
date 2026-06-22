const events=[
{year:"1830",title:"O início ... 1830",photo:"photo-1830",text:["Nas primeiras décadas do século XIX, São Paulo ainda era marcada pela Faculdade de Direito.","O ato de criação ocorreu em 15 de dezembro de 1831."]},
{year:"1857",title:"1857",photo:"photo-1857",text:["Em 7 de abril de 1857, foi criada a Banda de Música do Corpo Policial Permanente."]},
{year:"1910",title:"1910",photo:"photo-generic",text:["Criação da estrutura que daria origem à Academia de Polícia Militar do Barro Branco."]},
{year:"1926",title:"1926",photo:"photo-generic",text:["Em 1926, foi criada a Guarda Civil de São Paulo."]},
{year:"1970",title:"1970",photo:"photo-generic",text:["A Polícia Militar assume configuração moderna de policiamento ostensivo."]},
{year:"2006",title:"2006",photo:"photo-2006",text:["No mês de maio, iniciou-se um movimento criminoso em São Paulo cujo alvo foram servidores das forças de segurança."]},
{year:"2007",title:"2007",photo:"photo-2007",text:["Em 12 de janeiro de 2007, ocorreu o acidente nas obras do Metrô de São Paulo."]}
];
let currentIndex=0;
function renderEvent(i){if(!document.getElementById("eventTitle"))return;currentIndex=i;const e=events[i];document.getElementById("eventTitle").textContent=e.title;document.getElementById("eventText").innerHTML=e.text.map(p=>`<p>${p}</p>`).join("");document.getElementById("eventImage").className="fake-photo "+e.photo;document.querySelectorAll(".timeline .dot").forEach(d=>d.classList.toggle("active",d.dataset.year===e.year));}
function nextEvent(){renderEvent((currentIndex+1)%events.length)}function prevEvent(){renderEvent((currentIndex-1+events.length)%events.length)}

const ranks=[
{name:"Comandante Geral - Coronel PM",category:"Oficiais Superiores",img:"insignia-01.png"},
{name:"Coronel PM",category:"Oficiais Superiores",img:"insignia-02.png"},
{name:"Tenente Coronel PM",category:"Oficiais Superiores",img:"insignia-03.png"},
{name:"Major PM",category:"Oficiais Superiores",img:"insignia-04.png"},
{name:"Capitão PM",category:"Oficiais Intermediários e Subalternos",img:"insignia-05.png"},
{name:"1º Tenente PM",category:"Oficiais Intermediários e Subalternos",img:"insignia-06.png"},
{name:"2º Tenente PM",category:"Oficiais Intermediários e Subalternos",img:"insignia-07.png"},
{name:"Aspirante a Oficial PM",category:"Formação",img:"insignia-08.png"},
{name:"Aluno Oficial PM - 3º Ano",category:"Alunos Oficiais",img:"insignia-09.png"},
{name:"Aluno Oficial PM - 2º Ano",category:"Alunos Oficiais",img:"insignia-10.png"},
{name:"Aluno Oficial PM - 1º Ano",category:"Alunos Oficiais",img:"insignia-11.png"},
{name:"Aluno CSTAPM",category:"Alunos Oficiais",img:"insignia-12.png"},
{name:"Subtenente PM",category:"Praças",img:"insignia-13.png"},
{name:"1º Sargento PM",category:"Praças",img:"insignia-14.png"},
{name:"2º Sargento PM",category:"Praças",img:"insignia-15.png"},
{name:"3º Sargento PM",category:"Praças",img:"insignia-16.png"},
{name:"Aluno Sargento PM",category:"Praças",img:"insignia-17.png"},
{name:"Cabo PM",category:"Praças",img:"insignia-18.png"},
{name:"Soldado PM",category:"Praças",img:"insignia-19.png"}
];
let rankIndex=0;
function renderRank(i){
  if(!document.getElementById("rankImage"))return;
  rankIndex=i;
  const r=ranks[i];
  const img=document.getElementById("rankImage");
  img.src="assets/"+r.img;
  img.alt=r.name;
  img.onerror=function(){this.onerror=null;this.src=r.img;};
  document.getElementById("rankName").textContent=r.name;
  document.getElementById("rankCategory").textContent=r.category;
  document.querySelectorAll(".rank-dot").forEach((d,idx)=>d.classList.toggle("active",idx===i));
}
function nextRank(){renderRank((rankIndex+1)%ranks.length)}
function prevRank(){renderRank((rankIndex-1+ranks.length)%ranks.length)}
document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll(".timeline .dot").forEach(d=>d.addEventListener("click",()=>{const i=events.findIndex(e=>e.year===d.dataset.year);if(i>=0)renderEvent(i)}));
  const dots=document.getElementById("rankDots");
  if(dots){ranks.forEach((r,i)=>{const b=document.createElement("button");b.className="rank-dot"+(i===0?" active":"");b.title=r.name;b.onclick=()=>renderRank(i);dots.appendChild(b);});renderRank(0);}
});
